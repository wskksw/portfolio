'use client'

import Footer from '@/components/footer'
import GallerySection from '@/components/sections/gallery-section'
import HeroSection from '@/components/sections/hero-section'
import ProjectSection from '@/components/sections/project-section'
import { selectedProjects } from '@/data/projects'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  const projects = selectedProjects.map((project, index) => ({
    ...project,
    header: `Project ${(index + 1).toString().padStart(2, '0')} - ${project.year}`,
    actions: project.actions.map((action) => ({
      ...action,
      onClick: () => router.push(action.link),
    })),
  }))

  return (
    <main className="py-32">
      <HeroSection
        header="Jason Ramos"
        title="Web Enthusiast & Software Developer"
        content="Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo porttitor nullam. Lectus nulla nibh."
        src="/images/sample1.avif"
      />
      {projects.map((project) => (
        <>
          <div className="my-80" />
          <ProjectSection {...project} />
        </>
      ))}
      <GallerySection />
      <div className="my-40" />
      <Footer
        subTitle="Have an idea?"
        action={{
          title: "Let's talk!",
          onClick: () => {},
        }}
      />
    </main>
  )
}
