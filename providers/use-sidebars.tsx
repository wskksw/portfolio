'use client'

import { useMotionValueEvent, useScroll } from 'framer-motion'
import { createContext, useContext, useEffect, useState } from 'react'

import { calculateBestSidebar } from '@/lib/utils'
import { usePathname } from 'next/navigation'

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
  const pathname = usePathname()
  const [sidebars, setSidebars] = useState<Sidebar[] | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [sidebarRefs, setSidebarRefs] = useState<HTMLDivElement[] | null>(null)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    if (!sidebarRefs || sidebarRefs.length === 0) return

    const bestIndex = calculateBestSidebar(y, sidebarRefs, window)

    if (bestIndex !== activeIndex) {
      setActiveIndex(bestIndex)
    }
  })

  useEffect(() => {
    setSidebarRefs(null)
  }, [pathname])

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
