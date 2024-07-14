'use client'

import Footer from '@/components/footer'
import ProjectCard from '@/components/project-card'
import { miscProjects, selectedProjects } from '@/data/projects'
import { calculateBestSidebar } from '@/lib/utils'
import { Sidebar, useSidebars } from '@/providers/use-sidebars'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useEffect, useRef } from 'react'
import FadeInWrapper from '@/components/fade-in-wrapper'
import { useTransition } from '@/providers/use-transition'

export default function ProjectsPage() {
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

    // Selected Works
    data.push({
      title: 'Projects',
      action: 'Check them out!',
    })

    // Footer
    data.push({
      title: 'Click Us!',
      action: 'Click Us!',
    })

    setSidebars(data)
  }, [setSidebars])

  const handleSelectRandomProject = () => {
    const index = Math.floor(Math.random() * selectedProjects.length)

    transitionPage(`/projects/${index}`)
  }

  return (
    <main className="py-32">
      <div className="pb-40" ref={(ref: any) => (refs.current[0] = ref)}>
        <FadeInWrapper>
          <h4 className="text-lg tracking-[0.3em] text-muted-foreground">
            PORTFOLIO
          </h4>
        </FadeInWrapper>
        <FadeInWrapper>
          <h1 className="mt-2 text-7xl font-extrabold">Selected Works</h1>
        </FadeInWrapper>
        <div className="mt-16 grid grid-cols-1 gap-5 2xl:grid-cols-2">
          {selectedProjects.map((project, index) => (
            <FadeInWrapper key={index} className="w-full" delay={index * 0.05}>
              <div className="aspect-square w-full">
                <ProjectCard
                  src={project.images[0]}
                  year={project.year}
                  title={project.title}
                  description={project.description}
                  variant="lg"
                  onClick={() => transitionPage(`/projects/${index}`)}
                  logos={project.logos}
                />
              </div>
              <p className="mb-4 mt-2 text-[1.5rem] font-bold">
                {project.field}
              </p>
            </FadeInWrapper>
          ))}
        </div>
      </div>
      <div className="pb-40" ref={(ref: any) => (refs.current[1] = ref)}>
        <FadeInWrapper>
          <h4 className="text-lg tracking-[0.3em] text-muted-foreground">
            PORTFOLIO
          </h4>
        </FadeInWrapper>
        <FadeInWrapper>
          <h1 className="mt-2 text-7xl font-extrabold">Extras</h1>
        </FadeInWrapper>
        <div className="mt-16 grid grid-cols-1 gap-5 2xl:grid-cols-2">
          {miscProjects.map((project, index) => (
            <FadeInWrapper key={index} className="w-full" delay={index * 0.05}>
              <div className="aspect-square w-full">
                <ProjectCard
                  src={project.images[0]}
                  year={project.year}
                  title={project.title}
                  description={project.description}
                  variant="lg"
                  onClick={() => transitionPage(`/projects/${index}`)}
                  logos={project.logos}
                />
              </div>
              <p className="mb-4 mt-2 text-[1.5rem] font-bold">
                {project.field}
              </p>
            </FadeInWrapper>
          ))}
        </div>
      </div>
      <div className="pt-40" ref={(ref: any) => (refs.current[2] = ref)}>
        <Footer
          subTitle="Can't decide?"
          action={{
            title: 'View Random!',
            onClick: handleSelectRandomProject,
          }}
        />
      </div>
    </main>
  )
}
