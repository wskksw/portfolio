'use client'

import { Button } from './ui/button'
import { cn } from '@/lib/utils'
import { motion, useAnimate } from 'framer-motion'
import { useState } from 'react'
import LongArrow from './icons/longArrow'

interface ArrowButtonProps {
  title: string
  className?: string
  arrowColor?: string
  onClick?: () => void
}

export default function ArrowButton({
  title,
  className,
  arrowColor,
  onClick,
}: ArrowButtonProps) {
  const [arrow1Scope, arrow1Animate] = useAnimate()
  const [arrow2Scope, arrow2Animate] = useAnimate()
  const [animating, setAnimating] = useState(false)

  const animationDuration = 0.3
  const delay = 0.2

  const startAnimation = () => {
    if (animating) return

    setAnimating(true)
    arrow1Animate(
      arrow1Scope.current,
      {
        x: 200,
      },
      {
        duration: animationDuration,
        ease: 'easeInOut',
      },
    )
    arrow2Animate(
      arrow2Scope.current,
      {
        x: 0,
      },
      {
        delay: delay,
        duration: animationDuration,
        ease: 'easeInOut',
      },
    )

    setTimeout(
      () => {
        arrow1Animate(
          arrow1Scope.current,
          {
            x: 0,
          },
          {
            duration: 0,
          },
        )
        arrow2Animate(
          arrow2Scope.current,
          {
            x: -200,
          },
          {
            duration: 0,
          },
        )
        setAnimating(false)
      },
      animationDuration * 1000 + delay * 1000,
    )
  }

  return (
    <Button
      className={cn(
        'flex items-center justify-between gap-2 text-[1.5rem] font-normal hover:bg-primary',
        className,
      )}
      onMouseEnter={() => startAnimation()}
      onClick={onClick}
    >
      {title}
      <div className="relative overflow-hidden">
        <span className="opacity-0">
          <LongArrow />
        </span>
        <motion.button
          ref={arrow1Scope}
          className="absolute left-0 top-1/2"
          initial={{
            x: 0,
            y: '-50%',
          }}
        >
          <LongArrow color={arrowColor} />
        </motion.button>
        <motion.button
          ref={arrow2Scope}
          className="absolute left-0 top-1/2"
          initial={{
            x: -200,
            y: '-50%',
          }}
        >
          <LongArrow color={arrowColor} />
        </motion.button>
      </div>
    </Button>
  )
}
