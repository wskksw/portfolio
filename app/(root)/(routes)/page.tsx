'use client'

import { useEffect, useRef } from 'react'

import Footer from '@/components/footer'
import GallerySection from '@/components/sections/gallery-section'
import HeroSection from '@/components/sections/hero-section'
import ProjectSection from '@/components/sections/project-section'
import { selectedProjects } from '@/data/projects'
import { Sidebar, useSidebars } from '@/providers/use-sidebars'
import { useTransition } from '@/providers/use-transition'

export default function HomePage() {
  const { transitionPage } = useTransition()
  const { setSidebars, setSidebarRefs } = useSidebars()
  const refs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    setSidebarRefs(refs.current)
  }, [setSidebarRefs, refs])

  useEffect(() => {
    const data: Sidebar[] = []

    // Hero
    data.push({
      title: 'Portfolio',
      action: 'Keep scrolling!',
    })

    // Projects
    data.push({
      title: 'Projects',
      action: 'Check them out!',
    })

    // Gallery (EMPTY)
    data.push({
      title: '',
      action: '',
    })

    // Footer
    data.push({
      title: 'Want More?',
      action: 'Want More?',
    })

    setSidebars(data)
  }, [setSidebars])

  const projects = selectedProjects.map((project, index) => ({
    ...project,
    prefix: `Project ${(index + 1).toString().padStart(2, '0')}`,
    actions: project.actions.map((action) => ({
      ...action,
      onClick: () => transitionPage(action.link),
    })),
  }))

  return (
    <main className="py-32">
      <div className="pb-40" ref={(ref: any) => (refs.current[0] = ref)}>
        <HeroSection
          header="Jason Ramos"
          title="AI Enthusiast & Software Developer"
          content="I’m a UBC computer science graduate with a passion for software development, full-stack technologies, and artificial intelligence. Eager to leverage skills in programming and problem-solving to provide real value to real people."
          src="/images/sample1.avif"
        />
      </div>
      <div
        className="flex flex-col gap-80 py-40"
        ref={(ref: any) => (refs.current[1] = ref)}
      >
        {projects.map((project, index) => (
          <ProjectSection {...project} key={index} />
        ))}
      </div>
      <div className="pb-40" ref={(ref: any) => (refs.current[2] = ref)}>
        <GallerySection />
      </div>
      <div className="pt-40" ref={(ref: any) => (refs.current[3] = ref)}>
        <Footer
          subTitle="Have an idea?"
          action={{
            title: "Let's talk!",
            onClick: () => transitionPage('/contact'),
          }}
        />
      </div>
    </main>
  )
}
