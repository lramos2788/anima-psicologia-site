'use client'

import { Scale, BookOpen, ShieldCheck } from 'lucide-react'

export default function AboutSection() {
  const pillars = [
    {
      icon: <Scale className="w-6 h-6 text-madeira" />,
      title: "Escuta Ética",
      description: "Um espaço de acolhimento absoluto, onde sua história é ouvida sem julgamentos morais, abrindo caminho para a verdadeira elaboração."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-madeira" />,
      title: "Rigor Metodológico",
      description: "Nossas intervenções são fundamentadas em anos de especialização, combinando o profundo estudo psicanalítico às evidências da TCC."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-madeira" />,
      title: "Cuidado Contínuo",
      description: "Mais que consultas isoladas, oferecemos um ambiente clinicamente estruturado para sustentar o seu desenvolvimento a longo prazo."
    }
  ]

  return (
    <section id="espaco" className="py-24 bg-marfim">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-8">
            <span className="text-dourado text-sm font-bold uppercase tracking-widest">
              O Espaço
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-grafite leading-tight">
              Um território clínico para a <span className="text-madeira italic">complexidade humana.</span>
            </h2>
            <div className="space-y-6 text-grafite/80 text-lg leading-relaxed font-light">
              <p>
                O Espaço ANIMA nasceu da necessidade de oferecer um cuidado psicológico que não subestima o seu sofrimento com fórmulas prontas ou promessas de bem-estar superficial. Somos uma instituição dedicada à saúde mental que estrutura seu atendimento em bases científicas e éticas sólidas.
              </p>
              <p>
                Aqui, a profundidade da investigação psicanalítica e a precisão da Terapia Cognitivo-Comportamental coexistem. Não misturamos métodos. Respeitamos rigorosamente o território de cada abordagem para garantir que a sua singularidade encontre o caminho de elaboração mais adequado e eficaz.
              </p>
            </div>
          </div>

          {/* Pillars */}
          <div className="grid sm:grid-cols-1 gap-6">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-6 p-6 rounded-sm border border-bege bg-white/50 hover:border-dourado/50 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-sm bg-bege/50 flex items-center justify-center">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="font-serif text-xl text-grafite mb-2">{pillar.title}</h3>
                  <p className="text-sm text-grafite/70 leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}