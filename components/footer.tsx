import { useTransition } from '@/providers/use-transition'
import FadeInWrapper from './fade-in-wrapper'
import NavigationColumn from './navigation-column'
import UnderlinedText from './underlined-text'
import { useRouter } from 'next/navigation'
import { behanceLink, githubLink, linkedinLink } from '@/data/links'
import Link from 'next/link'

interface FooterProps {
  subTitle: string
  action: {
    title: string
    onClick?: () => void
  }
}

export default function Footer({ subTitle, action }: FooterProps) {
  const { transitionPage } = useTransition()
  const router = useRouter()

  return (
    <section className="w-full pb-[12vh]">
      <div className="flex w-full flex-col items-center justify-center">
        <FadeInWrapper>
          <h4 className="text-center tracking-[0.3em] text-muted-foreground">
            {subTitle.toUpperCase()}
          </h4>
        </FadeInWrapper>
        <FadeInWrapper>
          {action.onClick ? (
            <h1 onClick={action.onClick}>
              <UnderlinedText text={action.title} />
            </h1>
          ) : (
            <h1 className="mt-4 inline-block text-center text-9xl font-extrabold">
              {action.title}
            </h1>
          )}
        </FadeInWrapper>
      </div>
      <div className="my-32 h-[1px] bg-border" />
      <div className="flex gap-5">
        <div className="flex flex-1 flex-col justify-between gap-5">
          <NavigationColumn
            column={{
              title: 'Contact Info',
              values: [
                {
                  title: '+1 604 341 4590',
                  wrapper: (children) => (
                    <a href="tel:+16043414590">{children}</a>
                  ),
                },
                {
                  title: 'ramosjasonwork@gmail.com',
                  wrapper: (children) => (
                    <a href="mailto:ramosjasonwork@gmail.com">{children}</a>
                  ),
                },
              ],
            }}
          />
          <NavigationColumn
            column={{
              title: 'Downloads',
              values: [
                {
                  title: 'Curriculum Vitae',
                  wrapper: (children) => (
                    <a href="/resumes/resume-2024.pdf">{children}</a>
                  ),
                },
              ],
            }}
          />
        </div>
        <div className="flex flex-1 justify-between gap-5">
          <div className="w-1/3">
            <NavigationColumn
              column={{
                title: 'Socials',
                values: [
                  {
                    title: 'GitHub',
                    wrapper: (children) => (
                      <Link href={githubLink} target="_blank">
                        {children}
                      </Link>
                    ),
                  },
                  {
                    title: 'LinkedIn',
                    wrapper: (children) => (
                      <Link href={linkedinLink} target="_blank">
                        {children}
                      </Link>
                    ),
                  },
                  {
                    title: 'Behance',
                    wrapper: (children) => (
                      <Link href={behanceLink} target="_blank">
                        {children}
                      </Link>
                    ),
                  },
                  {
                    title: 'Ask A Question',
                    onClick: () => transitionPage('/contact'),
                  },
                ],
              }}
            />
          </div>
          <div className="w-1/3">
            <NavigationColumn
              column={{
                title: 'Navigation',
                values: [
                  { title: 'Home', onClick: () => transitionPage('/') },
                  {
                    title: 'Porfolio',
                    onClick: () => transitionPage('/projects'),
                  },
                  {
                    title: 'About Me',
                    onClick: () => transitionPage('/about'),
                  },
                  {
                    title: 'Tech Stack',
                    onClick: () => transitionPage('/stack'),
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
