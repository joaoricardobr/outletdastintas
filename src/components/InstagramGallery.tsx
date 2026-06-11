"use client";
import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Heart, MessageCircle } from "lucide-react";

const Instagram = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
  </svg>
);

const posts = [
  { id: "1", img: "/images/luxury_interior.png", likes: 247, comments: 18, caption: "Acabamento cimento queimado — Projeto exclusivo Petrolina ✨ #OutletDasTintas" },
  { id: "2", img: "/images/luxury_villa.png",    likes: 389, comments: 32, caption: "Fachada renovada com tinta térmica premium 🏠 #AcabamentosDeGrife" },
  { id: "3", img: "/images/abstract_paint.png",  likes: 512, comments: 47, caption: "Paleta exclusiva desenvolvida com a Arq. Mariana Lins 🎨 #Consultoria" },
  { id: "4", img: "/images/luxury_interior.png", likes: 198, comments: 14, caption: "Stucco veneziano aplicado em sala de jantar de alto padrão ✨" },
  { id: "5", img: "/images/luxury_villa.png",    likes: 304, comments: 23, caption: "Antes e depois — transformação completa em 5 dias 🏡" },
  { id: "6", img: "/images/abstract_paint.png",  likes: 441, comments: 36, caption: "Textura graffiato com efeito pedra natural — resultado incrível 🪨" },
];

export default function InstagramGallery() {
  return (
    <section style={{ width: "100%", padding: "96px 0", background: "#050505", position: "relative", overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      <div style={{ position: "absolute", right: "15%", top: "30%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(212,175,55,0.05),transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* header */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24, marginBottom: 48 }}>
          <div>
            <span style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#D4AF37", fontWeight: 600 }}>Galeria</span>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 700, color: "#fff", marginTop: 10, lineHeight: 1.2 }}>
              Nos Siga no{" "}
              <span style={{ background: "linear-gradient(135deg,#833AB4,#FD1D1D,#F77737)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Instagram</span>
            </h2>
          </div>
          <a href="https://www.instagram.com/outletdastintas_" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 22px", borderRadius: 40, borderWidth: 1, borderStyle: "solid", borderColor: "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)", color: "#fff", textDecoration: "none", fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", transition: "all 0.25s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.3)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)"; }}>
            <Instagram size={16} /> @outletdastintas_ <ExternalLink size={13} />
          </a>
        </div>

        {/* grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 4 }}>
          {posts.map(p => <InstaPost key={p.id} post={p} />)}
        </div>

        {/* follow CTA */}
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a href="https://www.instagram.com/outletdastintas_" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "13px 32px", borderRadius: 40, background: "linear-gradient(135deg,#833AB4,#FD1D1D,#F77737)", color: "#fff", textDecoration: "none", fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", transition: "box-shadow 0.3s" }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(253,29,29,0.4)")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}>
            <Instagram size={16} /> Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

function InstaPost({ post }: { post: typeof posts[0] }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden", cursor: "pointer", borderRadius: 4 }}>
      <Image src={post.img} alt={post.caption} fill style={{ objectFit: "cover", transition: "transform 0.5s", transform: hov ? "scale(1.08)" : "scale(1)" }} sizes="400px" />
      {/* hover overlay */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.62)", opacity: hov ? 1 : 0, transition: "opacity 0.3s", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 16, gap: 12 }}>
        <div style={{ display: "flex", gap: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#fff", fontSize: 14, fontWeight: 700 }}>
            <Heart size={20} fill="#fff" /> {post.likes}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#fff", fontSize: 14, fontWeight: 700 }}>
            <MessageCircle size={20} fill="#fff" /> {post.comments}
          </div>
        </div>
        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.8)", textAlign: "center", lineHeight: 1.5, maxWidth: 200 }}>{post.caption}</p>
      </div>
    </div>
  );
}
