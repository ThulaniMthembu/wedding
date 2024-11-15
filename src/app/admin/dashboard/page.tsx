'use client'

import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db, auth } from '@/lib/firebase'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Loader2, Download, Users, UserCheck, UtensilsCrossed, MessageSquare } from 'lucide-react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Input } from '@/components/ui/input'

interface RSVP {
  id: string
  name: string
  email: string
  attending: boolean
  guests?: string
  foodRestrictions?: string
  comments?: string
}

export default function AdminDashboard() {
  const [rsvps, setRsvps] = useState<RSVP[]>([])
  const [filteredRsvps, setFilteredRsvps] = useState<RSVP[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  useEffect(() => {
    async function fetchRSVPs() {
      try {
        const rsvpCollection = collection(db, 'rsvps')
        const rsvpSnapshot = await getDocs(rsvpCollection)
        const rsvpList = rsvpSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as RSVP[]
        setRsvps(rsvpList)
        setFilteredRsvps(rsvpList)
      } catch (err) {
        console.error('Error fetching RSVPs:', err)
        setError('Failed to fetch RSVPs. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchRSVPs()
  }, [])

  useEffect(() => {
    const filtered = rsvps.filter(rsvp => 
      rsvp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rsvp.email.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredRsvps(filtered)
  }, [searchTerm, rsvps])

  const handleSignOut = async () => {
    try {
      await auth.signOut()
      router.push('/admin')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  const handleExportCSV = () => {
    const headers = ['Name', 'Email', 'Attending', 'Guests', 'Food Restrictions', 'Comments']
    const csvContent = [
      headers.join(','),
      ...filteredRsvps.map(rsvp => 
        [
          rsvp.name,
          rsvp.email,
          rsvp.attending ? 'Yes' : 'No',
          rsvp.guests || '',
          rsvp.foodRestrictions || '',
          rsvp.comments || ''
        ].map(field => `"${field}"`).join(',')
      )
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob)
      link.setAttribute('href', url)
      link.setAttribute('download', 'rsvps.csv')
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDF8F5]">
        <Loader2 className="h-8 w-8 animate-spin text-[#8B4513]" />
      </div>
    )
  }

  const totalRsvps = filteredRsvps.length
  const attending = filteredRsvps.filter(rsvp => rsvp.attending).length
  const foodRestrictions = filteredRsvps.filter(rsvp => rsvp.foodRestrictions).length
  const comments = filteredRsvps.filter(rsvp => rsvp.comments).length

  return (
    <div className="min-h-screen bg-[#FDF8F5] p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto space-y-8"
      >
        <Card>
          <CardHeader className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div>
              <CardTitle className="text-3xl text-[#8B4513]">Admin Dashboard</CardTitle>
              <CardDescription>Manage your wedding RSVPs</CardDescription>
            </div>
            <div className="space-y-2 md:space-y-0 md:space-x-2 mt-4 md:mt-0">
              <Button
                onClick={handleExportCSV}
                className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white"
              >
                <Download className="mr-2 h-4 w-4" /> Export CSV
              </Button>
              <Button
                onClick={handleSignOut}
                className="w-full md:w-auto bg-red-500 hover:bg-red-600 text-white"
              >
                Sign Out
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardContent className="flex items-center justify-between p-6">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total RSVPs</p>
                    <p className="text-2xl font-bold">{totalRsvps}</p>
                  </div>
                  <Users className="h-8 w-8 text-[#8B4513]" />
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center justify-between p-6">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Attending</p>
                    <p className="text-2xl font-bold">{attending}</p>
                  </div>
                  <UserCheck className="h-8 w-8 text-green-500" />
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center justify-between p-6">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Food Restrictions</p>
                    <p className="text-2xl font-bold">{foodRestrictions}</p>
                  </div>
                  <UtensilsCrossed className="h-8 w-8 text-orange-500" />
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-center justify-between p-6">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Comments</p>
                    <p className="text-2xl font-bold">{comments}</p>
                  </div>
                  <MessageSquare className="h-8 w-8 text-blue-500" />
                </CardContent>
              </Card>
            </div>
            {error ? (
              <p className="text-red-500 text-center">{error}</p>
            ) : (
              <>
                <div className="mb-4">
                  <Input
                    type="text"
                    placeholder="Search by name or email"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm"
                  />
                </div>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Attending</TableHead>
                        <TableHead>Guests</TableHead>
                        <TableHead>Food Restrictions</TableHead>
                        <TableHead>Comments</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredRsvps.map((rsvp) => (
                        <TableRow key={rsvp.id}>
                          <TableCell className="font-medium">{rsvp.name}</TableCell>
                          <TableCell>{rsvp.email}</TableCell>
                          <TableCell>{rsvp.attending ? 'Yes' : 'No'}</TableCell>
                          <TableCell>{rsvp.guests || '-'}</TableCell>
                          <TableCell>{rsvp.foodRestrictions || '-'}</TableCell>
                          <TableCell>{rsvp.comments || '-'}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}