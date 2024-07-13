import { act, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn, smoothEase } from '@/lib/utils'

type Alignment = 'horizontal' | 'vertical'

const sliderTransition = {
  duration: 0.3,
  ease: smoothEase,
}

interface VerticalCarouselProps {
  elements: React.ReactNode[]
  alignment?: Alignment
  active?: number
  className?: string
  offset?: {
    x: number
    y: number
  }
}

export default function VerticalCarousel({
  elements,
  alignment = 'horizontal',
  active,
  className,
  offset,
}: VerticalCarouselProps) {
  const [[elementCount, direction], setElementCount] = useState([
    elements.length,
    0,
  ])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (active !== undefined) {
      goToElement(active)
    }
  }, [active])

  const goToElement = (elementIndex: number) => {
    let changeDirection = 0
    if (elementIndex > activeIndex) {
      changeDirection = 1
    } else if (elementIndex < activeIndex) {
      changeDirection = -1
    }

    setElementCount([elementIndex, changeDirection])
    setActiveIndex(elementIndex)
  }

  const xOffset = offset?.x || 0
  const yOffset = offset?.y || 0

  const sliderVariants = {
    incoming: (direction: number) => {
      if (alignment === 'horizontal') {
        return {
          x: direction > 0 ? `${100 + xOffset}%` : `${-100 + xOffset}%`,
          y: `${0 + yOffset}%`,
          opacity: 0,
        }
      } else {
        return {
          x: `${0 + xOffset}%`,
          y: direction > 0 ? `${100 + yOffset}%` : `${-100 + yOffset}%`,
          opacity: 0,
        }
      }
    },
    active: { x: `${0 + xOffset}%`, opacity: 1, y: `${0 + yOffset}%` },
    exit: (direction: number) => {
      if (alignment === 'horizontal') {
        return {
          x: direction > 0 ? `${-100 + xOffset}%` : `${100 + xOffset}%`,
          y: `${0 + yOffset}%`,
          opacity: 0,
        }
      } else {
        return {
          x: `${0 + xOffset}%`,
          y: direction > 0 ? `${-100 + yOffset}%` : `${100 + yOffset}%`,
          opacity: 0,
        }
      }
    },
  }

  return (
    <AnimatePresence initial={false} custom={direction}>
      <motion.div
        key={elementCount}
        custom={direction}
        variants={sliderVariants}
        initial="incoming"
        animate="active"
        exit="exit"
        transition={sliderTransition}
        className={cn('absolute left-0 top-0', className)}
      >
        {elements[activeIndex]}
      </motion.div>
    </AnimatePresence>
  )
}
