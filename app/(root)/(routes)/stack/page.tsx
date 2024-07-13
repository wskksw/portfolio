'use client'

import Footer from '@/components/footer'
import ContactSection from '@/components/sections/contact-section'
import LogoShowcaseSection from '@/components/sections/logo-showcase-section'
import { stackData } from '@/data/stack'
import { calculateBestSidebar } from '@/lib/utils'
import { Sidebar, useSidebars } from '@/providers/use-sidebars'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'

export default function StackPage() {
  const router = useRouter()
  const { setSidebars, setActiveIndex, activeIndex } = useSidebars()
  const refs = useRef<HTMLDivElement[]>([])
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (y) => {
    const bestIndex = calculateBestSidebar(y, refs, window)

    if (bestIndex !== activeIndex) {
      setActiveIndex(bestIndex)
    }
  })

  useEffect(() => {
    const data: Sidebar[] = []

    // Form
    data.push({
      title: 'Email Me!',
      action: 'Email Me!',
    })

    // Footer
    data.push({
      title: "Here's some options!",
      action: "Here's some options!",
    })

    setSidebars(data)
  }, [])

  return (
    <main className="py-32">
      <div
        className="flex flex-col gap-48 pb-80"
        ref={(ref: any) => (refs.current[0] = ref)}
      >
        {stackData.map((data, index) => (
          <LogoShowcaseSection {...data} key={index} />
        ))}
      </div>
      <div className="pt-40" ref={(ref: any) => (refs.current[1] = ref)}>
        <Footer
          subTitle="Email doesn't work?"
          action={{
            title: 'Try These!',
          }}
        />
      </div>
    </main>
  )
}
