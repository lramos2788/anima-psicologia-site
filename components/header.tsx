'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/equipe', label: 'Equipe' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/quiz', label: 'Quiz' },
  { href: '/termometro', label: 'Termômetro' },
  { href: '/espaco', label: 'O Espaço' },
  { href: '/agendamento', label: 'Agendar' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-anima-blue-500/95 backdrop-blur-md shadow-lg'
          : 'bg-anima-blue-500/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-9 h-9 rounded-full overflow-hidden">
              <Image
                src="/images/anima-logo.jpeg"
                alt="Logo Espaço ANIMA"
                fill
                className="object-cover"
                sizes="36px"
              />
            </div>
            <span className="font-display text-xl font-bold text-white tracking-tight">
              ANIMA
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks?.map((link: any) => (
              <Link
                key={link?.href}
                href={link?.href ?? '/'}
                className="px-3 py-2 text-sm font-medium text-white/80 hover:text-anima-amber-400 transition-colors rounded-md hover:bg-white/5"
              >
                {link?.label ?? ''}
              </Link>
            ))}
            <a
              href="https://wa.me/5571992953117"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center gap-2 bg-anima-amber-400 hover:bg-anima-amber-300 text-anima-blue-800 px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:shadow-md"
            >
              <Phone className="w-4 h-4" />
              WhatsApp
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-anima-blue-500/98 backdrop-blur-md border-t border-white/10"
          >
            <nav className="max-w-[1200px] mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks?.map((link: any) => (
                <Link
                  key={link?.href}
                  href={link?.href ?? '/'}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-white/80 hover:text-anima-amber-400 hover:bg-white/5 rounded-lg transition-colors text-base"
                >
                  {link?.label ?? ''}
                </Link>
              ))}
              <a
                href="https://wa.me/5571992953117"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 bg-anima-amber-400 text-anima-blue-800 px-4 py-3 rounded-lg font-semibold"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
