'use client'

import { useEffect, useRef } from 'react'

import Footer from '@/components/footer'
import ContactSection from '@/components/sections/contact-section'
import { Sidebar, useSidebars } from '@/providers/use-sidebars'

export default function ContactPage() {
  const { setSidebars, setSidebarRefs } = useSidebars()
  const refs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    setSidebarRefs(refs.current)
  }, [setSidebarRefs])

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
          content="I'm eager to discuss your projects and how I can help bring them to life. Reach out however you're comfortable - email, discovery call, or another method - and I'll see you soon!"
          leftColumnTags={{
            title: "Let's talk about:",
            values: ['Your Website', 'Your Platform', 'Your Program'],
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
