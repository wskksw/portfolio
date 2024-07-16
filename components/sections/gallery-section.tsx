'use client'

import { useEffect, useRef, useState } from 'react'
import ProjectCard from '../project-card'
import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
  useMotionValue,
} from 'framer-motion'
import VerticalCarousel from '../vertical-carousel'
import { miscProjects, selectedProjects } from '@/data/projects'
import FadeInWrapper from '../fade-in-wrapper'
import { useTransition } from '@/providers/use-transition'

interface GallerySectionProps {}

export default function GallerySection({}: GallerySectionProps) {
  const { transitionPage } = useTransition()
  const carouselRef = useRef<HTMLDivElement | null>(null)
  const targetRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const [[sectionWidth, carouselWidth], setWidths] = useState<number[]>([0])
  const [activeIndex, setActiveIndex] = useState(0)

  const handleChangeTitle = (index: number) => {
    const currentField = projects[activeIndex].field
    const nextField = projects[index].field

    if (currentField !== nextField) {
      setActiveIndex(index)
    }
  }

  const xDistance = 40
  const x = useMotionValue(0)
  const xOffset = useMotionValue('0%')
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    x.set(latest * (sectionWidth - carouselWidth))

    xOffset.set(`-${latest * (xDistance / (1 + xDistance / 100))}%`)
  })

  useEffect(() => {
    if (targetRef.current) {
      const changeSectionWidth = () => {
        setWidths([
          targetRef.current?.offsetWidth || 0,
          carouselRef.current?.offsetWidth || 0,
        ])
      }

      changeSectionWidth()

      window.addEventListener('resize', changeSectionWidth)
      return () => window?.removeEventListener('resize', changeSectionWidth)
    }
  }, [targetRef, carouselRef])

  const projects = miscProjects.map((project, index) => ({
    ...project,
    src: project.images[0].src,
    onClick: () =>
      transitionPage(`/projects/${selectedProjects.length + index}`),
  }))

  return (
    <section ref={targetRef} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center justify-start pb-10">
        <div className="flex flex-col">
          <FadeInWrapper>
            <p className="tracking-[0.3em] text-muted-foreground">
              LOOKING FOR?
            </p>
          </FadeInWrapper>
          <FadeInWrapper>
            <div
              className="relative mt-2 h-32"
              style={{
                width: 'calc(100vw - 384px)',
              }}
            >
              <VerticalCarousel
                alignment="vertical"
                elements={projects.map((project) => (
                  <h1
                    className="h-20 w-full overflow-hidden text-ellipsis text-7xl font-extrabold"
                    key={project.field}
                  >
                    {project.field}
                  </h1>
                ))}
                active={activeIndex}
              />
            </div>
          </FadeInWrapper>
          <motion.div className="flex gap-5" style={{ x }} ref={carouselRef}>
            {projects.map((data, index) => (
              <FadeInWrapper
                key={index}
                className="h-[700px] w-[450px]"
                delay={index * 0.05}
              >
                <ProjectCard
                  {...data}
                  onHover={() => handleChangeTitle(index)}
                  xAnim={{
                    offset: xOffset,
                    distance: xDistance,
                  }}
                />
              </FadeInWrapper>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
