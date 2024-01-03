import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const About = () => {
  return <div>About...</div>
}

export default About

export const getStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale, ['common', 'footer'])) }
})
