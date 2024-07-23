'use client'

import { useEffect, useRef } from 'react'

import Footer from '@/components/footer'
import Headline from '@/components/headline'
import HeroSection from '@/components/sections/hero-section'
import ImageGridSection from '@/components/sections/media-grid-section'
import TextSection from '@/components/sections/text-section'
import { Sidebar, useSidebars } from '@/providers/use-sidebars'
import { useTransition } from '@/providers/use-transition'

export default function AboutPage() {
  const { transitionPage } = useTransition()
  const { setSidebars, setSidebarRefs } = useSidebars()
  const refs = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    setSidebarRefs(refs.current)
  }, [setSidebarRefs, refs])

  useEffect(() => {
    const data: Sidebar[] = []

    // About Me
    data.push({
      title: 'Who Am I?',
      action: 'Keep scrolling!',
    })

    data.push({
      title: 'How did I get here?',
      action: 'How did I get here?',
    })

    // Footer
    data.push({
      title: 'Want to know more?',
      action: 'Want to know more?',
    })

    setSidebars(data)
  }, [setSidebars])

  return (
    <main className="py-32">
      <div className="pb-40" ref={(ref: any) => (refs.current[0] = ref)}>
        <HeroSection
          header="About Me"
          title="Hey! I'm Jason Ramos"
          content="I’m a UBC computer science graduate with a passion for software development, full-stack technologies, and artificial intelligence. Eager to leverage skills in programming and problem-solving to provide real value to real people."
          src="/images/sample1.avif"
        />
      </div>
      <div
        className="flex flex-col gap-24 pt-32"
        ref={(ref: any) => (refs.current[1] = ref)}
      >
        <ImageGridSection
          header="About Me"
          title="Education"
          media={[
            {
              type: 'image',
              src: '/images/sample3.avif',
            },
          ]}
        />
        <TextSection
          header="About Me"
          title="Education"
          content={[
            {
              title: (
                <Headline
                  header="2020-2021"
                  title="De La Salle Lipa"
                  tags={['Full Scholar', 'Rank 1 for 2020-2021']}
                />
              ),
              description:
                'Embarking on my first year at university, I began to truly explore my passions and discover where I wanted to invest myself. Having already self-studied coding as a hobby, this year solidified my love for computer science.',
            },
            {
              title: (
                <Headline
                  header="2021-2024"
                  title="University of British Columbia"
                  tags={['BSc in Computer Science', '4.33 GPA']}
                />
              ),
              description:
                'The most notable part of my academic journey was the relationships I established with my professors and peers. I had the chance to learn from some of the smartest people I have ever encountered.',
            },
          ]}
          className="mb-24"
        />
      </div>
      <div className="pt-40" ref={(ref: any) => (refs.current[2] = ref)}>
        <Footer
          subTitle="Want to see my work?"
          action={{
            title: 'View Projects!',
            onClick: () => transitionPage('/projects'),
          }}
        />
      </div>
    </main>
  )
}
