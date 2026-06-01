# Espaço ANIMA

Site do Espaço ANIMA - clínica de psicoterapia integrativa em Itapuã, Salvador.

## Setup Local

1. Clone o repositório
2. Instale as dependências:
   ```bash
   yarn install
   ```
3. Copie o `.env.example` para `.env` e preencha as variáveis:
   ```bash
   cp .env.example .env
   ```
4. Execute o script SQL no Supabase:
   - Acesse o painel do seu projeto Supabase
   - Vá em SQL Editor
   - Cole o conteúdo de `anima_database.sql` e execute
5. Rode o servidor de desenvolvimento:
   ```bash
   yarn dev
   ```

## Variáveis de Ambiente

| Variável | Descrição |
|----------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | URL do seu projeto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Chave anônima do Supabase |

## Deploy na Vercel

1. Conecte o repositório à Vercel
2. Configure as variáveis de ambiente no painel da Vercel
3. Deploy automático a cada push

## Estrutura do Banco

Todas as tabelas usam prefixo `anima_`:
- `anima_quiz_responses` - Respostas do quiz
- `anima_emotional_logs` - Termômetro emocional
- `anima_appointments` - Solicitações de agendamento
- `anima_partners` - Cadastro de parceiros
