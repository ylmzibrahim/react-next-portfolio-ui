import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const Home = () => {
  return <div>Home...</div>
}

export default Home

export const getStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale, ['common', 'footer'])) }
})
