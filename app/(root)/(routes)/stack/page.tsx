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
      title: "Here's what I use",
      action: "Here's what I use",
    })

    // Footer
    data.push({
      title: 'I can show you!',
      action: 'I can show you!',
    })

    setSidebars(data)
  }, [setSidebars])

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
          subTitle="How do I use these?"
          action={{
            title: 'View Projects!',
          }}
        />
      </div>
    </main>
  )
}
