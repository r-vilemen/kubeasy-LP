import { useEffect, useRef, useState } from "react";
import { Arrow, Logo, Moon, Sun } from "./common";
import { useScrollY, useTheme } from "../hooks/hooks";
import { LOGIN_URL, SIGNUP_URL } from "../config";

const links = [
  ["O problema", "#problema"],
  ["Como funciona", "#metodo"],
  ["Na prática", "#investigacao"],
  ["Governança", "#governanca"],
  ["Quanto custa", "#custo"],
] as const;

export function Header() {
  const bar = useRef<HTMLDivElement>(null);
  const scrolled = useScrollY(bar);
  const [theme, toggle] = useTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = links.map(([, h]) => h.slice(1));
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive("#" + e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div ref={bar} className="scroll-line" style={{ transform: "scaleX(0)" }} aria-hidden />
      <header
        className="fixed top-0 inset-x-0 z-50 transition-[background-color,border-color] duration-300"
        style={{
          background: scrolled || open ? "var(--kb-bg)" : "transparent",
          borderBottom: `1px solid ${scrolled ? "var(--kb-border)" : "transparent"}`,
        }}
      >
        <div className="mx-auto max-w-6xl px-5 h-[64px] flex items-center justify-between gap-6">
          <a href="#topo" aria-label="Kubeasy — início" className="shrink-0 transition-transform hover:-translate-y-0.5"><Logo height={30} /></a>
          <nav className="hidden lg:flex items-center gap-7 text-[14px]" aria-label="Seções">
            {links.map(([t, h]) => (
              <a key={h} href={h} className={`ulink text-muted hover:text-fg ${active === h ? "active text-fg" : ""}`}>{t}</a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              aria-label={theme === "light" ? "Usar tema escuro" : "Usar tema claro"}
              className="grid place-items-center w-10 h-10 border border-line hover:border-fg transition-colors"
            >
              {theme === "light" ? <Moon /> : <Sun />}
            </button>
            <a href={LOGIN_URL} className="ulink hidden sm:inline text-[14px] text-muted hover:text-fg">Entrar</a>
            <a href={SIGNUP_URL} className="btn btn-primary hidden sm:inline-flex !py-2.5 !text-[14px]">Criar conta <Arrow /></a>
            <button className="lg:hidden grid place-items-center w-10 h-10 border border-line" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label="Menu">
              <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none">
                <path d={open ? "M5 5l14 14M19 5L5 19" : "M4 8h16M4 16h16"} />
              </svg>
            </button>
          </div>
        </div>
        {open && (
          <nav className="lg:hidden border-t border-line px-5 py-4 flex flex-col gap-4" aria-label="Seções (mobile)">
            {links.map(([t, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="text-[17px]">{t}</a>)}
            <a href={LOGIN_URL} className="text-[17px]">Entrar</a>
            <a href={SIGNUP_URL} className="btn btn-primary justify-center">Criar conta</a>
          </nav>
        )}
      </header>
    </>
  );
}




