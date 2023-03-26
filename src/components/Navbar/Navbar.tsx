import React from 'react'
import { useEffect } from 'react'
import styles from '../../assets/styles/Navbar.module.css'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { actions, selectors } from '../../store'
import { useTranslation } from 'next-i18next'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Navbar = () => {
  const { t } = useTranslation()
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  const dispatch = useDispatch()
  const user = useSelector(selectors.getUser)
  const language = useSelector(selectors.getLanguage)
  const themeState = useSelector(selectors.getTheme)
  const router = useRouter()

  useEffect(() => {
    dispatch(actions.setLanguage(router.locale))
    dispatch(actions.setTheme(currentTheme))
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

  const handleChangeTheme = () => {
    if (themeState === 'light') {
      setTheme('dark')
      dispatch(actions.setTheme('dark'))
    } else {
      setTheme('light')
      dispatch(actions.setTheme('light'))
    }
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link href='/'>{t('Home')}</Link>
        {user.username !== undefined && <Link href={`/user/${user.username}`}>{user.username}</Link>}
      </div>
      <div className='ml-auto mr-2 space-x-2 flex flex-row'>
        <div className='flex items-center justify-center shadow-lg p-0.5'>
          <button className='relative h-6 aspect-square' onClick={handleChangeTheme}>
            {themeState !== 'dark' ? <MoonIcon /> : <SunIcon />}
          </button>
        </div>
        <div className='flex items-center justify-center shadow-lg p-0.5'>
          <button className='relative h-6 aspect-video' onClick={handleChangeLanguage}>
            {language === 'en-US' ? (
              <Image src='/images/flag-US.webp' layout='fill' alt='flag-united-states-america' />
            ) : (
              <Image src='/images/flag-TR.webp' layout='fill' alt='flag-turkey' />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
