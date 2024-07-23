'use client'

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react'
import { motion } from 'framer-motion'

import '@/app/globals.css'
import { smoothEase } from '@/lib/utils'

interface GridContextType {
  gridOpen: boolean
  setGridOpen: Dispatch<SetStateAction<boolean>>
}

const GridContext = createContext<GridContextType>({
  gridOpen: false,
  setGridOpen: () => {},
})

export const GridProvider = ({ children }: { children: React.ReactNode }) => {
  const [gridOpen, setGridOpen] = useState(false)

  const interval = 0.5
  const duration = 0.6
  const ease = smoothEase

  const downVariants = {
    visible: (i: number) => ({
      height: '100%',
      transition: {
        duration,
        delay: i * interval,
        ease,
      },
    }),
    hidden: { height: 0 },
  }
  const upVariants = {
    visible: (i: number) => ({
      y: 0,
      transition: {
        duration,
        delay: i * interval,
        ease,
      },
    }),
    hidden: { y: '100%' },
  }

  return (
    <GridContext.Provider value={{ gridOpen, setGridOpen }}>
      <div className="pointer-events-none fixed left-0 top-0 z-10 h-full w-full">
        <div className="h-full w-full px-8">
          <div className="relative mx-auto flex h-full max-w-[1920px] gap-5 px-8 md:px-12 lg:px-24 2xl:px-32">
            <motion.div
              custom={2}
              animate={gridOpen ? 'visible' : 'hidden'}
              variants={upVariants}
              className="absolute left-0 top-0 h-full translate-x-[-50%] border-x border-outline"
            />
            <motion.div
              custom={2}
              animate={gridOpen ? 'visible' : 'hidden'}
              variants={downVariants}
              className="absolute right-0 top-0 h-full translate-x-[-50%] border-x border-outline"
            />
            <div className="relative flex-1">
              <motion.div
                custom={0}
                animate={gridOpen ? 'visible' : 'hidden'}
                variants={downVariants}
                className="absolute left-0 top-0 h-full translate-x-[-50%] border-x border-outline"
              />
              <motion.div
                custom={1}
                animate={gridOpen ? 'visible' : 'hidden'}
                variants={upVariants}
                className="absolute left-1/3 top-0 h-full translate-x-[-50%] border-x border-outline"
              />
              <motion.div
                custom={1}
                animate={gridOpen ? 'visible' : 'hidden'}
                variants={upVariants}
                className="absolute left-2/3 top-0 h-full translate-x-[-50%] border-x border-outline"
              />
              <motion.div
                custom={0}
                animate={gridOpen ? 'visible' : 'hidden'}
                variants={downVariants}
                className="absolute right-0 top-0 h-full translate-x-[-50%] border-x border-outline"
              />
            </div>
            <div className="relative flex-1">
              <motion.div
                custom={0}
                animate={gridOpen ? 'visible' : 'hidden'}
                variants={upVariants}
                className="absolute left-0 top-0 h-full translate-x-[-50%] border-x border-outline"
              />
              <motion.div
                custom={1}
                animate={gridOpen ? 'visible' : 'hidden'}
                variants={downVariants}
                className="absolute left-1/3 top-0 h-full translate-x-[-50%] border-x border-outline"
              />
              <motion.div
                custom={1}
                animate={gridOpen ? 'visible' : 'hidden'}
                variants={downVariants}
                className="absolute left-2/3 top-0 h-full translate-x-[-50%] border-x border-outline"
              />
              <motion.div
                custom={0}
                animate={gridOpen ? 'visible' : 'hidden'}
                variants={upVariants}
                className="absolute right-0 top-0 h-full translate-x-[-50%] border-x border-outline"
              />
            </div>
          </div>
        </div>
      </div>
      {children}
    </GridContext.Provider>
  )
}

export const useGrid = () => useContext(GridContext)
