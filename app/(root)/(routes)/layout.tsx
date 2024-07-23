'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/navigation/navigation'
import SidebarsOverlay from '@/components/sidebars-overlay'
import { useGrid } from '@/providers/use-grid'
import TopOverlay from '@/components/navigation/top-overlay'
import BlurBox from '@/components/navigation/blur-box'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [navOpen, setNavOpen] = useState(false)
  const { setGridOpen } = useGrid()

  const transition = {
    type: 'spring',
    duration: 0.5,
    bounce: 0.2,
  }

  return (
    <div className="hide-scrollbar relative h-full w-full">
      <TopOverlay navOpen={navOpen} />
      <BlurBox navOpen={navOpen} setNavOpen={setNavOpen} />
      <motion.div
        animate={{ y: navOpen ? -400 : 0 }}
        transition={transition}
        className="mx-8"
      >
        <motion.div
          animate={{ scale: navOpen ? 0.9 : 1, y: navOpen ? 100 : 0 }}
          transition={transition}
        >
          <div className="max-w-screen sticky left-0 top-[20vh] z-[-10] flex h-0 w-full items-center justify-center overflow-visible">
            <p className="text-shadow px-12 text-[18rem] font-extrabold text-background">
              DEVELOPER
            </p>
          </div>
          <div className="flex-grow-1 mx-auto h-fit max-w-[1920px]">
            <SidebarsOverlay />
            <div className="h-full w-full px-8 md:px-12 lg:px-24 2xl:px-32">
              {children}
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="fixed bottom-0 z-20 h-fit w-full"
        animate={{ y: navOpen ? 0 : 400 }}
        transition={transition}
      >
        <Navigation
          open={navOpen}
          setOpen={(value) => {
            if (value) {
              setGridOpen(false)
            }
            setNavOpen(value)
          }}
        />
      </motion.div>
    </div>
  )
}
