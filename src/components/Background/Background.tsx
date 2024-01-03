import React from 'react'
import styles from './Background.module.css'
import { Icons } from 'components/Icon/Icons'

export const Background = () => {
  return <div className={styles.iconsContainer}>{<Icons />}</div>
}
