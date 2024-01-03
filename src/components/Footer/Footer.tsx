import { useTranslation } from 'next-i18next'
import styles from './Footer.module.css'

export const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer>
      <div className={styles.container}>
        <p className='text-center text-lg font-semibold mb-4'>{t('footer.title')}</p>
        <p className='text-center text-sm opacity-75'>{t('footer.description')}</p>
      </div>
    </footer>
  )
}
