import type { ReactNode } from "react";

/* Mantido por compatibilidade: sem animação de entrada em seções (movimento só na Hero e onde há ação do usuário). */
export function Reveal({ children, className = "", as: Tag = "div" }: { children: ReactNode; delay?: number; className?: string; as?: "div" | "li" | "section" | "p" | "h2" }) {
  return <Tag className={className}>{children}</Tag>;
}

export function Logo({ height = 34 }: { height?: number }) {
  const w = Math.round((height * 103) / 36);
  return (
    <>
      <img className="only-light" src="/brand/kubeasy-logotipo-claro.svg" alt="Kubeasy" width={w} height={height} />
      <img className="only-dark" src="/brand/kubeasy-logotipo-escuro.svg" alt="Kubeasy" width={w} height={height} />
    </>
  );
}

export function Seal({ kind, height = 28 }: { kind: "aprovado-por-humano" | "evidencia-citada"; height?: number }) {
  const alt = kind === "aprovado-por-humano" ? "Selo: aprovado por humano" : "Selo: evidência citada";
  return (
    <>
      <img className="only-light" src={`/brand/selo-${kind}-claro.svg`} alt={alt} height={height} style={{ height }} />
      <img className="only-dark" src={`/brand/selo-${kind}-escuro.svg`} alt={alt} height={height} style={{ height }} />
    </>
  );
}

/** Cabeçalho de seção assimétrico: rótulo numerado numa coluna estreita, título como âncora tipográfica. */
export function SectionHead({ n, label, title, lead }: { n: string; label: string; title: ReactNode; lead?: ReactNode }) {
  return (
    <div className="grid md:grid-cols-[160px_1fr] gap-x-8 gap-y-4">
      <p className="label pt-3 flex md:block gap-3"><span className="text-brand md:block md:mb-1">{n}</span>{label}</p>
      <div>
        <h2 className="display text-[clamp(36px,5.2vw,64px)] max-w-[18ch]">{title}</h2>
        {lead && <p className="mt-6 text-[18px] text-muted max-w-[56ch] leading-relaxed">{lead}</p>}
      </div>
    </div>
  );
}

/* Ícones próprios: traço 1.6, cantos retos, 16px. Mesma gramática do símbolo da marca. */
const base = { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "square" as const, "aria-hidden": true };
export const Arrow = () => <svg {...base}><path d="M2 8h11M9 4l4 4-4 4" /></svg>;
export const Check = () => <svg {...base}><path d="M3 8.5L6.5 12 13 4" /></svg>;
export const Cross = () => <svg {...base}><path d="M4 4l8 8M12 4l-8 8" /></svg>;
export const Play = () => <svg {...base} fill="currentColor" stroke="none"><path d="M4 2v12l10-6z" /></svg>;
export const Sun = () => <svg {...base} width={18} height={18}><circle cx="8" cy="8" r="3" /><path d="M8 1v2M8 13v2M1 8h2M13 8h2M3 3l1.4 1.4M11.6 11.6L13 13M3 13l1.4-1.4M11.6 4.4L13 3" /></svg>;
export const Moon = () => <svg {...base} width={18} height={18}><path d="M13.5 9.5A5.5 5.5 0 016.5 2.5a5.5 5.5 0 107 7z" /></svg>;
