'use client'

import Footer from '@/components/footer'
import ProjectCard from '@/components/project-card'
import { selectedProjects } from '@/data/projects'
import { useRouter } from 'next/navigation'

export default function ProjectsPage() {
  const router = useRouter()

  const handleSelectRandomProject = () => {
    const index = Math.floor(Math.random() * selectedProjects.length)

    router.push(`/projects/${index}`)
  }

  return (
    <main className="py-32">
      <h4 className="text-lg tracking-[0.3em] text-muted-foreground">
        PORTFOLIO
      </h4>
      <h1 className="mt-2 text-7xl font-extrabold">Selected Works</h1>
      <div className="my-16 grid grid-cols-[repeat(auto-fit,minmax(520px,1fr))] gap-5">
        {selectedProjects.map((project, index) => (
          <div key={index} className="min-h-[600px] w-full">
            <div className="aspect-square w-full">
              <ProjectCard
                src={project.srcs[0]}
                year={project.year}
                title={project.title}
                description={project.description}
                variant="lg"
              />
            </div>
            <p className="mb-4 mt-2 text-[1.5em] font-bold">{project.field}</p>
          </div>
        ))}
      </div>
      <div className="mb-40 mt-[400px]" />
      <Footer
        subTitle="Can't decide?"
        action={{
          title: 'View Random!',
          onClick: handleSelectRandomProject,
        }}
      />
    </main>
  )
}
