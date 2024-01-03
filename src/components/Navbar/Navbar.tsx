import React, { useEffect, useMemo, useState } from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { ThemeMode } from './ThemeMode/ThemeMode'
import { Language } from './Language/Language'
import { NavbarLinkProps } from './Navbar.types'
import { useRouter } from 'next/router'
import { MainLogo } from './MainLogo/MainLogo'
import { MenuIcon } from '@heroicons/react/solid'

const Navbar = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const [activeLink, setActiveLink] = useState<number>(0)

  const links: NavbarLinkProps[] = useMemo(
    () => [
      { key: 0, title: t('navbar.links.home'), link: '/' },
      { key: 1, title: t('navbar.links.projects'), link: '/projects' },
      { key: 2, title: t('navbar.links.cv'), link: '/cv' },
      { key: 3, title: t('navbar.links.contact'), link: '/contact' }
    ],
    [t]
  )

  useEffect(() => {
    const activeKey = links.find((link) => link.link === router.route || (link.link !== '/' && router.route.includes(link.link)))?.key ?? 0
    setActiveLink(activeKey)
  }, [links, router.route])

  const navbarLinks = links.map((link) => (
    <div key={link.key}>
      <div className={`${styles.linkLine} ${link.key === activeLink ? styles.activeLinkLine : ''}`} />
      <Link href={link.link} onClick={() => changeActiveLink(link.key)}>
        {link.title}
      </Link>
    </div>
  ))

  const changeActiveLink = (key: number): void => {
    setActiveLink(key)
  }

  return (
    <nav className={styles.navbar}>
      <MainLogo />
      <div className={styles.links}>{navbarLinks}</div>
      <div className={styles.generalPreferences}>
        <ThemeMode />
        <Language />
        <div className={styles.burgerMenu}>
          <MenuIcon className='h-8' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
