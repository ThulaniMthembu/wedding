'use client'


import { Skeleton } from "@/components/ui/skeleton"
import { MapPin, Wifi, Car, Coffee, } from 'lucide-react'

export function LocationSkeleton() {
  return (
    <div className="min-h-screen bg-[#d5bdaf] text-[#8B4513]">
      {/* Hero Section Skeleton */}
      <section className="relative h-screen w-full">
        <Skeleton className="absolute inset-0" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <Skeleton className="h-16 w-3/4 md:w-1/2 mb-4" />
          <Skeleton className="h-8 w-1/2 md:w-1/3" />
        </div>
      </section>

      {/* Travel Section Skeleton */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-10 w-1/2 mx-auto mb-8" />
          <div className="space-y-8">
            {/* Wedding Venue Skeleton */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start mb-4">
                <MapPin className="mr-4 h-6 w-6 text-[#D4B996] flex-shrink-0" />
                <div className="flex-grow">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2 mb-2" />
                  <Skeleton className="h-8 w-32" />
                </div>
              </div>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </div>

            {/* Gifting Ceremony Skeleton */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start mb-4">
                <MapPin className="mr-4 h-6 w-6 text-[#D4B996] flex-shrink-0" />
                <div className="flex-grow">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/2 mb-2" />
                  <Skeleton className="h-4 w-1/2 mb-2" />
                  <Skeleton className="h-8 w-32" />
                </div>
              </div>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section Skeleton */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-[#D4B996]">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-10 w-1/2 mx-auto mb-8" />
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Skeleton className="h-6 w-full mb-6" />
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </div>
              <div>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Section Skeleton */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-[#F0E6D8]">
        <div className="max-w-6xl mx-auto">
          <Skeleton className="h-10 w-1/2 mx-auto mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-[#FDF8F5] rounded-lg overflow-hidden shadow-lg">
                <Skeleton className="w-full h-48" />
                <div className="p-4">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="flex mb-4">
                    {[Wifi, Car, Coffee].map((Icon, i) => (
                      <Icon key={i} className="w-5 h-5 mr-2 text-[#8B4513]" />
                    ))}
                  </div>
                  <Skeleton className="h-8 w-32" />
                </div>
              </div>
            ))}
          </div>
          <Skeleton className="h-6 w-full max-w-2xl mx-auto mt-8" />
        </div>
      </section>
    </div>
  )
}