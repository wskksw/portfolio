import FadeInWrapper from '@/components/fade-in-wrapper'
import UnderlinedText from '@/components/underlined-text'

export type Column = {
  title: string
  values: {
    title: string
    onClick?: () => void
    wrapper?: (children: React.ReactNode) => React.ReactNode
  }[]
}

interface NavigationColumnProps {
  column: Column
}

export default function NavigationColumn({ column }: NavigationColumnProps) {
  return (
    <div className="w-full">
      <FadeInWrapper>
        <p className="text-lg tracking-[0.3rem] text-muted-foreground">
          {column.title.toUpperCase()}
        </p>
      </FadeInWrapper>
      <ul className="mt-2 flex flex-col gap-2 text-[1.5rem] text-muted-foreground">
        {column.values.map((value, index) => (
          <li key={index} onClick={value.onClick}>
            <FadeInWrapper delay={index * 0.05}>
              {value.wrapper ? (
                value.wrapper(
                  <UnderlinedText
                    text={value.title}
                    className="mt-0 text-4xl font-extrabold text-primary before:-bottom-[6px] before:h-[6px]"
                  />,
                )
              ) : (
                <UnderlinedText
                  text={value.title}
                  className="mt-0 text-4xl font-extrabold text-primary before:-bottom-[6px] before:h-[6px]"
                />
              )}
            </FadeInWrapper>
          </li>
        ))}
      </ul>
    </div>
  )
}
