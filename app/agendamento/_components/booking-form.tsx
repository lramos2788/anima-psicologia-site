'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Check, User, Mail, Phone, Clock, Briefcase } from 'lucide-react'
import { supabase } from '@/lib/supabase'

const serviceOptions = [
  { value: 'individual_psicanalise', label: 'Psicoterapia Individual - Psicanálise' },
  { value: 'individual_tcc', label: 'Psicoterapia Individual - TCC' },
  { value: 'grupo', label: 'Terapia em Grupo' },
  { value: 'avaliacao', label: 'Avaliação Psicológica' },
  { value: 'curso', label: 'Cursos e Workshops' },
]

export default function BookingForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service_type: '',
    preferred_time: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e?.target ?? {}
    setForm((prev: any) => ({ ...(prev ?? {}), [name ?? '']: value ?? '' }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.()
    setError('')

    if (!(form?.name ?? '')?.trim?.() || !(form?.email ?? '')?.trim?.() || !(form?.phone ?? '')?.trim?.() || !(form?.service_type ?? '')?.trim?.()) {
      setError('Por favor, preencha todos os campos obrigatórios.')
      return
    }

    setLoading(true)
    try {
      const { error: dbError } = await supabase?.from?.('anima_appointments')?.insert?.({
        name: form?.name ?? '',
        email: form?.email ?? '',
        phone: form?.phone ?? '',
        service_type: form?.service_type ?? '',
        preferred_time: form?.preferred_time ?? '',
        status: 'pending',
      }) ?? { error: null }

      if (dbError) {
        console.error('Erro ao salvar:', dbError)
        setError('Ocorreu um erro. Tente novamente.')
        return
      }

      setSubmitted(true)
    } catch (err: any) {
      console.error('Erro:', err)
      setError('Ocorreu um erro. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[80vh]">
      {/* Header */}
      <section className="bg-anima-blue-500 py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <Calendar className="w-8 h-8 text-anima-amber-400 mx-auto mb-4" />
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Solicitar <span className="text-anima-amber-400">Agendamento</span>
          </h1>
          <p className="text-white/70 max-w-xl mx-auto mt-4">
            Preencha o formulário abaixo e entraremos em contato em até 24 horas.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-white">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          {!submitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-anima-blue-500 mb-1.5">
                  Nome completo *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-anima-blue-300" />
                  <input
                    type="text"
                    name="name"
                    value={form?.name ?? ''}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-anima-green-100 bg-anima-green-50/20 text-anima-blue-500 placeholder:text-anima-blue-200 focus:outline-none focus:ring-2 focus:ring-anima-green-400 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-anima-blue-500 mb-1.5">
                  E-mail *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-anima-blue-300" />
                  <input
                    type="email"
                    name="email"
                    value={form?.email ?? ''}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-anima-green-100 bg-anima-green-50/20 text-anima-blue-500 placeholder:text-anima-blue-200 focus:outline-none focus:ring-2 focus:ring-anima-green-400 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-anima-blue-500 mb-1.5">
                  Telefone/WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-anima-blue-300" />
                  <input
                    type="tel"
                    name="phone"
                    value={form?.phone ?? ''}
                    onChange={handleChange}
                    placeholder="(71) 99999-9999"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-anima-green-100 bg-anima-green-50/20 text-anima-blue-500 placeholder:text-anima-blue-200 focus:outline-none focus:ring-2 focus:ring-anima-green-400 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-medium text-anima-blue-500 mb-1.5">
                  Serviço desejado *
                </label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-anima-blue-300" />
                  <select
                    name="service_type"
                    value={form?.service_type ?? ''}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-anima-green-100 bg-anima-green-50/20 text-anima-blue-500 focus:outline-none focus:ring-2 focus:ring-anima-green-400 focus:border-transparent transition-all appearance-none"
                    required
                  >
                    <option value="">Selecione um serviço</option>
                    {serviceOptions?.map?.((opt: any) => (
                      <option key={opt?.value} value={opt?.value ?? ''}>
                        {opt?.label ?? ''}
                      </option>
                    )) ?? []}
                  </select>
                </div>
              </div>

              {/* Preferred Time */}
              <div>
                <label className="block text-sm font-medium text-anima-blue-500 mb-1.5">
                  Preferência de horário
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 w-4 h-4 text-anima-blue-300" />
                  <textarea
                    name="preferred_time"
                    value={form?.preferred_time ?? ''}
                    onChange={handleChange}
                    placeholder="Ex.: Terças e quintas, período da tarde"
                    rows={3}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-anima-green-100 bg-anima-green-50/20 text-anima-blue-500 placeholder:text-anima-blue-200 focus:outline-none focus:ring-2 focus:ring-anima-green-400 focus:border-transparent transition-all resize-none"
                  />
                </div>
              </div>

              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              <p className="text-xs text-anima-blue-300">
                Seus dados serão utilizados exclusivamente para o agendamento.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-anima-green-500 hover:bg-anima-green-600 disabled:opacity-50 text-white px-6 py-4 rounded-lg font-semibold transition-all hover:shadow-md"
              >
                {loading ? 'Enviando...' : 'Enviar Solicitação'}
              </button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 rounded-full bg-anima-green-500/15 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-anima-green-500" />
              </div>
              <h2 className="font-display text-2xl font-bold text-anima-blue-500 mb-3">
                Solicitação Enviada!
              </h2>
              <p className="text-anima-blue-300 leading-relaxed max-w-md mx-auto">
                Recebemos sua solicitação! Em até 24 horas, nossa equipe entrará em contato via WhatsApp para confirmar o horário e orientar sobre o pagamento.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
