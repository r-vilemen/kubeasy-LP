# CONTEÚDO E NARRATIVA — LANDING PAGE KUBEASY

## 1. DIRETRIZES DE COMUNICAÇÃO
- **Tom de Voz:** Autoritativo, técnico, claro, direto, pragmático e focado na dor de engenharia.
- **Público:** DevOps, SREs, Engenheiros de Plataforma, Tech Leads e CTOs.
- **Postura:** Honestidade técnica absoluta. Diferenciação nítida entre o que é arquitetura implementada, demonstrações conceituais e capacidades planejadas. Sem jargões vazios ("revolucione sua empresa") e sem caixas-pretas de IA.

---

## 2. ESTRUTURA DE CONTEÚDO POR SEÇÃO

### SEÇÃO 01 — HEADER (NAVEGAÇÃO)
- **Marca:** Kubeasy (com ícone de orquestração precisa)
- **Status do Sistema:** `v0.9.4 Core Architecture · Early Access`
- **Links de Navegação:**
  - O Problema (`#problema`)
  - Como Funciona (`#como-funciona`)
  - Diferenciais Técnicos (`#diferenciais`)
  - Cenários de Investigação (`#cenarios`)
  - Integrações (`#integracoes`)
  - Governança (`#governanca`)
- **CTA do Header:** Solicitar Demonstração Técnica (`#acesso`)

---

### SEÇÃO 02 — HERO
- **Badge Superior:** Plataforma de Investigação Assistida & Governança para Kubernetes
- **Headline Principal:**
  "Da detecção de incidentes à ação governada em ambientes Kubernetes complexos."
- **Subheadline:**
  "O Kubeasy integra observabilidade distribuída, correlação multiagente e investigação estruturada em árvore (TreeStore) para identificar a causa-raiz de falhas e executar remediações com aprovação humana obrigatória."
- **CTAs:**
  - **Primário:** Agendar Demonstração Técnica (abre modal ou âncora para formulário estruturado de early access)
  - **Secundário:** Explorar Cenários Interativos (desce suavemente para a seção de demonstração)
- **Visual Hero Mockup (Kubeasy Live Console):**
  - Timeline com anomalia detectada (`P99 Latency Spike & HTTP 502 Rate 14.2%`)
  - Grafo topológico ativo (`ingress-controller -> api-gateway -> checkout-service -> cart-redis`)
  - Janela de evidência TreeStore com correlação entre Rollout v2.4.1 e Connection Pool Exhaustion
  - Painel do Agente de Resolução com ação recomendada aguardando validação de token FIDO2/TOTP.

---

### SEÇÃO 03 — O PROBLEMA (A DOR DA FRAGMENTAÇÃO OPERACIONAL)
- **Título da Seção:** O labirinto dos incidentes distribuídos em microsserviços
- **Subtítulo:** Quando um pod falha ou a latência dispara, a investigação manual entre silos consome horas críticas de MTTR.
- **Visual de Comparação:**
  - **O Fluxo Fragmentado Hoje:**
    - 5 abas abertas simultaneamente (Grafana, CloudWatch, kubectl, Argo CD, Slack).
    - Logs desconectados de métricas de pods e traces de rede.
    - Hipóteses manuais baseadas no "feeling" do engenheiro de plantão.
    - Risco de comandos manuais impulsivos em produção (`kubectl delete pod`, `scale down`).
    - Pós-morte manual demorado e documentação inconsistente.
  - **O Impacto Real:** MTTR elevado, fadiga de alertas (*alert fatigue*) e insegurança operacional em deploys contínuos.

---

### SEÇÃO 04 — A PROPOSTA DO KUBEASY (FLUXO UNIFICADO)
- **Título da Seção:** Uma ponte determinística entre observabilidade e ação
- **Subtítulo:** Não criamos mais um dashboard. Estruturamos o ciclo completo de diagnóstico em um único fluxo contextual.
- **Os 5 Passos do Ciclo Kubeasy:**
  1. **Ingestão Contínua:** Coleta e normalização de sinais do cluster (Prometheus, Loki, Istio, CloudWatch).
  2. **Topologia Viva:** Mapeamento instantâneo de dependências entre namespaces, workloads e serviços gerenciados.
  3. **Investigação em Árvore (TreeStore):** Construção determinística de galhos de hipótese com base em evidências verificadas.
  4. **Colaboração Multiagente:** Especialistas autônomos para checagem de logs, saturação de recursos e anomalias de rede.
  5. **Remediação Governada:** Geração de propostas executáveis via GitOps com checkpoint de aprovação humana.

---

### SEÇÃO 05 — DIFERENCIAIS DE ARQUITETURA
- **1. TreeStore — Investigação Rastreável e Determinística:**
  Diga adeus a diagnósticos que se perdem no histórico do chat. O TreeStore organiza nós de hipóteses validadas ou refutadas por evidências concretas.
- **2. Runtime Multiagente Especializado:**
  Agentes desacoplados operam em paralelo: *Log Analysis Agent*, *Metric Anomaly Agent*, *K8s Topology Agent* e *Coordinator Agent*.
- **3. Grafo Unificado de Infraestrutura:**
  Visão topológica em tempo real que correlaciona camadas lógicas (Pods, Services, Ingress) a recursos de nuvem (AWS RDS, Managed Redis).
- **4. Copiloto Contextual com Acesso ao Grafo:**
  Assistência inteligente capaz de responder perguntas sobre o estado do incidente com base estrita no TreeStore atual, sem alucinações.
- **5. Governança e Automação Controlada:**
  Zero comandos cegos em produção. Políticas de execução com suporte a aprovação multifator (TOTP / FIDO2) e integração nativa com PRs no GitHub e Argo CD.

---

### SEÇÃO 06 — CENÁRIOS INTERATIVOS DE INVESTIGAÇÃO
*(Demonstração interativa de produto)*
- **Cenário 1 — Deploy com Aumento de Erros HTTP 5xx:**
  - *Sintoma:* Disparo de 502/503 após rollout da versão `v2.4.1` do serviço de pagamentos.
  - *Investigação:* O Agente K8s correlaciona o timestamp do ReplicaSet com aumento de conexões rejeitadas no Istio.
  - *Diagnóstico TreeStore:* Variável de ambiente mal configurada gerando timeout de conexão com o banco.
  - *Ação Sugerida:* Rollback automatizado via PR no Argo CD, requer aprovação do líder de SRE.
- **Cenário 2 — Pressão de Memória em Cascata nos Pods:**
  - *Sintoma:* Pods do worker em estado `OOMKilled` e reinícios contínuos (`CrashLoopBackOff`).
  - *Investigação:* O Agente de Métricas analisa cgroups e identifica vazamento gradual de memória não coletado pelo garbage collector.
  - *Diagnóstico TreeStore:* Heap exhaustion provocado por lote excessivo de eventos assíncronos.
  - *Ação Sugerida:* Ajuste temporário de limits/requests e isolamento de fila de processamento.
- **Cenário 3 — Latência Crítica no AWS RDS sem Alerta Dedicado:**
  - *Sintoma:* Aumento drástico de latência P99 no checkout sem alertas do Kubernetes.
  - *Investigação:* Correlação cruzada entre traces de chamadas SQL do microsserviço e métricas de Read Latency / CPU Credit do RDS PostgreSQL.
  - *Diagnóstico TreeStore:* Ausência de índice em tabela volumosa gerando lock de leitura compartilhado.
  - *Ação Sugerida:* Notificação contextual com plano de execução e criação de índice recomendada.

---

### SEÇÃO 07 — ECOSSISTEMA E INTEGRAÇÕES
- **Categorias:**
  - **Orquestração & Infra:** Kubernetes, Helm.
  - **Service Mesh & Tráfego:** Istio.
  - **Telemetria & Logs:** Prometheus, Loki, AWS CloudWatch.
  - **Bancos e Serviços Gerenciados:** AWS RDS.
  - **Controle de Versão & GitOps:** GitHub, Argo CD.
- **Nota de Transparência:** Integrações projetadas para interoperabilidade via APIs abertas e agentes de telemetria padrão da indústria.

---

### SEÇÃO 08 — GOVERNANÇA, SEGURANÇA E AUDITORIA
- **Human-in-the-Loop Obrigatório:** O Kubeasy nunca aplica mudanças estruturais sem autorização explícita, a menos que uma política de autonomia seja ativada voluntariamente.
- **Autenticação Forte:** Suporte a FIDO2 (Passkeys/YubiKeys) e TOTP para liberação de ações de remediação de alto privilégio.
- **Trilha de Auditoria Imutável:** Cada investigação, hipótese gerada e comando sugerido é registrado no TreeStore para pós-morte imediato.

---

### SEÇÃO 09 — CTA FINAL
- **Chamada:** "Traga previsibilidade e rigor de engenharia para a operação do seu cluster."
- **Texto:** Junte-se ao programa de early access e descubra como o Kubeasy reduz o tempo de investigação e aumenta a segurança dos seus deploys.
- **Formulário / Ação:** Inscrição direta de interesse técnico com campo para nome, e-mail corporativo e tamanho do cluster.

---

### SEÇÃO 10 — FOOTER
- **Identidade:** Kubeasy · Platform Automation, Observability & Incident Investigation.
- **Links Institucionais:** Arquitetura, Documentação Técnica, Demonstração, Política de Privacidade e Termos de Uso (preparados para links reais).
- **Copyright:** © 2026 Kubeasy. Todos os direitos reservados.

