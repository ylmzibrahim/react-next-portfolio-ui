import { SloganProps } from './Slogan.types'
import styles from './Slogan.module.css'

export const Slogan = ({ text }: SloganProps) => {
  return (
    <div>
      <p className={styles.sloganText}>{text}</p>
    </div>
  )
}
