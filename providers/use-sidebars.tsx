'use client'

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
}

const SidebarsContext = createContext<SidebarsContextType>({
  sidebars: null,
  setSidebars: (value: Sidebar[]) => {},
  activeIndex: 0,
  setActiveIndex: (value: number) => {},
})

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [sidebars, setSidebars] = useState<Sidebar[] | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <SidebarsContext.Provider
      value={{ sidebars, setSidebars, activeIndex, setActiveIndex }}
    >
      {children}
    </SidebarsContext.Provider>
  )
}

export const useSidebars = () => useContext(SidebarsContext)
