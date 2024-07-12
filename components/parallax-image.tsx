'use client'

import { cn } from '@/lib/utils'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface ParallaxImageProps {
  src: string
  displacement: number
  className?: string
}

export default function ParallaxImage({
  src,
  displacement,
  className,
}: ParallaxImageProps) {
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end start', 'start end'],
  })

  const [hookedYProgress, setHookedYProgress] = useState(0)
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setHookedYProgress(latest)
  })

  return (
    <motion.div
      initial={{ y: 160, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          bounce: 0.2,
          duration: 0.8,
        },
      }}
      viewport={{
        once: true,
        amount: 0.9,
      }}
    >
      <motion.div
        ref={targetRef}
        className={cn('relative aspect-[4/3] w-full flex-1', className)}
        animate={{
          y: hookedYProgress * displacement - displacement / 2,
        }}
        transition={{
          duration: 0,
        }}
      >
        <motion.div
          className="absolute left-0 top-0 z-10 w-full bg-primary"
          initial={{
            height: '100%',
          }}
          whileInView={{
            height: '0%',
          }}
          viewport={{
            once: true,
            amount: 0.9,
          }}
          transition={{
            duration: 0.8,
            ease: [0.56, 0.03, 0.12, 1.04],
          }}
        />
        <Image
          fill
          src={src}
          alt="Project Image"
          className="object-cover object-center"
        />
      </motion.div>
    </motion.div>
  )
}
