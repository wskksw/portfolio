'use client'

import { usePathname, useRouter } from 'next/navigation'
import { createContext, useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { smoothEase } from '@/lib/utils'

interface TransitionContextType {
  betweenPages: boolean
  transitionPage: (src: string) => void
}

const TransitionContext = createContext<TransitionContextType>({
  betweenPages: false,
  transitionPage: (src: string) => {},
})

export const TransitionProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const router = useRouter()
  const pathname = usePathname()
  const [animating, setAnimating] = useState(false)
  const [betweenPages, setBetweenPages] = useState(false)

  const transitionPage = (src: string) => {
    if (animating || src === pathname) return

    setAnimating(true)

    setTimeout(() => {
      router.push(src)
    }, 1000)

    setTimeout(() => {
      setBetweenPages(true)
    }, 500)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    setAnimating(false)
    setBetweenPages(false)
  }, [pathname])

  return (
    <TransitionContext.Provider value={{ betweenPages, transitionPage }}>
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
        animate={animating ? { scaleY: 1, y: '0%' } : { scaleY: 0, y: '50%' }}
        transition={{
          duration: 1,
          ease: smoothEase,
        }}
        className="fixed left-0 top-0 z-[100] h-full w-full bg-primary"
      />
      {children}
    </TransitionContext.Provider>
  )
}

export const useTransition = () => useContext(TransitionContext)
