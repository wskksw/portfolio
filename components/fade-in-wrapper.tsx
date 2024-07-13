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
      offset: ['start start', 'end end'],
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
}

export default function FadeInWrapper({
  children,
  delay,
  className,
}: FadeInWrapperProps) {
  return (
    <motion.div
      {...getFadeInAnimationWithDelay(delay || 0)}
      className={className}
    >
      {children}
    </motion.div>
  )
}
