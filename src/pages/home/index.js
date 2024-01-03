import { Header } from 'components/Header/Header'
import { Projects } from 'components/Projects/Projects'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const Home = () => {
  return (
    <>
      <Header />
      <Projects />
    </>
  )
}

export default Home

export const getStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale, ['common', 'footer'])) }
})
