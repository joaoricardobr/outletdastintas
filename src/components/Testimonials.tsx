"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, Quote, X } from "lucide-react";

const testimonials = [
  {
    id: "1",
    name: "Arq. Mariana Lins",
    role: "Arquiteta de Interiores",
    project: "Cobertura Orla Petrolina",
    quote: "Especificar os acabamentos da Outlet das Tintas me garante que o resultado final da obra será exatamente o que desenhei no projeto 3D. O cimento queimado deles é impecável.",
    rating: 5,
    thumbnail: "/images/515500690_1404195137764101_5837131583622663144_n.jpg",
  },
  {
    id: "2",
    name: "Dr. Roberto Cavalcanti",
    role: "Proprietário de Residência",
    project: "Residência Alphaville",
    quote: "O atendimento consultivo é o grande diferencial. Recebi uma verdadeira aula sobre tintas térmicas e texturas de luxo. A pintura de fachada resiste bravamente ao sol do sertão.",
    rating: 5,
    thumbnail: "/images/fachada.jpg",
  },
  {
    id: "3",
    name: "Carlos Eduardo Mendes",
    role: "Engenheiro Civil",
    project: "Condomínio Sol Nascente",
    quote: "Sempre indico a Outlet das Tintas para meus clientes. Os impermeabilizantes possuem uma durabilidade incrível e as entregas em Juazeiro são extremamente rápidas.",
    rating: 5,
    thumbnail: "/images/515681942_1404206347762980_5054884243119633894_n.jpg",
  },
  {
    id: "4",
    name: "Ana Carolina Nogueira",
    role: "Cliente",
    project: "Reforma de Interiores",
    quote: "Fiquei impressionada com o showroom. Muito organizado, e encontrei uma variedade de cores que não achei em nenhum outro lugar de Petrolina. Super recomendo!",
    rating: 5,
    thumbnail: "/images/494144329_1363487065168242_5157875639175839437_n.jpg",
  },
  {
    id: "5",
    name: "Thiago Almeida",
    role: "Construtor Independente",
    project: "Edifício Comercial",
    quote: "As tintas de alto rendimento deles reduziram muito o custo da minha obra sem perder um pingo de qualidade. O graffiato de fachada é o melhor da região, sem dúvidas.",
    rating: 5,
    thumbnail: "/images/635183609_1604803877703225_3328793558156298940_n.jpg",
  },
];

export default function Testimonials() {
  const [modal, setModal] = useState(false);

  return (
    <section id="depoimentos" style={{ width: "100%", padding: "96px 0", background: "#070707", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: "20%", top: "20%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(212,175,55,0.05),transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 64px" }}>
          <span style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#D4AF37", fontWeight: 600 }}>Depoimentos e Avaliações</span>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, color: "#fff", marginTop: 12, lineHeight: 1.2 }}>
            O Reconhecimento dos <span style={{ color: "#D4AF37" }}>Grandes Nomes</span>
          </h2>
          <p style={{ color: "#777", marginTop: 16, fontWeight: 300, fontSize: 15, lineHeight: 1.7 }}>
            A opinião de quem projeta e vive em ambientes transformados pelas nossas soluções de alto padrão.
          </p>
        </div>
      </div>

      {/* Marquee Container */}
      <div style={{ position: "relative", width: "100%", overflow: "hidden", display: "flex", alignItems: "center" }}>
        
        {/* Gradients to fade edges */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "15vw", background: "linear-gradient(to right, #070707, transparent)", zIndex: 2, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "15vw", background: "linear-gradient(to left, #070707, transparent)", zIndex: 2, pointerEvents: "none" }} />

        {/* Marquee Track */}
        <div
          className="marquee-track"
          style={{ display: "flex", gap: 32, padding: "20px 0", width: "max-content" }}
        >
            {/* Double the list for infinite seamless scrolling */}
            {[...testimonials, ...testimonials, ...testimonials].map((t, idx) => (
              <div key={`${t.id}-${idx}`} style={{ width: 400, flexShrink: 0, padding: 36, borderRadius: 20, background: "rgba(17,17,17,0.78)", backdropFilter: "blur(20px)", border: "1px solid rgba(212,175,55,0.13)", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 320 }}>
                <Quote size={80} color="rgba(212,175,55,0.06)" style={{ position: "absolute", top: 20, right: 20 }} />

                <div>
                  {/* Stars */}
                  <div style={{ display: "flex", gap: 4, marginBottom: 20 }}>
                    {[...Array(t.rating)].map((_, i) => <Star key={i} size={18} color="#D4AF37" fill="#D4AF37" />)}
                  </div>

                  <p style={{ fontSize: 15, color: "#ccc", fontFamily: "Playfair Display, serif", fontStyle: "italic", lineHeight: 1.75, marginBottom: 28 }}>&ldquo;{t.quote}&rdquo;</p>
                </div>

                <div style={{ paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
                  <div>
                    <div style={{ fontFamily: "Playfair Display, serif", fontSize: 16, fontWeight: 700, color: "#fff" }}>{t.name}</div>
                    <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4AF37", marginTop: 4 }}>{t.role}</div>
                  </div>
                  
                  {/* Thumbnail Avatar */}
                  <div style={{ width: 48, height: 48, borderRadius: "50%", overflow: "hidden", border: "2px solid rgba(212,175,55,0.3)", flexShrink: 0, position: "relative" }}>
                    <Image src={t.thumbnail} alt={t.name} fill style={{ objectFit: "cover" }} sizes="48px" />
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333333%); }
        }
        .marquee-track {
          animation: marquee 30s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      
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
