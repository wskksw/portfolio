'use client'

import Footer from '@/components/footer'
import ImageGridSection from '@/components/sections/image-grid-section'
import TextSection from '@/components/sections/text-section'
import { selectedProjects } from '@/data/projects'
import { useParams, useRouter } from 'next/navigation'

export default function ProjectPage() {
  const params = useParams()
  const router = useRouter()

  const index = params.projectId
    ? Number(params.projectId) % selectedProjects.length
    : 0
  const project = selectedProjects[index]

  return (
    <main className="py-32">
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
      <div className="mb-40 mt-[400px]" />
      <Footer
        subTitle="Want to see more?"
        action={{
          title: 'Next Project!',
          onClick: () => router.push(`/projects/${index + 1}`),
        }}
      />
    </main>
  )
}
