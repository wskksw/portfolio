'use client'

import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import NavigationCard from './navigation-card'
import LongArrow from './icons/longArrow'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface NavigationProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export default function Navigation({ open, setOpen }: NavigationProps) {
  const [progress, setProgress] = useState(50)
  const [latestClickX, setLatestClickX] = useState<number | undefined>(
    undefined,
  )
  const [latestProgress, setLatestProgress] = useState(0)

  const handleMouseDown = (e: any) => {
    const { clientX } = e
    setLatestClickX(clientX)
    setLatestProgress(progress)
  }

  const handleMouseUp = (e: any) => {
    setLatestClickX(undefined)
    setLatestProgress(0)
  }

  const handleMouseMove = (e: any) => {
    if (latestClickX === undefined) return

    const { clientX } = e

    animateTrack(clientX, latestClickX)
    animateLoadingBar()
  }

  const animateTrack = (endX: number, startX: number) => {
    const trackElement = document.querySelector('.track') as HTMLElement

    if (!trackElement) return

    const trackCards = trackElement.getElementsByClassName('track-card')
    if (!trackCards) return

    const mouseDelta = endX - startX
    const maxDelta = window.innerWidth / 2

    const newProgress = (mouseDelta / maxDelta) * 100 + latestProgress
    const formattedProgress = Math.min(Math.max(newProgress, 0), 100)
    const inversedProgress = 100 - formattedProgress

    trackElement.animate(
      {
        transform: `translate(-${inversedProgress}%, -50%)`,
      },
      { duration: 2000, fill: 'forwards' },
    )

    Array.from(trackCards).forEach((card: any) => {
      card.animate(
        {
          transform: `translate(-${inversedProgress / 2}%, 0%)`,
        },
        { duration: 2000, fill: 'forwards' },
      )
    })

    setProgress(formattedProgress)
  }

  const animateLoadingBar = () => {
    const trackBar = document.querySelector('.track-bar') as HTMLElement

    if (!trackBar) return

    const trackElement = document.querySelector('.track')
    if (!trackElement) return

    const trackWidth = trackElement.getBoundingClientRect().width
    const windowWidth = window.innerWidth

    const widthPercent = (windowWidth / trackWidth) * 100

    trackBar.animate(
      {
        width: `${widthPercent}%`,
        left: `${progress}%`,
        transform: `translate(-50%, -50%)`,
      },
      { duration: 2000, fill: 'forwards' },
    )
  }

  useEffect(() => {
    animateLoadingBar()
  }, [])

  const routes = [
    {
      title: 'Home',
      href: '/',
      imageSrc: '/images/color1.avif',
    },
    {
      title: 'Portfolio',
      href: '/projects',
      imageSrc: '/images/color2.avif',
    },
    {
      title: 'About',
      href: '/about',
      imageSrc: '/images/color3.avif',
    },
    {
      title: 'Contact',
      href: '/contact',
      imageSrc: '/images/color4.avif',
    },
    {
      title: 'Tech Stack',
      href: '/stack',
      imageSrc: '/images/color1.avif',
    },
  ]

  return (
    <motion.div
      className="relative h-[400px] flex-shrink-0 bg-primary p-8"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <div
        className="absolute left-1/2 top-0 h-24 w-24 translate-x-[-50%] translate-y-[-120px]"
        onClick={() => setOpen((prev) => !prev)}
      >
        <div
          className={cn(
            'bounce-delay flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-primary',
          )}
        >
          <LongArrow
            className={cn(
              'transition',
              open ? 'rotate-[90deg]' : 'rotate-[270deg]',
            )}
            color="#FFF"
          />
        </div>
      </div>
      <div className="relative h-full w-full">
        <div
          className="track absolute left-1/2 top-1/2 flex gap-12 overflow-hidden"
          style={{
            transform: `translate(-50%, -50%)`,
          }}
        >
          {routes.map((route) => (
            <NavigationCard
              key={route.href}
              {...route}
              onClick={() => setOpen(false)}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="h-[14px] w-32 rounded-full border-2 border-background bg-primary p-1">
          <div className="relative h-full w-full overflow-hidden rounded-full">
            <div
              className={`track-bar absolute left-1/2 top-1/2 h-[2px] rounded-full bg-background`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
