'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll events
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

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMenuOpen])

  // Handle body scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Desktop NavLink component
  const DesktopNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link 
      href={href} 
      className={`text-base sm:text-lg lg:text-xl relative group transition-colors duration-300 ${
        scrolled ? 'text-[#8B4513]' : 'text-black'
      }`}
    >
      {children}
      <span className={`absolute left-0 bottom-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 origin-right group-hover:scale-x-100 group-hover:origin-left ${
        scrolled ? 'bg-[#D4B996]' : 'bg-black'
      }`}></span>
    </Link>
  )

  // Mobile NavLink component
  const MobileNavLink = ({ href, children, delay }: { href: string; children: React.ReactNode; delay: number }) => (
    <Link 
      href={href} 
      className="text-2xl sm:text-3xl relative group transition-colors duration-300"
      onClick={() => setIsMenuOpen(false)}
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: 0,
        animation: isMenuOpen ? `fadeSlideIn 0.6s ease-out ${delay}ms forwards` : 'none'
      }}
    >
      {children}
      <span className="absolute left-0 bottom-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 origin-right group-hover:scale-x-100 group-hover:origin-left bg-[#D4B996]"></span>
    </Link>
  )

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white backdrop-filter backdrop-blur-sm bg-opacity-80 shadow-md' 
        : 'bg-transparent backdrop-filter backdrop-blur-sm bg-opacity-80'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center pt-5 pb-15">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-4 text-black">
              <Image
                src="/official-logo.png"
                alt="Official Logo"
                width={200}
                height={64}
                priority
                className={`transition-all duration-300 ${
                  scrolled 
                    ? 'h-12 w-auto' 
                    : 'h-16 sm:h-20 w-auto'
                }`}
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
            <DesktopNavLink href="/">Wedding</DesktopNavLink>
            <DesktopNavLink href="/location">Location</DesktopNavLink>
            <DesktopNavLink href="/gifts">Gifts</DesktopNavLink>
            <Link
              href="/rsvp"
              className={`px-4 sm:px-6 py-2 text-base sm:text-lg lg:text-xl transition-all duration-300 rounded-md hover:scale-105 ${
                scrolled 
                  ? 'bg-[#8B4513] text-white hover:bg-[#6B3100]' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              RSVP
            </Link>
          </nav>
          
          {/* Hamburger Button */}
          <button 
            onClick={toggleMenu}
            className={`md:hidden w-12 sm:w-14 h-12 sm:h-14 flex flex-col justify-center items-center focus:outline-none 
                       transition-all duration-300 z-50 ${isMenuOpen ? 'text-[#8B4513]' : ''}`}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <span 
              className={`block h-0.5 w-8 sm:w-10 rounded-sm bg-current transition-all duration-300 ease-out ${
                isMenuOpen ? '-rotate-45 translate-y-1' : '-translate-y-1'
              }`}
            />
            <span 
              className={`block h-0.5 w-8 sm:w-10 rounded-sm bg-current transition-all duration-300 ease-out ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span 
              className={`block h-0.5 w-8 sm:w-10 rounded-sm bg-current transition-all duration-300 ease-out ${
                isMenuOpen ? 'rotate-45 -translate-y-1' : 'translate-y-1'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white w-screen h-screen transition-all duration-500 flex flex-col ${
          isMenuOpen 
            ? 'opacity-100 visible translate-x-0' 
            : 'opacity-0 invisible translate-x-full'
        }`}
        style={{ 
          minHeight: '100vh',
          minWidth: '100vw',
          zIndex: 40 
        }}
      >
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <Link 
            href="/" 
            className="flex items-center space-x-4 text-black mb-8 sm:mb-12" 
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/official-logo.png"
              alt="Official Logo"
              width={200}
              height={64}
              className="h-12 w-auto"
              priority
            />
          </Link>
        </div>
        
        {/* Mobile Navigation */}
        <nav className="flex-grow flex flex-col justify-center items-center space-y-8 sm:space-y-12 p-4">
          <MobileNavLink href="/" delay={100}>Wedding</MobileNavLink>
          <MobileNavLink href="/location" delay={200}>Location</MobileNavLink>
          <MobileNavLink href="/gifts" delay={300}>Gifts</MobileNavLink>
          <Link
            href="/rsvp"
            className="px-6 sm:px-8 py-2 sm:py-3 text-xl sm:text-2xl bg-[#8B4513] text-white hover:bg-[#6B3100] 
                       transition-all duration-300 rounded-md hover:scale-105 animate-fadeSlideIn"
            onClick={() => setIsMenuOpen(false)}
            style={{ 
              opacity: 0,
              animation: isMenuOpen ? 'fadeSlideIn 0.6s ease-out 400ms forwards' : 'none'
            }}
          >
            RSVP
          </Link>
        </nav>
      </div>

      <style jsx global>{`
        @keyframes fadeSlideIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  )
}