'use client'

import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { ToastAction } from '../ui/toast'
import UnderlinedText from '../underlined-text'
import ArrowButton from '../arrow-button'
import { Textarea } from '../ui/textarea'
import FadeInWrapper from '../fade-in-wrapper'

const formSchema = z.object({
  name: z.string().min(1),
  subject: z.string().min(1),
  email: z.string().email(),
  phoneNumber: z.string().min(1).optional(),
  message: z.string().min(1),
})

type EmailFormValues = z.infer<typeof formSchema>

export const EmailForm = () => {
  const { toast } = useToast()
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const form = useForm<EmailFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      subject: '',
      email: '',
      phoneNumber: '',
      message: '',
    },
  })

  const onSubmit = async (data: EmailFormValues) => {
    try {
      setLoading(true)

      // TODO: Send email
      // throw new Error('Not implemented')

      toast({
        title: 'Email Sent!',
        description: 'I will get back to you as soon as possible.',
      })
    } catch (error) {
      toast({
        title: 'Oh no! Something went wrong.',
        description: "I wasn't able to send your email.",
        action: (
          <a href="mailto:ramosjasonwork@gmail.com">
            <ToastAction altText="email">Direct Email</ToastAction>,
          </a>
        ),
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-[1024px] space-y-8"
      >
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8">
          <FadeInWrapper>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="John Doe"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FadeInWrapper>
          <FadeInWrapper>
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Discovery Call"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FadeInWrapper>
          <FadeInWrapper>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="JohnDoe@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FadeInWrapper>
          <FadeInWrapper>
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="123-456-7890"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </FadeInWrapper>
          <div style={{ gridColumn: '1/-1' }}>
            <FadeInWrapper>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        disabled={loading}
                        placeholder="Hey Jason! I would like to schedule a zoom call with you to discuss..."
                        className="h-[180px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </FadeInWrapper>
          </div>
        </div>
        <div className="!mt-16 flex items-center justify-between gap-5">
          <span className="py-2 pr-3" onClick={() => form.reset()}>
            <FadeInWrapper>
              <UnderlinedText
                text="Reset Form"
                className="text-base before:-bottom-[2px] before:h-[4px]"
              />
            </FadeInWrapper>
          </span>
          <FadeInWrapper delay={0.05}>
            <ArrowButton
              title={'Send Message'}
              className="flex gap-5"
              arrowColor="#FFF"
              onClick={() => form.handleSubmit(onSubmit)()}
            />
          </FadeInWrapper>
        </div>
      </form>
    </Form>
  )
}
