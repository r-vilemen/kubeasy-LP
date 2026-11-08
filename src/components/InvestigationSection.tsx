import { useEffect, useRef, useState } from "react";
import { Check, Cross, SectionHead } from "./common";

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
        <SectionHead n="03" label="Na prática" title={<>Escolha um incidente. <em>Assista à investigação.</em></>} lead="Três cenários de SRE. Veja o que o Kubeasy testa, o que descarta e por quê." />

        <div className="mt-16 md:pl-[192px]">
          <div role="tablist" aria-label="Cenários" className="flex flex-wrap gap-x-8 gap-y-2 border-b border-line">
            {scenarios.map((s, i) => (
              <button key={s.id} role="tab" aria-selected={i === idx} onClick={() => run(i)} className="py-3 -mb-px text-[15px] border-b-2 transition-colors" style={{ borderColor: i === idx ? "var(--kb-fg)" : "transparent", color: i === idx ? "var(--kb-fg)" : "var(--kb-fg-muted)", fontWeight: i === idx ? 600 : 400 }}>
                {s.tab}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-[minmax(0,.8fr)_minmax(0,1.2fr)] gap-x-16 gap-y-12 pt-10">
            <div>
              <p className="label mb-3">Sintoma</p>
              <p className="display text-[clamp(26px,3vw,36px)]">{sc.symptom}</p>
              <div className="mt-10 transition-opacity duration-300" style={{ opacity: step >= 4 ? 1 : 0.25 }}>
                <p className="label mb-3">Proposta</p>
                <p className="font-semibold mb-3">{sc.fix}</p>
                <pre className="mono text-[12px] p-3 border border-line bg-surface overflow-x-auto" style={{ margin: 0, borderRadius: 2 }}>
                  <span style={{ color: "var(--kb-critical)" }}>- {sc.diff[0]}</span>{"\n"}<span style={{ color: "var(--kb-ok)" }}>+ {sc.diff[1]}</span>
                </pre>
                <p className="mono text-[12px] mt-3" style={{ color: "var(--kb-warn)" }}>Aguardando aprovação do {sc.approver}</p>
              </div>
              <button onClick={() => run(idx)} className="ulink mono text-[12px] text-muted hover:text-fg mt-8">repetir</button>
            </div>

            <ol className="rule-list" aria-live="polite">
              {sc.hyps.map((h, i) => {
                const shown = step >= i + 1;
                const done = step >= i + 2 || step >= 4;
                return (
                  <li key={h.t} className="flex gap-4 py-5 transition-opacity duration-300" style={{ opacity: shown ? 1 : 0.2 }}>
                    <span className="mt-1 w-4 shrink-0" style={{ color: done ? (h.ok ? "var(--kb-ok)" : "var(--kb-discarded)") : "var(--kb-brand)" }}>
                      {done ? (h.ok ? <Check /> : <Cross />) : <span className="mono text-[14px]">…</span>}
                    </span>
                    <div>
                      <p className={`display text-[22px] ${done && !h.ok ? "strike" : ""}`} style={{ fontWeight: done && h.ok ? 600 : 500 }}>{h.t}</p>
                      <p className="mono text-[13px] text-muted mt-1">{done ? h.fact : "testando contra os fatos do cluster…"}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
