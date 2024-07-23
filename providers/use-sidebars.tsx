'use client'

import { calculateBestSidebar } from '@/lib/utils'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { createContext, useContext, useState } from 'react'

export interface Sidebar {
  title: string
  action: string
}

interface SidebarsContextType {
  sidebars: Sidebar[] | null
  setSidebars: (value: Sidebar[]) => void
  activeIndex: number
  setActiveIndex: (value: number) => void
  setSidebarRefs: (value: HTMLDivElement[]) => void
}

const SidebarsContext = createContext<SidebarsContextType>({
  sidebars: null,
  setSidebars: (value: Sidebar[]) => {},
  activeIndex: 0,
  setActiveIndex: (value: number) => {},
  setSidebarRefs: (value: HTMLDivElement[]) => {},
})

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [sidebars, setSidebars] = useState<Sidebar[] | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [sidebarRefs, setSidebarRefs] = useState<HTMLDivElement[]>([])

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    const bestIndex = calculateBestSidebar(y, sidebarRefs, window)

    if (bestIndex !== activeIndex) {
      setActiveIndex(bestIndex)
    }
  })

  return (
    <SidebarsContext.Provider
      value={{
        sidebars,
        setSidebars,
        activeIndex,
        setActiveIndex,
        setSidebarRefs,
      }}
    >
      {children}
    </SidebarsContext.Provider>
  )
}

export const useSidebars = () => useContext(SidebarsContext)
