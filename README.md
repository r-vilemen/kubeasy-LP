# Kubeasy · Landing Page

> **Do alerta à causa, com a evidência citada.**  
> Landing page oficial do **Kubeasy** — plataforma de investigação determinística de incidentes em Kubernetes com runtime multiagente, árvore de hipóteses e governança humana estrita.

---

## 🎯 Proposta de Valor e Conceito

Em ambientes de microsserviços modernos, incidentes fragmentam a atenção dos engenheiros entre dashboards desconexos (Grafana, Loki, kubectl, Slack, Argo CD). Essa fragmentação gera aumento crítico de **MTTR**, fadiga de alertas e remediações manuais impulsivas em produção.

O **Kubeasy** substitui a adivinhação por um ciclo de investigação determinístico:
1. **Ingestão contínua**: Normalização de sinais do cluster e telemetria (Prometheus, Loki, Istio, CloudWatch).
2. **Topologia Viva**: Mapeamento instantâneo de dependências lógicas e serviços gerenciados.
3. **Árvore de Investigação**: Formulação de hipóteses testadas contra fatos concretos do cluster. O que for descartado permanece registrado com a prova que o refutou.
4. **Governança Estrita**: Nenhuma mudança é aplicada às cegas. Propostas de resolução tornam-se pull requests rastreáveis via GitOps e exigem aprovação explícita.

---

## 🏛️ Identidade Visual e Princípios de Design

A interface foi projetada afastando-se deliberadamente dos clichês genéricos de IA (*anti-AI bias*), adotando uma estética editorial, técnica e intencional:

- **Metáfora do Laudo**: Fundo em textura de papel de laudo com alternância nativa entre temas claro e escuro (`[data-theme="dark"]`).
- **Tipografia com Alma**:
  - **Títulos e Conceito**: *Newsreader* (Serifada clássica e autoritária).
  - **Interface e Texto**: *Instrument Sans* (Sans-serif moderna, neutra e de alta legibilidade).
  - **Dados e Telemetria**: *JetBrains Mono* (Monoespaçada de engenharia).
- **Paleta Analógica de Marca**:
  - `Carimbo` (`#4C3FA6` / `#A89DF0`): Roxo emblemático de autorização e marca.
  - `Laudo / Carvão`: Superfícies que contrastam matéria orgânica e técnica.
  - `Oliva / Âmbar / Lacre`: Estados operacionais sem saturação artificial ou neons.
- **Scroll Personalizado & Suave**: Scrollbar fina (`7px`, raio de `2px`) na cor roxa da marca (`var(--kb-brand)`) e navegação suave ancorada nas seções.

---

## 🚀 Estrutura de Seções

- **Hero & Laudo Vivo**: Apresentação visual da metáfora do Kubeasy — o símbolo da marca desenhado como o diagrama de um laudo real com nós interativos e citação de evidência.
- **Demonstração em Vídeo**: Espaço para vídeo explicativo ou screencast da plataforma.
- **O Problema (03:12 → 04:47)**: Linha do tempo interativa e pautada retratando o estresse da madrugada e a perda de tempo entre silos operacionais.
- **Como Funciona**: Decomposição em 5 passos do método de investigação com diagramação viva de grafo.
- **Na Prática**: Demonstração interativa de três cenários de SRE (Deploy com 5xx, OOMKilled, e Latência sem alerta em banco gerenciado).
- **Governança**: Demonstração do botão tátil *hold-to-approve* (segurar para aprovar) com selo "Aprovado por Humano".
- **Integrações**: Ecossistema de ferramentas compatíveis (Kubernetes, Istio, Helm, Argo CD, Prometheus, Loki, AWS RDS).
- **Calculadora de Custo**: Simulador dinâmico de retorno de investimento com base no tamanho da equipe e volume de incidentes.
- **Chamada Final (CTA)**: Convite direto para criação de conta, login ou degustação da demonstração do sistema.

---

## 🛠️ Stack Tecnológica

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Linguagem**: [TypeScript](https://www.typescriptlang.org/)
- **Estilização**: [Tailwind CSS](https://tailwindcss.com/) integrado a CSS Variables (`tokens.css`)
- **Ícones**: SVG nativos, sem bibliotecas pesadas de terceiros
- **Animações e Easing**: CSS Transitions & Keyframes acelerados por hardware (`cubic-bezier(0.2, 0, 1)`)

---

## 💻 Como Rodar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 18+ recomendada)
- `npm` ou `pnpm`

### Instalação e Execução

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/kubeasy-LP.git
cd kubeasy-LP

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5199/` (ou na porta configurada pelo Vite).

### Variáveis de Ambiente

Para apontar os botões de ação para a aplicação real em produção ou homologação:

```env
# URL base do front-end do produto (onde estão as rotas /pt-BR/cadastro e /pt-BR/entrar)
VITE_APP_URL=https://app.kubeasy.io
```

---

## 📦 Build e Produção

Para gerar o bundle otimizado para deploy:

```bash
npm run build
```

Os arquivos estáticos finais serão gerados no diretório `dist/`.

---

<div align="center">
  <sub>© 2026 Kubeasy. Todos os direitos reservados.</sub>
</div>

