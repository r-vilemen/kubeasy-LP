import { useState } from "react";
import { Arrow, Logo, Seal } from "./common";

export function FinalCta() {
  const [sent, setSent] = useState(false);
  const [f, setF] = useState({ name: "", email: "", size: "10-50" });

  return (
    <section id="acesso" data-theme="dark" className="relative paper py-24 lg:py-32 overflow-hidden" style={{ background: "var(--kb-bg)", color: "var(--kb-fg)" }}>
      {/* ramos decorativos */}
      <svg aria-hidden className="absolute -left-10 top-0 h-full w-[420px] opacity-[.5] hidden lg:block" viewBox="0 0 420 700" preserveAspectRatio="xMinYMid slice">
        <g fill="none" stroke="var(--kb-border)" strokeWidth="3" strokeLinecap="round"><path d="M100 0 V700" /><path d="M100 220 L300 60" /><path d="M100 420 L260 540" strokeDasharray="10 9" /></g>
        <circle cx="300" cy="60" r="9" fill="var(--kb-brand)" />
      </svg>
      <div className="relative mx-auto max-w-6xl px-5 grid lg:grid-cols-[1.1fr_.9fr] gap-14 items-center">
        <div className="lg:pl-24">
          <p className="label mb-5">Acesso antecipado</p>
          <h2 className="display text-[clamp(38px,5.6vw,68px)]">Na próxima madrugada, <em>chegue à causa antes do café.</em></h2>
          <p className="mt-6 text-[18px] text-muted max-w-[48ch] leading-relaxed">Entre no programa de acesso antecipado e leve a investigação estruturada para o seu cluster. Vagas limitadas por turma, com acompanhamento direto do time de engenharia.</p>
          <ul className="mt-8 space-y-3 mono text-[13px]">
            {["Sessão técnica no seu cenário real", "Fale direto com quem constrói", "Sem cartão, sem compromisso"].map((t) => <li key={t} className="flex gap-3"><span className="text-ok">✓</span>{t}</li>)}
          </ul>
        </div>
        <div className="card p-7 lg:p-8" style={{ boxShadow: "8px 8px 0 var(--kb-brand)", borderColor: "var(--kb-fg)" }}>
          {!sent ? (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
              <div><h3 className="display text-[28px]">Peça seu acesso</h3><p className="text-muted text-[14px] mt-1">Respondemos em até 1 dia útil.</p></div>
              <label className="block"><span className="label block mb-2">Nome</span><input required className="field" placeholder="Seu nome" value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} /></label>
              <label className="block"><span className="label block mb-2">E-mail corporativo</span><input required type="email" className="field" placeholder="voce@empresa.com" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} /></label>
              <label className="block"><span className="label block mb-2">Tamanho do cluster</span>
                <select className="field" value={f.size} onChange={(e) => setF({ ...f, size: e.target.value })}>
                  <option value="1-10">1 a 10 nós</option><option value="10-50">10 a 50 nós</option><option value="50-200">50 a 200 nós</option><option value="200+">200+ nós / multi-cluster</option>
                </select>
              </label>
              <button type="submit" className="btn btn-primary w-full justify-center">Quero acesso antecipado <Arrow /></button>
              <p className="mono text-[11.5px] text-muted text-center">Sem spam. Só contato técnico.</p>
            </form>
          ) : (
            <div className="text-center py-8 space-y-5">
              <div className="stamp inline-block"><Seal kind="aprovado-por-humano" height={34} /></div>
              <h3 className="display text-[30px]">Pedido registrado, {f.name.split(" ")[0]}.</h3>
              <p className="text-muted">Vamos escrever para <strong className="text-fg">{f.email}</strong> para marcar a sessão.</p>
              <button onClick={() => setSent(false)} className="ulink mono text-[12px] text-muted hover:text-fg">voltar</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="mx-auto max-w-6xl px-5 flex flex-wrap items-center justify-between gap-6">
        <div className="space-y-3"><Logo height={28} /><p className="mono text-[12px] text-muted">Do alerta à causa, com a evidência citada.</p></div>
        <nav className="flex flex-wrap gap-6 text-[14px] text-muted" aria-label="Rodapé">
          {[["Problema", "#problema"], ["Método", "#metodo"], ["Governança", "#governanca"], ["Acesso", "#acesso"]].map(([t, h]) => <a key={h} href={h} className="ulink hover:text-fg">{t}</a>)}
        </nav>
        <p className="mono text-[12px] text-muted">© 2026 Kubeasy</p>
      </div>
    </footer>
  );
}
