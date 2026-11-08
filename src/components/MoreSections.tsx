import { useState } from "react";
import { Arrow, SectionHead } from "./common";
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
    <section id="integracoes" className="py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead n="05" label="Integrações" title={<>Chega ao que você <em>já usa.</em></>} lead="Sem trocar de stack. O Kubeasy lê onde seus sinais já estão e escreve onde seu time já revisa." />
        <dl className="mt-16 md:pl-[192px] rule-list border-y border-line">
          {groups.map(([g, items]) => (
            <div key={g} className="grid sm:grid-cols-[180px_1fr] gap-x-8 gap-y-1 py-5 items-baseline">
              <dt className="label">{g}</dt>
              <dd className="display text-[clamp(26px,3.2vw,40px)] m-0">{items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
        <p className="mono text-[12px] text-muted mt-6 md:pl-[192px]">Integrações via APIs abertas e agentes de telemetria padrão do mercado.</p>
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
          <div className="mt-12 space-y-6 md:pl-[192px]">
            <Slider label="Incidentes por mês" v={inc} set={setInc} min={1} max={60} fmt={(n) => `${n}`} />
            <Slider label="Engenheiros envolvidos por incidente" v={eng} set={setEng} min={1} max={10} fmt={(n) => `${n}`} />
            <Slider label="Horas de investigação por incidente" v={hrs} set={setHrs} min={0.5} max={8} step={0.5} fmt={(n) => `${n} h`} />
            <Slider label="Custo por hora de engenharia" v={rate} set={setRate} min={40} max={400} step={10} fmt={brl} />
            <Slider label="Redução esperada (sua hipótese)" v={cut} set={setCut} min={10} max={80} step={5} fmt={(n) => `${n}%`} />
          </div>
        </div>
        <div className="lg:sticky lg:top-28">
          <div data-theme="dark" className="p-8 lg:p-10 relative overflow-hidden paper" style={{ background: "var(--kb-bg)", color: "var(--kb-fg)", border: "1px solid var(--kb-border)", borderRadius: 2 }}>
            <p className="label mb-4 relative">por ano, de volta para o seu time</p>
            <p className="display relative text-[clamp(56px,8vw,92px)] tabular-nums leading-none">{Math.round(aSaved).toLocaleString("pt-BR")}<span className="text-[.35em] text-muted ml-2 not-italic">horas</span></p>
            <p className="relative mono text-[22px] mt-5 text-brand tabular-nums">≈ {brl(aMoney)}</p>
            <p className="relative text-muted mt-6 leading-relaxed text-[15px]">E isso sem contar o que não aparece na planilha: sono, rotatividade de plantonistas e o cliente que não volta depois de um incidente longo.</p>
            <a href={SIGNUP_URL} className="btn btn-primary relative mt-8">Quero reduzir esse número <Arrow /></a>
          </div>
          <p className="mono text-[12px] text-muted mt-3">horas = incidentes × engenheiros × horas × redução × 12 meses. Estimativa ilustrativa.</p>
        </div>
      </div>
    </section>
  );
}




