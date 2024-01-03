import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const Contact = () => {
  return <div>Contact...</div>
}

export default Contact

export const getStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale, ['common', 'footer'])) }
})
