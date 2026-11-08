import { SectionHead } from "./common";
import { useSectionProgress } from "../hooks/hooks";

const steps = [
  { t: "Ingere os sinais", d: "Prometheus, Loki, Istio, CloudWatch e eventos do cluster entram normalizados. Sem você abrir aba." },
  { t: "Desenha a topologia viva", d: "Quem fala com quem, em quais namespaces e serviços gerenciados. O raio de impacto aparece antes da primeira pergunta." },
  { t: "Abre a árvore de hipóteses", d: "Cada causa possível vira um ramo. Nada é afirmado sem fato. O que cai fica à vista, com o dado que o derrubou." },
  { t: "Especialistas checam em paralelo", d: "Agentes de métricas, deploy e rede testam os ramos ao mesmo tempo e citam a evidência de cada conclusão." },
  { t: "Propõe a correção como diff", d: "A mudança sai como pull request no seu GitOps, reversível por git. Só entra em produção com a sua aprovação." },
];

export function MethodSection() {
  const [ref, p] = useSectionProgress<HTMLDivElement>();
  const active = Math.min(4, Math.floor(p * 5.0001));
  const s = active + 1; // etapa atual 1..5
  const cls = (n: number) => (s >= n ? "on" : "");

  return (
    <section id="metodo" className="relative pt-24 lg:pt-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead n="02" label="Como funciona" title={<>Um método, não uma caixa-preta. <em>Cada passo você consegue auditar.</em></>} lead="O Kubeasy não conversa com o seu cluster e torce para dar certo. Ele segue o mesmo ritual de um bom SRE, só que em paralelo e com registro de tudo." />
      </div>

      <div ref={ref} style={{ height: "380vh" }} className="relative">
        <div className="sticky top-0 h-screen flex items-center">
          <div className="mx-auto max-w-6xl w-full px-5 grid lg:grid-cols-[.85fr_1.15fr] gap-4 lg:gap-10 items-center pt-16 lg:pt-10">
            <ol className="space-y-1 lg:space-y-2 order-2 lg:order-1">
              {steps.map((x, i) => {
                const a = i === active;
                const done = i < active;
                return (
                  <li key={x.t}>
                    <a
                      href="#metodo"
                      onClick={(e) => { e.preventDefault(); const el = ref.current; if (!el) return; window.scrollTo({ top: el.offsetTop + (i / 5 + 0.02) * (el.offsetHeight - window.innerHeight), behavior: "smooth" }); }}
                      className="flex gap-3 lg:gap-4 p-2.5 lg:p-4 border transition-all duration-300" style={{ borderRadius: "2px", borderColor: a ? "var(--kb-fg)" : "transparent", background: a ? "var(--kb-surface)" : "transparent", opacity: a ? 1 : done ? 0.75 : 0.45 }}
                      
                    >
                      <span className="mono text-[13px] w-7 shrink-0 pt-1 transition-colors" style={{ color: a || done ? "var(--kb-brand)" : "var(--kb-fg-muted)" }}>{done ? "✓" : String(i + 1).padStart(2, "0")}</span>
                      <span>
                        <span className="display text-[18px] lg:text-[22px] block">{x.t}</span>
                        <span className="text-muted leading-relaxed block overflow-hidden transition-all duration-500" style={{ maxHeight: a ? 120 : 0, opacity: a ? 1 : 0, marginTop: a ? 6 : 0 }}>{x.d}</span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ol>

            <div className="card overflow-hidden order-1 lg:order-2">
              <div className="flex justify-between px-5 py-3 border-b border-line mono text-[12px] text-muted"><span>método · passo {s} de 5</span><span>{steps[active].t.toLowerCase()}</span></div>
              <svg viewBox="0 0 560 380" className="block w-full h-auto" role="img" aria-label="Árvore de investigação sendo construída passo a passo">
                {/* 1 · haste + sinais */}
                <g fill="none" stroke="var(--kb-fg)" strokeWidth="5" strokeLinecap="round" className={cls(1)}>
                  <path className="trace" d="M50 70 V350" style={{ ["--len" as string]: 280 }} />
                </g>
                <g className={cls(1)}>
                  {[110, 170, 240, 300].map((y, i) => <circle key={y} className="node-pop" cx="50" cy={y} r="3.5" fill="var(--kb-bg)" stroke="var(--kb-fg)" strokeWidth="2" style={{ ["--d" as string]: `${300 + i * 120}ms` }} />)}
                  <circle className="node-pop" cx="50" cy="350" r="7" fill="var(--kb-fg)" />
                  <text className="fade-in" x="68" y="354" style={{ fontFamily: "var(--kb-font-mono)", fontSize: 12, fill: "var(--kb-fg-muted)" }}>sintoma · orders-api reinicia 3/h</text>
                </g>
                {/* 2 · topologia */}
                <g className={cls(2)} style={{ fontFamily: "var(--kb-font-mono)", fontSize: 11 }}>
                  {["ingress", "api-gw", "orders-api", "postgres"].map((n, i) => (
                    <g key={n}>
                      {i > 0 && <path className="trace" d={`M${150 + (i - 1) * 105 + 78} 28 H${150 + i * 105}`} stroke="var(--kb-border)" strokeWidth="2" style={{ ["--len" as string]: 28, ["--d" as string]: `${i * 120}ms` }} />}
                      <g className="node-pop" style={{ ["--d" as string]: `${i * 120}ms` }}>
                        <rect x={150 + i * 105} y="14" width="78" height="28" rx="3" fill="var(--kb-surface)" stroke={n === "orders-api" ? "var(--kb-brand)" : "var(--kb-border)"} strokeWidth={n === "orders-api" ? 2 : 1.4} />
                        <text x={150 + i * 105 + 39} y="32" textAnchor="middle" fill="var(--kb-fg)">{n}</text>
                      </g>
                    </g>
                  ))}
                  <path className="trace" d="M276 42 C276 56 50 50 50 70" fill="none" stroke="var(--kb-brand)" strokeWidth="1.6" strokeDasharray="0" style={{ ["--len" as string]: 330, ["--d" as string]: "500ms" }} />
                </g>
                {/* 3 · hipóteses */}
                <g className={cls(3)} style={{ fontFamily: "var(--kb-font-sans)" }}>
                  <g fill="none" strokeLinecap="round" strokeWidth="5" stroke="var(--kb-fg)"><path className="trace" d="M50 140 L120 96" style={{ ["--len" as string]: 90 }} /></g>
                  <mask id="m2"><path className="trace" d="M50 215 L112 215" stroke="white" strokeWidth="9" style={{ ["--len" as string]: 70, ["--d" as string]: "200ms" }} /></mask>
                  <mask id="m3"><path className="trace" d="M50 285 L120 322" stroke="white" strokeWidth="9" style={{ ["--len" as string]: 90, ["--d" as string]: "400ms" }} /></mask>
                  <path d="M50 215 L112 215" stroke="var(--kb-discarded)" strokeWidth="5" strokeDasharray="14 11" mask="url(#m2)" />
                  <path d="M50 285 L120 322" stroke="var(--kb-discarded)" strokeWidth="5" strokeDasharray="14 11" mask="url(#m3)" />
                  <circle className="node-pop" cx="120" cy="96" r="10" fill="var(--kb-evidence)" style={{ ["--d" as string]: "700ms" }} />
                  <g className="fade-in" style={{ ["--d" as string]: "800ms" }}>
                    <text x="142" y="94" style={{ fontSize: 16, fontWeight: 600, fill: "var(--kb-fg)" }}>Memória no limite</text>
                    <text x="142" y="112" style={{ fontFamily: "var(--kb-font-mono)", fontSize: 11, fill: "var(--kb-fg-muted)" }}>limit 256Mi · uso 255Mi</text>
                    <text x="130" y="206" style={{ fontSize: 15, fill: "var(--kb-fg-muted)" }}>Mudança de versão</text>
                    <text x="130" y="224" style={{ fontFamily: "var(--kb-font-mono)", fontSize: 11, fill: "var(--kb-fg-muted)" }}>0 deploys em 1 h</text>
                    <text x="138" y="320" style={{ fontSize: 15, fill: "var(--kb-fg-muted)" }}>Falha de rede</text>
                    <text x="138" y="338" style={{ fontFamily: "var(--kb-font-mono)", fontSize: 11, fill: "var(--kb-fg-muted)" }}>0 timeouts no mesh</text>
                  </g>
                </g>
                {/* 4 · agentes */}
                <g className={cls(4)} style={{ fontFamily: "var(--kb-font-mono)", fontSize: 11 }}>
                  {[
                    { y: 80, n: "agente·métricas", ok: true },
                    { y: 197, n: "agente·deploy", ok: false },
                    { y: 305, n: "agente·mesh", ok: false },
                  ].map((a, i) => (
                    <g key={a.n} className="node-pop" style={{ ["--d" as string]: `${i * 220}ms` }}>
                      <rect x="378" y={a.y} width="150" height="30" rx="3" fill="var(--kb-surface)" stroke={a.ok ? "var(--kb-ok)" : "var(--kb-border)"} strokeWidth="1.4" strokeDasharray={a.ok ? "0" : "4 3"} />
                      <text x="388" y={a.y + 19} fill="var(--kb-fg)">{a.n}</text>
                      <text x="514" y={a.y + 19} textAnchor="end" fill={a.ok ? "var(--kb-ok)" : "var(--kb-fg-muted)"}>{a.ok ? "✓ prova" : "✕ cai"}</text>
                    </g>
                  ))}
                </g>
              </svg>
              <div className="px-5 py-4 border-t border-line flex flex-wrap items-center justify-between gap-3 bg-bg transition-opacity duration-500" style={{ opacity: s >= 5 ? 1 : 0.25 }}>
                <div className="mono text-[12.5px]">
                  <span style={{ color: "var(--kb-critical)" }}>- memory: 256Mi</span>{"  "}<span style={{ color: "var(--kb-ok)" }}>+ memory: 512Mi</span>
                </div>
                <span className="mono text-[11.5px] px-2.5 py-1 border border-line rounded" style={{ color: "var(--kb-warn)", background: "var(--kb-warn-soft)" }}>PR aberto · aguardando você</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



