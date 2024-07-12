import UnderlinedText from './underlined-text'

export type Column = {
  title: string
  values: {
    title: string
    onClick: () => void
  }[]
}

interface NavigationColumnProps {
  column: Column
}

export default function NavigationColumn({ column }: NavigationColumnProps) {
  return (
    <div className="w-full">
      <p className="text-lg tracking-[0.3em] text-muted-foreground">
        {column.title.toUpperCase()}
      </p>
      <ul className="mt-2 flex flex-col gap-2 text-[1.5rem] text-muted-foreground">
        {column.values.map((value, index) => (
          <li key={index} onClick={() => value.onClick()}>
            <UnderlinedText
              text={value.title}
              className="mt-0 text-4xl font-extrabold text-primary before:-bottom-2 before:h-[6px]"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
