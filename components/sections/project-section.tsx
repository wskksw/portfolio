'use client'

import ArrowButton from '../arrow-button'
import ParallaxImage from '../parallax-image'
import TagColumn from '../tag-column'

interface ProjectSectionProps {
  header: string
  title: string
  description: string
  srcs: string[]
  leftColumnTags: {
    title: string
    values: string[]
  }
  rightColumnTags: {
    title: string
    values: string[]
  }
  actions: {
    title: string
    onClick: () => void
  }[]
}

export default function ProjectSection({
  header,
  title,
  description,
  srcs,
  leftColumnTags,
  rightColumnTags,
  actions,
}: ProjectSectionProps) {
  return (
    <section className="flex gap-5">
      <div className="flex-1">
        <div className="w-2/3">
          <div>
            <h4 className="text-lg tracking-[0.3em] text-muted-foreground">
              {header.toUpperCase()}
            </h4>
            <h1 className="mt-2 text-7xl font-extrabold">{title}</h1>
            <p className="mt-6 text-justify text-[1.5rem] text-muted-foreground">
              {description}
            </p>
          </div>
          <div className="mt-8 flex w-full gap-5">
            <div className="flex-1">
              <TagColumn column={leftColumnTags} />
            </div>
            <div className="flex-1">
              <TagColumn column={rightColumnTags} />
            </div>
          </div>
          <div className="mt-8 border-t border-border">
            {actions.map((action, index) => (
              <ArrowButton
                key={index}
                title={action.title}
                className="w-full border-b border-border bg-transparent px-0 py-6 font-bold text-primary hover:bg-transparent"
                // onClick={action.onClick}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="relative aspect-[8/11] w-full flex-1">
        <div className="absolute right-0 top-0 w-2/3 drop-shadow-lg">
          <ParallaxImage
            src={srcs[0]}
            displacement={500}
            className="aspect-square"
          />
        </div>
        <div className="absolute left-0 top-1/2 z-[-10] w-2/3 translate-y-[-50%] drop-shadow-lg">
          <ParallaxImage
            src={srcs[1]}
            displacement={200}
            className="aspect-[3/5]"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-2/3 drop-shadow-lg">
          <ParallaxImage
            src={srcs[2]}
            displacement={700}
            className="aspect-[4/3]"
          />
        </div>
      </div>
    </section>
  )
}
