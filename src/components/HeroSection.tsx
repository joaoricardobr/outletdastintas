"use client";
import { ArrowRight, Sparkles } from "lucide-react";

const WORDS = ["Transformando", "Ambientes", "em", "Obras", "de", "Arte"];
const GOLD  = new Set(["em", "Obras", "de", "Arte"]);

export default function HeroSection() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#020202", overflow: "hidden", paddingTop: 80 }}>

      {/* Background HTML5 Video (Mixkit CDN - Abstract Premium Gold/Black Loop) */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none", opacity: 0.45 }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/abstract_paint.png"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
          }}
        >
          <source
            src="/background.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Dark vignette gradient overlay for contrast */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(5,5,5,0.4) 0%, rgba(5,5,5,0.95) 100%)" }} />
      </div>

      {/* Background glows */}
      <div style={{ position: "absolute", top: "25%", left: "50%", transform: "translateX(-50%)", width: 600, height: 300, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(15,106,74,0.18),transparent 70%)", filter: "blur(60px)", pointerEvents: "none", zIndex: 1 }} />
      <div style={{ position: "absolute", bottom: 80, left: "20%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(212,175,55,0.1),transparent 70%)", filter: "blur(60px)", pointerEvents: "none", zIndex: 1 }} />

      {/* Dot grid */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.025, backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px,transparent 1px)", backgroundSize: "28px 28px", pointerEvents: "none", zIndex: 1 }} />

      {/* Content */}
      <div style={{ position: "relative", maxWidth: 1000, margin: "0 auto", padding: "0 24px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", zIndex: 2 }}>

        {/* Badge */}
        <div className="anim-fade-in" style={{ animationDelay: "0.2s", display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 18px", borderRadius: 40, border: "1px solid rgba(212,175,55,0.35)", background: "rgba(212,175,55,0.07)", marginBottom: 32 }}>
          <Sparkles size={13} color="#D4AF37" fill="#D4AF37" style={{ flexShrink: 0 }} />
          <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4AF37", fontWeight: 600 }}>Showroom Boutique · Petrolina-PE</span>
        </div>

        {/* Headline */}
        <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(38px,7vw,88px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.01em", marginBottom: 28, color: "#fff" }}>
          {WORDS.map((w, i) => (
            <span
              key={i}
              className="anim-fade-in"
              style={{
                display: "inline-block",
                marginRight: "0.22em",
                animationDelay: `${0.4 + i * 0.12}s`,
                fontStyle: GOLD.has(w) ? "italic" : "normal",
                fontWeight: GOLD.has(w) ? 400 : 800,
                ...(GOLD.has(w) ? {
                  background: "linear-gradient(135deg,#fff 10%,#D4AF37 60%,#AA7C11 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                } : {}),
              }}
            >
              {w}
            </span>
          ))}
        </h1>

        {/* Sub */}
        <p className="anim-fade-up" style={{ animationDelay: "1.3s", fontSize: "clamp(15px,2vw,20px)", color: "#888", fontWeight: 300, maxWidth: 560, lineHeight: 1.7, marginBottom: 44 }}>
          Tintas, revestimentos, texturas e acabamentos de altíssimo padrão para quem exige a máxima excelência estética.
        </p>

        {/* CTAs */}
        <div className="anim-fade-up" style={{ animationDelay: "1.6s", display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
          <a href="#contato" className="gold-btn" style={{ padding: "14px 32px", borderRadius: 40, fontSize: 12, letterSpacing: "0.16em", textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
            Solicitar Orçamento <ArrowRight size={15} />
          </a>
          <a href="#showroom" style={{ padding: "14px 32px", borderRadius: 40, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.05)", color: "#fff", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600, textDecoration: "none", transition: "background 0.25s", display: "flex", alignItems: "center" }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}>
            Ver Catálogo
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="anim-fade-in" style={{ animationDelay: "2.2s", marginTop: 64, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "#444" }}>Scroll</span>
          <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom,#444,transparent)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 16, background: "#D4AF37", animation: "scrollLine 2s ease-in-out infinite" }} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0%   { transform: translateY(-100%); opacity: 0; }
          30%  { opacity: 1; }
          100% { transform: translateY(350%); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
