'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone, Mail, User, Users, Utensils, MessageSquare } from 'lucide-react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import emailjs from '@emailjs/browser'
import { useState, useEffect } from 'react'

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  attending: z.enum(['yes', 'no']).nullable(),
  guests: z.string().optional(),
  foodRestrictions: z.string().optional(),
  comments: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>;

export default function RsvpPage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [modalState, setModalState] = useState<{ state: 'closed' | 'open', name: string }>({ state: 'closed', name: '' })

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
    if (!publicKey) {
      console.error('EmailJS public key is not set. Please check your environment variables.');
    } else {
      try {
        emailjs.init(publicKey);
        console.log('EmailJS initialized successfully');
      } catch (error) {
        console.error('Failed to initialize EmailJS:', error);
      }
    }
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      attending: null,
      guests: "",
      foodRestrictions: "",
      comments: "",
    },
  })

  async function onSubmit(values: FormValues) {
    const submittedName = values.name;
    setIsSubmitting(true)
    try {
      const templateParams = {
        from_name: values.name,
        message: {
          email: values.email,
          phone: values.phone,
          attending: values.attending,
          guests: values.guests || 'None',
          foodRestrictions: values.foodRestrictions || 'None',
          comments: values.comments || 'None',
        },
      }

      const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;

      if (!serviceId || !templateId) {
        throw new Error('EmailJS service ID or template ID is not set.');
      }

      await emailjs.send(serviceId, templateId, templateParams)
      setModalState({ state: 'open', name: submittedName })
      form.reset()
      form.setValue('attending', null)
    } catch (error) {
      console.error('FAILED...', error)
      setModalState({ state: 'open', name: submittedName })
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    if (modalState.state === 'open') {
      document.body.classList.add('open')
      document.body.classList.remove('closed')
    } else {
      document.body.classList.remove('open')
      document.body.classList.add('closed')
    }
  }, [modalState])

  useEffect(() => {
    if (modalState.state === 'closed') {
      form.reset()
      form.setValue('attending', null)
    }
  }, [modalState, form])

  return (
    <>
      <div className="min-h-screen bg-[#FDF8F5] text-[#8B4513]">
        {/* Hero Section */}
        <motion.section 
          className="relative h-screen w-full"
          style={{ opacity, scale }}
        >
          <Image
            src="/15.png"
            alt="RSVP hero image"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-light text-center mb-8 "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              RSVP
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl lg:text-4xl text-white font-light text-center max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join Us on Our Special Day
            </motion.p>
          </div>
        </motion.section>

        {/* RSVP Form Section */}
        <motion.section 
          className="py-16 md:py-24 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#8B4513] text-white p-6 rounded-lg shadow-lg mb-8">
              <p className="text-xl font-semibold mb-2">Important RSVP Deadline</p>
              <p className="text-lg">
                It is <span className="font-bold underline">imperative</span> for every guest to send their RSVP names by no later than the <span className="font-bold">15th of January</span> to be added to the official guest list.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
                <p className="text-[#8B4513] mb-4">
                  For your convenience, you can also RSVP to:
                </p>
                <div className="space-y-2 text-[#6B4423]">
                  <p>Themba Mahlaola: <a href="tel:+27833646557" className="hover:underline">083 364 6557</a></p>
                  <p>Ntokozo Mahlaola: <a href="tel:+27782762537" className="hover:underline">078 276 2537</a></p>
                  <p>Mpho Ntshavheni: <a href="tel:+27761497535" className="hover:underline">076 149 7535</a></p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg relative overflow-hidden"
            >
              <div 
                className={`modal-background ${modalState.state === 'open' ? 'visible' : ''}`} 
                onClick={() => setModalState({ state: 'closed', name: '' })}
              ></div>
              <div className={`modal ${modalState.state}`}>
                <h2>{isSubmitting ? 'Sending...' : (form.formState.isSubmitSuccessful ? 'RSVP Sent Successfully!' : 'Submission Failed')}</h2>
                <p>
                  {form.formState.isSubmitSuccessful 
                    ? <>Thank you <strong>{modalState.name}</strong> for your response. We look forward to celebrating with you!</> 
                    : 'There was an error submitting your RSVP. Please try again or contact us directly.'}
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#8B4513] flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          Name *
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Full Name" {...field} className="bg-[#FDF8F5] border-[#D4B996] focus:border-[#8B4513] focus:ring-[#8B4513]" required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#8B4513] flex items-center">
                          <Mail className="w-4 h-4 mr-2" />
                          Email *
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Email" {...field} className="bg-[#FDF8F5] border-[#D4B996] focus:border-[#8B4513] focus:ring-[#8B4513]" required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#8B4513] flex items-center">
                          <Phone className="w-4 h-4 mr-2" />
                          Phone Number *
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Phone number" {...field} className="bg-[#FDF8F5] border-[#D4B996] focus:border-[#8B4513] focus:ring-[#8B4513]" required />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="attending"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#8B4513] flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          Will you be attending? *
                        </FormLabel>
                        <Select onValueChange={field.onChange} value={field.value ?? undefined}>
                          <FormControl>
                            <SelectTrigger className="bg-[#FDF8F5] border-[#D4B996] focus:border-[#8B4513] focus:ring-[#8B4513]">
                              <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="yes">Yes, I will attend</SelectItem>
                            <SelectItem value="no">No, I cannot attend</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="guests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#8B4513] flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          Names of Guests in your Party (Optional)
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please list the names of additional guests" 
                            className="bg-[#FDF8F5] border-[#D4B996] focus:border-[#8B4513] focus:ring-[#8B4513]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="foodRestrictions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#8B4513] flex items-center">
                          <Utensils className="w-4 h-4 mr-2" />
                          Any food restrictions? (Optional)
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please list any dietary restrictions or allergies" 
                            className="bg-[#FDF8F5] border-[#D4B996] focus:border-[#8B4513] focus:ring-[#8B4513]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="comments"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#8B4513] flex items-center">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Questions or Comments (Optional)
                        </FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any questions or comments?" 
                            className="bg-[#FDF8F5] border-[#D4B996] focus:border-[#8B4513] focus:ring-[#8B4513]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" className="w-full bg-[#8B4513] hover:bg-[#6B4423] text-white transition-colors duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.div
                        className="flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </motion.div>
                    ) : "Send RSVP"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </motion.section>
      </div>
      <style jsx global>{`
        @keyframes background-in {
          0% {
            scale: 0 0.005;
          }
          33% {
            scale: 1 0.005;
          }
          66%,
          100% {
            scale: 1 1;
          }
        }

        .modal-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: grid;
          place-items: center;
          opacity: 0;
          visibility: hidden;
          transform: scale(1, 1);
          background: rgba(0, 0, 0, 0.5);
          transition: 0.5s;
          z-index: 1000;
        }

        .modal-background.visible {
          visibility: visible;
          opacity: 1;
          animation: background-in 1s both;
        }

        @keyframes modal-in {
          0%,
          66% {
            opacity: 0;
            visibility: hidden;
            translate: -50% -30%;
          }
          100% {
            opacity: 1;
            visibility: visible;
          }
        }

        .modal {
          position: fixed;
          top: 50%;
          left: 50%;
          background: #37353b;
          color: #f9f9f9;
          padding: 48px 40px;
          width: 300px;
          border-radius: 12px;
          translate: -50% -50%;
          opacity: 0;
          visibility: hidden;
          transition: 0.3s;
          z-index: 1001;
        }

        body.open .modal {
          opacity: 1;
          visibility: visible;
          animation: modal-in 1s;
        }

        body.closed .modal {
          opacity: 0;
          visibility: hidden;
          translate: -50% -50%;
        }

        .modal h2 {
          margin: 0 0 8px;
          font-weight: 400;
          font-size: 21px;
        }

        .modal p {
          margin: 0;
          color: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </>
  )
}