'use client'

import { useSidebars } from '@/providers/use-sidebars'
import Carousel from '@/components/carousel'

export default function SidebarsOverlay() {
  const { sidebars, activeIndex } = useSidebars()

  if (!sidebars) return null

  const titles = sidebars.map((sidebar, index) => (
    <p key={index}>{sidebar.title}</p>
  ))
  const actions = sidebars.map((sidebar, index) => (
    <p key={index}>{sidebar.action}</p>
  ))

  return (
    <div className="pointer-events-none sticky left-0 top-0 z-30 h-0 w-full overflow-visible">
      <div
        className="sticky h-screen w-full whitespace-nowrap font-extrabold leading-4"
        style={{
          writingMode: 'vertical-lr',
        }}
      >
        <div className="absolute left-0 top-1/2 flex items-center justify-normal">
          <Carousel
            alignment="horizontal"
            elements={titles}
            active={activeIndex}
            offset={{ x: 0, y: -50 }}
          />
        </div>
        <div className="absolute right-0 top-1/2 flex rotate-180 items-center justify-normal">
          <Carousel
            alignment="horizontal"
            elements={actions}
            active={activeIndex}
            offset={{ x: 0, y: -50 }}
          />
        </div>
      </div>
    </div>
  )
}
