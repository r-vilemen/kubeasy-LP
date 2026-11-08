import { useState } from "react";
import { Reveal, SectionHead } from "./common";
import { useCountUp } from "../hooks/hooks";
import { SIGNUP_URL } from "../config";

const groups: [string, string[]][] = [
  ["Orquestração", ["Kubernetes", "Helm"]],
  ["Malha e tráfego", ["Istio"]],
  ["Telemetria", ["Prometheus", "Loki", "CloudWatch"]],
  ["Dados gerenciados", ["AWS RDS"]],
  ["GitOps", ["GitHub", "Argo CD"]],
];

export function IntegrationsSection() {
  return (
    <section id="integracoes" className="py-24 lg:py-28 border-y border-line">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead n="05" label="Integrações" title={<>Chega ao que você <em>já usa.</em></>} lead="Sem trocar de stack. O Kubeasy lê onde seus sinais já estão e escreve onde seu time já revisa." />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {groups.map(([g, items], i) => (
            <Reveal key={g} delay={i * 80}>
              <div className="card card-lift p-5 h-full">
                <p className="label mb-4">{g}</p>
                <ul className="space-y-2">
                  {items.map((t) => (
                    <li key={t} className="mono text-[14px] transition-transform duration-200 hover:translate-x-1">{t}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mono text-[12px] text-muted mt-6">integrações via APIs abertas e agentes de telemetria padrão do mercado</p>
      </div>
    </section>
  );
}

const brl = (n: number) => n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

function Slider({ label, v, set, min, max, step = 1, fmt }: { label: string; v: number; set: (n: number) => void; min: number; max: number; step?: number; fmt: (n: number) => string }) {
  return (
    <label className="block">
      <span className="flex justify-between mb-2 text-[14px]"><span className="text-muted">{label}</span><span className="mono font-semibold">{fmt(v)}</span></span>
      <input type="range" min={min} max={max} step={step} value={v} onChange={(e) => set(+e.target.value)} />
    </label>
  );
}

export function CostSection() {
  const [inc, setInc] = useState(12);
  const [eng, setEng] = useState(3);
  const [hrs, setHrs] = useState(2);
  const [rate, setRate] = useState(120);
  const [cut, setCut] = useState(40);
  const saved = inc * eng * hrs * (cut / 100) * 12;
  const money = saved * rate;
  const aSaved = useCountUp(saved);
  const aMoney = useCountUp(money);

  return (
    <section id="custo" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 grid lg:grid-cols-[1fr_1fr] gap-14 items-start">
        <div>
          <SectionHead n="06" label="Quanto custa" title={<>Investigar à mão <em>tem preço.</em> Faça a sua conta.</>} lead="Ajuste com os números do seu time. A redução é uma hipótese sua, não uma promessa nossa." />
          <div className="card p-6 mt-10 space-y-6">
            <Slider label="Incidentes por mês" v={inc} set={setInc} min={1} max={60} fmt={(n) => `${n}`} />
            <Slider label="Engenheiros envolvidos por incidente" v={eng} set={setEng} min={1} max={10} fmt={(n) => `${n}`} />
            <Slider label="Horas de investigação por incidente" v={hrs} set={setHrs} min={0.5} max={8} step={0.5} fmt={(n) => `${n} h`} />
            <Slider label="Custo por hora de engenharia" v={rate} set={setRate} min={40} max={400} step={10} fmt={brl} />
            <Slider label="Redução esperada (sua hipótese)" v={cut} set={setCut} min={10} max={80} step={5} fmt={(n) => `${n}%`} />
          </div>
        </div>
        <Reveal delay={120} className="lg:sticky lg:top-28">
          <div data-theme="dark" className="rounded-tile p-8 lg:p-10 relative overflow-hidden paper" style={{ background: "var(--kb-bg)", color: "var(--kb-fg)", border: "1.4px solid var(--kb-fg)", boxShadow: "8px 8px 0 var(--kb-brand)" }}>
            <p className="label mb-4 relative">por ano, de volta para o seu time</p>
            <p className="display relative text-[clamp(56px,8vw,92px)] tabular-nums leading-none">{Math.round(aSaved).toLocaleString("pt-BR")}<span className="text-[.35em] text-muted ml-2 not-italic">horas</span></p>
            <p className="relative mono text-[22px] mt-5 text-brand tabular-nums">≈ {brl(aMoney)}</p>
            <p className="relative text-muted mt-6 leading-relaxed text-[15px]">E isso sem contar o que não aparece na planilha: sono, rotatividade de plantonistas e o cliente que não volta depois de um incidente longo.</p>
            <a href={SIGNUP_URL} className="btn btn-primary relative mt-8">Quero reduzir esse número →</a>
          </div>
          <p className="mono text-[11.5px] text-muted mt-3">horas = incidentes × engenheiros × horas × redução × 12 meses. Estimativa ilustrativa.</p>
        </Reveal>
      </div>
    </section>
  );
}



