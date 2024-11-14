'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone, Mail, User, Users, Utensils, MessageSquare } from 'lucide-react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import emailjs from '@emailjs/browser'
import { useState } from 'react'

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
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  attending: z.string({
    required_error: "Please select whether you will be attending",
  }),
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
  const { toast } = useToast()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      attending: "",
      guests: "",
      foodRestrictions: "",
      comments: "",
    },
  })

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true)
    try {
      const templateParams = {
        to_name: "Azwi & Sbo",
        from_name: `${values.firstName} ${values.lastName}`,
        message: `
          Email: ${values.email}
          Phone: ${values.phone}
          Attending: ${values.attending}
          Guests: ${values.guests || 'None'}
          Food Restrictions: ${values.foodRestrictions || 'None'}
          Comments: ${values.comments || 'None'}
        `,
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      toast({
        title: "RSVP Submitted",
        description: "Thank you for your response. We look forward to celebrating with you!",
      })
      form.reset()
    } catch (error) {
      console.error('FAILED...', error)
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your RSVP. Please try again or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
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
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-light text-center mb-8"
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
            <p className="text-[#8B4513] text-lg mb-8">
              
            </p>
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
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#8B4513] flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          First Name
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="First name" {...field} className="bg-[#FDF8F5] border-[#D4B996] focus:border-[#8B4513] focus:ring-[#8B4513]" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#8B4513] flex items-center">
                          <User className="w-4 h-4 mr-2" />
                          Last Name
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Last name" {...field} className="bg-[#FDF8F5] border-[#D4B996] focus:border-[#8B4513] focus:ring-[#8B4513]" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-[#8B4513] flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} className="bg-[#FDF8F5] border-[#D4B996] focus:border-[#8B4513] focus:ring-[#8B4513]" />
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
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Phone number" {...field} className="bg-[#FDF8F5] border-[#D4B996] focus:border-[#8B4513] focus:ring-[#8B4513]" />
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
                        Will you be attending?
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                        Names of Guests in your Party
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
                        Any food restrictions?
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
                        Questions or Comments
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
                  type="submit" 
                  className="w-full bg-[#8B4513] hover:bg-[#6B4423] text-white transition-colors duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send RSVP"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}