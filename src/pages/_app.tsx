import '../assets/styles/globals.css'
import React from 'react'
import { Provider } from 'react-redux'
import { useRouter } from 'next/router'
import { Layout } from '../components/Layout/Layout'
import { store } from '../store'
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from 'next-themes'
import { NextPage } from 'next'

interface Props {
  Component: NextPage
  pageProps: any
}

function MyApp({ Component, pageProps }: Props) {
  const router = useRouter()
  console.log(router)
  if (typeof window !== 'undefined' && router.pathname !== '/home') router.push('/home')

  return (
    <Provider store={store}>
      <ThemeProvider attribute='class'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </Provider>
  )
}

export default appWithTranslation(MyApp)
