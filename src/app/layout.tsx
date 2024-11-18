import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { AudioProvider } from '@/contexts/AudioContext'
import { Layout } from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Azwi & Sbo | Wedding',
  description: 'Celebrate the wedding of Azwimpheleli & Sebongile',
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AudioProvider>
          <Layout>
            <Header />
            <main>{children}</main>
            <Footer />
          </Layout>
        </AudioProvider>
      </body>
    </html>
  )
}