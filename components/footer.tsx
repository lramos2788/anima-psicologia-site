'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-anima-blue-500 text-white/80">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-3">
              ANIMA
            </h3>
            <p className="text-sm leading-relaxed text-white/60">
              Onde a profundidade da escuta psicanalítica encontra a clareza das
              práticas baseadas em evidências.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Navegação</h4>
            <div className="flex flex-col gap-2">
              <Link href="/equipe" className="text-sm hover:text-anima-amber-400 transition-colors">Equipe</Link>
              <Link href="/agendamento" className="text-sm hover:text-anima-amber-400 transition-colors">Agendamento</Link>
              <Link href="/parceiros" className="text-sm hover:text-anima-amber-400 transition-colors">Parcerias</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Contato</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-anima-amber-400" />
                <span>Rua da Cacimba, s/n, 2º andar - Sala 202, Itapuã, Salvador - BA</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 shrink-0 text-anima-amber-400" />
                <span>(71) 99295-3117</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 shrink-0 text-anima-amber-400" />
                <span>lucasrdo2@outlook.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Espaço ANIMA. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
