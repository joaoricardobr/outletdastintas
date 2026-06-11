"use client";
// InteractiveAesthetics — lightweight cursor glow + page loader
// Pure rAF, no GSAP, no external libraries
import { useEffect, useRef, useState } from "react";

export default function InteractiveAesthetics() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Dismiss loader
    const t = setTimeout(() => setLoaded(true), 800);

    // Cursor glow via rAF lerp
    const cur = { x: -500, y: -500 };
    const tgt = { x: -500, y: -500 };
    let raf: number;

    const onMove = (e: PointerEvent) => { tgt.x = e.clientX; tgt.y = e.clientY; };
    window.addEventListener("pointermove", onMove);

    const tick = () => {
      cur.x += (tgt.x - cur.x) * 0.09;
      cur.y += (tgt.y - cur.y) * 0.09;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${cur.x - 200}px,${cur.y - 200}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      clearTimeout(t);
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Cursor glow */}
      <div
        ref={glowRef}
        style={{
          position: "fixed",
          top: 0, left: 0,
          width: 400, height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle at center,rgba(212,175,55,0.12) 0%,rgba(15,106,74,0.06) 40%,transparent 70%)",
          filter: "blur(24px)",
          pointerEvents: "none",
          zIndex: 9,
          willChange: "transform",
        }}
        className="hidden-sm"
      />

      {/* Page loader */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "#050505",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        transition: "opacity 0.6s ease",
        opacity: loaded ? 0 : 1,
        pointerEvents: loaded ? "none" : "all",
      }}>
        <div style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: 24, fontWeight: 700, letterSpacing: "0.18em", color: "#fff", textTransform: "uppercase" }}>
          Outlet <span style={{ color: "#D4AF37", fontWeight: 400, fontStyle: "italic" }}>das</span> Tintas
        </div>
        <div style={{ fontSize: 9, letterSpacing: "0.32em", color: "#444", textTransform: "uppercase", marginTop: 4 }}>Boutique Revestimentos</div>
        <div style={{ width: 160, height: 1, background: "rgba(255,255,255,0.08)", marginTop: 28, overflow: "hidden", borderRadius: 2 }}>
          <div className="anim-load-bar" style={{ width: "40%", height: "100%", background: "linear-gradient(90deg,transparent,#D4AF37,transparent)" }} />
        </div>
      </div>

      <style>{`.hidden-sm { display: none; } @media(min-width:768px){.hidden-sm{display:block;}}`}</style>
    </>
  );
}
