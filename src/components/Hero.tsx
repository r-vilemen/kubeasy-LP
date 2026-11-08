import { useEffect, useRef, useState } from "react";
import { Arrow, Play, Seal } from "./common";
import { SIGNUP_URL } from "../config";

type NodeKey = "causa" | "descartada" | "sintoma";
const info: Record<NodeKey, { t: string; e: string; tone: string }> = {
  sintoma: { t: "Sintoma", e: "kubectl get pods → CrashLoopBackOff", tone: "var(--kb-fg)" },
  causa: { t: "Causa confirmada", e: "container_memory_working_set = 255Mi / 256Mi", tone: "var(--kb-evidence)" },
  descartada: { t: "Descartada", e: "argocd history → último sync há 3 d", tone: "var(--kb-discarded)" },
};

/** O laudo: o símbolo da marca desenhado como uma investigação. */
function Laudo() {
  const [on, setOn] = useState(false);
  const [hover, setHover] = useState<NodeKey>("causa");
  const timer = useRef<number>(0);
  const play = () => { setOn(false); window.clearTimeout(timer.current); timer.current = window.setTimeout(() => setOn(true), 120); };
  useEffect(() => { timer.current = window.setTimeout(() => setOn(true), 500); return () => window.clearTimeout(timer.current); }, []);
  const h = info[hover];
  const hit = (k: NodeKey) => ({ onMouseEnter: () => setHover(k), onFocus: () => setHover(k), onClick: () => setHover(k), tabIndex: 0, role: "button" as const, "aria-label": `${info[k].t}: ver evidência`, style: { cursor: "pointer" } });

  return (
    <figure className="card m-0">
      <figcaption className="flex items-center justify-between px-5 py-3 border-b border-line mono text-[12px] text-muted">
        <span>laudo · orders-api · prod</span>
        <button onClick={play} className="ulink hover:text-fg">repetir</button>
      </figcaption>
      <svg viewBox="0 0 520 300" className={`block w-full h-auto px-2 pt-3 ${on ? "on" : ""}`} role="img" aria-label="Investigação: sintoma orders-api reinicia em ciclo; causa confirmada, memória no limite; hipótese descartada, mudança de versão.">
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
        <g className="fade-in" style={{ ["--d" as string]: "1100ms" }}>
          <g {...hit("causa")}>
            <rect x="214" y="12" width="290" height="52" fill="transparent" />
            <text x="222" y="34" style={{ fontFamily: "var(--kb-font-sans)", fontSize: 17, fontWeight: 600, fill: "var(--kb-fg)" }}>Causa confirmada</text>
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
      <div className="px-5 py-4 border-t border-line min-h-[72px]" aria-live="polite">
        <p className="label mb-1" style={{ color: h.tone }}>evidência · {h.t}</p>
        <p className="mono text-[13px] text-fg" key={hover}>{h.e}</p>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-3 border-t border-line">
        <span className="text-[14px] font-semibold">Proposta: limite 256Mi → 512Mi</span>
        <Seal kind="evidencia-citada" height={24} />
      </div>
    </figure>
  );
}

const d = (ms: number) => ({ ["--d" as string]: `${ms}ms` } as React.CSSProperties);

export function Hero() {
  return (
    <section id="topo" className="relative pt-[112px] pb-24 lg:pt-[136px] lg:pb-32">
      <div className="mx-auto max-w-6xl px-5">
        <p className="label enter mb-8 flex items-center gap-4"><span className="h-px w-12 bg-brand" /> Para quem está de plantão em Kubernetes</p>
        <h1 className="display enter text-[clamp(48px,9vw,128px)] max-w-[13ch]" style={{ ...d(80), lineHeight: 0.98 }}>
          Do alerta à causa, com a <em className="mark">evidência citada.</em>
        </h1>

        <div className="mt-14 lg:mt-20 grid lg:grid-cols-12 gap-x-12 gap-y-14 items-start">
          <div className="lg:col-span-5">
            <p className="enter text-[20px] leading-relaxed text-muted" style={d(260)}>
              Às 3 da manhã você não precisa de mais um dashboard. Precisa saber <strong className="text-fg font-semibold">o que quebrou, por quê, e o que é seguro fazer</strong>. O Kubeasy testa cada hipótese contra fatos do seu cluster e só muda produção quando você aprova.
            </p>
            <div className="enter mt-10 flex flex-wrap gap-4" style={d(380)}>
              <a href={SIGNUP_URL} className="btn btn-primary">Criar minha conta <Arrow /></a>
              <a href="#video" className="btn btn-ghost"><Play /> Ver em ação</a>
            </div>
            <ul className="enter mt-12 space-y-3 mono text-[13px] text-muted" style={d(480)}>
              {["hipóteses testadas, não chutadas", "mudança vira diff no GitOps", "produção só com aprovação"].map((t) => <li key={t} className="border-l border-line pl-3">{t}</li>)}
            </ul>
          </div>
          <div className="enter lg:col-span-7 lg:mt-[-72px]" style={d(400)}>
            <Laudo />
            <p className="mono text-[12px] text-muted mt-3">Passe o mouse nos ramos: cada conclusão carrega o fato que a sustenta.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
