'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ArrowButton from './arrow-button'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  src: string
  year: string
  title: string
  description: string
  onClick?: () => void
  onHover?: () => void
  variant?: 'default' | 'lg'
}

export default function ProjectCard({
  src,
  year,
  title,
  description,
  onClick,
  onHover,
  variant = 'default',
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false)

  const transition = {
    duration: 0.3,
    ease: [0.56, 0.03, 0.12, 1.04],
  }

  return (
    <div
      className="relative h-full w-full"
      onMouseEnter={() => {
        setHovered(true)
        onHover?.()
      }}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <div className="absolute left-0 top-0 z-[-10] h-full w-full overflow-hidden">
        <motion.div
          className="relative h-full w-full overflow-hidden"
          animate={{
            scale: hovered ? 1 : 1.05,
          }}
          transition={transition}
        >
          <Image
            fill
            src={src}
            alt="Profile Image"
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
              variant === 'default' && 'p-10',
              variant === 'lg' && 'p-10 pr-0',
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
