import { useTranslation } from 'next-i18next'
import styles from './Cv.module.css'
import { ReactNode, useCallback, useMemo } from 'react'
import { CvSectionTitles } from './Cv.types'
import { cv } from 'store/defaults/CvDefaults'
import { useSelector } from 'react-redux'
import { selectors } from 'store'
import { projects } from 'store/defaults/ProjectsDefaults'

export const Cv = () => {
  const { t } = useTranslation()
  const language = useSelector(selectors.getLanguage)
  const monthFormatter = useMemo(() => new Intl.DateTimeFormat(language, { month: 'long' }), [])

  const getCvSection = useCallback(
    (title: CvSectionTitles, children: ReactNode) => (
      <div className='flex flex-row w-full'>
        <h2 className={styles.section_title}>{t(`cv.sectionTitlesEnum.${title}`)}</h2>
        <div className={styles.section_content}>{children}</div>
      </div>
    ),
    [t]
  )

  const getLocaleMonthName = useCallback(
    (date: Date) => monthFormatter.format(new Date(date.getFullYear(), date.getMonth(), 1)),
    [monthFormatter]
  )

  const getLocaleExperienceDateFormat = useCallback(
    (date: Date | null) => (date ? `${getLocaleMonthName(date)} ${date.getFullYear()}` : t('cv.experiences.current')),
    [getLocaleMonthName]
  )

  const cvHeader = useMemo(
    () => (
      <div className={styles.header_container}>
        <h1 className={styles.header_title}>{`${cv.contact.name} ${cv.contact.surname}`}</h1>
        <hr className={styles.hr} color='black' />
        <h3 className={styles.header_info}>{cv.contact.address}</h3>
        <h3 className={styles.header_info}>{`${cv.contact.city} / ${cv.contact.country}`}</h3>
        <h3 className={styles.header_info}>{cv.contact.telNo}</h3>
      </div>
    ),
    [t]
  )

  const cvAboutChildren = useMemo(() => <p>{cv.about}</p>, [])

  const cvEducationChildren = useMemo(
    () => (
      <div className={styles.education_container}>
        {cv.educations.map((education, index) => (
          <div key={index} className={styles.education_content}>
            <div>
              <p>{education.schoolName}</p>
              <p>{education.department}</p>
            </div>
            <div>
              <p>{`${education.startDate.getFullYear()} - ${education.endDate?.getFullYear() ?? t('cv.endDateCurrent')}`}</p>
            </div>
          </div>
        ))}
      </div>
    ),
    [t]
  )

  const cvComputerSkillsChildren = useMemo(
    () => (
      <div>
        <p>{`${t('cv.computerSkills.titles.programmingLanguages')}: ${cv.computerSkills.programmingLanguages
          .map((programmingLanguage) => t(`cv.computerSkills.programmingLanguagesEnum.${programmingLanguage.languageName}`))
          .join(', ')}`}</p>
        <p>{`${t('cv.computerSkills.titles.operatingSystems')}: ${cv.computerSkills.operatingSystems
          .map((operatingSystem) => t(`cv.computerSkills.operatingSystemsEnum.${operatingSystem}`))
          .join(', ')}`}</p>
        <p>{`${t('cv.computerSkills.titles.interesteds')}: ${cv.computerSkills.interesteds
          .map((interested) => t(`cv.computerSkills.interestedsEnum.${interested}`))
          .join(', ')}`}</p>
      </div>
    ),
    [t]
  )

  const cvForeignLanguagesChildren = useMemo(
    () => (
      <div>
        <p>{`${t('cv.foreignLanguage.languages')}: ${cv.foreignLanguages
          .map(
            (foreignLanguage) =>
              `${t(`cv.foreignLanguage.foreignLanguagesEnum.${foreignLanguage.languageName}`)} (${t(
                `cv.foreignLanguage.foreignLanguageLevelsEnum.${foreignLanguage.level}`
              )})`
          )
          .join(', ')}`}</p>
      </div>
    ),
    [t]
  )

  const cvExpreiencesChildren = useMemo(
    () => (
      <div className='space-y-2'>
        {cv.jobExperiences.map((jobExperience, index) => (
          <div key={index} className='flex flex-col'>
            <div className='flex flex-row justify-between'>
              <p>{t(jobExperience.title)}</p>
              <p>{`${getLocaleExperienceDateFormat(jobExperience.startDate)} - ${getLocaleExperienceDateFormat(jobExperience.endDate)}`}</p>
            </div>
            <p>{`${jobExperience.componyName}, ${t(`cv.experiences.jobTypesEnum.${jobExperience.type}`)} (${t(
              `cv.experiences.jobPositionsEnum.${jobExperience.position}`
            )}), ${jobExperience.city} / ${jobExperience.country}`}</p>
            <div>
              <ul className='list-disc pl-5 my-1'>
                {jobExperience.description.map((description, index) => (
                  <li key={index}>{description}</li>
                ))}
              </ul>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    ),
    [getLocaleExperienceDateFormat, t]
  )

  const cvProjectsChildren = useMemo(() => {
    const projectsMap = new Map<string, string[]>()
    projects.forEach((project) => {
      project.projectTypes.forEach((projectType) => {
        const projectNames = projectsMap.get(projectType) ?? []
        projectNames.push(project.name)
        projectsMap.set(projectType, projectNames)
      })
    })

    return (
      <div className='flex flex-col space-y-2'>
        {Array.from(projectsMap).map(([key, projectNames], index) => (
          <div key={index} className='flex flex-row w-full'>
            <h3 className='w-1/4 text-base font-semibold'>{t(`projects.projectTypesEnum.${key}`)}</h3>
            <p className='w-3/4'>{`: ${projectNames.join(', ')}`}</p>
          </div>
        ))}
      </div>
    )
  }, [t])

  const cvContactChildren = useMemo(
    () => (
      <div className='flex flex-col'>
        <div className='flex flex-row'>
          <p className='w-1/4'>{`${t('contact.telNo')}`}</p>
          <p className='w-3/4'>{`: ${cv.contact.telNo}`}</p>
        </div>
        <div className='flex flex-row'>
          <p className='w-1/4'>{`${t('contact.email')}`}</p>
          <p className='w-3/4'>{`: ${cv.contact.emailAddress}`}</p>
        </div>
        {cv.contact.platforms.map((platform, index) => (
          <div key={index} className='flex flex-row'>
            <p className='w-1/4'>{`${t(`contact.platformTypesEnum.${platform.platformType}`)}`}</p>
            <p className='w-3/4'>{`: ${platform.link}}`}</p>
          </div>
        ))}
      </div>
    ),
    [t]
  )

  return (
    // Main paper for CV
    <div className={styles.container}>
      {cvHeader}
      {getCvSection(CvSectionTitles.ABOUT, cvAboutChildren)}
      {getCvSection(CvSectionTitles.EDUCATION, cvEducationChildren)}
      {getCvSection(CvSectionTitles.COMPUTER_SKILLS, cvComputerSkillsChildren)}
      {getCvSection(CvSectionTitles.FOREIGN_LANGUAGES, cvForeignLanguagesChildren)}
      {getCvSection(CvSectionTitles.EXPERIENCES, cvExpreiencesChildren)}
      {getCvSection(CvSectionTitles.PROJECTS, cvProjectsChildren)}
      {getCvSection(CvSectionTitles.CONTACT, cvContactChildren)}
      {/* Sections */}
    </div>
  )
}
