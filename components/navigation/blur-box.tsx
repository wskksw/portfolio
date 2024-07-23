import { cn } from '@/lib/utils'
import { Dispatch, SetStateAction } from 'react'

interface BlurBoxProps {
  navOpen: boolean
  setNavOpen: Dispatch<SetStateAction<boolean>>
}

export default function BlurBox({ navOpen, setNavOpen }: BlurBoxProps) {
  return (
    <div
      className={cn(
        'fixed left-0 top-0 z-10 h-full w-full transition-all duration-300',
        navOpen && 'backdrop-blur-sm',
        !navOpen && 'pointer-events-none',
      )}
      style={{
        backgroundColor: `rgba(0, 0, 0, ${navOpen ? 0.5 : 0})`,
      }}
      onClick={() => setNavOpen(false)}
    />
  )
}
