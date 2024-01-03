import { Cv } from 'components/Cv/Cv'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const CvPage = () => {
  return <Cv />
}

export default CvPage

export const getStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale, ['common', 'footer'])) }
})
