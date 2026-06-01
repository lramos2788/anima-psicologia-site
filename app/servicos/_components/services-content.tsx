'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Users, ClipboardCheck, BookOpen, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: Brain,
    title: 'Psicoterapia Individual',
    subtitle: 'Psicanálise & TCC',
    description:
      'A psicoterapia individual no Espaço ANIMA oferece duas abordagens complementares. Na Psicanálise, exploramos as camadas profundas do inconsciente, desvendando padrões emocionais e elaborando conflitos internos. Na Terapia Cognitivo-Comportamental (TCC), trabalhamos com técnicas estruturadas e validadas cientificamente para reestruturar pensamentos e modificar comportamentos.',
    benefits: [
      'Autoconhecimento e elaboração emocional',
      'Manejo de ansiedade, depressão e estresse',
      'Reestruturação cognitiva',
      'Desenvolvimento de habilidades emocionais',
    ],
    color: '#4A5D4E',
  },
  {
    icon: Users,
    title: 'Vivências e Terapias em Grupo',
    subtitle: 'Força do Coletivo',
    description:
      'As vivências em grupo são experiências terapêuticas poderosas que promovem troca, identificação e crescimento mútuo. Em um ambiente seguro e acolhedor, os participantes compartilham suas experiências e aprendem uns com os outros, fortalecendo laços e desenvolvendo novas perspectivas.',
    benefits: [
      'Troca de experiências e aprendizado coletivo',
      'Desenvolvimento de habilidades sociais',
      'Acolhimento e pertencimento',
      'Novas perspectivas sobre desafios pessoais',
    ],
    color: '#3E5A8C',
  },
  {
    icon: ClipboardCheck,
    title: 'Avaliações Psicológicas',
    subtitle: 'Clareza e Orientação',
    description:
      'As avaliações psicológicas utilizam instrumentos científicos para compreender características cognitivas, emocionais e comportamentais. O resultado é um relatório detalhado que serve como guia para o processo terapêutico ou para demandas específicas.',
    benefits: [
      'Mapeamento de forças e áreas de atenção',
      'Orientação para tratamento adequado',
      'Relatórios profissionais fundamentados',
      'Apoio a processos educacionais e profissionais',
    ],
    color: '#C68B3E',
  },
  {
    icon: BookOpen,
    title: 'Cursos e Workshops',
    subtitle: 'Formação e Conhecimento',
    description:
      'Oferecemos cursos e workshops presenciais voltados para profissionais da saúde mental e para o público geral. Os temas abrangem desde introdução à psicanálise e TCC até práticas de autocuidado e inteligência emocional.',
    benefits: [
      'Conteúdo teórico e prático',
      'Certificado de participação',
      'Networking com profissionais',
      'Ferramentas aplicáveis no dia a dia',
    ],
    color: '#6B8E6E',
  },
]

export default function ServicesContent() {
  return (
    <div className="min-h-[80vh]">
      {/* Header */}
      <section className="bg-anima-blue-500 py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <span className="text-anima-amber-400 text-sm font-semibold uppercase tracking-widest">
            O que oferecemos
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3 tracking-tight">
            Nossos <span className="text-anima-amber-400">Serviços</span>
          </h1>
          <p className="text-white/70 max-w-xl mx-auto mt-4">
            Cada serviço é pensado para atender diferentes necessidades, sempre com acolhimento e ciência.
          </p>
        </div>
      </section>

      {/* Services */}
      {services?.map?.((service: any, index: number) => (
        <ServiceBlock key={service?.title ?? index} service={service} index={index} />
      )) ?? []}
    </div>
  )
}

function ServiceBlock({ service, index }: { service: any; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const isEven = index % 2 === 0
  const Icon = service?.icon

  return (
    <section
      ref={ref}
      className={`py-16 sm:py-20 ${isEven ? 'bg-white' : 'bg-anima-green-50/30'}`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${service?.color ?? '#4A5D4E'}15` }}
            >
              {Icon && <Icon className="w-6 h-6" style={{ color: service?.color ?? '#4A5D4E' }} />}
            </div>
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-anima-blue-500">
                {service?.title ?? ''}
              </h2>
              <p className="text-sm font-medium" style={{ color: service?.color ?? '#4A5D4E' }}>
                {service?.subtitle ?? ''}
              </p>
            </div>
          </div>

          <p className="text-anima-blue-300 leading-relaxed mb-6">
            {service?.description ?? ''}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {(service?.benefits ?? [])?.map?.((benefit: string, i: number) => (
              <div key={i} className="flex items-center gap-2 text-sm text-anima-blue-400">
                <div
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: service?.color ?? '#4A5D4E' }}
                />
                {benefit}
              </div>
            )) ?? []}
          </div>

          <Link
            href="/agendamento"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:gap-3"
            style={{ color: service?.color ?? '#4A5D4E' }}
          >
            Solicitar Agendamento
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
