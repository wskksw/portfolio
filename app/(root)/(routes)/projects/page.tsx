'use client'

import Footer from '@/components/footer'
import ProjectCard from '@/components/project-card'
import { selectedProjects } from '@/data/projects'
import { calculateBestSidebar } from '@/lib/utils'
import { Sidebar, useSidebars } from '@/providers/use-sidebars'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Circle } from 'lucide-react'

export default function ProjectsPage() {
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
  }, [])

  const handleSelectRandomProject = () => {
    const index = Math.floor(Math.random() * selectedProjects.length)

    router.push(`/projects/${index}`)
  }

  return (
    <main className="py-32">
      <div className="pb-40" ref={(ref: any) => (refs.current[0] = ref)}>
        <h4 className="text-lg tracking-[0.3em] text-muted-foreground">
          PORTFOLIO
        </h4>
        <h1 className="mt-2 text-7xl font-extrabold">Selected Works</h1>
        <div className="mt-16 grid grid-cols-1 gap-5 2xl:grid-cols-2">
          {selectedProjects.map((project, index) => (
            <div key={index} className="w-full">
              <div className="aspect-square w-full">
                <ProjectCard
                  src={project.srcs[0]}
                  year={project.year}
                  title={project.title}
                  description={project.description}
                  variant="lg"
                  onClick={() => router.push(`/projects/${index}`)}
                />
              </div>
              <p className="mb-4 mt-2 text-[1.5em] font-bold">
                {project.field}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-40" ref={(ref: any) => (refs.current[1] = ref)}>
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
