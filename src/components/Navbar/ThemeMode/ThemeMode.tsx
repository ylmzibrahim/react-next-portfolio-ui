import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions, selectors } from 'store'
import styles from './ThemeMode.module.css'

export const ThemeMode = () => {
  const dispatch = useDispatch()
  const themeState = useSelector(selectors.getTheme)
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    dispatch(actions.setTheme(currentTheme))
  })

  const handleChangeTheme = () => {
    if (themeState === 'light') {
      setTheme('dark')
      dispatch(actions.setTheme('dark'))
    } else {
      setTheme('light')
      dispatch(actions.setTheme('light'))
    }
  }

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleChangeTheme}>
        {themeState !== 'dark' ? <MoonIcon /> : <SunIcon />}
      </button>
    </div>
  )
}
