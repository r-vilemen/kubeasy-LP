import type { CSSProperties, ReactNode } from "react";
import { useInView } from "../hooks/hooks";

export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: { children: ReactNode; delay?: number; className?: string; as?: "div" | "li" | "section" | "p" | "h2" }) {
  const [ref, inView] = useInView<HTMLElement>();
  return (
    <Tag ref={ref as never} className={`reveal ${inView ? "in" : ""} ${className}`} style={{ "--d": `${delay}ms` } as CSSProperties}>
      {children}
    </Tag>
  );
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

export function SectionHead({ n, label, title, lead, align = "left" }: { n: string; label: string; title: ReactNode; lead?: ReactNode; align?: "left" | "center" }) {
  return (
    <Reveal className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <p className="label mb-5 flex items-center gap-3" style={{ justifyContent: align === "center" ? "center" : "flex-start" }}>
        <span className="text-brand">{n}</span><span className="h-px w-8 bg-line" />{label}
      </p>
      <h2 className="display text-[clamp(32px,4.6vw,56px)]">{title}</h2>
      {lead && <p className="mt-5 text-[17px] text-muted max-w-[60ch] leading-relaxed" style={{ marginInline: align === "center" ? "auto" : 0 }}>{lead}</p>}
    </Reveal>
  );
}

export const Arrow = () => <span className="arrow" aria-hidden>→</span>;
