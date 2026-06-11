"use client";
import { useState } from "react";
import Image from "next/image";
import { Star, Play, X, Quote } from "lucide-react";

const testimonials = [
  {
    id: "1",
    name: "Arq. Mariana Lins",
    role: "Arquiteta de Interiores",
    project: "Cobertura Orla Petrolina",
    quote: "Especificar os acabamentos da Outlet das Tintas me garante que o resultado final da obra será exatamente o que desenhei no projeto 3D. O cimento queimado deles é impecável.",
    rating: 5,
    thumbnail: "/images/luxury_interior.png",
  },
  {
    id: "2",
    name: "Dr. Roberto Cavalcanti",
    role: "Proprietário de Residência",
    project: "Mansão Alphaville Petrolina",
    quote: "O atendimento consultivo é o grande diferencial. Recebi uma verdadeira aula sobre tintas térmicas e texturas de luxo. A pintura de fachada resiste bravamente ao sol do sertão.",
    rating: 5,
    thumbnail: "/images/luxury_villa.png",
  },
];

export default function Testimonials() {
  const [modal, setModal] = useState(false);

  return (
    <section id="depoimentos" style={{ width: "100%", padding: "96px 0", background: "#070707", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: "20%", top: "20%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(212,175,55,0.05),transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 64px" }}>
          <span style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#D4AF37", fontWeight: 600 }}>Depoimentos</span>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, color: "#fff", marginTop: 12, lineHeight: 1.2 }}>
            O Reconhecimento dos <span className="gold-text">Grandes Nomes</span>
          </h2>
          <p style={{ color: "#777", marginTop: 16, fontWeight: 300, fontSize: 15, lineHeight: 1.7 }}>
            A opinião de quem projeta e vive em ambientes transformados pelas nossas soluções de alto padrão.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 24 }}>
          {testimonials.map(t => (
            <div key={t.id} style={{ padding: 36, borderRadius: 20, background: "rgba(17,17,17,0.78)", backdropFilter: "blur(20px)", border: "1px solid rgba(212,175,55,0.13)", position: "relative", overflow: "hidden" }}>
              <Quote size={80} color="rgba(212,175,55,0.06)" style={{ position: "absolute", top: 20, right: 20 }} />

              {/* Stars */}
              <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
                {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} color="#D4AF37" fill="#D4AF37" />)}
              </div>

              <p style={{ fontSize: 15, color: "#ccc", fontFamily: "Playfair Display, serif", fontStyle: "italic", lineHeight: 1.75, marginBottom: 28 }}>&ldquo;{t.quote}&rdquo;</p>

              <div style={{ paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
                <div>
                  <div style={{ fontFamily: "Playfair Display, serif", fontSize: 16, fontWeight: 700, color: "#fff" }}>{t.name}</div>
                  <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4AF37", marginTop: 4 }}>{t.role}</div>
                  <div style={{ fontSize: 11, color: "#555", marginTop: 2 }}>{t.project}</div>
                </div>
                <button onClick={() => setModal(true)} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 18px", borderRadius: 40, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", color: "#ccc", fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.25s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#D4AF37"; (e.currentTarget as HTMLElement).style.color = "#000"; (e.currentTarget as HTMLElement).style.borderColor = "#D4AF37"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLElement).style.color = "#ccc"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}>
                  <Play size={12} fill="currentColor" /> Ver Depoimento
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div onClick={() => setModal(false)} style={{ position: "fixed", inset: 0, zIndex: 999, background: "rgba(0,0,0,0.92)", backdropFilter: "blur(12px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div onClick={e => e.stopPropagation()} style={{ position: "relative", maxWidth: 700, width: "100%", borderRadius: 20, background: "#0a0a0a", border: "1px solid rgba(212,175,55,0.2)", padding: 48, textAlign: "center" }}>
            <button onClick={() => setModal(false)} style={{ position: "absolute", top: 16, right: 16, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "#fff" }}>
              <X size={16} />
            </button>
            <Quote size={48} color="rgba(212,175,55,0.3)" style={{ margin: "0 auto 16px" }} />
            <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: 24, color: "#fff", marginBottom: 12 }}>Experiência Outlet das Tintas</h3>
            <p style={{ color: "#777", fontSize: 14, lineHeight: 1.7, marginBottom: 28 }}>Consultoria personalizada, entrega ágil e os melhores acabamentos para Petrolina e região.</p>
            <button onClick={() => setModal(false)} style={{ padding: "12px 28px", borderRadius: 40, background: "linear-gradient(135deg,#D4AF37,#AA7C11)", color: "#000", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", cursor: "pointer", border: "none" }}>Voltar ao Showroom</button>
          </div>
        </div>
      )}
    </section>
  );
}
