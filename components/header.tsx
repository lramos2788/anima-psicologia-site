'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { WHATSAPP_URL } from '@/lib/site'

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
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
          ? 'bg-marfim/95 backdrop-blur-md shadow-sm border-b border-bege'
          : 'bg-marfim/90 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            {/* Contêiner da imagem ampliado para 100px-120px para impacto total */}
            <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] flex-shrink-0 -ml-2">
              <Image
                src="/icone.png"
                alt="Logo Espaço ANIMA"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 100px, 120px"
                priority
              />
            </div>
            <div className="flex flex-col -ml-4">
              <span className="font-serif text-3xl font-bold text-grafite tracking-tight leading-none">
                ANIMA
              </span>
              <span className="text-[10px] uppercase tracking-widest text-grafite/60 font-medium mt-1 hidden sm:block">
                Itapuã, Salvador
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-grafite/80 hover:text-madeira transition-colors rounded-md hover:bg-bege/30"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 flex items-center justify-center gap-2 bg-madeira hover:bg-madeira/90 text-marfim px-5 py-2.5 rounded-sm text-sm font-semibold transition-all shadow-sm hover:shadow-md"
            >
              <Phone className="w-4 h-4" />
              Entrar em contato
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-grafite p-2 hover:bg-bege/50 rounded-sm transition-colors"
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
            className="lg:hidden bg-marfim border-t border-bege shadow-xl"
          >
            <nav className="max-w-[1200px] mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-grafite/90 hover:text-madeira hover:bg-bege/30 rounded-sm transition-colors text-base font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 bg-madeira text-marfim px-4 py-3.5 rounded-sm font-semibold shadow-sm"
              >
                <Phone className="w-5 h-5" />
                Entrar em contato
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}