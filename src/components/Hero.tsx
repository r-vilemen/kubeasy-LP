import { useEffect, useRef, useState } from "react";
import { Arrow, Seal } from "./common";
import { SIGNUP_URL } from "../config";

type NodeKey = "causa" | "descartada" | "sintoma";
const info: Record<NodeKey, { t: string; d: string; e: string; tone: string }> = {
  sintoma: { t: "Sintoma", d: "orders-api reinicia em ciclo · 3/h", e: "kubectl get pods → CrashLoopBackOff", tone: "var(--kb-fg)" },
  causa: { t: "Causa confirmada", d: "memória no limite · OOMKilled", e: "container_memory_working_set = 255Mi / 256Mi", tone: "var(--kb-evidence)" },
  descartada: { t: "Descartada", d: "mudança de versão · 0 deploys em 1 h", e: "argocd history → último sync há 3 d", tone: "var(--kb-discarded)" },
};

/** O laudo vivo: o símbolo da marca desenhado como uma investigação. */
function Laudo() {
  const [on, setOn] = useState(false);
  const [hover, setHover] = useState<NodeKey>("causa");
  const timer = useRef<number>(0);
  const play = () => { setOn(false); window.clearTimeout(timer.current); timer.current = window.setTimeout(() => setOn(true), 120); };
  useEffect(() => { play(); return () => window.clearTimeout(timer.current); }, []);
  const h = info[hover];

  const hit = (k: NodeKey) => ({ onMouseEnter: () => setHover(k), onFocus: () => setHover(k), onClick: () => setHover(k), tabIndex: 0, role: "button" as const, "aria-label": info[k].t, style: { cursor: "pointer" } });

  return (
    <div className="card relative overflow-hidden" style={{ boxShadow: "0 28px 50px -26px rgba(18,20,22,.35), 0 2px 6px -2px rgba(18,20,22,.12)" }}>
      <div className="flex items-center justify-between px-5 py-3 border-b border-line mono text-[12px] text-muted">
        <span className="flex items-center gap-2"><span className="pulse-dot" /> laudo · orders-api · prod</span>
        <button onClick={play} className="ulink hover:text-fg" aria-label="Repetir a investigação">↻ repetir</button>
      </div>
      <svg viewBox="0 0 520 300" className={`block w-full h-auto px-2 pt-3 ${on ? "on" : ""}`} aria-label="Investigação: sintoma, causa confirmada e hipótese descartada">
        <g fill="none" strokeLinecap="round" strokeWidth={5} stroke="var(--kb-fg)">
          <path className="trace" d="M70 36 V250" style={{ ["--len" as string]: 214 }} />
          <path className="trace" d="M70 140 L196 36" style={{ ["--len" as string]: 164, ["--d" as string]: "450ms" }} />
          <mask id="hero-reveal">
            <path className="trace" d="M70 140 L190 226" stroke="white" strokeWidth={9} style={{ ["--len" as string]: 160, ["--d" as string]: "650ms" }} />
          </mask>
          <path d="M70 140 L190 226" stroke="var(--kb-discarded)" strokeDasharray="16 13" mask="url(#hero-reveal)" />
        </g>
        <circle className="node-pop" cx="196" cy="36" r="11" fill="var(--kb-evidence)" style={{ ["--d" as string]: "1000ms" }} />
        <circle className="node-pop" cx="70" cy="262" r="7" fill="var(--kb-fg)" style={{ ["--d" as string]: "300ms" }} />
        {/* áreas interativas */}
        <g className="fade-in" style={{ ["--d" as string]: "1100ms" }}>
          <g {...hit("causa")}>
            <rect x="214" y="12" width="290" height="52" fill="transparent" />
            <text x="222" y="34" className="fill-fg" style={{ fontFamily: "var(--kb-font-sans)", fontSize: 17, fontWeight: 600, fill: "var(--kb-fg)" }}>Causa confirmada</text>
            <text x="222" y="54" style={{ fontFamily: "var(--kb-font-mono)", fontSize: 12, fill: "var(--kb-fg-muted)" }}>memória no limite · OOMKilled</text>
          </g>
        </g>
        <g className="fade-in" style={{ ["--d" as string]: "1300ms" }}>
          <g {...hit("descartada")}>
            <rect x="204" y="198" width="300" height="52" fill="transparent" />
            <text x="212" y="220" style={{ fontFamily: "var(--kb-font-sans)", fontSize: 16, fontWeight: 500, fill: "var(--kb-fg-muted)" }}>Descartada</text>
            <text x="212" y="240" style={{ fontFamily: "var(--kb-font-mono)", fontSize: 12, fill: "var(--kb-fg-muted)" }}>mudança de versão · 0 em 1 h</text>
          </g>
        </g>
        <g className="fade-in" style={{ ["--d" as string]: "400ms" }}>
          <g {...hit("sintoma")}>
            <rect x="82" y="250" width="300" height="30" fill="transparent" />
            <text x="86" y="267" style={{ fontFamily: "var(--kb-font-sans)", fontSize: 15, fill: "var(--kb-fg)" }}>Sintoma</text>
            <text x="150" y="267" style={{ fontFamily: "var(--kb-font-mono)", fontSize: 12, fill: "var(--kb-fg-muted)" }}>orders-api reinicia em ciclo · 3/h</text>
          </g>
        </g>
      </svg>
      <div className="px-5 py-3 border-t border-line bg-bg min-h-[64px]" aria-live="polite">
        <p className="label !text-[10.5px] mb-1" style={{ color: h.tone }}>evidência · {h.t}</p>
        <p className="mono text-[12.5px] text-fg" key={hover} style={{ animation: "kb-in 240ms var(--kb-ease-trilha)" }}>{h.e}</p>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-t border-line">
        <span className="text-[14px] font-semibold">Proposta: limite 256Mi → 512Mi</span>
        <Seal kind="evidencia-citada" height={24} />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="topo" className="relative pt-[120px] pb-20 lg:pt-[150px] lg:pb-28 overflow-hidden">
      {/* margem de laudo: linha vertical sutil */}
      <div aria-hidden className="absolute inset-y-0 left-[max(20px,calc(50%-560px))] w-px bg-line opacity-60 hidden md:block" />
      <div className="mx-auto max-w-6xl px-5 grid lg:grid-cols-[1.05fr_1fr] gap-14 items-center">
        <div>
          <p className="label reveal in mb-6 flex items-center gap-3"><span className="inline-block w-2 h-2 rounded-full bg-brand" /> Para quem está de plantão em Kubernetes</p>
          <h1 className="display reveal in text-[clamp(44px,6.6vw,84px)]" style={{ ["--d" as string]: "80ms" } as React.CSSProperties}>
            Do alerta à causa, com a <span className="mark in italic">evidência citada.</span>
          </h1>
          <p className="reveal in mt-7 text-[19px] leading-relaxed text-muted max-w-[52ch]" style={{ ["--d" as string]: "200ms" } as React.CSSProperties}>
            Às 3 da manhã você não precisa de mais um dashboard. Precisa saber <strong className="text-fg font-semibold">o que quebrou, por quê, e o que é seguro fazer</strong>. O Kubeasy testa cada hipótese contra fatos do seu cluster e só muda produção quando você aprova.
          </p>
          <div className="reveal in mt-9 flex flex-wrap gap-4" style={{ ["--d" as string]: "320ms" } as React.CSSProperties}>
            <a href={SIGNUP_URL} className="btn btn-primary">Criar minha conta <Arrow /></a>
            <a href="#video" className="btn btn-ghost">
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden><path d="M3 1.5v11l9-5.5z" fill="currentColor" /></svg> Ver em ação
            </a>
          </div>
          <ul className="reveal in mt-10 flex flex-wrap gap-x-8 gap-y-3 mono text-[12.5px] text-muted" style={{ ["--d" as string]: "440ms" } as React.CSSProperties}>
            {["hipóteses testadas, não chutadas", "mudança vira diff no GitOps", "produção só com aprovação"].map((t) => (
              <li key={t} className="flex items-center gap-2"><span className="text-ok">✓</span>{t}</li>
            ))}
          </ul>
        </div>
        <div className="reveal in" style={{ ["--d" as string]: "260ms" } as React.CSSProperties}>
          <Laudo />
          <p className="mono text-[11.5px] text-muted mt-3 text-center">passe o mouse sobre os ramos · cada conclusão carrega o fato que a sustenta</p>
        </div>
      </div>
    </section>
  );
}

