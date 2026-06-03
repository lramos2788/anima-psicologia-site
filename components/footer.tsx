'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-madeira border-t border-marfim/10 text-marfim/80">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl font-bold text-marfim mb-4">
              ANIMA
            </h3>
            <p className="text-sm leading-relaxed text-marfim/70 font-light">
              Escuta profunda. Técnica rigorosa. Cuidado singular.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-marfim mb-5 text-sm uppercase tracking-wider">Navegação</h4>
            <div className="flex flex-col gap-3">
              <Link href="/equipe" className="text-sm font-light hover:text-dourado transition-colors">Equipe</Link>
              <Link href="/agendamento" className="text-sm font-light hover:text-dourado transition-colors">Agendamento</Link>
              <Link href="/parceiros" className="text-sm font-light hover:text-dourado transition-colors">Parcerias</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-marfim mb-5 text-sm uppercase tracking-wider">Contato</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-sm font-light text-marfim/80">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-dourado" />
                <span>Rua da Cacimba, s/n, 2º andar - Sala 202, Itapuã, Salvador - BA</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-light text-marfim/80">
                <Phone className="w-5 h-5 shrink-0 text-dourado" />
                <span>(71) 99295-3117</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-light text-marfim/80">
                <Mail className="w-5 h-5 shrink-0 text-dourado" />
                <span>lucasrdo2@outlook.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-marfim/10 text-center text-xs text-marfim/50 font-light tracking-wide">
          © {new Date().getFullYear()} Espaço ANIMA. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}