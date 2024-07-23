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
        animate={animating ? { scaleY: 1, y: '0%' } : { scaleY: 0, y: '50%' }}
        transition={{
          duration: 1,
          ease: smoothEase,
        }}
        className="fixed left-0 top-0 z-[100] h-full w-full bg-primary"
      />
      <div className="pointer-events-none fixed left-0 top-0 z-[150] h-full w-full">
        <div className="relative h-full w-full">
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-extrabold leading-8 text-primary"
            animate={{
              opacity: betweenPages ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <span className="absolute left-1/2 top-1/2 z-[-10] h-32 w-32 -translate-x-1/2 -translate-y-1/2">
              <div className="h-full w-full animate-ping rounded-full bg-muted-foreground" />
            </span>
            <h4 className="z-10 text-7xl font-extrabold leading-8 text-background">
              JR
            </h4>
          </motion.div>
        </div>
      </div>
      {children}
    </TransitionContext.Provider>
  )
}

export const useTransition = () => useContext(TransitionContext)
