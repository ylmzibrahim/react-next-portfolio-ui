import React from 'react'
import { LayoutProps } from './Layout.types'
import Navbar from '../Navbar/Navbar'
import styles from './Layout.module.css'
import { Footer } from 'components/Footer/Footer'
import { Background } from 'components/Background/Background'

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container + ' dark:bg-slate-800'}>
      <Navbar />
      <Background />
      <div className={styles.childrenComponent}>{children}</div>
      <Footer />
    </div>
  )
}
