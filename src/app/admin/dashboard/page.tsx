'use client'

import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db, auth } from '@/lib/firebase'
import { useRouter } from 'next/navigation'
import { onAuthStateChanged } from 'firebase/auth'

type RSVP = {
  id: string;
  name: string;
  email: string;
  phone: string;
  attending: 'yes' | 'no' | null;
  guests: string;
  foodRestrictions: string;
  comments: string;
  timestamp: Date;
}

export default function AdminDashboard() {
  const [rsvps, setRsvps] = useState<RSVP[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user || user.email !== 'admin@example.com') {
        router.push('/admin/login')
      } else {
        fetchRSVPs()
      }
    })

    return () => unsubscribe()
  }, [router])

  const fetchRSVPs = async () => {
    try {
      const rsvpCollection = collection(db, 'rsvps')
      const rsvpSnapshot = await getDocs(rsvpCollection)
      const rsvpList = rsvpSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as RSVP[]
      setRsvps(rsvpList)
    } catch (error) {
      console.error('Error fetching RSVPs:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">RSVP Dashboard</h1>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Phone</th>
            <th className="py-2 px-4 border-b">Attending</th>
            <th className="py-2 px-4 border-b">Guests</th>
            <th className="py-2 px-4 border-b">Food Restrictions</th>
            <th className="py-2 px-4 border-b">Comments</th>
          </tr>
        </thead>
        <tbody>
          {rsvps.map((rsvp) => (
            <tr key={rsvp.id}>
              <td className="py-2 px-4 border-b">{rsvp.name}</td>
              <td className="py-2 px-4 border-b">{rsvp.email}</td>
              <td className="py-2 px-4 border-b">{rsvp.phone}</td>
              <td className="py-2 px-4 border-b">{rsvp.attending}</td>
              <td className="py-2 px-4 border-b">{rsvp.guests}</td>
              <td className="py-2 px-4 border-b">{rsvp.foodRestrictions}</td>
              <td className="py-2 px-4 border-b">{rsvp.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}