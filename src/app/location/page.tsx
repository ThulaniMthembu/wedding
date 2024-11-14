'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, Wifi, Car, Coffee, Tv } from 'lucide-react'
import Link from 'next/link';

export default function LocationPage() {
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
          src="/travel.jpg"
          alt="Travel destination"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl text-white font-light text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Wedding Location
          </motion.h1>
        </div>
      </motion.section>

      {/* Travel Section */}
      <motion.section 
        className="py-16 md:py-24 px-4 md:px-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-light mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Getting Here
          </motion.h2>
          <div className="space-y-8">
            {/* Wedding Venue */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-start mb-4">
                <MapPin className="mr-4 h-6 w-6 text-[#D4B996] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Wedding Venue: Riverside Country Estate</h3>
                  <p className="text-[#6B4423] mb-2">
                    Haasbroek Rd, Grootvaly AH<br />
                    Springs
                  </p>
                  <motion.a 
                    href="https://www.google.com/maps/search/?api=1&query=Riverside+Country+Estate+Haasbroek+Rd+Grootvaly+AH+Springs" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block px-4 py-2 bg-[#D4B996] text-[#8B4513] rounded hover:bg-[#C1A982] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Directions
                  </motion.a>
                </div>
              </div>
              <p className="text-[#6B4423] mb-4">
                Riverside Country Estate is located in the beautiful Grootvaly area of Springs. The estate offers a picturesque setting for our special day, with lush gardens and stunning views.
              </p>
            </motion.div>

            {/* Gifting Ceremony */}
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-start mb-4">
                <MapPin className="mr-4 h-6 w-6 text-[#D4B996] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Gifting Ceremony Location</h3>
                  <p className="text-[#6B4423] mb-2">
                    479 Nkanyezi Str<br />
                    Ext. 1 Tsakane<br />
                    1550
                  </p>
                  <motion.a 
                    href="https://www.google.com/maps/search/?api=1&query=479+Nkanyezi+Str+Ext.+1+Tsakane+1550" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block px-4 py-2 bg-[#D4B996] text-[#8B4513] rounded hover:bg-[#C1A982] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Directions
                  </motion.a>
                </div>
              </div>
              <p className="text-[#6B4423] mb-4">
                The gifting ceremony will take place at this location prior to the wedding day. We look forward to sharing this special tradition with you.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Information Section */}
      <motion.section 
        className="py-16 md:py-24 px-4 md:px-8 bg-[#D4B996]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-light mb-8 text-center text-[#8B4513]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contact Information
          </motion.h2>
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-[#8B4513] text-xl mb-6 text-center font-semibold">
              If you need assistance with transportation or have any questions about the locations, please don&apos;t hesitate to contact:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-[#8B4513]">For Directions to Tsakane Gifting Ceremony:</h3>
                <p className="text-[#6B4423]">Themba Mahlaola: <motion.a href="tel:+27833646557" className="hover:underline" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>083 364 6557</motion.a></p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-[#8B4513]">For RSVP and other inquiries:</h3>
                <p className="text-[#6B4423] mb-2">Ntokozo Mahlaola: <motion.a href="tel:+27782762537" className="hover:underline" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>078 276 2537</motion.a></p>
                <p className="text-[#6B4423]">Mpho Ntshavheni: <motion.a href="tel:+27761497535" className="hover:underline" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>076 149 7535</motion.a></p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Accommodation Section */}
      <motion.section 
        className="py-16 md:py-24 px-4 md:px-8 bg-[#F0E6D8]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-light mb-8 text-center text-[#8B4513]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Places to Stay
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Stable Inn Lodge",
                image: "/stay/stable.png?height=200&width=300",
                description: "Comfortable lodging with a rustic charm.",
                amenities: [Wifi, Car, Coffee],
                checkAvailability: "https://www.google.com/travel/search?q=Stable%20Inn%20Lodge&g2lb=4814050%2C4874190%2C4893075%2C4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72614662%2C72616120%2C72619927%2C72628719%2C72630032%2C72638823%2C72647020%2C72648289%2C72658035%2C72686036%2C72729615%2C72749231%2C72760080%2C72808077%2C72811617%2C72811621%2C72816148&hl=en-ZA&gl=za&cs=1&ssta=1&ts=CAEaRwopEicyJTB4MWU5NTI1ZjVhNGEwYWYzNToweGU2ZjFkNGMyNjc0NWRmMzkSGhIUCgcI6A8QCxgZEgcI6A8QCxgaGAEyAhAA&qs=CAEyFENnc0l1YjZYdXFhWTlmam1BUkFCOAJCCQk530VnwtTx5kIJCTnfRWfC1PHm&ap=ugEGcHJpY2Vz&ictx=1&ved=0CAAQ5JsGahcKEwjAub69ztqJAxUAAAAAHQAAAAAQEg"
              },
              {
                name: "Umthombu Guest House",
                image: "/stay/umthombo.png?height=200&width=300",
                description: "Elegant accommodation with a touch of local flair.",
                amenities: [Wifi, Car, Tv],
                checkAvailability: "https://www.google.com/travel/search?q=umthombo%20guest%20house&g2lb=4814050%2C4874190%2C4893075%2C4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72614662%2C72616120%2C72619927%2C72628719%2C72630032%2C72638823%2C72647020%2C72648289%2C72658035%2C72686036%2C72729615%2C72749231%2C72760080%2C72808077%2C72811617%2C72811621%2C72816148&hl=en-ZA&gl=za&cs=1&ssta=1&ts=CAEaRwopEicyJTB4MWU5NTI2OGFiNjM4ZWRhZDoweGY0NTZjOGY2YjI1NzI3MmYSGhIUCgcI6A8QCxgZEgcI6A8QCxgaGAEyAhAA&qs=CAEyFENnc0lyODdja3V1ZXNxdjBBUkFCOAJCCQkvJ1ey9shW9EIJCS8nV7L2yFb0&ap=ugEGcHJpY2Vz&ictx=1&ved=0CAAQ5JsGahcKEwjIj_ncztqJAxUAAAAAHQAAAAAQBQ"
              },
              {
                name: "Charter Guest House",
                image: "/stay/charter.png?height=200&width=300",
                description: "Charming guest house with a homely atmosphere.",
                amenities: [Wifi, Car, Coffee],
                checkAvailability: "https://www.google.com/travel/search?q=Charter%20Guest%20House&g2lb=4814050%2C4874190%2C4893075%2C4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72614662%2C72616120%2C72619927%2C72628719%2C72630032%2C72638823%2C72647020%2C72648289%2C72658035%2C72686036%2C72729615%2C72749231%2C72760080%2C72808077%2C72811617%2C72811621%2C72816148&hl=en-ZA&gl=za&cs=1&ssta=1&ts=CAEaRwopEicyJTB4MWU5NTI2NjE5ZjhkMzIzMzoweDQ1ZjBhZDlkYWE0ZmEwNDQSGhIUCgcI6A8QCxgZEgcI6A8QCxgaGAEyAhAA&qs=CAEyE0Nnb0l4TUMtMHRxenFfaEZFQUU4AkIJCUSgT6qdrfBFQgkJRKBPqp2t8EU&ap=ugEGcHJpY2Vz&ictx=1&ved=0CAAQ5JsGahcKEwjwnoXtztqJAxUAAAAAHQAAAAAQBQ"
              },
              {
                name: "Emerald Guest House",
                image: "/stay/emerald.png?height=200&width=300",
                description: "Luxurious stay with beautiful green surroundings.",
                amenities: [Wifi, Car, Tv],
                checkAvailability: "https://www.google.com/travel/search?q=Emerald%20Guest%20House&g2lb=4814050%2C4874190%2C4893075%2C4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72614662%2C72616120%2C72619927%2C72628719%2C72630032%2C72638823%2C72647020%2C72648289%2C72658035%2C72686036%2C72729615%2C72749231%2C72760080%2C72808077%2C72811617%2C72811621%2C72816148&hl=en-ZA&gl=za&cs=1&ssta=1&ts=CAEaRwopEicyJTB4MWU5NTE0NWM2MGMyZGI5OToweDI1YTg2ODQwNWUyZTUwZmYSGhIUCgcI6A8QDBgPEgcI6A8QDBgQGAEyAhAA&qs=CAEyE0Nnb0lfNkc1OFlXSW10UWxFQUU4AkIJCf9QLl5AaKglQgkJ_1AuXkBoqCU&ap=ugEGcHJpY2Vz&ictx=1&ved=0CAAQ5JsGahcKEwiopZmEz9qJAxUAAAAAHQAAAAAQBw"
              },
              {
                name: "Debbie's Den Bed & Breakfast",
                image: "/stay/debbie.png?height=200&width=300",
                description: "Cozy B&B offering a warm and friendly stay.",
                amenities: [Wifi, Car, Coffee],
                checkAvailability: "https://www.google.com/travel/search?q=Debbie%27s%20Den%20Bed%20%26%20Breakfast&g2lb=4814050%2C4874190%2C4893075%2C4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72614662%2C72616120%2C72619927%2C72628719%2C72630032%2C72638823%2C72647020%2C72648289%2C72658035%2C72686036%2C72729615%2C72749231%2C72760080%2C72808077%2C72811617%2C72811621%2C72816148&hl=en-ZA&gl=za&cs=1&ssta=1&ts=CAEaRwopEicyJTB4MWU5NTI2ZjUwZTlmZGZlZjoweDJkNmE1MGE3Mzk3YmU4NzMSGhIUCgcI6A8QCxgOEgcI6A8QCxgPGAEyAhAA&qs=CAEyE0Nnb0k4OUR2eV9PVWxMVXRFQUU4AkIJCXPoezmnUGotQgkJc-h7OadQai0&ap=ugEGcHJpY2Vz&ictx=1&ved=0CAAQ5JsGahcKEwjQydypz9qJAxUAAAAAHQAAAAAQBw"
              },
              {
                name: "Sandalwood Guest House",
                image: "/stay/sandalwood.png?height=200&width=300",
                description: "Cozy B&B offering a warm and friendly stay.",
                amenities: [Wifi, Car, Coffee],
                checkAvailability: "https://www.google.com/travel/search?q=Sandalwood%20Guest%20House%20Johannesburg&g2lb=4814050%2C4874190%2C4893075%2C4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72406588%2C72414906%2C72421566%2C72471280%2C72472051%2C72481459%2C72485658%2C72614662%2C72616120%2C72619927%2C72628719%2C72630032%2C72638823%2C72647020%2C72648289%2C72658035%2C72686036%2C72729615%2C72749231%2C72760080%2C72808077%2C72811617%2C72811621%2C72816148&hl=en-ZA&gl=za&cs=1&ssta=1&ts=CAEaRwopEicyJTB4MWU5NTI2NzkxMDk4Y2VjYjoweDE0MDc4ODQ3MTU1Y2UyNjISGhIUCgcI6A8QCxgPEgcI6A8QCxgQGAEyAhAA&qs=CAEyE0Nnb0k0c1R6cXZHSTRvTVVFQUU4AkIJCWLiXBVHiAcUQgkJYuJcFUeIBxQ&ap=ugEGcHJpY2Vz&ictx=1&ved=0CAAQ5JsGahcKEwjItMXw1dqJAxUAAAAAHQAAAAAQEA"
              }
            ].map((accommodation, index) => (
              <motion.div
                key={accommodation.name}
                className="bg-[#FDF8F5] rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={accommodation.image}
                  alt={accommodation.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{accommodation.name}</h3>
                  <p className="text-sm text-[#6B4423] mb-4">{accommodation.description}</p>
                  <div className="flex mb-4">
                    {accommodation.amenities.map((Icon, i) => (
                      <Icon key={i} className="w-5 h-5 mr-2 text-[#8B4513]" />
                    ))}
                  </div>
                  <Link
                    href={accommodation.checkAvailability}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-[#D4B996] text-[#8B4513] rounded hover:bg-[#C1A982] transition-colors"
                  >
                    Check Availability
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.p 
            className="text-[#8B4513] mt-8 text-center text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            We recommend booking your accommodation early to ensure availability. If you need any assistance with bookings or have any questions, please let us know.
          </motion.p>
        </div>
      </motion.section>
    </div>
  )
}