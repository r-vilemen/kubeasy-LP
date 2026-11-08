import { Reveal, SectionHead } from "./common";
import { useSectionProgress } from "../hooks/hooks";

const wins = [
  { at: 0.12, name: "Grafana", body: ["p99 checkout ▲ 2.4s", "erro 5xx ▲ 14%"], x: "4%", y: "6%", r: -2.5, w: "46%" },
  { at: 0.28, name: "Loki", body: ["40.312 linhas / 5 min", "ctrl+F \"error\" → 9.870"], x: "42%", y: "2%", r: 2, w: "44%" },
  { at: 0.44, name: "kubectl", body: ["$ kubectl describe pod …", "Events: <none> ??"], x: "10%", y: "36%", r: 1.5, w: "42%" },
  { at: 0.58, name: "Argo CD", body: ["Synced · Healthy", "…e mesmo assim"], x: "50%", y: "32%", r: -1.5, w: "42%" },
  { at: 0.7, name: "#incidentes", body: ["fulano: reiniciei o pod", "ciclano: alguém mexeu em algo?"], x: "24%", y: "62%", r: 2.5, w: "48%" },
];

const beats: [number, string, string][] = [
  [0, "03:12", "O alerta toca. A latência do checkout está subindo."],
  [0.12, "03:14", "Grafana mostra que algo mudou. Não diz o quê."],
  [0.28, "03:31", "Loki devolve 40 mil linhas. Nenhuma diz “foi aqui”."],
  [0.44, "03:58", "Cada ferramenta conta um pedaço. Ninguém junta os pedaços."],
  [0.7, "04:20", "Alguém sugere apagar o pod. Em produção. Sem prova nenhuma."],
  [0.92, "04:47", "Era um limite de memória. Você levou 1h35 para descobrir."],
];

function clock(p: number) {
  const m = 3 * 60 + 12 + Math.round(p * 95);
  return `${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`;
}

const pains = [
  { t: "Hipótese sem prova", d: "O diagnóstico vira o palpite de quem está mais cansado. Ninguém registra o que foi descartado, e o mesmo erro volta na semana seguinte.", k: "achismo" },
  { t: "Comando impulsivo", d: "Sob pressão, kubectl delete e scale down viram reflexo. Um atalho às 3h vira o incidente maior das 5h.", k: "risco" },
  { t: "Pós-morte de memória", d: "Horas depois, o time reconstrói a linha do tempo a partir de prints e do Slack. O aprendizado se perde junto.", k: "dívida" },
];

export function ProblemSection() {
  const [ref, p] = useSectionProgress<HTMLDivElement>();
  const beat = [...beats].reverse().find(([at]) => p >= at) ?? beats[0];
  const late = p > 0.9;

  return (
    <section id="problema" data-theme="dark" className="relative paper" style={{ background: "var(--kb-bg)", color: "var(--kb-fg)" }}>
      <div className="relative mx-auto max-w-6xl px-5 pt-24 lg:pt-32">
        <SectionHead n="01" label="O problema" title={<>O incidente não é o que derruba você. <em>É a investigação.</em></>} lead="Em microsserviços, a causa mora entre ferramentas que não conversam. Cada minuto de busca é um minuto de usuário afetado, e de engenheiro esgotado." />
      </div>

      {/* cena presa à rolagem: o relógio corre enquanto as abas se acumulam */}
      <div ref={ref} className="relative" style={{ height: "340vh" }}>
        <div className="sticky top-0 h-screen flex items-center">
          <div className="mx-auto max-w-6xl w-full px-5 grid lg:grid-cols-[.9fr_1.1fr] gap-10 items-center">
            <div>
              <div className="mono flex items-baseline gap-4">
                <span className="text-[clamp(52px,10vw,128px)] leading-none font-medium tabular-nums" style={{ color: late ? "var(--kb-critical)" : "var(--kb-fg)", transition: "color 300ms" }}>{clock(p)}</span>
                <span className="label flex items-center gap-2"><span className="pulse-dot" /> incidente aberto</span>
              </div>
              <div className="mt-6 h-1.5 w-full max-w-sm bg-line rounded-full overflow-hidden" aria-hidden>
                <div className="h-full" style={{ width: `${p * 100}%`, background: late ? "var(--kb-critical)" : "var(--kb-brand)" }} />
              </div>
              <div className="mt-4 lg:mt-8 min-h-[100px] lg:min-h-[120px]" aria-live="polite">
                <p className="mono text-[13px] text-brand mb-2" key={beat[1]} style={{ animation: "kb-in 300ms var(--kb-ease-trilha)" }}>{beat[1]}</p>
                <p className="display text-[clamp(24px,3vw,34px)]" key={beat[2]} style={{ animation: "kb-in 360ms var(--kb-ease-trilha)" }}>{beat[2]}</p>
              </div>
              <p className="mono text-[11.5px] text-muted mt-6">cena ilustrativa · role para acompanhar a madrugada</p>
            </div>

            <div className="relative h-[280px] sm:h-[420px] lg:h-[480px]" aria-hidden>
              {wins.map((w) => {
                const shown = p >= w.at;
                return (
                  <div
                    key={w.name}
                    className="card absolute overflow-hidden"
                    style={{
                      left: w.x, top: w.y, width: w.w, ["--r" as string]: `${w.r}deg`,
                      opacity: shown ? 1 : 0, transform: shown ? `rotate(${w.r}deg)` : `translateY(-40px) rotate(${w.r * 3}deg)`,
                      transition: "opacity 300ms var(--kb-ease-trilha), transform 500ms cubic-bezier(.3,1.4,.5,1)",
                      boxShadow: "0 18px 30px -20px rgba(0,0,0,.7)",
                    }}
                  >
                    <div className="flex items-center justify-between px-3 py-1.5 border-b border-line mono text-[11px] text-muted"><span>{w.name}</span><span>● ● ●</span></div>
                    <div className="px-3 py-3 mono text-[12px] space-y-1.5">{w.body.map((l) => <p key={l} className="text-fg">{l}</p>)}</div>
                  </div>
                );
              })}
              <div className="absolute right-0 bottom-0 mono text-[12px] px-3 py-2 border border-line rounded bg-surface" style={{ opacity: p > 0.7 ? 1 : 0, transition: "opacity 300ms", color: "var(--kb-critical)" }}>
                $ kubectl delete pod orders-api-7c9d… <span className="caret" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-24 lg:pb-32">
        <Reveal className="mb-10"><p className="display text-[clamp(26px,3.4vw,40px)] max-w-3xl">Fragmentação operacional custa em <span className="mark italic">três moedas</span>:</p></Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {pains.map((x, i) => (
            <Reveal key={x.t} delay={i * 110}>
              <article className="card card-lift p-7 h-full">
                <p className="label !text-critical mb-4">{x.k}</p>
                <h3 className="display text-[26px] mb-3">{x.t}</h3>
                <p className="text-muted leading-relaxed">{x.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}


