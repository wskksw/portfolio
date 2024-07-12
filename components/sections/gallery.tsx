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

interface GallerySectionProps {}

export default function GallerySection({}: GallerySectionProps) {
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

  const projects = [
    {
      src: '/images/sample4.avif',
      year: '2020',
      title: 'Omica',
      description:
        'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non.',
      onClick: () => {},
      field: 'Software Development',
    },
    {
      src: '/images/sample4.avif',
      year: '2020',
      title: 'Omica',
      description:
        'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non.',
      onClick: () => {},
      field: 'Software Engineering',
    },
    {
      src: '/images/sample4.avif',
      year: '2020',
      title: 'Omica',
      description:
        'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non.',
      onClick: () => {},
      field: 'Software Development',
    },
    {
      src: '/images/sample4.avif',
      year: '2020',
      title: 'Omica',
      description:
        'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non.',
      onClick: () => {},
      field: 'Software Development',
    },
    {
      src: '/images/sample4.avif',
      year: '2020',
      title: 'Omica',
      description:
        'Lorem ipsum dolor sit amet consectetur. Erat facilisi varius est cursus. Neque sagittis mi non.',
      onClick: () => {},
      field: 'Software Engineering',
    },
  ]

  const x = useMotionValue(0)
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    x.set(latest * (sectionWidth - carouselWidth))
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

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center justify-start pb-10">
        <div className="flex flex-col">
          <p className="tracking-[0.3em] text-muted-foreground">LOOKING FOR?</p>
          <div
            className="relative h-40"
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
          <motion.div className="flex gap-5" style={{ x }} ref={carouselRef}>
            {projects.map((data, index) => (
              <ProjectCard
                key={index}
                {...data}
                onHover={() => handleChangeTitle(index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
