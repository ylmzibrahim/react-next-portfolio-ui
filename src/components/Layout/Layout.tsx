import React from 'react'
import { useSelector } from 'react-redux'
import { selectors } from '../../store'
import { useRouter } from 'next/router'
import Navbar from '../Navbar/Navbar'
import { LayoutProps } from './Layout.types'

export const Layout = ({ children }: LayoutProps) => {
  const isLoggedIn = useSelector(selectors.getIsLoggedIn)
  const router = useRouter()

  return (
    <div className='bg-slate-50 dark:bg-slate-800 min-h-screen flex flex-col'>
      <Navbar />
      <div className='max-w-screen-lg w-full mx-auto p-3'>{children}</div>
    </div>
  )
}
