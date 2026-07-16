'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  LEGAL_DISCLAIMER,
  SITE_NAME,
} from '@/lib/site'

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/equipe', label: 'Equipe' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/quiz', label: 'Quiz' },
  { href: '/termometro', label: 'Termômetro' },
  { href: '/espaco', label: 'O Espaço' },
  { href: '/agendamento', label: 'Agendar' },
  { href: '/parceiros', label: 'Parcerias' },
]

export default function Footer() {
  return (
    <footer className="bg-marfim border-t border-bege text-grafite/80">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif text-3xl font-bold text-grafite mb-4">
              ANIMA
            </h3>
            <p className="text-sm leading-relaxed text-grafite/70 font-light">
              Escuta profunda. Técnica rigorosa. Cuidado singular.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-grafite mb-5 text-sm uppercase tracking-wider">
              Navegação
            </h4>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-light hover:text-madeira transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-grafite mb-5 text-sm uppercase tracking-wider">
              Contato
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-sm font-light text-grafite/80">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-madeira" />
                <span>{CONTACT_ADDRESS}</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-light text-grafite/80">
                <Phone className="w-5 h-5 shrink-0 text-madeira" />
                <span>{CONTACT_PHONE}</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-light text-grafite/80">
                <Mail className="w-5 h-5 shrink-0 text-madeira" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-madeira transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-bege">
          <p className="text-xs text-grafite/50 font-light leading-relaxed whitespace-pre-line">
            {LEGAL_DISCLAIMER}
          </p>
        </div>

        <div className="mt-8 text-center text-xs text-grafite/50 font-light tracking-wide">
          © {new Date().getFullYear()} {SITE_NAME}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
