'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { motion, motionValue } from 'framer-motion'
import ArrowButton from './arrow-button'
import { cn, smoothEase } from '@/lib/utils'
import { Logo } from '@/data/stack'
import LogoIcon from './icons/logo'

interface ProjectCardProps {
  src: string
  year: string
  title: string
  description: string
  logos: Logo[]
  onClick?: () => void
  onHover?: () => void
  variant?: 'default' | 'lg'
  xOffset?: any
}

export default function ProjectCard({
  src,
  year,
  title,
  description,
  logos,
  onClick,
  onHover,
  variant = 'default',
  xOffset,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  const transition = {
    duration: 0.3,
    ease: smoothEase,
  }

  const handleMouseMove = (e: any) => {
    if (!cardRef.current) return
    const { left, top, width } = cardRef.current.getBoundingClientRect()

    const circleRadius = (width * 0.9) / 2

    let relativeX = e.clientX - left - circleRadius
    let relativeY = e.clientY - top - circleRadius

    x.set(relativeX)
    y.set(relativeY)
  }

  const x = motionValue(0)
  const y = motionValue(0)

  return (
    <div
      ref={cardRef}
      className="relative h-full w-full cursor-pointer overflow-hidden"
      onMouseEnter={() => {
        setHovered(true)
        onHover?.()
      }}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={onClick}
    >
      <div className="absolute left-0 top-0 z-[-10] h-full w-[140%] overflow-hidden">
        <motion.div
          className="relative h-full w-full overflow-hidden"
          animate={{
            scale: hovered ? 1 : 1.05,
          }}
          transition={transition}
          style={{
            x: xOffset,
          }}
        >
          <Image
            fill
            src={src}
            alt="Project Image"
            className="object-cover object-center"
          />
        </motion.div>
      </div>
      <motion.div
        className="absolute left-0 top-0 z-[-5] h-full w-full bg-primary"
        animate={{
          opacity: hovered ? 0.85 : 0,
        }}
        transition={transition}
      />
      <motion.div
        className="absolute left-0 top-0 z-[-5] aspect-square w-[90%]"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 65%)',
          x,
          y,
        }}
      />
      <div className="z-20 flex h-full flex-col">
        <motion.p
          className="p-10 pb-0 text-lg tracking-[0.3em]"
          animate={{
            color: hovered ? 'hsl(var(--secondary))' : 'hsl(var(--background))',
          }}
          transition={transition}
        >
          {year}
        </motion.p>
        <motion.div
          className={cn(
            'flex h-full flex-col justify-between',
            variant === 'lg' && 'w-2/3',
          )}
          animate={{
            opacity: hovered ? 1 : 0,
          }}
          transition={transition}
        >
          <div
            className={cn(
              'space-y-2 pt-0',
              variant === 'default' && 'p-10 pt-4',
              variant === 'lg' && 'p-10 pr-0 pt-4',
            )}
          >
            <h1 className="text-7xl font-extrabold text-background">
              {title.toUpperCase()}
            </h1>
            <p className="text-justify text-[1.5rem] text-secondary">
              {description}
            </p>
          </div>
          <div className="p-5">
            <div className="flex flex-wrap gap-5 pl-5">
              {logos.map((logo, index) => (
                <div key={index} className="aspect-square w-10">
                  <LogoIcon logo={logo} />
                </div>
              ))}
            </div>
            <ArrowButton
              title="View Project"
              className="pt gap-10 !bg-transparent px-5 py-3 font-bold"
              arrowColor="#fff"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
