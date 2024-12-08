'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { RSVPSkeleton } from '@/components/RSVPSkeleton'

export default function RsvpPage() {
  const [isLoading, setIsLoading] = useState(true)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9])

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <RSVPSkeleton />
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
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
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

      {/* Maximum Capacity Reached Section */}
      <motion.section 
        className="py-16 md:py-24 px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-12 rounded-lg shadow-lg text-center">
            <h2 className="text-4xl text-[#8B4513] mb-6 font-semibold">Thank You!</h2>
            <p className="text-xl text-[#6B4423] mb-8">
              We have reached our maximum guest capacity for the event. 
              We appreciate your interest in joining us and thank you for your understanding.
            </p>
            <div className="bg-[#8B4513] text-white p-6 rounded-lg shadow-lg">
              <p className="text-lg font-semibold mb-4">Contact Information</p>
              <div className="space-y-2">
                <p>Themba Mahlaola: <a href="tel:+27833646557" className="hover:underline">083 364 6557</a></p>
                <p>Ntokozo Mahlaola: <a href="tel:+27782762537" className="hover:underline">078 276 2537</a></p>
                <p>Mpho Ntshavheni: <a href="tel:+27761497535" className="hover:underline">076 149 7535</a></p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}