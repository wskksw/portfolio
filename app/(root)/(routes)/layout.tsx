'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn, smoothEase } from '@/lib/utils'
import Navigation from '@/components/navigation'
import SidebarsOverlay from '@/components/sidebars-overlay'
import Image from 'next/image'
import { Grid3x3 } from 'lucide-react'
import { githubLink, linkedinLink } from '@/data/links'
import Link from 'next/link'
import { useGrid } from '@/providers/use-grid'

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
      <div className="pointer-events-none fixed left-0 top-0 z-20 h-fit w-full bg-transparent">
        <div className="flex h-full w-full justify-between gap-5 px-[34px] pt-8">
          <h4 className="text-4xl font-extrabold leading-8">JR</h4>
          <div className="pointer-events-auto flex h-fit gap-8">
            <div
              className={cn(
                'bounce hidden lg:block',
                navOpen
                  ? 'pointer-events-none'
                  : 'pointer-events-auto cursor-pointer',
              )}
              onClick={() => setGridOpen((prev) => !prev)}
            >
              <Grid3x3 size={32} />
            </div>
            <Link
              className="relative aspect-square h-8 cursor-pointer"
              href={githubLink}
              target="_blank"
            >
              <Image
                fill
                src={'/images/logos/git-hub.png'}
                alt="GitHub Icon"
                className="object-cover object-center"
              />
            </Link>
            <Link
              className="relative aspect-square h-8 cursor-pointer"
              href={linkedinLink}
              target="_blank"
            >
              <Image
                fill
                src={'/images/logos/linked-in.png'}
                alt="LinkedIn Icon"
                className="object-cover object-center"
              />
            </Link>
          </div>
        </div>
      </div>
      <div
        className={cn(
          'fixed left-0 top-0 z-10 h-full w-full transition-all duration-300',
          navOpen && 'backdrop-blur-sm',
          !navOpen && 'pointer-events-none',
        )}
        style={{
          backgroundColor: `rgba(0, 0, 0, ${navOpen ? 0.5 : 0})`,
        }}
        onClick={() => setNavOpen(false)}
      />
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
