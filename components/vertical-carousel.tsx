import { act, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Alignment = 'horizontal' | 'vertical'

const sliderTransition = {
  duration: 0.3,
  ease: [0.56, 0.03, 0.12, 1.04],
}

interface VerticalCarouselProps {
  elements: React.ReactNode[]
  alignment?: Alignment
  active?: number
}

export default function VerticalCarousel({
  elements,
  alignment = 'horizontal',
  active,
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

  const sliderVariants = {
    incoming: (direction: number) => {
      if (alignment === 'horizontal') {
        return {
          x: direction > 0 ? '100%' : '-100%',
          y: 0,
          opacity: 0,
        }
      } else {
        return {
          x: 0,
          y: direction > 0 ? '100%' : '-100%',
          opacity: 0,
        }
      }
    },
    active: { x: 0, opacity: 1, y: 0 },
    exit: (direction: number) => {
      if (alignment === 'horizontal') {
        return {
          x: direction > 0 ? '-100%' : '100%',
          y: 0,
          opacity: 0,
        }
      } else {
        return {
          x: 0,
          y: direction > 0 ? '-100%' : '100%',
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
        className="absolute left-0 top-0 w-full"
      >
        {elements[activeIndex]}
      </motion.div>
    </AnimatePresence>
  )
}
