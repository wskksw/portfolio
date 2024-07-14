'use client'

import { cn } from '@/lib/utils'
import ArrowButton from '../arrow-button'
import FadeInWrapper from '../fade-in-wrapper'
import ParallaxImage from '../parallax-image'
import TagColumn from '../tag-column'
import { SelectedProject } from '@/data/projects'

interface ProjectSectionProps extends SelectedProject {
  prefix: string
}

export default function ProjectSection({
  prefix,
  year,
  title,
  description,
  images,
  leftColumnTags,
  rightColumnTags,
  actions,
}: ProjectSectionProps) {
  return (
    <section className="flex gap-5">
      <div className="flex flex-1 items-center">
        <div className="h-fit w-2/3">
          <div>
            <FadeInWrapper>
              <h4 className="text-lg tracking-[0.3em] text-muted-foreground">
                {`${prefix} - ${year}`.toUpperCase()}
              </h4>
            </FadeInWrapper>
            <FadeInWrapper>
              <h1 className="mt-2 text-7xl font-extrabold">{title}</h1>
            </FadeInWrapper>
            <FadeInWrapper>
              <p className="mt-6 text-justify text-[1.5rem] text-muted-foreground">
                {description}
              </p>
            </FadeInWrapper>
          </div>
          <div className="mt-8 flex w-full gap-5">
            {leftColumnTags && (
              <div className="flex-1">
                <TagColumn column={leftColumnTags} />
              </div>
            )}
            {rightColumnTags && (
              <div className="flex-1">
                <TagColumn column={rightColumnTags} />
              </div>
            )}
          </div>
          <div className="mt-8 border-border">
            {actions.map((action, index) => (
              <FadeInWrapper key={index} delay={index * 0.05}>
                <ArrowButton
                  title={action.title}
                  className={cn(
                    'w-full border-border bg-transparent px-0 py-6 font-bold text-primary hover:bg-transparent',
                    index === 0 ? 'border-y' : 'border-b',
                  )}
                  // onClick={action.onClick}
                />
              </FadeInWrapper>
            ))}
          </div>
        </div>
      </div>
      <div className="relative aspect-[8/11] w-full flex-1">
        <div className="absolute right-0 top-0 w-2/3 drop-shadow-lg">
          <ParallaxImage
            src={images[0]}
            displacement={600}
            className="aspect-square"
          />
        </div>
        <div className="absolute left-0 top-1/2 z-[-10] w-2/3 translate-y-[-50%] drop-shadow-lg">
          <ParallaxImage
            src={images[1]}
            displacement={300}
            className="aspect-[3/5]"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-2/3 drop-shadow-lg">
          <ParallaxImage
            src={images[2]}
            displacement={200}
            className="aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  )
}
