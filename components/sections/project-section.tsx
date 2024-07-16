'use client'

import { cn } from '@/lib/utils'
import ArrowButton from '../arrow-button'
import FadeInWrapper from '../fade-in-wrapper'
import ParallaxImage from '../parallax-image'
import { SelectedProject } from '@/data/projects'
import LogoIcon from '../icons/logo'
import { useTransition } from '@/providers/use-transition'
import Link from 'next/link'

function isRelativeLink(link: string) {
  var regex = new RegExp('^(?:[a-z+]+:)?//', 'i')
  return !regex.test(link)
}

interface ProjectSectionProps extends SelectedProject {
  prefix: string
}

export default function ProjectSection({
  prefix,
  year,
  title,
  description,
  images,
  actions,
  logos,
}: ProjectSectionProps) {
  const { transitionPage } = useTransition()

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
          <div className="mt-20 flex w-full flex-wrap gap-8">
            {logos.map((logo, index) => (
              <FadeInWrapper
                key={index}
                delay={index * 0.05}
                className="h-10 w-10"
              >
                <LogoIcon logo={logo} className="grayscale-0" />
              </FadeInWrapper>
            ))}
          </div>
          <div className="mt-8 border-border">
            {actions.map((action, index) => (
              <FadeInWrapper key={index} delay={index * 0.05}>
                {isRelativeLink(action.link) ? (
                  <ArrowButton
                    title={action.title}
                    className={cn(
                      'w-full border-border bg-transparent px-0 py-6 font-bold text-primary hover:bg-transparent',
                      index === 0 ? 'border-y' : 'border-b',
                    )}
                    onClick={() => transitionPage(action.link)}
                  />
                ) : (
                  <Link href={action.link} target="_blank">
                    <ArrowButton
                      title={action.title}
                      className={cn(
                        'w-full border-border bg-transparent px-0 py-6 font-bold text-primary hover:bg-transparent',
                        index === 0 ? 'border-y' : 'border-b',
                      )}
                    />
                  </Link>
                )}
              </FadeInWrapper>
            ))}
          </div>
        </div>
      </div>
      <div className="relative aspect-[8/11] w-full flex-1">
        <div className="absolute right-0 top-0 w-2/3 drop-shadow-lg">
          <ParallaxImage
            src={images[0].src}
            displacement={600}
            className={cn('aspect-square', images[0].className)}
          />
        </div>
        <div className="absolute left-0 top-1/2 z-[-10] w-2/3 translate-y-[-50%] drop-shadow-lg">
          <ParallaxImage
            src={images[1].src}
            displacement={300}
            className={cn('aspect-[9/16]', images[1].className)}
          />
        </div>
        <div className="absolute bottom-0 right-0 w-2/3 drop-shadow-lg">
          <ParallaxImage
            src={images[2].src}
            displacement={200}
            className={cn('aspect-[4/3]', images[2].className)}
          />
        </div>
      </div>
    </section>
  )
}
