-- ============================================
-- Espaço ANIMA - Script de Criação do Banco
-- Execute este script no SQL Editor do Supabase
-- ============================================

-- Tabela: Respostas do Quiz "Qual Caminho Anima?"
CREATE TABLE IF NOT EXISTS anima_quiz_responses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  question_1 TEXT NOT NULL,
  question_2 TEXT NOT NULL,
  question_3 TEXT NOT NULL,
  recommended_service TEXT NOT NULL
);

-- Tabela: Logs do Termômetro Emocional
CREATE TABLE IF NOT EXISTS anima_emotional_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  emoji_value TEXT NOT NULL,
  anonymous BOOLEAN DEFAULT true
);

-- Tabela: Solicitações de Agendamento
CREATE TABLE IF NOT EXISTS anima_appointments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service_type TEXT NOT NULL,
  preferred_time TEXT,
  status TEXT DEFAULT 'pending'
);

-- Tabela: Cadastro de Parceiros
CREATE TABLE IF NOT EXISTS anima_partners (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT now(),
  name TEXT NOT NULL,
  profession TEXT NOT NULL,
  registration_number TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT
);

-- Habilitar RLS (Row Level Security) para todas as tabelas
ALTER TABLE anima_quiz_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE anima_emotional_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE anima_appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE anima_partners ENABLE ROW LEVEL SECURITY;

-- Políticas de acesso público (INSERT para visitantes anônimos)
CREATE POLICY "Allow anonymous insert" ON anima_quiz_responses FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anonymous insert" ON anima_emotional_logs FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anonymous insert" ON anima_appointments FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anonymous insert" ON anima_partners FOR INSERT WITH CHECK (true);

-- Políticas de leitura pública para o termômetro emocional (dados anônimos)
CREATE POLICY "Allow anonymous read" ON anima_emotional_logs FOR SELECT USING (true);
