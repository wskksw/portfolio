'use client'

import Image from 'next/image'
import ArrowButton from '../arrow-button'
import TagColumn, { Column } from '../tag-column'
import { Button } from '../ui/button'
import UnderlinedText from '../underlined-text'

interface ContactSectionProps {
  header: string
  title: string
  content: string
  leftColumnTags: Column
  rightColumnTags: Column
}

export default function ContactSection({
  header,
  title,
  content,
  leftColumnTags,
  rightColumnTags,
}: ContactSectionProps) {
  return (
    <section className="flex gap-5">
      <div className="flex w-full flex-1 items-end">
        <div className="w-2/3">
          <h4 className="text-lg tracking-[0.3em] text-muted-foreground">
            {header.toUpperCase()}
          </h4>
          <h1 className="mt-2 text-7xl font-extrabold">{title}</h1>
          <p className="mt-8 text-[1.5rem] text-muted-foreground">{content}</p>
          <div className="mt-8 flex w-full gap-5">
            <div className="flex-1">
              <TagColumn column={leftColumnTags} />
            </div>
            <div className="flex-1">
              <TagColumn column={rightColumnTags} />
            </div>
          </div>
        </div>
      </div>
      <div className="relative aspect-[4/3] w-full flex-1">
        <div className="flex items-center justify-between gap-5">
          <UnderlinedText
            text="Reset Form"
            className="text-base before:-bottom-[2px] before:h-[4px]"
          />
          <ArrowButton
            title={'Send Message'}
            className="flex gap-4"
            arrowColor="#FFF"
            onClick={() => {
              console.log('Send Message')
            }}
          />
        </div>
      </div>
    </section>
  )
}
