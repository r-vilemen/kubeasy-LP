import { useEffect, useRef, useState } from "react";
import { SectionHead, Seal } from "./common";

const points = [
  ["Nada vai a produção sozinho", "Toda mudança vira diff e pull request no seu GitOps. Reversível por git, com autor e motivo."],
  ["Aprovação forte para ações sensíveis", "Passkey (FIDO2) ou TOTP para liberar o que mexe em produção."],
  ["Trilha de auditoria completa", "Hipóteses, evidências e comandos sugeridos ficam registrados. O pós-morte já nasce pronto."],
];

function ApprovalCard() {
  const [p, setP] = useState(0);
  const [done, setDone] = useState(false);
  const raf = useRef(0);
  const t0 = useRef(0);
  const HOLD = 1200;

  const tick = (t: number) => {
    const k = Math.min(1, (t - t0.current) / HOLD);
    setP(k);
    if (k >= 1) { setDone(true); return; }
    raf.current = requestAnimationFrame(tick);
  };
  const start = () => { if (done) return; t0.current = performance.now(); raf.current = requestAnimationFrame(tick); };
  const stop = () => { cancelAnimationFrame(raf.current); if (!done) setP(0); };
  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  return (
    <div className="card overflow-hidden relative">
      <div className="flex justify-between px-5 py-3 border-b border-line mono text-[12px] text-muted"><span>aprovação · orders-api</span><span>demonstração</span></div>
      <div className="p-6 space-y-5">
        <div>
          <p className="label mb-2">proposta</p>
          <p className="display text-[26px]">Subir limite de memória de 256Mi para 512Mi</p>
        </div>
        <pre className="mono text-[12.5px] p-4 rounded border border-line bg-bg" style={{ margin: 0 }}>
          <span className="text-muted">@@ deploy/orders-api.yaml</span>{"\n"}
          <span style={{ color: "var(--kb-critical)" }}>-   memory: 256Mi</span>{"\n"}
          <span style={{ color: "var(--kb-ok)" }}>+   memory: 512Mi</span>
        </pre>
        <div className="flex items-center gap-2 mono text-[12px] text-muted"><Seal kind="evidencia-citada" height={22} /> <span>working_set 255Mi / 256Mi</span></div>

        {!done ? (
          <div className="flex gap-3">
            <button
              onPointerDown={start} onPointerUp={stop} onPointerLeave={stop} onPointerCancel={stop}
              onKeyDown={(e) => (e.key === " " || e.key === "Enter") && !e.repeat && start()} onKeyUp={stop}
              className="btn btn-primary relative overflow-hidden flex-1 select-none" style={{ touchAction: "none" }}
              aria-label="Segure para aprovar"
            >
              <span className="absolute inset-y-0 left-0" style={{ width: `${p * 100}%`, background: "var(--kb-fg)", opacity: 0.28 }} aria-hidden />
              <span className="relative">{p > 0 ? "Segure…" : "Segure para aprovar"}</span>
            </button>
            <button className="btn btn-ghost" onClick={() => setP(0)}>Rejeitar</button>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="stamp origin-left"><Seal kind="aprovado-por-humano" height={32} /></div>
            <div className="mono text-[12px] text-muted text-right">
              <p style={{ color: "var(--kb-ok)" }}>✓ PR #482 mesclado no GitOps</p>
              <button onClick={() => { setDone(false); setP(0); }} className="ulink hover:text-fg">↻ refazer</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function GovernanceSection() {
  return (
    <section id="governanca" data-theme="dark" className="py-24 lg:py-32 paper relative" style={{ background: "var(--kb-bg)", color: "var(--kb-fg)" }}>
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHead n="04" label="Governança" title={<>Automação que você <em>consegue assinar embaixo.</em></>} lead="Velocidade sem controle é só outro jeito de derrubar produção. Aqui, quem decide é você." />
        <div className="mt-16 md:pl-[192px] grid lg:grid-cols-2 gap-x-16 gap-y-12 items-start">
          <ul>
            {points.map(([t, d], i) => (
              <li key={t} className="flex gap-4 py-6 border-t border-line last:border-b">
                <span className="mono text-brand text-[13px] mt-1">0{i + 1}</span>
                <div><h3 className="display text-[24px]">{t}</h3><p className="text-muted mt-2 leading-relaxed">{d}</p></div>
              </li>
            ))}
          </ul>
          <div><ApprovalCard /><p className="mono text-[12px] text-muted mt-3">Experimente: segure o botão por um instante.</p></div>
        </div>
      </div>
    </section>
  );
}
