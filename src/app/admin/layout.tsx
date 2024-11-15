import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Admin - Wedding Website',
  description: 'Admin panel for managing wedding RSVPs and guest list',
  robots: 'noindex,nofollow'
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F5] font-sans">
      <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-[100px]">
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}