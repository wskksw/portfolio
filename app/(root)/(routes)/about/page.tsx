'use client'

import Footer from '@/components/footer'
import Headline from '@/components/headline'
import ProjectCard from '@/components/project-card'
import HeroSection from '@/components/sections/hero-section'
import ImageGridSection from '@/components/sections/image-grid-section'
import TextSection from '@/components/sections/text-section'
import { selectedProjects } from '@/data/projects'
import { calculateBestSidebar } from '@/lib/utils'
import { Sidebar, useSidebars } from '@/providers/use-sidebars'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'

export default function AboutPage() {
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

    // About Me
    data.push({
      title: 'Who Am I?',
      action: 'Keep scrolling!',
    })

    data.push({
      title: 'How did I get here?',
      action: 'How did I get here?',
    })

    data.push({
      title: 'What drives me?',
      action: 'What drives me?',
    })

    // Footer
    data.push({
      title: 'Want to know more?',
      action: 'Want to know more?',
    })

    setSidebars(data)
  }, [])

  return (
    <main className="py-32">
      <div className="pb-40" ref={(ref: any) => (refs.current[0] = ref)}>
        <HeroSection
          header="About Me"
          title="Hey! I'm Jason Ramos"
          content="Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo porttitor nullam. Lectus nulla nibh."
          src="/images/sample1.avif"
        />
      </div>
      <div
        className="flex flex-col gap-24 pt-32"
        ref={(ref: any) => (refs.current[1] = ref)}
      >
        <ImageGridSection
          header="About Me"
          title="Education"
          srcs={[
            '/images/sample1.avif',
            '/images/sample2.avif',
            '/images/sample3.avif',
          ]}
        />
        <TextSection
          header="About Me"
          title="Education"
          content={[
            {
              title: (
                <Headline
                  header="2021-2024"
                  title="University of British Columbia"
                  tags={['4.33 GPA', 'BSc in Computer Science']}
                />
              ),
              description:
                'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo porttitor nullam. Lectus nulla nibh.',
            },
            {
              title: (
                <Headline
                  header="2021-2024"
                  title="University of British Columbia"
                  tags={['4.33 GPA', 'BSc in Computer Science']}
                />
              ),
              description:
                'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo porttitor nullam. Lectus nulla nibh.',
            },
            {
              title: (
                <Headline
                  header="2021-2024"
                  title="University of British Columbia"
                  tags={['4.33 GPA', 'BSc in Computer Science']}
                />
              ),
              description:
                'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo porttitor nullam. Lectus nulla nibh.',
            },
          ]}
          className="mb-24"
        />
      </div>
      <div
        className="flex flex-col gap-24 pb-40"
        ref={(ref: any) => (refs.current[2] = ref)}
      >
        <ImageGridSection
          header="About Me"
          title="Motivations"
          srcs={[
            '/images/sample1.avif',
            '/images/sample2.avif',
            '/images/sample3.avif',
          ]}
        />
        <TextSection
          header="About Me"
          title="Motivations"
          content={[
            {
              title: (
                <Headline
                  header="2021-2024"
                  title="University of British Columbia"
                  tags={['4.33 GPA', 'BSc in Computer Science']}
                />
              ),
              description:
                'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo porttitor nullam. Lectus nulla nibh.',
            },
            {
              title: (
                <Headline
                  header="2021-2024"
                  title="University of British Columbia"
                  tags={['4.33 GPA', 'BSc in Computer Science']}
                />
              ),
              description:
                'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo porttitor nullam. Lectus nulla nibh.',
            },
            {
              title: (
                <Headline
                  header="2021-2024"
                  title="University of British Columbia"
                  tags={['4.33 GPA', 'BSc in Computer Science']}
                />
              ),
              description:
                'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo porttitor nullam. Lectus nulla nibh.',
            },
          ]}
          className="mb-24"
        />
      </div>
      <div className="pt-40" ref={(ref: any) => (refs.current[3] = ref)}>
        <Footer
          subTitle="Want to discuss?"
          action={{
            title: 'Contact Me!',
            onClick: () => {},
          }}
        />
      </div>
    </main>
  )
}
