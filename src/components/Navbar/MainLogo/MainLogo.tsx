import { useRouter } from 'next/router'
import styles from './MainLogo.module.css'

export const MainLogo = () => {
  const router = useRouter()

  const logoClickHandle = () => {
    router.push('/')
  }

  return (
    <div className={styles.logoBorder} onClick={logoClickHandle}>
      <h1 className={styles.logoTitle}>{`<ibrahimyilmaz />`}</h1>
    </div>
  )
}
