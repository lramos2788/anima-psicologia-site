'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Compass, ArrowRight, ArrowLeft, RotateCcw, Calendar } from 'lucide-react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'

const questions = [
  {
    id: 1,
    question: 'O que você busca neste momento?',
    options: [
      { label: 'Entender sentimentos e padrões que se repetem na minha vida', value: 'profundidade' },
      { label: 'Ferramentas práticas para lidar com desafios do dia a dia', value: 'pratico' },
      { label: 'Conhecer melhor minhas forças e limitações', value: 'avaliacao' },
      { label: 'Trocar experiências e crescer com outras pessoas', value: 'grupo' },
    ],
  },
  {
    id: 2,
    question: 'Como você se sente mais confortável?',
    options: [
      { label: 'Em conversas íntimas, um a um, com tempo para refletir', value: 'individual' },
      { label: 'Com atividades estruturadas e objetivos claros', value: 'estruturado' },
      { label: 'Em ambientes com outras pessoas que compartilham desafios semelhantes', value: 'coletivo' },
      { label: 'Quero primeiro entender o que seria melhor para mim', value: 'orientacao' },
    ],
  },
  {
    id: 3,
    question: 'Qual frase ressoa mais com você?',
    options: [
      { label: '"Quero me conhecer mais profundamente"', value: 'autoconhecimento' },
      { label: '"Preciso de soluções para algo específico"', value: 'solucao' },
      { label: '"Gostaria de um diagnóstico profissional sobre minha saúde mental"', value: 'diagnostico' },
      { label: '"Quero aprender e crescer junto com outros"', value: 'aprendizado' },
    ],
  },
]

const resultMap: Record<string, { title: string; description: string; service: string }> = {
  'Individual': {
    title: 'Psicoterapia Individual',
    description: 'Recomendamos a psicoterapia individual, onde você terá um espaço exclusivo para explorar suas questões com profundidade e acolhimento. Seja pela psicanálise ou pela TCC, o atendimento será personalizado para você.',
    service: 'individual',
  },
  'Grupo': {
    title: 'Vivências em Grupo',
    description: 'As terapias em grupo são ideais para quem deseja trocar experiências e crescer junto com outras pessoas. A força do coletivo pode ser transformadora.',
    service: 'grupo',
  },
  'Avaliação': {
    title: 'Avaliação Psicológica',
    description: 'Uma avaliação psicológica profissional pode fornecer clareza sobre suas características, forças e áreas de atenção, orientando os próximos passos.',
    service: 'avaliacao',
  },
}

function getRecommendation(answers: string[]): string {
  const scores: Record<string, number> = { 'Individual': 0, 'Grupo': 0, 'Avaliação': 0 }

  const mapping: Record<string, string> = {
    profundidade: 'Individual',
    pratico: 'Individual',
    avaliacao: 'Avaliação',
    grupo: 'Grupo',
    individual: 'Individual',
    estruturado: 'Individual',
    coletivo: 'Grupo',
    orientacao: 'Avaliação',
    autoconhecimento: 'Individual',
    solucao: 'Individual',
    diagnostico: 'Avaliação',
    aprendizado: 'Grupo',
  }

  for (const a of answers ?? []) {
    const mapped = mapping?.[a]
    if (mapped && scores?.[mapped] !== undefined) {
      scores[mapped] = (scores[mapped] ?? 0) + 1
    }
  }

  let max = 0
  let result = 'Individual'
  for (const [key, val] of Object.entries(scores ?? {})) {
    if ((val ?? 0) > max) {
      max = val ?? 0
      result = key
    }
  }
  return result
}

export default function QuizContent() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [result, setResult] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)

  const handleAnswer = async (value: string) => {
    const newAnswers = [...(answers ?? []), value]
    setAnswers(newAnswers)

    if (step < (questions?.length ?? 0) - 1) {
      setStep(step + 1)
    } else {
      const rec = getRecommendation(newAnswers)
      setResult(rec)
      setSaving(true)
      try {
        await supabase?.from?.('anima_quiz_responses')?.insert?.({
          question_1: newAnswers?.[0] ?? '',
          question_2: newAnswers?.[1] ?? '',
          question_3: newAnswers?.[2] ?? '',
          recommended_service: rec,
        })
      } catch (err: any) {
        console.error('Erro ao salvar quiz:', err)
      } finally {
        setSaving(false)
      }
    }
  }

  const restart = () => {
    setStep(0)
    setAnswers([])
    setResult(null)
  }

  const currentQuestion = questions?.[step]
  const resultData = result ? resultMap?.[result] : null

  return (
    <div className="min-h-[80vh]">
      {/* Header */}
      <section className="bg-anima-blue-500 py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Compass className="w-6 h-6 text-anima-amber-400" />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Qual Caminho <span className="text-anima-amber-400">Anima</span>?
          </h1>
          <p className="text-white/70 max-w-xl mx-auto mt-4">
            Responda 3 perguntas simples e descubra qual tipo de atendimento combina mais com o seu momento.
          </p>
        </div>
      </section>

      {/* Quiz Body */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <AnimatePresence mode="wait">
            {!result && currentQuestion ? (
              <motion.div
                key={`q-${step}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                {/* Progress */}
                <div className="mb-8">
                  <div className="flex items-center justify-between text-sm text-anima-blue-300 mb-2">
                    <span>Pergunta {step + 1} de {questions?.length ?? 0}</span>
                  </div>
                  <div className="h-2 bg-anima-green-50 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-anima-amber-400 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: `${((step + 1) / (questions?.length ?? 1)) * 100}%` }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl font-bold text-anima-blue-500 mb-8">
                  {currentQuestion?.question ?? ''}
                </h2>

                <div className="flex flex-col gap-3">
                  {(currentQuestion?.options ?? [])?.map?.((option: any, i: number) => (
                    <motion.button
                      key={option?.value ?? i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      onClick={() => handleAnswer(option?.value ?? '')}
                      className="group text-left p-5 rounded-xl bg-anima-green-50/50 hover:bg-anima-green-50 border border-transparent hover:border-anima-green-200 transition-all hover:shadow-sm"
                    >
                      <span className="text-anima-blue-500 group-hover:text-anima-green-600 transition-colors">
                        {option?.label ?? ''}
                      </span>
                    </motion.button>
                  )) ?? []}
                </div>

                {step > 0 && (
                  <button
                    onClick={() => {
                      setStep(step - 1)
                      setAnswers((answers ?? [])?.slice?.(0, -1) ?? [])
                    }}
                    className="mt-6 flex items-center gap-2 text-sm text-anima-blue-300 hover:text-anima-blue-500 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Voltar
                  </button>
                )}
              </motion.div>
            ) : result && resultData ? (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-anima-amber-400/15 flex items-center justify-center mx-auto mb-6">
                  <Compass className="w-8 h-8 text-anima-amber-500" />
                </div>

                <h2 className="font-display text-3xl font-bold text-anima-blue-500 mb-3">
                  {resultData?.title ?? ''}
                </h2>
                <p className="text-anima-blue-300 leading-relaxed max-w-lg mx-auto mb-8">
                  {resultData?.description ?? ''}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/agendamento"
                    className="inline-flex items-center gap-2 bg-anima-green-500 hover:bg-anima-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-md"
                  >
                    <Calendar className="w-5 h-5" />
                    Agendar Atendimento
                  </Link>
                  <button
                    onClick={restart}
                    className="inline-flex items-center gap-2 bg-anima-green-50 hover:bg-anima-green-100 text-anima-green-600 px-6 py-3 rounded-lg font-medium transition-all"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Refazer Quiz
                  </button>
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
