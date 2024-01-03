import { motion } from 'framer-motion'
import styles from './Icon.module.css'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { PageSize } from './Icon.types'

export const Icon = ({ icon }: any) => {
  const [pageSize, setPageSize] = useState<PageSize>()
  const isTimeoutDone = useRef<boolean>(true)

  useEffect(() => {
    setPageSize({ height: window.innerHeight, width: window.innerWidth })
  }, [])

  useEffect(() => {
    const updatePageSize = () => {
      if (isTimeoutDone.current) {
        isTimeoutDone.current = false
        setTimeout(() => {
          if (typeof window !== 'undefined') {
            setPageSize({ height: window.innerHeight, width: window.innerWidth })
          }
          isTimeoutDone.current = true
        }, 200)
      }
    }

    updatePageSize()

    window.addEventListener('resize', updatePageSize)
    return () => {
      window.removeEventListener('resize', updatePageSize)
    }
  }, [])

  return (
    <motion.div
      className={styles.icon}
      style={{
        top: pageSize?.height ? Math.random() * pageSize.height : -1000,
        left: pageSize?.width ? Math.random() * pageSize.width : -1000
      }}
      animate={{
        rotate: Math.random() * 360,
        transformStyle: 'preserve-3d',
        translateX: Math.random() * 1000,
        translateY: Math.random() * 1000
      }}
      transition={{ duration: 5, repeat: Infinity }}
      onClick={() => console.log('Clicked:', icon)}
    >
      <div className={styles.svg}>
        <Image priority src={icon} alt='icon' />
      </div>
    </motion.div>
  )
}
