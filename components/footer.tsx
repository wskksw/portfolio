import NavigationColumn from './navigation-column'
import UnderlinedText from './underlined-text'

interface FooterProps {
  subTitle: string
  action: {
    title: string
    onClick: () => void
  }
}

export default function Footer({ subTitle, action }: FooterProps) {
  return (
    <section className="w-full pb-[12vh]">
      <div className="flex w-full flex-col items-center justify-center">
        <h4 className="text-center tracking-[0.3em] text-muted-foreground">
          {subTitle.toUpperCase()}
        </h4>
        <h1 onClick={action.onClick}>
          <UnderlinedText text={action.title} />
        </h1>
      </div>
      <div className="my-32 h-[1px] bg-border" />
      <div className="flex gap-5">
        <div className="flex flex-1 flex-col justify-between gap-5">
          <NavigationColumn
            column={{
              title: 'Contact Info',
              values: [
                { title: '+1 604 341 4590', onClick: () => {} },
                { title: 'ramosjasonwork@gmail.com', onClick: () => {} },
              ],
            }}
          />
          <NavigationColumn
            column={{
              title: 'Downloads',
              values: [{ title: 'Curriculum Vitae', onClick: () => {} }],
            }}
          />
        </div>
        <div className="flex flex-1 justify-between gap-5">
          <div className="w-1/3">
            <NavigationColumn
              column={{
                title: 'Socials',
                values: [
                  { title: 'GitHub', onClick: () => {} },
                  { title: 'LinkedIn', onClick: () => {} },
                  { title: 'Behance', onClick: () => {} },
                  { title: 'Ask A Question', onClick: () => {} },
                ],
              }}
            />
          </div>
          <div className="w-1/3">
            <NavigationColumn
              column={{
                title: 'Navigation',
                values: [
                  { title: 'Home', onClick: () => {} },
                  { title: 'Porfolio', onClick: () => {} },
                  { title: 'About Me', onClick: () => {} },
                  { title: 'Tech Stack', onClick: () => {} },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
