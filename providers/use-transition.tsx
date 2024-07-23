'use client'

import { usePathname, useRouter } from 'next/navigation'
import { createContext, useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { smoothEase } from '@/lib/utils'

interface TransitionContextType {
  transitionPage: (src: string) => void
}

const TransitionContext = createContext<TransitionContextType>({
  transitionPage: (src: string) => {},
})

export const TransitionProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const router = useRouter()
  const pathname = usePathname()
  const [animatingExit, setAnimatingExit] = useState(false)
  const [betweenPages, setBetweenPages] = useState(false)

  const transitionPage = (src: string) => {
    if (animatingExit || src === pathname) return

    setAnimatingExit(true)

    setTimeout(() => {
      router.push(src)
    }, 1000)

    setTimeout(() => {
      setBetweenPages(true)
    }, 500)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    setAnimatingExit(false)

    setTimeout(() => {
      setBetweenPages(false)
    }, 500)
  }, [pathname])

  const logoAnimation = {
    initial: { opacity: 0 },
    animate: {
      opacity: animatingExit ? 1 : 0,
    },
    transition: {
      duration: 0.3,
    },
  }

  return (
    <TransitionContext.Provider value={{ transitionPage }}>
      <motion.div
        key={pathname}
        initial={{ scaleY: 1, y: '0%' }}
        animate={{ scaleY: 0, y: '-50%' }}
        exit={{ scaleY: 0, y: '-50%' }}
        transition={{
          duration: 1,
          ease: smoothEase,
        }}
        className="fixed left-0 top-0 z-[100] h-full w-full bg-primary"
      />
      <motion.div
        key={pathname}
        initial={{ scaleY: 0, y: '50%' }}
        animate={
          animatingExit ? { scaleY: 1, y: '0%' } : { scaleY: 0, y: '50%' }
        }
        transition={{
          duration: 1,
          ease: smoothEase,
        }}
        className="fixed left-0 top-0 z-[100] h-full w-full bg-primary"
      />
      {betweenPages && (
        <>
          <motion.span
            className="fixed left-1/2 top-1/2 z-[110] h-32 w-32 -translate-x-1/2 -translate-y-1/2"
            {...logoAnimation}
          >
            <div className="h-full w-full animate-ping rounded-full bg-muted-foreground" />
          </motion.span>
          <motion.h4
            className="fixed left-1/2 top-1/2 z-[120] -translate-x-1/2 -translate-y-1/2 text-7xl font-extrabold leading-8 text-background"
            {...logoAnimation}
          >
            JR
          </motion.h4>
        </>
      )}
      {children}
    </TransitionContext.Provider>
  )
}

export const useTransition = () => useContext(TransitionContext)
