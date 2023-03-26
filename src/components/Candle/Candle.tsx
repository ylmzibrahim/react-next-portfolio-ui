import { useState } from 'react'
import styles from 'components/Candle/Candle.module.css'

const CANDLE_HEIGHT = '3'

export const Candle = () => {
  const [isLit, setIsLit] = useState(true)

  const candleClickHandler = () => {
    setIsLit((state) => !state)
  }

  return (
    <div className={styles.holder}>
      <div className={`${styles.candle} text-[${CANDLE_HEIGHT}px]`} onClick={candleClickHandler}>
        {isLit ? (
          <>
            <div className={styles.blinking_glow}></div>
            <div className={styles.thread}></div>
            <div className={styles.glow}></div>
            <div className={styles.flame}></div>
          </>
        ) : (
          <>
            <div className={styles.smokeXL} />
            <div className={styles.smokeLG} />
            <div className={styles.smokeMD} />
          </>
        )}
      </div>
    </div>
  )
}
