"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function ShowroomSlider() {
  const [pos, setPos]         = useState(50);
  const [drag, setDrag]       = useState(false);
  const containerRef          = useRef<HTMLDivElement>(null);

  const move = (clientX: number) => {
    if (!containerRef.current) return;
    const r = containerRef.current.getBoundingClientRect();
    setPos(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)));
  };

  useEffect(() => {
    const up = () => setDrag(false);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => { window.removeEventListener("mouseup", up); window.removeEventListener("touchend", up); };
  }, []);

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
      {/* Labels */}
      <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 20 }}>
        <span style={{ padding: "6px 16px", borderRadius: 40, border: "1px solid rgba(255,255,255,0.1)", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#777" }}>Antes</span>
        <div style={{ width: 32, height: 1, background: "rgba(212,175,55,0.5)" }} />
        <span style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 16px", borderRadius: 40, border: "1px solid rgba(212,175,55,0.35)", background: "rgba(212,175,55,0.07)", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "#D4AF37", fontWeight: 600 }}>
          <Sparkles size={12} fill="#D4AF37" /> Depois
        </span>
      </div>

      {/* Slider */}
      <div
        ref={containerRef}
        onMouseMove={e => drag && move(e.clientX)}
        onMouseDown={() => setDrag(true)}
        onTouchMove={e => drag && move(e.touches[0].clientX)}
        onTouchStart={() => setDrag(true)}
        style={{ position: "relative", width: "100%", maxWidth: 900, aspectRatio: "16/9", borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", cursor: "ew-resize", userSelect: "none", boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}
      >
        {/* Before */}
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/images/luxury_villa.png" alt="Antes" fill style={{ objectFit: "cover", filter: "grayscale(1) brightness(0.55) contrast(1.2)" }} sizes="900px" priority />
          <div style={{ position: "absolute", top: 16, left: 16, padding: "4px 12px", background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)", borderRadius: 6, border: "1px solid rgba(255,255,255,0.1)", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#777" }}>Sem Acabamento</div>
        </div>

        {/* After */}
        <div style={{ position: "absolute", inset: 0, clipPath: `polygon(0 0,${pos}% 0,${pos}% 100%,0 100%)` }}>
          <Image src="/images/luxury_villa.png" alt="Depois" fill style={{ objectFit: "cover" }} sizes="900px" priority />
          <div style={{ position: "absolute", top: 16, right: 16, padding: "4px 12px", background: "rgba(212,175,55,0.92)", borderRadius: 6, fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#000", fontWeight: 700 }}>Outlet das Tintas</div>
        </div>

        {/* Handle */}
        <div style={{ position: "absolute", top: 0, bottom: 0, left: `${pos}%`, width: 2, background: "linear-gradient(to bottom,#D4AF37,#AA7C11)", zIndex: 10, pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 44, height: 44, borderRadius: "50%", background: "rgba(5,5,5,0.92)", border: "1px solid rgba(212,175,55,0.5)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 20px rgba(212,175,55,0.35)" }}>
            <span style={{ color: "#D4AF37", fontSize: 16, fontWeight: 600, lineHeight: 1 }}>‹ ›</span>
          </div>
        </div>
      </div>

      <p style={{ marginTop: 14, fontSize: 11, color: "#555", letterSpacing: "0.1em", textAlign: "center" }}>
        Arraste para comparar o impacto dos revestimentos premium
      </p>
    </div>
  );
}
