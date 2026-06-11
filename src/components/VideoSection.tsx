"use client";
import { useState } from "react";
import { Play } from "lucide-react";
import Image from "next/image";

const videos = [
  {
    id: "v1",
    title: "Transformação Completa — Mansão Petrolina",
    subtitle: "Residencial Alto Padrão",
    desc: "Aplicação de cimento queimado, tinta térmica e impermeabilizante molecular em projeto de 480m².",
    thumbnail: "/images/luxury_villa.png",
    reelUrl: "https://www.instagram.com/outletdastintasdovale/reels/",
    duration: "REEL",
  },
  {
    id: "v2",
    title: "Consultoria de Cor — Projeto Arquitetônico",
    subtitle: "Showroom Experience",
    desc: "Processo de seleção de paleta para projeto corporativo com arquiteta parceira da Outlet das Tintas.",
    thumbnail: "/images/luxury_interior.png",
    reelUrl: "https://www.instagram.com/outletdastintasdovale/reels/",
    duration: "REEL",
  },
  {
    id: "v3",
    title: "Técnica Stucco Veneziano — Execução Premium",
    subtitle: "Tutorial Técnico",
    desc: "Demonstração da aplicação de stucco veneziano com acabamento polido e toque de madrepérola.",
    thumbnail: "/images/abstract_paint.png",
    reelUrl: "https://www.instagram.com/outletdastintasdovale/reels/",
    duration: "REEL",
  },
];

export default function VideoSection() {
  const [hov, setHov] = useState<string | null>(null);
  const featured = videos[0];
  const secondary = videos.slice(1);

  return (
    <section id="videos" style={{ width: "100%", padding: "96px 0", background: "#070707", position: "relative", overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      {/* ambient */}
      <div style={{ position: "absolute", left: "30%", top: "20%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(15,106,74,0.06),transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        {/* header */}
        <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 56px" }}>
          <span style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#D4AF37", fontWeight: 600 }}>Projetos em Vídeo</span>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, color: "#fff", marginTop: 12, lineHeight: 1.2 }}>
            Veja a{" "}
            <span style={{ background: "linear-gradient(135deg,#fff 10%,#D4AF37 60%,#AA7C11 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Transformação</span>
          </h2>
          <p style={{ color: "#777", marginTop: 14, fontWeight: 300, fontSize: 15, lineHeight: 1.7 }}>
            Acompanhe processos reais de aplicação, consultoria e resultado final dos nossos projetos de alto padrão no Instagram.
          </p>
        </div>

        {/* layout: big + small */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 24 }}>
          {/* Featured video */}
          <div style={{ gridColumn: "span 2" }} className="feat-col">
            <VideoCard v={featured} hov={hov === featured.id} onHov={() => setHov(featured.id)} onLeave={() => setHov(null)} featured />
          </div>
          {/* secondary */}
          {secondary.map(v => (
            <VideoCard key={v.id} v={v} hov={hov === v.id} onHov={() => setHov(v.id)} onLeave={() => setHov(null)} />
          ))}
        </div>
      </div>

      <style>{`
        @media(max-width:640px) { .feat-col { grid-column: span 1 !important; } }
      `}</style>
    </section>
  );
}

function VideoCard({ v, hov, onHov, onLeave, featured }: {
  v: typeof videos[0]; hov: boolean; onHov: () => void; onLeave: () => void; featured?: boolean;
}) {
  return (
    <a href={v.reelUrl} target="_blank" rel="noopener noreferrer"
      onMouseEnter={onHov} onMouseLeave={onLeave}
      style={{ display: "flex", flexDirection: "column", height: "100%", borderRadius: 16, overflow: "hidden", position: "relative", cursor: "pointer", borderWidth: 1, borderStyle: "solid", borderColor: hov ? "rgba(212,175,55,0.3)" : "rgba(255,255,255,0.08)", transition: "border-color 0.3s, box-shadow 0.3s", boxShadow: hov ? "0 20px 60px rgba(0,0,0,0.5)" : "none", textDecoration: "none" }}>
      {/* thumbnail */}
      <div style={{ position: "relative", aspectRatio: featured ? "16/8" : "16/9", overflow: "hidden" }}>
        <Image src={v.thumbnail} alt={v.title} fill style={{ objectFit: "cover", transition: "transform 0.6s", transform: hov ? "scale(1.06)" : "scale(1)", filter: "brightness(0.65)" }} sizes="900px" />
        {/* overlay gradient */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(5,5,5,0.85) 0%,transparent 50%)" }} />
        {/* duration badge */}
        <div style={{ position: "absolute", top: 14, right: 14, padding: "4px 10px", background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)", borderRadius: 6, fontSize: 11, color: "#ccc", letterSpacing: "0.1em", fontWeight: 700 }}>{v.duration}</div>
        {/* play button */}
        <div
          style={{ position: "absolute", top: "50%", left: "50%", transform: `translate(-50%,-50%) scale(${hov ? 1.1 : 1})`, transition: "transform 0.3s", width: featured ? 72 : 56, height: featured ? 72 : 56, borderRadius: "50%", background: hov ? "rgba(212,175,55,0.9)" : "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", borderWidth: 2, borderStyle: "solid", borderColor: hov ? "#D4AF37" : "rgba(255,255,255,0.25)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: hov ? "0 0 32px rgba(212,175,55,0.5)" : "none" }}>
          <Play size={featured ? 26 : 20} color={hov ? "#000" : "#fff"} fill={hov ? "#000" : "#fff"} style={{ marginLeft: 3 }} />
        </div>
        {/* info overlay */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "16px 20px" }}>
          <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4AF37", fontWeight: 600, marginBottom: 6 }}>{v.subtitle}</div>
          <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: featured ? 20 : 15, fontWeight: 700, color: "#fff", lineHeight: 1.3 }}>{v.title}</h3>
        </div>
      </div>
      {/* desc */}
      <div style={{ padding: "16px 20px", background: "#0d0d0d", flexGrow: 1 }}>
        <p style={{ fontSize: 12, color: "#777", lineHeight: 1.65, margin: 0 }}>{v.desc}</p>
      </div>
    </a>
  );
}
