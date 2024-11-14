'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [scrolled])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const NavLink = ({ href, children, delay }: { href: string; children: React.ReactNode; delay: number }) => (
    <Link 
      href={href} 
      className={`text-[20px] relative group ${
        scrolled ? 'text-[#8B4513]' : 'text-black'
      } ${isMenuOpen ? 'animate-slideIn text-3xl' : ''}`}
      onClick={() => setIsMenuOpen(false)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
      <span className={`absolute left-0 bottom-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 origin-right group-hover:scale-x-100 group-hover:origin-left ${
        scrolled ? 'bg-[#D4B996]' : 'bg-black'
      }`}></span>
    </Link>
  )

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white backdrop-filter backdrop-blur-sm bg-opacity-80 shadow-md' 
        : 'bg-transparent backdrop-filter backdrop-blur-sm bg-opacity-80'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-4 text-black">
              <Image
                src="/official-logo.png"
                alt="Official Logo"
                width={200}
                height={64}
                className={`transition-all duration-300 ${scrolled ? 'h-12 w-auto' : 'h-20 w-auto'}`}
              />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-10">
            <NavLink href="/" delay={0}>Wedding</NavLink>
            <NavLink href="/location" delay={0}>Location</NavLink>
            <NavLink href="/gifts" delay={0}>Gifts</NavLink>
            <Link
              href="/rsvp"
              className={`px-6 py-2 text-[20px] transition-colors ${
                scrolled 
                  ? 'bg-[#8B4513] text-white hover:bg-[#6B3100]' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              RSVP
            </Link>
          </nav>
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className={`p-2 rounded-full transition-all duration-300 ${
                scrolled 
                  ? 'text-[#8B4513] hover:bg-[#FDF8F5]' 
                  : 'text-black hover:bg-black hover:bg-opacity-10'
              } ${isMenuOpen ? 'rotate-90' : ''}`}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      <div 
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4">
            <Link href="/" className="flex items-center space-x-4 text-black" onClick={() => setIsMenuOpen(false)}>
              <Image
                src="/official-logo.png"
                alt="Official Logo"
                width={150}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-full text-[#8B4513] hover:bg-[#FDF8F5] transition-all duration-300 rotate-90"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex-grow flex flex-col justify-center items-center space-y-12 p-4">
            <NavLink href="/" delay={100}>Wedding</NavLink>
            <NavLink href="/location" delay={200}>Location</NavLink>
            <NavLink href="/gifts" delay={300}>Gifts</NavLink>
            <Link
              href="/rsvp"
              className="px-8 py-3 text-[20px] bg-[#8B4513] text-white hover:bg-[#6B3100] transition-colors rounded-md animate-slideIn"
              onClick={() => setIsMenuOpen(false)}
              style={{ animationDelay: '500ms' }}
            >
              RSVP
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}