import { Arrow, Logo } from "./common";
import { DEMO_URL, LOGIN_URL, SIGNUP_URL } from "../config";

export function FinalCta() {
  return (
    <section id="acesso" data-theme="dark" className="relative paper py-24 lg:py-36 overflow-hidden" style={{ background: "var(--kb-bg)", color: "var(--kb-fg)" }}>
      {/* ramos decorativos */}
      <svg aria-hidden className="absolute -left-10 top-0 h-full w-[420px] opacity-[.5] hidden lg:block" viewBox="0 0 420 700" preserveAspectRatio="xMinYMid slice">
        <g fill="none" stroke="var(--kb-border)" strokeWidth="3" strokeLinecap="round"><path d="M100 0 V700" /><path d="M100 220 L300 60" /><path d="M100 420 L260 540" strokeDasharray="10 9" /></g>
        <circle cx="300" cy="60" r="9" fill="var(--kb-brand)" />
      </svg>
      <div className="relative mx-auto max-w-4xl px-5 text-center">
        <p className="label mb-5">Comece agora</p>
        <h2 className="display text-[clamp(40px,6vw,76px)]">Na próxima madrugada, <em>chegue à causa antes do café.</em></h2>
        <p className="mt-6 text-[18px] text-muted max-w-[52ch] mx-auto leading-relaxed">Crie sua conta, conecte seu cluster e veja a primeira investigação com a evidência citada em cada conclusão.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a href={SIGNUP_URL} className="btn btn-primary !text-[17px] !px-8 !py-4">Criar minha conta <Arrow /></a>
          <a href={DEMO_URL} className="btn btn-ghost !text-[17px] !px-8 !py-4">Explorar a demonstração</a>
        </div>
        <p className="mt-6 text-[14px] text-muted">Já tem conta? <a href={LOGIN_URL} className="ulink text-fg font-semibold">Entrar</a></p>
        <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 mono text-[12.5px] text-muted">
          {["hipóteses testadas contra fatos", "mudanças como diff no GitOps", "produção só com a sua aprovação"].map((t) => <li key={t} className="border-l border-line pl-3">{t}</li>)}
        </ul>
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
          {[["Problema", "#problema"], ["Método", "#metodo"], ["Governança", "#governanca"], ["Criar conta", "#acesso"]].map(([t, h]) => <a key={h} href={h} className="ulink hover:text-fg">{t}</a>)}
        </nav>
        <p className="mono text-[12px] text-muted">© 2026 Kubeasy</p>
      </div>
    </footer>
  );
}



