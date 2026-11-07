# PROMPT MESTRE — DESENVOLVIMENTO DA LANDING PAGE DO KUBEASY

## 1. PAPEL E OBJETIVO

Atue como um **Senior Product Designer, Senior Front-end Engineer, especialista em UX/UI, CRO e arquitetura de aplicações web**.

Sua missão é projetar e desenvolver a landing page oficial do **Kubeasy**, transformando o produto em uma apresentação comercial clara, visualmente marcante, tecnicamente consistente e capaz de despertar interesse em potenciais clientes, empresas e profissionais de tecnologia.

Não quero apenas uma página bonita. Quero uma experiência que consiga explicar um produto tecnológico complexo de maneira simples, transmitir confiança e demonstrar valor comercial.

O resultado deve ter qualidade de um produto SaaS B2B profissional, com identidade visual própria, sem parecer um template pronto ou uma página genérica produzida por inteligência artificial.

**Regra principal:** trabalhe por etapas, valide cada etapa e mantenha a documentação atualizada. Não tente desenvolver tudo de uma vez.

---

## 2. CONTEXTO DO PRODUTO

### Nome
Kubeasy

### Categoria
Plataforma de automação, observabilidade e investigação assistida de incidentes em ambientes Kubernetes e arquiteturas baseadas em microsserviços.

### Problema que resolve

Ambientes modernos de infraestrutura podem apresentar problemas distribuídos entre diferentes serviços, aplicações, containers, bancos de dados e ferramentas de observabilidade.

Quando ocorre um incidente, equipes de engenharia frequentemente precisam:

- Consultar diferentes ferramentas para encontrar informações.
- Correlacionar logs, métricas e eventos manualmente.
- Investigar possíveis causas em múltiplos serviços.
- Identificar relações entre componentes afetados.
- Determinar a origem de falhas e degradações.
- Executar ações corretivas com segurança.
- Documentar o que aconteceu e o que foi realizado.

Esse processo pode ser demorado, fragmentado e dependente da experiência individual dos profissionais.

### Proposta de valor

O Kubeasy busca centralizar e estruturar esse processo, permitindo que equipes tenham uma visão integrada de seus ambientes, investiguem incidentes com assistência inteligente e executem ações de maneira governada.

A plataforma deve ser apresentada como uma solução que aproxima observabilidade, investigação e automação em um único fluxo de trabalho.

### Público-alvo

- Engenheiros DevOps.
- Engenheiros de plataforma.
- SREs (Site Reliability Engineers).
- Desenvolvedores backend.
- Líderes de engenharia.
- Equipes responsáveis por infraestrutura e operações.
- Empresas que utilizam Kubernetes e microsserviços.

### Posicionamento

O Kubeasy não deve ser apresentado apenas como mais uma ferramenta de monitoramento.

Seu diferencial está na integração entre:

1. Observabilidade.
2. Investigação estruturada.
3. Inteligência multiagente.
4. Correlação de informações.
5. Automação de ações.
6. Governança e controle humano.

A comunicação deve enfatizar a redução da fragmentação operacional e a transformação de informações dispersas em investigações estruturadas e ações controladas.

---

## 3. ARQUITETURA E DIFERENCIAIS DO KUBEASY

Use as informações abaixo como base para construir a narrativa da landing page.

Não transforme detalhes técnicos em promessas comerciais sem fundamento. Diferencie claramente funcionalidades implementadas, demonstrações, capacidades planejadas e hipóteses.

### 3.1. Investigação determinística e TreeStore

O projeto contempla uma estrutura denominada TreeStore, utilizada para organizar informações e etapas da investigação.

A proposta é permitir que a investigação tenha uma estrutura rastreável, com relações entre eventos, evidências, hipóteses e conclusões.

A comunicação deve destacar:

- Investigação organizada.
- Rastreabilidade.
- Relação entre evidências.
- Contextualização dos incidentes.
- Redução de análises desconectadas.

### 3.2. Runtime multiagente

O Kubeasy possui uma arquitetura baseada em múltiplos agentes, com responsabilidades específicas dentro do fluxo de investigação.

A apresentação deve mostrar como agentes especializados podem colaborar na análise de diferentes aspectos de um incidente.

Não apresente a inteligência artificial como uma caixa-preta que resolve tudo automaticamente.

Mostre o fluxo de trabalho e a relação entre os agentes de forma visual e compreensível.

### 3.3. Governança e segurança

Um dos diferenciais importantes é a possibilidade de controlar como as ações são executadas.

Considere os seguintes conceitos:

- Modo autônomo.
- Escalonamento de decisões.
- Aprovação humana.
- Autenticação multifator.
- FIDO2.
- TOTP.
- Controle de execução.

A narrativa deve mostrar que automação não significa ausência de controle.

Não invente certificações, auditorias, garantias ou conformidades regulatórias.

### 3.4. Grafo unificado

A plataforma contempla a visualização das relações entre serviços, componentes e eventos.

Esse conceito deve ser explorado visualmente para mostrar como diferentes elementos da infraestrutura se relacionam.

O objetivo é permitir que o visitante compreenda que um incidente pode afetar diferentes partes do ambiente.

### 3.5. Copiloto

O Kubeasy contempla uma experiência de copiloto para auxiliar na interpretação das informações e na investigação dos incidentes.

A interface deve transmitir a ideia de assistência contextual, não de um chatbot genérico.

### 3.6. Integrações

Considere as tecnologias e ferramentas relacionadas ao projeto:

- Kubernetes.
- Istio.
- Prometheus.
- Loki.
- AWS CloudWatch.
- AWS RDS.
- GitHub.
- Helm.
- Argo CD.

Apresente as integrações com organização visual e clareza.

Não afirme que todas as integrações estão operacionais em produção sem confirmação no código ou na documentação.

### 3.7. GitOps

O projeto contempla integração com fluxos GitOps, incluindo GitHub App, Helm e Argo CD.

Explore a relação entre investigação, decisão e execução controlada de mudanças.

---

## 4. CENÁRIOS DE DEMONSTRAÇÃO

A landing page deve apresentar cenários concretos para tornar a proposta do Kubeasy mais fácil de compreender.

Use os três cenários abaixo como base.

### CENÁRIO 01 — Deploy com aumento de erros HTTP 5xx

Uma nova versão de uma aplicação é implantada e, após o deploy, ocorre um aumento de respostas HTTP 5xx.

A demonstração deve mostrar um fluxo possível de:

1. Identificação da anomalia.
2. Detecção do aumento de erros.
3. Correlação com o evento de deploy.
4. Investigação dos serviços envolvidos.
5. Identificação de evidências.
6. Apresentação de uma possível causa.
7. Recomendação de ação corretiva.
8. Aprovação ou escalonamento, quando necessário.

### CENÁRIO 02 — Pressão de memória nos Pods

Um conjunto de Pods começa a apresentar pressão de memória.

A demonstração deve mostrar:

1. Identificação do comportamento anormal.
2. Análise das métricas.
3. Relação entre os Pods afetados.
4. Identificação dos componentes envolvidos.
5. Apresentação das evidências.
6. Sugestão de possíveis ações.

### CENÁRIO 03 — Lentidão no AWS RDS sem alerta prévio

Uma aplicação começa a apresentar lentidão, mas não existe um alerta específico indicando um problema no banco de dados.

A demonstração deve mostrar como a correlação entre diferentes sinais pode ajudar a identificar o RDS como parte do problema.

Explore:

1. Identificação da degradação da aplicação.
2. Investigação das dependências.
3. Correlação com métricas do banco.
4. Análise de possíveis gargalos.
5. Apresentação de evidências.
6. Sugestão de investigação ou ação.

**Importante:** esses cenários podem ser apresentados como demonstrações conceituais ou simulações visuais. Não simule resultados reais de produção, clientes, métricas verificadas ou integrações funcionais que não estejam implementadas.

---

## 5. DIREÇÃO DE DESIGN

Essa etapa é extremamente importante.

Quero uma landing page com aparência de um produto tecnológico real, com identidade visual marcante e acabamento profissional.

### Referência de qualidade

Utilize como referência de qualidade visual páginas de produtos SaaS B2B e ferramentas de infraestrutura, observabilidade, DevOps e plataformas de engenharia.

Busque referências de composição, hierarquia, narrativa e apresentação de funcionalidades.

Não copie a identidade visual de concorrentes.

### Direção visual desejada

A interface deve transmitir:

- Tecnologia.
- Engenharia.
- Confiabilidade.
- Precisão.
- Controle.
- Inteligência.
- Sofisticação.
- Clareza.

### Requisitos visuais

- Tipografia profissional e bem definida.
- Hierarquia visual consistente.
- Espaçamento equilibrado.
- Contraste adequado.
- Elementos visuais que tenham propósito.
- Gráficos e diagramas coerentes com o produto.
- Interfaces demonstrativas realistas.
- Animações sutis e funcionais.
- Microinterações bem executadas.
- Responsividade completa.

Evite:

- Gradientes excessivos.
- Cards repetitivos em todas as seções.
- Ícones aleatórios.
- Emojis como elementos de interface.
- Ilustrações genéricas de inteligência artificial.
- Textos genéricos como "revolucione seu negócio".
- Seções visualmente iguais.
- Excesso de elementos flutuantes.
- Animações que prejudiquem a leitura.
- Aparência de template pronto.
- Efeitos visuais sem função.

### Hero section

A primeira dobra precisa ser especialmente bem trabalhada.

Ela deve responder rapidamente:

1. O que é o Kubeasy?
2. Qual problema resolve?
3. Por que é diferente?
4. Qual ação o visitante deve realizar?

Quero uma composição visual que apresente o produto de maneira convincente.

Considere utilizar uma demonstração de interface do próprio Kubeasy, com elementos como:

- Grafo de serviços.
- Timeline de incidentes.
- Eventos.
- Evidências.
- Status de investigação.
- Recomendações.
- Copiloto.

A demonstração precisa parecer parte de um produto real, não um dashboard genérico.

---

## 6. ESTRUTURA DA LANDING PAGE

A estrutura abaixo é uma proposta inicial. Você pode melhorar a organização, desde que preserve a narrativa comercial e os diferenciais do produto.

### Seção 01 — Header

Deve conter:

- Logotipo ou wordmark Kubeasy.
- Navegação principal.
- Links para funcionalidades, como funciona e integrações.
- CTA principal.

O header deve ter boa legibilidade e comportamento adequado durante a rolagem.

### Seção 02 — Hero

Apresente a proposta de valor do Kubeasy.

Inclua:

- Headline objetiva.
- Subheadline explicativa.
- CTA principal.
- CTA secundário, se fizer sentido.
- Demonstração visual do produto.

Evite textos longos e promessas exageradas.

### Seção 03 — O problema

Mostre a dificuldade de investigar incidentes em ambientes distribuídos.

Demonstre visualmente a fragmentação entre ferramentas, serviços, logs, métricas e eventos.

O visitante precisa reconhecer o problema.

### Seção 04 — A proposta do Kubeasy

Apresente como a plataforma conecta observabilidade, investigação e automação.

Use uma composição visual que demonstre o fluxo de trabalho.

### Seção 05 — Como funciona

Explique o processo de investigação por etapas.

Uma possibilidade:

1. Detectar.
2. Correlacionar.
3. Investigar.
4. Recomendar.
5. Aprovar.
6. Executar.

Adapte os nomes e o fluxo ao funcionamento efetivo do produto.

### Seção 06 — Diferenciais

Apresente os principais diferenciais:

- Investigação estruturada.
- Arquitetura multiagente.
- TreeStore.
- Grafo unificado.
- Copiloto contextual.
- Governança e aprovação humana.
- Integrações e GitOps.

Não transforme todos os diferenciais em cards iguais. Explore diferentes composições visuais.

### Seção 07 — Demonstrações práticas

Apresente os três cenários descritos neste documento.

Utilize uma apresentação visual que permita compreender o problema, a investigação e o resultado esperado.

Se possível, implemente uma interação para alternar entre os cenários.

### Seção 08 — Integrações

Apresente as tecnologias relacionadas ao ecossistema do Kubeasy.

Organize as ferramentas por categoria, sem sugerir suporte operacional não confirmado.

### Seção 09 — Governança e segurança

Explique como o Kubeasy trata a execução de ações, aprovação humana e controle.

A comunicação deve transmitir confiança sem fazer alegações não comprovadas.

### Seção 10 — CTA final

Retome a proposta de valor e conduza o visitante para a próxima ação.

O CTA deve ser coerente com o estágio atual do produto.

Não invente links de cadastro, demonstração, documentação ou contato.

Se ainda não houver destino definido, crie uma estrutura preparada para receber a URL posteriormente.

### Seção 11 — Footer

Inclua:

- Identidade Kubeasy.
- Navegação.
- Links disponíveis.
- Informações institucionais confirmadas.

Não invente redes sociais, endereços ou informações legais.

---

## 7. EXPERIÊNCIA E INTERAÇÕES

A landing page não pode ser apenas estática.

Implemente interações que agreguem valor à compreensão do produto.

Considere:

- Navegação suave entre seções.
- Menu responsivo.
- Header adaptável à rolagem.
- Alternância entre cenários demonstrativos.
- Animações de entrada discretas.
- Estados de hover e focus.
- Transições suaves.
- Diagramas interativos, quando fizer sentido.
- Elementos demonstrativos com estados coerentes.
- Botões com ações reais.

Não implemente interações decorativas que não tenham função.

Todos os CTAs devem possuir um comportamento definido. Não deixe botões sem ação ou links apontando para `#` apenas para preencher a interface.

---

## 8. TECNOLOGIAS E ARQUITETURA

Antes de implementar, analise o projeto existente e identifique as tecnologias já utilizadas.

A preferência é preservar a arquitetura atual.

Caso seja um projeto novo, considere:

- Next.js.
- React.
- TypeScript.
- CSS ou Tailwind CSS, conforme a estrutura escolhida.
- Componentização.
- Lucide para ícones, se necessário.

Não instale bibliotecas sem necessidade.

Não substitua tecnologias existentes apenas por preferência pessoal.

### Organização do código

O código deve ser:

- Modular.
- Reutilizável.
- Tipado.
- Legível.
- Organizado por responsabilidade.
- Fácil de manter.

Evite componentes gigantes.

Evite abstrações prematuras.

Separe componentes visuais, conteúdo e lógica de interação sempre que isso melhorar a manutenção.

---

## 9. SKILLS OBRIGATÓRIAS

Antes de iniciar a implementação, verifique se as seguintes skills estão disponíveis no ambiente.

### Frontend Design — Anthropic
### Vercel React Best Practices
### Web Design Guidelines — Vercel
### Composition Patterns — Vercel
### UI UX Pro Max

---

## 10. SEO, ACESSIBILIDADE E PERFORMANCE

- SEO: Title, Meta description, Open Graph, hierarquia de headings, semântica.
- Acessibilidade: Navegação por teclado, estados de foco, contraste, semântica, reduced motion.
- Performance: Otimização de imagens, bundle mínimo, boas práticas do Next.js.
- Responsividade: Desktop, notebook, tablet, mobile.

---

## 11. METODOLOGIA DE EXECUÇÃO — DESENVOLVIMENTO POR ETAPAS

- ETAPA 00 — ANÁLISE DO PROJETO
- ETAPA 01 — DIREÇÃO VISUAL E DESIGN SYSTEM
- ETAPA 02 — ESTRUTURA E NARRATIVA
- ETAPA 03 — HEADER E HERO
- ETAPA 04 — PROBLEMA E PROPOSTA DE VALOR
- ETAPA 05 — DIFERENCIAIS E ARQUITETURA
- ETAPA 06 — DEMONSTRAÇÕES
- ETAPA 07 — INTEGRAÇÕES, SEGURANÇA E CTA FINAL
- ETAPA 08 — RESPONSIVIDADE E INTERAÇÕES
- ETAPA 09 — AUDITORIA FINAL

