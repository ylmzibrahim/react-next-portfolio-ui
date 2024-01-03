import '../assets/styles/globals.css'
import React from 'react'
import { Provider } from 'react-redux'
import { Layout } from '../components/Layout/Layout'
import { store } from '../store'
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from 'next-themes'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

interface Props {
  Component: NextPage
  pageProps: any
}

function MyApp({ Component, pageProps }: Props) {
  const router = useRouter()
  if (typeof window !== 'undefined' && router.pathname === '/') router.push('/home')

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
