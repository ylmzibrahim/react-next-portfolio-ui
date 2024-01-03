import { CommonLevels } from 'store/modals/Common'
import { PlatformTypes } from 'store/modals/Contact'
import {
  CV,
  ForeignLanguageLevels,
  ForeignLanguages,
  Interested,
  JobPosition,
  JobType,
  Lessons,
  LetterGrades,
  OperatingSystem,
  ProgrammingLanguages
} from 'store/modals/Cv'

export const cv: CV = {
  contact: {
    name: 'İbrahim',
    surname: 'Yılmaz',
    address: 'Harmanyolu Sk. 26010',
    city: 'Eskişehir',
    country: 'Türkiye',
    emailAddress: 'ibrahimyilmaz026@gmail.com',
    telNo: '+90 (536) 830-6456',
    platforms: [
      { platformType: PlatformTypes.GITHUB, icon: '', link: 'https://github.com/ylmzibrahim' },
      { platformType: PlatformTypes.LINKEDIN, icon: '', link: 'https://www.linkedin.com/in/ibrahim-yilmaz-94aaba177/' }
    ]
  },
  about:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus maxime ea suscipit veritatis harum veniam tempora, delectus doloribus. Neque aliquid illum natus quod velit unde quae. At, dolore, quisquam dignissimos repellendus vitae optio similique nemo impedit dolor enim, incidunt sapiente fugiat in unde nobis placeat? Eum, ratione sapiente! Soluta est perspiciatis nihil corporis corrupti a quasi rem, ut natus maiores aperiam perferendis commodi voluptates adipisci maxime tempore praesentium ea quod?',
  educations: [
    {
      schoolName: 'Karadeniz Teknik Üniversitesi',
      department: 'Bilgisayar Mühendisliği',
      lessons: [{ lessonName: Lessons.MATHEMATICS, numberGrade: '4.0', letterGrade: LetterGrades.AA }],
      startDate: new Date(2017, 9),
      endDate: new Date(2022, 7)
    },
    {
      schoolName: 'Cenova Üniversitesi',
      department: 'Bilgisayar Mühendisliği',
      lessons: [{ lessonName: Lessons.MATHEMATICS, numberGrade: '4.0', letterGrade: LetterGrades.AA }],
      startDate: new Date(2019, 9),
      endDate: new Date(2020, 1)
    }
  ],
  foreignLanguages: [
    { languageName: ForeignLanguages.TURKISH, level: ForeignLanguageLevels.C2, certificateLink: '' },
    { languageName: ForeignLanguages.ENGLISH, level: ForeignLanguageLevels.B2, certificateLink: '' },
    { languageName: ForeignLanguages.ITALIAN, level: ForeignLanguageLevels.A1, certificateLink: '' }
  ],
  computerSkills: {
    programmingLanguages: [
      { languageName: ProgrammingLanguages.JAVASCRIPT, level: CommonLevels.MEDIUM_HIGH },
      { languageName: ProgrammingLanguages.C, level: CommonLevels.MEDIUM }
    ],
    operatingSystems: [OperatingSystem.LINUX, OperatingSystem.MACOS, OperatingSystem.WINDOWS],
    interesteds: [Interested.ADOBE_PHOTOSHOP, Interested.ADOBE_PREMIERE_PRO, Interested.ARDUINO, Interested.LATEX]
  },
  jobExperiences: [
    {
      componyName: 'OBSS Teknoloji',
      type: JobType.FULL_TIME,
      position: JobPosition.HYBRID,
      country: 'Türkiye',
      city: 'Ankara',
      startDate: new Date(2023, 10, 10),
      endDate: null,
      title: 'Frontend Developer',
      description: [
        'React temelli askeri proje geliştirdik.',
        'Jira gibi köklü platformları kullanarak; Scrum, Kanban gibi metodolojileri kullandık.'
      ],
      note: ''
    },
    {
      componyName: 'OBSS Teknoloji',
      type: JobType.FULL_TIME,
      position: JobPosition.REMOTE,
      country: 'Türkiye',
      city: 'İstanbul',
      startDate: new Date(2023, 7, 10),
      endDate: new Date(2023, 8, 10),
      title: 'Frontend Developer Intern Program',
      description: ['React temellerini öğrendik', 'Mimar yazılımcılar eşliğinde tüm web teknolojilerini içerek hızlı bir kurs aldık.'],
      note: ''
    }
  ]
}
