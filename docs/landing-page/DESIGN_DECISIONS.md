# DECISÕES DE DESIGN E IDENTIDADE VISUAL — KUBEASY

## 1. POSICIONAMENTO E CONCEITO VISUAL

O **Kubeasy** é uma plataforma técnica B2B voltada para engenheiros DevOps, SREs, arquitetos de plataforma e líderes técnicos lidando com a complexidade de Kubernetes e microsserviços.

A direção visual deve comunicar:
- **Precisão Cirúrgica e Engenharia:** A interface deve remeter a instrumentos de missão crítica (cockpits modernos, terminais de observabilidade de alto padrão, consoles de controle de rede).
- **Transparência e Determinismo:** A inteligência artificial não é tratada como "mágica", mas como uma federação de agentes que operam com evidências rastreáveis (TreeStore) e supervisão humana obrigatória.
- **Autoridade e Sofisticação Sem Clichês:** Evitar fundos pasteis/creme, ilustrações 3D abstratas de IA, gradientes caóticos e botões idênticos repetitivos.

---

## 2. PALETA DE CORES (TOKENS FUNDAMENTAIS)

A paleta adota um tema escuro profundo e refinado (*Deep Technical Dark*), projetado para reduzir a fadiga visual e maximizar o contraste de dados e evidências técnicas:

### Cores de Fundo e Superfície (Neutros de Engenharia)
- **Background Principal (`bg-canvas`):** `#090D16` (azul ardósia ultra-profundo, denso e focado)
- **Superfície Secundária (`bg-surface-subtle`):** `#0E1424` (painéis de fundo e containers)
- **Superfície de Destaque (`bg-surface-elevated`):** `#151E34` (cards de evidências, nós de grafo e modais)
- **Bordas Estruturais (`border-subtle`):** `rgba(255, 255, 255, 0.08)` / `#1E293B`
- **Bordas em Destaque (`border-focus`):** `rgba(99, 102, 241, 0.4)` / `#3B82F6`

### Cores de Texto e Tipografia
- **Texto Primário (`text-primary`):** `#F8FAFC` (branco puro balanceado, máxima legibilidade)
- **Texto Secundário (`text-secondary`):** `#94A3B8` (slate médio para metadados, descrições e legendas)
- **Texto Terciário (`text-muted`):** `#64748B` (slate atenuado para rótulos técnicos e timestamps)

### Acentos Semânticos de Observabilidade
- **Acento Primário (Kubeasy Indigo/Cyan):** `#6366F1` (Indigo dinâmico) intercalado com `#38BDF8` (Cyan técnico)
- **Status Operacional / Normal (`status-ok`):** `#10B981` (Emerald) — pods saudáveis, deployments concluídos
- **Status Alerta / Atenção (`status-warn`):** `#F59E0B` (Amber) — saturação de conexões, pressão de memória
- **Status Incidente / Falha (`status-error`):** `#EF4444` (Rose/Red) — HTTP 5xx, OOMKilled, Pod CrashLoop
- **Governança / Humano (`status-gov`):** `#8B5CF6` (Purple/Violet) — checkpoint de aprovação, FIDO2/TOTP

---

## 3. TIPOGRAFIA

1. **Família Sans-serif (Display e Interface):**
   - Fonte: `Inter`, `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
   - Uso: Títulos (`h1` a `h4`), navegação, parágrafos e CTAs.
   - Tratamento: Kerning neutro, tracking levemente atenuado em títulos grandes (`tracking-tight`), peso `font-semibold` a `font-bold`.
   - Regra estrita: Sem títulos com palavras isoladas em cores estranhas ou itálicos aleatórios.

2. **Família Monospace (Engenharia e Dados):**
   - Fonte: `JetBrains Mono`, `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`
   - Uso: Nomes de pods (`cartservice-7f9b8c-x4q2`), namespaces (`production`), comandos de rollback, métricas numéricas (`p99: 4.8s`), status codes (`HTTP 502`) e evidências do TreeStore.

---

## 4. SISTEMA DE COMPOSIÇÃO E SUPERFÍCIES

- **Ritmo e Espaçamento:** Escala baseada em múltiplos de 4px/8px. Seções com respiro generoso (`py-20` a `py-28` em desktop) para permitir absorção de conceitos densos.
- **Bordas e Arredondamento:**
  - `rounded-lg` (8px) para botões, badges e inputs.
  - `rounded-xl` (12px) a `rounded-2xl` (16px) para consoles de código e janelas de produto.
  - Ausência de cantos arredondados gigantescos tipo bolha (evitar efeito brinquedo/app de consumo).
- **Linhas e Conectores:** Uso de conectores vetoriais sutis (`stroke-slate-800` com pontos pulsantes discretos) para representar as conexões do Grafo Unificado e os galhos do TreeStore.

---

## 5. REGRAS DE COMPORTAMENTO INTERATIVO

- **Microinterações:**
  - Hover em botões primários: elevação sutil de luminosidade (`brightness-110`) e anel sutil de foco.
  - Alternância de cenários na demonstração: transição instantânea ou fade discreto (< 150ms) para não atrasar a inspeção do usuário.
- **Acessibilidade:**
  - Foco via teclado claramente delimitado com `focus-visible:ring-2 focus-visible:ring-indigo-500`.
  - Respeito completo a `prefers-reduced-motion: reduce`.
  - Contraste de texto estritamente superior a 4.5:1 em todos os componentes.

