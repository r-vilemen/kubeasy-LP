import { useRef, useState } from "react";
import { Reveal, SectionHead } from "./common";

/**
 * VÍDEO — para adicionar depois: coloque o arquivo em /public/video/demo.mp4
 * (e um poster em /public/video/poster.jpg), depois preencha VIDEO_SRC abaixo.
 * Para YouTube/Vimeo, preencha EMBED_URL com a URL de embed.
 */
const VIDEO_SRC = ""; // ex.: "/video/demo.mp4"
const POSTER = ""; // ex.: "/video/poster.jpg"
const EMBED_URL = ""; // ex.: "https://www.youtube.com/embed/XXXX"

export function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const vref = useRef<HTMLVideoElement>(null);
  const hasVideo = Boolean(VIDEO_SRC || EMBED_URL);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const play = () => { setPlaying(true); requestAnimationFrame(() => vref.current?.play()); };

  return (
    <section id="video" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHead n="00" label="Demonstração" title={<>Uma investigação, <em>do alerta ao diff</em>, em poucos minutos.</>} lead="Veja o Kubeasy abrir um alerta, descartar hipóteses com fatos e propor a mudança para você aprovar." />
        <Reveal className="mt-12">
          <div
            className="relative card overflow-hidden aspect-video group"
            style={{ transform: `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`, transition: "transform 200ms var(--kb-ease-trilha)", boxShadow: "0 40px 70px -40px rgba(18,20,22,.5)" }}
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              setTilt({ x: ((e.clientX - r.left) / r.width - 0.5) * 3, y: -((e.clientY - r.top) / r.height - 0.5) * 3 });
            }}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          >
            <div className="absolute top-0 inset-x-0 z-10 flex items-center justify-between px-5 py-3 border-b border-line bg-surface mono text-[12px] text-muted">
              <span>demo · incidente orders-api</span><span>{hasVideo ? "00:00" : "em breve"}</span>
            </div>
            {playing && VIDEO_SRC && <video ref={vref} src={VIDEO_SRC} poster={POSTER} controls playsInline className="absolute inset-0 w-full h-full object-cover pt-[41px] bg-black" />}
            {playing && EMBED_URL && <iframe src={EMBED_URL + "?autoplay=1"} title="Demonstração Kubeasy" allow="autoplay; fullscreen" className="absolute inset-0 w-full h-full pt-[41px]" />}
            {!playing && (
              <button onClick={hasVideo ? play : undefined} aria-label={hasVideo ? "Reproduzir demonstração" : "Vídeo em breve"} className="absolute inset-0 pt-[41px] w-full grid place-items-center bg-bg" style={{ cursor: hasVideo ? "pointer" : "default" }}>
                {POSTER && <img src={POSTER} alt="" className="absolute inset-0 w-full h-full object-cover" />}
                {/* fundo: ramos desenhados em loop lento */}
                <svg aria-hidden viewBox="0 0 800 450" className="absolute inset-0 w-full h-full opacity-[.55]" preserveAspectRatio="xMidYMid slice">
                  <g fill="none" stroke="var(--kb-border)" strokeWidth="2" strokeLinecap="round">
                    {[0, 1, 2, 3, 4, 5].map((i) => (
                      <path key={i} d={`M${60 + i * 130} 450 V${260 - (i % 3) * 40} L${130 + i * 130} ${200 - (i % 2) * 50}`} strokeDasharray="6 8" />
                    ))}
                  </g>
                  {[0, 1, 2, 3, 4, 5].map((i) => <circle key={i} cx={130 + i * 130} cy={200 - (i % 2) * 50} r="5" fill="var(--kb-brand)" opacity=".7" />)}
                </svg>
                <span className="relative grid place-items-center w-24 h-24 rounded-full bg-brand text-brand-fg transition-transform duration-300 group-hover:scale-110" style={{ boxShadow: "5px 5px 0 var(--kb-fg)" }}>
                  <svg width="30" height="30" viewBox="0 0 14 14" aria-hidden><path d="M3.5 1.5v11l9-5.5z" fill="currentColor" /></svg>
                </span>
                <span className="relative mt-6 label">{hasVideo ? "Assistir · 2 min" : "O vídeo da demonstração entra aqui"}</span>
              </button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

