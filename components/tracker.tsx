import { useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface TrackerProps {
  children: React.ReactNode
  onView: () => void
}

export default function Tracker({ children, onView }: TrackerProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, {
    margin: '0px 0px 0px 0px',
  })

  useEffect(() => {
    if (isInView) {
      onView()
    }
  }, [isInView, onView])

  return <span ref={ref}>{children}</span>
}
