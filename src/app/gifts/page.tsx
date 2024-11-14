'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Gift, ShoppingBag } from 'lucide-react'

export default function GiftsPage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9])

  return (
    <div className="min-h-screen bg-[#FDF8F5] text-[#8B4513]">
      {/* Hero Section */}
      <motion.section 
        className="relative h-screen w-full"
        style={{ opacity, scale }}
      >
        <Image
          src="/gifts.jpg"
          alt="Gift registry"
          fill
          className="object-cover brightness-75 filter blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white font-light text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Gift Registry
          </motion.h1>
          <motion.p
            className="text-2xl md:text-3xl lg:text-4xl text-white font-light text-center max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your Presence is Our Present
          </motion.p>
        </div>
      </motion.section>

      {/* Gift Options Section */}
      <motion.section 
        className="py-16 md:py-24 px-4 md:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.p 
            className="text-center text-lg mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            While your presence at our wedding is the greatest gift of all, if you wish to honor us with a gift, we have provided two options for your convenience:
          </motion.p>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mr Price Home Registry */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-start mb-4">
                <Gift className="mr-4 h-8 w-8 text-[#D4B996] flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-[#8B4513]">Mr Price Home Registry</h3>
                </div>
              </div>
              <p className="text-[#6B4423] mb-4">
                We have created a gift registry at Mr Price Home for those who would like to contribute to our new home together.
              </p>
              <ul className="list-disc list-inside text-[#6B4423] mb-4">
                <li>Registry ID: PMWEDD7119</li>
                <li>Registry Type: Wedding</li>
                <li>Names: Sbo and Azwi</li>
              </ul>
              <motion.a 
                href="https://www.mrphome.com/en_za/giftregistry/view/index/id/PMWEDD7119" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-[#D4B996] text-white py-2 px-4 rounded hover:bg-[#C1A982] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Registry
              </motion.a>
            </motion.div>

            {/* Mallstore Voucher */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-start mb-4">
                <ShoppingBag className="mr-4 h-8 w-8 text-[#D4B996] flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-[#8B4513]">Mallstore Voucher</h3>
                </div>
              </div>
              <p className="text-[#6B4423] mb-4">
                For those who prefer to give us the freedom to choose, we welcome Mallstore vouchers for his and hers gifts.
              </p>
              <p className="text-[#6B4423] mb-4">
                Mallstore vouchers offer us the flexibility to select items we need as we start our new life together.
              </p>
              <p className="text-[#6B4423]">
                You can purchase Mallstore vouchers at various retail locations or online.
              </p>
            </motion.div>
          </div>
          <motion.p 
            className="text-center text-lg mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Thank you for your love, support, and generosity. We are truly grateful for your presence in our lives and at our wedding celebration.
          </motion.p>
        </div>
      </motion.section>
    </div>
  )
}