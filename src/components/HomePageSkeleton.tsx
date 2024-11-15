'use client'

import { Skeleton } from "@/components/ui/skeleton"

export function HomePageSkeleton() {
  return (
    <div className="min-h-screen bg-[#d5bdaf] text-[#8B4513]">
      {/* Hero Section Skeleton */}
      <section className="relative h-screen flex items-center justify-center">
        <Skeleton className="absolute inset-0" />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-16 w-3/4 mx-auto mb-4" />
          <Skeleton className="h-8 w-1/2 mx-auto mb-8" />
          <Skeleton className="h-8 w-2/3 mx-auto mb-8" />
          <div className="flex justify-center space-x-4 mb-8">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="text-center">
                <Skeleton className="h-12 w-12 mb-2" />
                <Skeleton className="h-4 w-16" />
              </div>
            ))}
          </div>
          <Skeleton className="h-12 w-32 mx-auto" />
        </div>
      </section>

      {/* Welcome Section Skeleton */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <Skeleton className="h-10 w-3/4 mx-auto mb-6" />
          <Skeleton className="h-6 w-full max-w-2xl mx-auto mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[...Array(3)].map((_, index) => (
              <Skeleton key={index} className="w-full" style={{ paddingBottom: '150%' }} />
            ))}
          </div>
        </div>
      </section>

      {/* Story and Logo Section Skeleton */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <Skeleton className="w-full" style={{ paddingBottom: '100%' }} />
            <div>
              <Skeleton className="h-8 w-3/4 mb-6" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>
      </section>

      {/* Wedding Schedule Section Skeleton */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[#FDF8F5]">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-8 w-1/2 mx-auto mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="overflow-hidden rounded-lg">
                <Skeleton className="h-12 w-full mb-2" />
                <Skeleton className="h-48 w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}