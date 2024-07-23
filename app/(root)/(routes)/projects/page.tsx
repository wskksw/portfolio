'use client'

import { useEffect, useRef } from 'react'

import Footer from '@/components/footer'
import ProjectCard from '@/components/project-card'
import { miscProjects, selectedProjects } from '@/data/projects'
import { Sidebar, useSidebars } from '@/providers/use-sidebars'
import FadeInWrapper from '@/components/fade-in-wrapper'
import { useTransition } from '@/providers/use-transition'

export default function ProjectsPage() {
  const { transitionPage } = useTransition()
  const { setSidebars, setSidebarRefs } = useSidebars()
  const refs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    setSidebarRefs(refs.current)
  }, [setSidebarRefs, refs])

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
    // Only select from selected projects
    const index = Math.floor(Math.random() * selectedProjects.length)

    transitionPage(`/projects/${index}`)
  }

  return (
    <main className="py-32">
      <div className="pb-40" ref={(ref: any) => (refs.current[0] = ref)}>
        <FadeInWrapper>
          <h4 className="text-lg tracking-[0.3rem] text-muted-foreground">
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
                  src={project.images[0].src}
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
          <h4 className="text-lg tracking-[0.3rem] text-muted-foreground">
            PORTFOLIO
          </h4>
        </FadeInWrapper>
        <FadeInWrapper>
          <h1 className="mt-2 text-7xl font-extrabold">More</h1>
        </FadeInWrapper>
        <div className="mt-16 grid grid-cols-1 gap-5 2xl:grid-cols-2">
          {miscProjects.map((project, index) => (
            <FadeInWrapper key={index} className="w-full" delay={index * 0.05}>
              <div className="aspect-square w-full">
                <ProjectCard
                  src={project.images[0].src}
                  year={project.year}
                  title={project.title}
                  description={project.description}
                  variant="lg"
                  onClick={() =>
                    transitionPage(
                      `/projects/${index + selectedProjects.length}`,
                    )
                  }
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
