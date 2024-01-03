import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions, selectors } from 'store'
import styles from './Language.module.css'

export const Language = () => {
  const language = useSelector(selectors.getLanguage)
  const router = useRouter()
  const dispatch = useDispatch()
  const [languageLogo, setLanguageLogo] = useState(
    language === 'en-US' ? (
      <Image src='/images/flag-US.webp' layout='fill' alt='flag-united-states-america' />
    ) : (
      <Image src='/images/flag-TR.webp' layout='fill' alt='flag-turkey' />
    )
  )

  useEffect(() => {
    setLanguageLogo(
      language === 'en-US' ? (
        <Image src='/images/flag-US.webp' layout='fill' alt='flag-united-states-america' />
      ) : (
        <Image src='/images/flag-TR.webp' layout='fill' alt='flag-turkey' />
      )
    )
  }, [language])

  useEffect(() => {
    dispatch(actions.setLanguage(router.locale))
  })

  const handleChangeLanguage = () => {
    if (language === 'en-US') {
      router.replace(router.asPath, router.asPath, { locale: 'tr-TR' })
      dispatch(actions.setLanguage('tr-TR'))
    } else {
      router.replace(router.asPath, router.asPath, { locale: 'en-US' })
      dispatch(actions.setLanguage('en-US'))
    }
  }

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleChangeLanguage}>
        {languageLogo}
      </button>
    </div>
  )
}
