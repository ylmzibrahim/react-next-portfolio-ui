import { useTranslation } from 'next-i18next'
import styles from './Header.module.css'
import { Slogan } from 'components/Slogan/Slogan'
import Image from 'next/image'

export const Header = () => {
  const { t } = useTranslation()

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.userInfo}>
          <h1 className={styles.title}>{t('header.title')}</h1>
          <h3 className={styles.description}>{t('header.description')}</h3>
          <Slogan text={t('header.slogan')} />
        </div>
        <div className={styles.userImage}>
          <div className={styles.circle}></div>
          <div className={styles.image}>
            <Image src='/images/user_emoji.png' layout='fill' />
          </div>
        </div>
      </div>
    </header>
  )
}
