'use client'

import Footer from '@/components/footer'
import ImageGridSection from '@/components/sections/image-grid-section'
import TextSection from '@/components/sections/text-section'
import { selectedProjects } from '@/data/projects'
import { calculateBestSidebar } from '@/lib/utils'
import { Sidebar, useSidebars } from '@/providers/use-sidebars'
import { useTransition } from '@/providers/use-transition'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'

export default function ProjectPage() {
  const params = useParams()
  const { transitionPage } = useTransition()
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

    // Project Details
    data.push({
      title: 'Project Details',
      action: 'Keep scrolling!',
    })

    // Footer
    data.push({
      title: 'Want to see more?',
      action: 'Want to see more?',
    })

    setSidebars(data)
  }, [])

  const index = params.projectId
    ? Number(params.projectId) % selectedProjects.length
    : 0
  const project = selectedProjects[index]

  return (
    <main className="py-32">
      <div className="pb-40" ref={(ref: any) => (refs.current[0] = ref)}>
        {project.sections.map((section, index) => {
          if (section.type === 'text') {
            return (
              <TextSection
                key={index}
                header="Selected Work"
                title={section.title}
                content={section.content}
                className="mb-24"
              />
            )
          } else if (section.type === 'image-grid') {
            return (
              <ImageGridSection
                key={index}
                header="Selected Work"
                title={section.title}
                srcs={section.srcs}
                className="mb-24"
              />
            )
          }
          return null
        })}
      </div>
      <div className="pt-64" ref={(ref: any) => (refs.current[1] = ref)}>
        <Footer
          subTitle="Want to see more?"
          action={{
            title: 'Next Project!',
            onClick: () => transitionPage(`/projects/${index + 1}`),
          }}
        />
      </div>
    </main>
  )
}
