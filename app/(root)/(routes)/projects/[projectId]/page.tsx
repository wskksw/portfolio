'use client'

import { useEffect, useRef } from 'react'

import Footer from '@/components/footer'
import MediaGridSection from '@/components/sections/image-grid-section'
import TextSection from '@/components/sections/text-section'
import { miscProjects, selectedProjects } from '@/data/projects'
import { Sidebar, useSidebars } from '@/providers/use-sidebars'
import { useTransition } from '@/providers/use-transition'
import { useParams } from 'next/navigation'

export default function ProjectPage() {
  const params = useParams()
  const { transitionPage } = useTransition()
  const { setSidebars, setSidebarRefs } = useSidebars()
  const refs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    setSidebarRefs(refs.current)
  }, [setSidebarRefs])

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
  }, [setSidebars])

  const getProject = () => {
    if (params.projectId === undefined) {
      return { project: selectedProjects[0], index: 0 }
    }

    const numSelectedProjects = selectedProjects.length
    const numProjects = numSelectedProjects + miscProjects.length

    const rawIndex = Number(params.projectId) % numProjects

    var project
    if (rawIndex < numSelectedProjects) {
      project = selectedProjects[rawIndex]
    } else {
      project = miscProjects[rawIndex - numSelectedProjects]
    }

    return {
      project,
      index: rawIndex,
    }
  }

  const { index, project } = getProject()

  return (
    <main className="py-32">
      <div className="pb-40" ref={(ref: any) => (refs.current[0] = ref)}>
        {project.sections?.map((section, index) => {
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
              <MediaGridSection
                key={index}
                header="Selected Work"
                title={section.title}
                media={section.media}
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
