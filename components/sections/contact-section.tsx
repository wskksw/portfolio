'use client'

import Link from 'next/link'

import ArrowButton from '@/components/arrow-button'
import TagColumn, { Column } from '@/components/tag-column'
import { EmailForm } from '@/components/forms/email-form'
import FadeInWrapper from '@/components/fade-in-wrapper'
import ContentPanel from '@/components/content-panel'

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
          <ContentPanel header={header} title={title} content={content} />
          <div className="mt-8 flex w-full gap-5">
            <div className="flex-1">
              <TagColumn column={leftColumnTags} />
            </div>
            <div className="flex-1">
              <TagColumn column={rightColumnTags} />
            </div>
          </div>
          <FadeInWrapper className="mt-12 w-full">
            <Link href="mailto:ramosjasonwork@gmail.com">
              <ArrowButton
                title={'Direct Email'}
                className="flex gap-5"
                arrowColor="#FFF"
              />
            </Link>
          </FadeInWrapper>
        </div>
      </div>
      <div className="!mt-12 w-full flex-1">
        <EmailForm />
      </div>
    </section>
  )
}
