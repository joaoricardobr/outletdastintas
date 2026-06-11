"use client";
import Image from "next/image";
import { Send, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section style={{ position: "relative", width: "100%", padding: "128px 0", overflow: "hidden", background: "#050505", display: "flex", alignItems: "center", justifyContent: "center", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.35 }}>
        <Image src="/images/abstract_paint.png" alt="" fill style={{ objectFit: "cover", filter: "brightness(0.4)" }} sizes="100vw" />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,#050505 0%,rgba(5,5,5,0.5) 50%,rgba(5,5,5,0.85) 100%)" }} />
      </div>

      {/* Gold ambient glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 500, height: 300, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(212,175,55,0.12),transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

      <div style={{ position: "relative", maxWidth: 800, margin: "0 auto", padding: "0 24px", textAlign: "center", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ padding: 16, borderRadius: "50%", background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.2)", marginBottom: 24 }}>
          <Sparkles size={32} color="#D4AF37" />
        </div>
        <span style={{ fontSize: 11, letterSpacing: "0.26em", textTransform: "uppercase", color: "#D4AF37", fontWeight: 600 }}>Experiência Sob Medida</span>
        <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(36px,6vw,72px)", fontWeight: 800, color: "#fff", marginTop: 16, marginBottom: 20, lineHeight: 1.1 }}>
          Seu Projeto<br />
          <span className="gold-text" style={{ fontWeight: 400, fontStyle: "italic" }}>Merece o Melhor</span>
        </h2>
        <p style={{ color: "#777", fontSize: 16, fontWeight: 300, lineHeight: 1.75, maxWidth: 480, marginBottom: 40 }}>
          Agende uma consultoria privativa e encontre a paleta ideal para o seu projeto residencial ou corporativo.
        </p>
        <a
          href="https://wa.me/558730247346?text=Olá,%20gostaria%20de%20agendar%20um%20atendimento%20exclusivo%20no%20Showroom%20do%20Outlet%20das%20Tintas."
          target="_blank"
          rel="noopener noreferrer"
          className="gold-btn"
          style={{ padding: "16px 40px", borderRadius: 40, fontSize: 12, letterSpacing: "0.18em", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10 }}
        >
          Solicitar Atendimento Exclusivo <Send size={15} />
        </a>
      </div>
    </section>
  );
}
