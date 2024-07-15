import { cn } from '@/lib/utils'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'

interface InnerParallaxImageProps {
  src: string
  alt?: string
  className?: string
  offset?: number
}

export default function InnerParallaxImage({
  src,
  alt,
  className,
  offset,
}: InnerParallaxImageProps) {
  const targetRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['end start', 'start end'],
  })

  const [hookedYProgress, setHookedYProgress] = useState(0)
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setHookedYProgress(latest)
  })

  const formattedOffset = offset === undefined ? 10 : offset

  return (
    <div className="h-full w-full overflow-hidden">
      <motion.div
        ref={targetRef}
        className="relative w-full"
        animate={{
          y: `-${hookedYProgress * formattedOffset}%`,
          height: `${100 + formattedOffset}%`,
          scale: 1.01,
        }}
        transition={{
          duration: 0,
        }}
      >
        <Image
          fill
          src={src}
          alt={alt || ''}
          className={cn('object-cover object-center', className)}
        />
      </motion.div>
    </div>
  )
}
