'use client'

import Footer from '@/components/footer'
import Headline from '@/components/headline'
import ContactSection from '@/components/sections/contact-section'
import HeroSection from '@/components/sections/hero-section'
import ImageGridSection from '@/components/sections/image-grid-section'
import TextSection from '@/components/sections/text-section'
import { calculateBestSidebar } from '@/lib/utils'
import { Sidebar, useSidebars } from '@/providers/use-sidebars'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'

export default function ContactPage() {
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
  }, [setSidebars])

  return (
    <main className="py-32">
      <div className="pb-40" ref={(ref: any) => (refs.current[0] = ref)}>
        <ContactSection
          header="Contact Me"
          title="Get In Touch!"
          content="Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo porttitor nullam. Lectus nulla nibh."
          leftColumnTags={{
            title: "Let's talk about:",
            values: ['Your Website', 'Your Project', 'Your Program'],
          }}
          rightColumnTags={{
            values: ['Your Users', 'Your Brand', 'Your Opportunity'],
          }}
        />
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
