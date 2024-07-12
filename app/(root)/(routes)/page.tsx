'use client'

import Footer from '@/components/footer'
import GallerySection from '@/components/sections/gallery'
import HeroSection from '@/components/sections/hero'
import ProjectSection from '@/components/sections/project'

export default function MainPage() {
  return (
    <main className="py-32">
      <HeroSection
        header="Jason Ramos"
        title="Web Enthusiast & Software Developer"
        content="Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo porttitor nullam. Lectus nulla nibh."
        src="/images/sample1.avif"
      />
      <div className="my-80" />
      <ProjectSection
        header="Project 01 - 2019"
        title="Omica"
        content="Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo."
        srcs={[
          '/images/sample1.avif',
          '/images/sample2.avif',
          '/images/sample3.avif',
        ]}
        leftColumnTags={{
          title: 'Front-End',
          values: ['React', 'TypeScript', 'Tailwind CSS'],
        }}
        rightColumnTags={{
          title: 'Back-End',
          values: ['Node.js', 'Express', 'MongoDB'],
        }}
        actions={[
          {
            title: 'GitHub',
            onClick: () => {},
          },
          {
            title: 'Visit Demo',
            onClick: () => {},
          },
          {
            title: 'Project Details',
            onClick: () => {},
          },
        ]}
      />
      <div className="my-80" />
      <ProjectSection
        header="Project 01 - 2019"
        title="Omica"
        content="Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo."
        srcs={[
          '/images/sample1.avif',
          '/images/sample2.avif',
          '/images/sample3.avif',
        ]}
        leftColumnTags={{
          title: 'Front-End',
          values: ['React', 'TypeScript', 'Tailwind CSS'],
        }}
        rightColumnTags={{
          title: 'Back-End',
          values: ['Node.js', 'Express', 'MongoDB'],
        }}
        actions={[
          {
            title: 'GitHub',
            onClick: () => {},
          },
          {
            title: 'Visit Demo',
            onClick: () => {},
          },
          {
            title: 'Project Details',
            onClick: () => {},
          },
        ]}
      />
      <div className="my-80" />
      <ProjectSection
        header="Project 01 - 2019"
        title="Omica"
        content="Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non purus semper lacus mauris magnis. Bibendum sem quis commodo."
        srcs={[
          '/images/sample1.avif',
          '/images/sample2.avif',
          '/images/sample3.avif',
        ]}
        leftColumnTags={{
          title: 'Front-End',
          values: ['React', 'TypeScript', 'Tailwind CSS'],
        }}
        rightColumnTags={{
          title: 'Back-End',
          values: ['Node.js', 'Express', 'MongoDB'],
        }}
        actions={[
          {
            title: 'GitHub',
            onClick: () => {},
          },
          {
            title: 'Visit Demo',
            onClick: () => {},
          },
          {
            title: 'Project Details',
            onClick: () => {},
          },
        ]}
      />
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
