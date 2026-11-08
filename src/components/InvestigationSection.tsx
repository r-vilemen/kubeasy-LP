import { useEffect, useRef, useState } from "react";
import { SectionHead, Reveal } from "./common";

type H = { t: string; fact: string; ok: boolean };
type Scenario = { id: string; tab: string; symptom: string; hyps: H[]; fix: string; diff: [string, string]; approver: string };

const scenarios: Scenario[] = [
  {
    id: "deploy", tab: "Erros 5xx após deploy", symptom: "502/503 no checkout logo após o rollout da v2.4.1",
    hyps: [
      { t: "Saturação do banco", fact: "conexões em 38% do máximo · descartada", ok: false },
      { t: "Falha de rede no mesh", fact: "0 resets no Istio fora do pod novo · descartada", ok: false },
      { t: "Variável de ambiente errada na v2.4.1", fact: "DB_POOL_TIMEOUT=0 no ReplicaSet novo, diff vs v2.4.0", ok: true },
    ],
    fix: "Reverter a v2.4.1 via PR no Argo CD", diff: ["image: payments:v2.4.1", "image: payments:v2.4.0"], approver: "líder de SRE",
  },
  {
    id: "oom", tab: "Pods em OOMKilled", symptom: "worker em CrashLoopBackOff, 3 reinícios por hora",
    hyps: [
      { t: "Mudança de versão", fact: "0 deploys em 1 h · descartada", ok: false },
      { t: "Nó sob pressão", fact: "memória do nó em 52% · descartada", ok: false },
      { t: "Limite de memória abaixo do uso real", fact: "working_set 255Mi de 256Mi antes de cada kill", ok: true },
    ],
    fix: "Subir o limite e isolar a fila de eventos", diff: ["memory: 256Mi", "memory: 512Mi"], approver: "dono do serviço",
  },
  {
    id: "rds", tab: "Latência sem alerta", symptom: "p99 do checkout 4× maior, nenhum alerta do Kubernetes",
    hyps: [
      { t: "CPU throttling nos pods", fact: "throttle < 2% · descartada", ok: false },
      { t: "DNS lento", fact: "resolução em 3 ms · descartada", ok: false },
      { t: "Consulta sem índice no RDS", fact: "traces SQL + ReadLatency do RDS apontam a mesma tabela", ok: true },
    ],
    fix: "Criar o índice recomendado com plano de execução", diff: ["-- sem índice em orders(customer_id)", "CREATE INDEX CONCURRENTLY idx_orders_customer …"], approver: "DBA de plantão",
  },
];

export function InvestigationSection() {
  const [idx, setIdx] = useState(0);
  const [step, setStep] = useState(0); // 0 sintoma, 1..3 hipóteses, 4 proposta
  const timers = useRef<number[]>([]);
  const sc = scenarios[idx];

  const run = (i: number) => {
    timers.current.forEach(clearTimeout);
    setIdx(i); setStep(0);
    timers.current = [1, 2, 3, 4].map((n) => window.setTimeout(() => setStep(n), 700 + n * 1100));
  };
  useEffect(() => { run(0); return () => timers.current.forEach(clearTimeout); }, []);

  return (
    <section id="investigacao" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead n="03" label="Na prática" title={<>Escolha um incidente. <em>Assista à investigação.</em></>} lead="Três cenários reais de SRE. Veja o que o Kubeasy testa, o que descarta e por quê." />
        <Reveal className="mt-12">
          <div role="tablist" className="flex flex-wrap gap-2 mb-6">
            {scenarios.map((s, i) => (
              <button key={s.id} role="tab" aria-selected={i === idx} onClick={() => run(i)} className="mono text-[13px] px-4 py-2.5 border rounded transition-all duration-200 hover:-translate-y-0.5" style={{ background: i === idx ? "var(--kb-fg)" : "transparent", color: i === idx ? "var(--kb-bg)" : "var(--kb-fg)", borderColor: i === idx ? "var(--kb-fg)" : "var(--kb-border)" }}>
                {s.tab}
              </button>
            ))}
          </div>
          <div className="card overflow-hidden">
            <div className="flex justify-between px-5 py-3 border-b border-line mono text-[12px] text-muted">
              <span>laudo · {sc.id}</span>
              <button onClick={() => run(idx)} className="ulink hover:text-fg">↻ repetir</button>
            </div>
            <div className="p-6 lg:p-8 grid lg:grid-cols-[.8fr_1.2fr] gap-8">
              <div>
                <p className="label mb-3">sintoma</p>
                <p className="display text-[28px]">{sc.symptom}</p>
                <div className="mt-8 transition-all duration-500" style={{ opacity: step >= 4 ? 1 : 0.2, transform: step >= 4 ? "none" : "translateY(10px)" }}>
                  <p className="label mb-3">proposta</p>
                  <p className="font-semibold mb-3">{sc.fix}</p>
                  <pre className="mono text-[12px] p-3 rounded border border-line bg-bg overflow-x-auto" style={{ margin: 0 }}>
                    <span style={{ color: "var(--kb-critical)" }}>- {sc.diff[0]}</span>{"\n"}<span style={{ color: "var(--kb-ok)" }}>+ {sc.diff[1]}</span>
                  </pre>
                  <p className="mono text-[12px] mt-3" style={{ color: "var(--kb-warn)" }}>aguardando aprovação do {sc.approver}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {sc.hyps.map((h, i) => {
                  const shown = step >= i + 1;
                  const done = step >= i + 2 || step >= 4;
                  return (
                    <li key={h.t} className="flex gap-4 p-4 border rounded transition-all duration-500" style={{ opacity: shown ? 1 : 0.15, transform: shown ? "none" : "translateX(16px)", borderColor: done && h.ok ? "var(--kb-ok)" : "var(--kb-border)", background: done && h.ok ? "var(--kb-ok-soft)" : "transparent", borderStyle: done && !h.ok ? "dashed" : "solid" }}>
                      <span className="mt-0.5 w-5 shrink-0 text-center mono text-[15px] font-semibold" style={{ color: done ? (h.ok ? "var(--kb-ok)" : "var(--kb-discarded)") : "var(--kb-brand)" }}>{done ? (h.ok ? "✓" : "✕") : shown ? "…" : ""}</span>
                      <div>
                        <p className={`font-semibold ${done && !h.ok ? "strike" : ""}`}>{h.t}</p>
                        <p className="mono text-[12.5px] text-muted mt-1">{done ? h.fact : "testando contra os fatos do cluster…"}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}


