import { motion } from 'framer-motion'

export const getFadeInAnimationWithDelay = (delay: number) => {
  return {
    initial: {
      y: 200,
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25,
        delay,
      },
      offset: ['end start', 'start end'],
    },
    viewport: {
      once: true,
    },
  }
}

interface FadeInWrapperProps {
  children: React.ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
}

export default function FadeInWrapper({
  children,
  delay,
  className,
  style,
}: FadeInWrapperProps) {
  return (
    <motion.div
      {...getFadeInAnimationWithDelay(delay || 0)}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
