import React from 'react'
import Head from 'next/head'
import styles from '../assets/styles/Home.module.css'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {
  // const { t } = useTranslation()
  // const user = useSelector(selectors.getUser)
  // const isLoggedIn = useSelector(selectors.getIsLoggedIn)

  return (
    <div className={styles.container}>
      <Head>
        <title>Hello World</title>
        <meta name='description' content='Hello world app' />
        <link rel='icon' href='/images/favicon.ico' />
      </Head>

      <main></main>
      <footer></footer>
    </div>
  )
}

export const getStaticProps = async ({ locale }: any) => ({
  props: { ...(await serverSideTranslations(locale, ['common', 'footer'])) }
})
