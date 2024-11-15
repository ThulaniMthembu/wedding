'use client'

import { Skeleton } from "@/components/ui/skeleton"
import { Phone, Mail, User, Users, Utensils, MessageSquare } from 'lucide-react'

export function RSVPSkeleton() {
  return (
    <div className="min-h-screen bg-[#d5bdaf] text-[#8B4513]">
      {/* Hero Section Skeleton */}
      <section className="relative h-screen w-full">
        <Skeleton className="absolute inset-0" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <Skeleton className="h-16 w-1/4 mb-4" />
          <Skeleton className="h-8 w-1/2" />
        </div>
      </section>

      {/* RSVP Form Section Skeleton */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Important RSVP Deadline Skeleton */}
          <Skeleton className="h-32 w-full mb-8" />

          {/* RSVP Contact Info Skeleton */}
          <Skeleton className="h-48 w-full mb-12" />

          {/* RSVP Form Skeleton */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-8">
              {/* Name Field Skeleton */}
              <div>
                <div className="flex items-center mb-2">
                  <User className="w-4 h-4 mr-2 text-[#8B4513]" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <Skeleton className="h-10 w-full" />
              </div>

              {/* Email Field Skeleton */}
              <div>
                <div className="flex items-center mb-2">
                  <Mail className="w-4 h-4 mr-2 text-[#8B4513]" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <Skeleton className="h-10 w-full" />
              </div>

              {/* Phone Field Skeleton */}
              <div>
                <div className="flex items-center mb-2">
                  <Phone className="w-4 h-4 mr-2 text-[#8B4513]" />
                  <Skeleton className="h-4 w-32" />
                </div>
                <Skeleton className="h-10 w-full" />
              </div>

              {/* Attending Field Skeleton */}
              <div>
                <div className="flex items-center mb-2">
                  <Users className="w-4 h-4 mr-2 text-[#8B4513]" />
                  <Skeleton className="h-4 w-48" />
                </div>
                <Skeleton className="h-10 w-full" />
              </div>

              {/* Guests Field Skeleton */}
              <div>
                <div className="flex items-center mb-2">
                  <Users className="w-4 h-4 mr-2 text-[#8B4513]" />
                  <Skeleton className="h-4 w-64" />
                </div>
                <Skeleton className="h-24 w-full" />
              </div>

              {/* Food Restrictions Field Skeleton */}
              <div>
                <div className="flex items-center mb-2">
                  <Utensils className="w-4 h-4 mr-2 text-[#8B4513]" />
                  <Skeleton className="h-4 w-48" />
                </div>
                <Skeleton className="h-24 w-full" />
              </div>

              {/* Comments Field Skeleton */}
              <div>
                <div className="flex items-center mb-2">
                  <MessageSquare className="w-4 h-4 mr-2 text-[#8B4513]" />
                  <Skeleton className="h-4 w-56" />
                </div>
                <Skeleton className="h-24 w-full" />
              </div>

              {/* Submit Button Skeleton */}
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}