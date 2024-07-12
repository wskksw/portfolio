'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import { cn } from '@/lib/utils'
import Navigation from '@/components/navigation'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [navOpen, setNavOpen] = useState(false)

  const transition = {
    duration: 0.5,
    type: 'spring',
    bounce: 0.2,
  }

  return (
    <div className="hide-scrollbar relative h-full w-full">
      <div
        className={cn(
          'fixed left-0 top-0 z-10 h-full w-full bg-slate-100 transition-all duration-300',
          navOpen && 'backdrop-blur-sm',
          !navOpen && 'pointer-events-none',
        )}
        style={{
          backgroundColor: `rgba(0, 0, 0, ${navOpen ? 0.5 : 0})`,
        }}
        onClick={() => setNavOpen(false)}
      />
      <motion.div animate={{ y: navOpen ? -400 : 0 }} transition={transition}>
        <motion.div
          animate={{ scale: navOpen ? 0.9 : 1, y: navOpen ? 100 : 0 }}
          transition={transition}
        >
          <div className="max-w-screen sticky left-0 top-0 z-[-10] flex w-full items-center justify-center overflow-hidden">
            <p className="text-shadow px-12 text-[18rem] font-extrabold text-background">
              DEVELOPER
            </p>
          </div>
          <div className="flex-grow-1 relative mx-auto mt-[-288px] h-fit max-w-[1920px] px-48">
            {children}
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className="fixed bottom-0 z-20 h-fit w-full"
        animate={{ y: navOpen ? 0 : 400 }}
        transition={transition}
      >
        <Navigation open={navOpen} setOpen={setNavOpen} />
      </motion.div>
    </div>
  )
}
