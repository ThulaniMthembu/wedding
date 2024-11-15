'use client'

import { Skeleton } from "@/components/ui/skeleton"

export function GiftsSkeleton() {
  return (
    <div className="min-h-screen bg-[#d5bdaf] text-[#8B4513]">
      {/* Hero Section Skeleton */}
      <section className="relative h-screen w-full">
        <Skeleton className="absolute inset-0" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <Skeleton className="h-16 w-3/4 md:w-1/2 mb-8" />
          <Skeleton className="h-8 w-1/2 md:w-1/3" />
        </div>
      </section>

      {/* Gift Options Section Skeleton */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-6 w-full max-w-2xl mx-auto mb-12" />
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mr Price Home Registry Skeleton */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start mb-4">
                <Skeleton className="h-8 w-8 mr-4" />
                <Skeleton className="h-8 w-3/4" />
              </div>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-4" />
              <Skeleton className="h-4 w-1/2 mb-2" />
              <Skeleton className="h-4 w-1/2 mb-2" />
              <Skeleton className="h-4 w-1/2 mb-4" />
              <Skeleton className="h-10 w-32" />
            </div>

            {/* Mallstore Voucher Skeleton */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start mb-4">
                <Skeleton className="h-8 w-8 mr-4" />
                <Skeleton className="h-8 w-3/4" />
              </div>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
          <Skeleton className="h-6 w-full max-w-2xl mx-auto mt-12" />
        </div>
      </section>
    </div>
  )
}