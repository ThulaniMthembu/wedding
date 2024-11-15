'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = ['/couple-image.jpg', '/couple-image2.jpg', '/couple-image3.jpg'];

const ourStory = "We met in a dusty township of Witbank called Ezinambeni. I had my own photography store and Azwi was working in a bank. The year was towards the off-peak of covid but a mask and saniter were still mandatory. Fast forward, I started to notice this guy with a blue mask always greeting me with enthusiasm, I had a chiskop and was just out there living my best life. Until we eventually spoke and he invited me to his colleague's farewell party, that was before he asked me how many kids I have lol... I guess kids were a deal breaker. Well, he proposed in 3 months of us dating and we both couldn't wait to move out of ezinambeni witbank.";

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const weddingDate = new Date('2025-03-01T10:00:00');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='min-h-screen bg-[#FDF8F5] text-[#8B4513]'>
      {/* Hero Section */}
      <section className='relative h-screen flex items-center justify-center'>
        <Image
          src='/background.jpg'
          alt='Wedding background'
          fill
          className='object-cover'
          quality={100}
          priority
        />
        <div className='absolute inset-0 bg-white/20 backdrop-blur-sm' />
        <motion.div
          className='relative z-10 text-center text-white px-4 sm:px-6 lg:px-8'
          style={{ opacity }}
        >
          <motion.h1
            className='text-[#2c2d31] text-5xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-light mb-4'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Azwimpheleli <br /> &infin; Sebongile
          </motion.h1>
          <motion.p
            className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-8'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Forever Begins Here
          </motion.p>
          <motion.p
            className='text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-8'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            March 1, 2025 • 10:00
          </motion.p>
          <motion.div
            className='flex justify-center space-x-2 sm:space-x-4 mb-8'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {Object.entries(timeLeft).map(([key, value]) => (
              <div key={key} className='text-center'>
                <span className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>
                  {value}
                </span>
                <p className='text-xs sm:text-sm md:text-base'>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </p>
              </div>
            ))}
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              href='/rsvp'
              className='inline-block px-8 sm:px-8 md:px-12 py-3 sm:py-3 text-lg sm:text-lg md:text-xl font-light bg-[#D4B996] text-[#8B4513] hover:bg-[#C1A982] hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg relative overflow-hidden group'
            >
              <span className="relative z-10">RSVP</span>
              <span className="absolute inset-0 bg-[#8B4513] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Welcome Section with Images */}
      <motion.section
        className='py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-center mb-6 sm:mb-8 lg:mb-12 text-[#8B4513]'>
            Welcome to Our Celebration
          </h2>
          <p className='text-base sm:text-lg md:text-xl text-center mb-8 sm:mb-12 lg:mb-16 text-[#6B4423]'>
            Join us as we begin our journey together. Elegant attire
            requested. <br className="hidden sm:inline" /> Black, White, Emerald Green and a touch of bling. 
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'>
            {images.map((src, index) => (
              <motion.div
                key={index}
                className='relative w-full'
                style={{ paddingBottom: '150%' }} // 2:3 aspect ratio
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={src}
                  alt={`Couple photo ${index + 1}`}
                  fill
                  className='object-cover rounded-lg shadow-lg'
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Story and Logo Section */}
      <motion.section
        className='py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
            <div className='order-2 lg:order-1'>
              <div className='relative w-full' style={{ paddingBottom: '100%' }}>
                <Image
                  src='/official-logo.png'
                  alt='Official Wedding Logo'
                  fill
                  className='object-contain'
                />
              </div>
            </div>
            <div className='order-1 lg:order-2'>
              <h2 className='text-2xl sm:text-3xl md:text-4xl text-start lg:text-left mb-6 sm:mb-8 text-[#8B4513]'>
                From Admiration to Love
              </h2>
              <motion.p
                className='text-base sm:text-lg md:text-xl text-[#6B4423] leading-relaxed text-start lg:text-left'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {ourStory}
              </motion.p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Wedding Schedule Section */}
      <motion.section
        className='py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FDF8F5]'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className='max-w-4xl mx-auto'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl text-center mb-6 sm:mb-8 lg:mb-12 font-light'>
            Wedding Schedule
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
            {[
              {
                title: 'Gifting Ceremony',
                date: 'February 28, 2025',
                time: '14:00',
                location: '479 Nkanyezi Str\nExt. 1 Tsakane\n1550',
              },
              {
                title: 'Wedding Day',
                date: 'March 1, 2025',
                time: '10:00',
                location: 'Riverside Country Estate\nHaasbroek Rd, Grootvaly AH\nSprings',
              },
            ].map((event, index) => (
              <motion.div
                key={event.title}
                className='overflow-hidden rounded-lg'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div className='bg-[#D2B48C] p-4'>
                  <h3 className='text-lg sm:text-xl md:text-2xl font-light text-white flex items-center'>
                    <Calendar className='mr-2 h-5 w-5' />{' '}
                    {event.title}
                  </h3>
                </div>
                <div className='bg-[#2C2D31] p-4 sm:p-6'>
                  <p className='text-lg sm:text-xl md:text-2xl text-[#E6BE8A] font-light mb-2'>
                    {event.date}
                  </p>
                  <p className='text-base sm:text-lg md:text-xl text-[#E6BE8A] mb-4 sm:mb-6'>
                    {event.time}
                  </p>
                  <div className='flex items-start'>
                    <MapPin className='mr-2 h-5 w-5 text-[#E6BE8A] mt-1' />
                    <p className='text-sm sm:text-base md:text-lg text-[#E6BE8A] whitespace-pre-line'>
                      {event.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}