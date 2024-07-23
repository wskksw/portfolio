'use client'

import { useEffect, useRef } from 'react'

import Footer from '@/components/footer'
import LogoShowcaseSection from '@/components/sections/logo-showcase-section'
import { stackData } from '@/data/stack'
import { Sidebar, useSidebars } from '@/providers/use-sidebars'

export default function StackPage() {
  const { setSidebars, setSidebarRefs } = useSidebars()
  const refs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    setSidebarRefs(refs.current)
  }, [setSidebarRefs, refs])

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
