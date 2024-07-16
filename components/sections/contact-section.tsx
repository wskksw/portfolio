'use client'

import Image from 'next/image'
import ArrowButton from '../arrow-button'
import TagColumn, { Column } from '../tag-column'
import { Button } from '../ui/button'
import UnderlinedText from '../underlined-text'
import { EmailForm } from '../forms/email-form'
import FadeInWrapper from '../fade-in-wrapper'

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
    <section className="flex flex-col items-start gap-5 lg:flex-row">
      <div className="flex w-full flex-1 items-end">
        <div className="w-full xl:w-2/3">
          <FadeInWrapper>
            <h4 className="text-lg tracking-[0.3em] text-muted-foreground">
              {header.toUpperCase()}
            </h4>
          </FadeInWrapper>
          <FadeInWrapper>
            <h1 className="mt-2 text-7xl font-extrabold">{title}</h1>
          </FadeInWrapper>
          <FadeInWrapper>
            <p className="mt-8 text-[1.5rem] text-muted-foreground">
              {content}
            </p>
          </FadeInWrapper>
          <div className="mt-8 flex w-full gap-5">
            <div className="flex-1">
              <TagColumn column={leftColumnTags} />
            </div>
            <div className="flex-1">
              <TagColumn column={rightColumnTags} />
            </div>
          </div>
          <FadeInWrapper className="mt-12 w-full">
            <a href="mailto:ramosjasonwork@gmail.com">
              <ArrowButton
                title={'Direct Email'}
                className="flex gap-5"
                arrowColor="#FFF"
              />
            </a>
          </FadeInWrapper>
        </div>
      </div>
      <div className="!mt-12 w-full flex-1">
        <EmailForm />
      </div>
    </section>
  )
}
