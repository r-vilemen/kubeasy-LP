import { useCallback, useEffect, useRef, useState } from "react";

/** true quando o elemento entra na viewport (uma vez, ou sempre se `once=false`). */
export function useInView<T extends Element>(opts: { once?: boolean; threshold?: number; margin?: string } = {}) {
  const { once = true, threshold = 0.25, margin = "0px 0px -8% 0px" } = opts;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setInView(true); if (once) io.disconnect(); }
        else if (!once) setInView(false);
      },
      { threshold, rootMargin: margin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, threshold, margin]);
  return [ref, inView] as const;
}

/** progresso 0..1 da rolagem enquanto a seção atravessa a viewport. */
export function useSectionProgress<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const calc = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const v = total <= 0 ? 0 : Math.min(1, Math.max(0, -r.top / total));
      const q = Math.round(v * 500) / 500;
      setP((old) => (old === q ? old : q));
    };
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(calc); };
    calc();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);
  return [ref, p] as const;
}

/** Rolagem sem re-render por evento: a barra é atualizada direto no DOM; só `scrolled` vira estado (e só ao mudar). */
export function useScrollY(barRef: { current: HTMLElement | null }, threshold = 24) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    let raf = 0;
    const frame = () => {
      raf = 0;
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (barRef.current) barRef.current.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
      setScrolled(y > threshold);
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(frame); };
    frame();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
  }, [barRef, threshold]);
  return scrolled;
}
export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(
    () => (document.documentElement.getAttribute("data-theme") as "light" | "dark") || "light",
  );
  const toggle = useCallback(() => {
    setTheme((t) => {
      const n = t === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", n);
      try { localStorage.setItem("kb-theme", n); } catch { /* ignore */ }
      return n;
    });
  }, []);
  return [theme, toggle] as const;
}

/** anima um número até `to` com easing; reanima quando `to` muda. */
export function useCountUp(to: number, ms = 700) {
  const [v, setV] = useState(to);
  const from = useRef(to);
  useEffect(() => {
    const start = performance.now();
    const a = from.current;
    let raf = 0;
    const tick = (t: number) => {
      const k = Math.min(1, (t - start) / ms);
      const e = 1 - Math.pow(1 - k, 3);
      setV(a + (to - a) * e);
      if (k < 1) raf = requestAnimationFrame(tick); else from.current = to;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, ms]);
  return v;
}


