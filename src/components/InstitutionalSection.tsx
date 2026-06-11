"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const dur = 2000;
        const run = (now: number) => {
          const t = Math.min((now - start) / dur, 1);
          setVal(Math.floor(t * (2 - t) * end));
          if (t < 1) requestAnimationFrame(run);
          else setVal(end);
        };
        requestAnimationFrame(run);
      }
    }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  return <span ref={ref} style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 700, color: "#D4AF37" }}>+{val}{suffix}</span>;
}

export default function InstitutionalSection() {
  return (
    <section id="sobre" style={{ width: "100%", padding: "96px 0", background: "#050505", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: "20%", top: "30%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(15,106,74,0.07),transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 64, alignItems: "center" }}>

        {/* Image */}
        <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", aspectRatio: "4/5", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 40px 100px rgba(0,0,0,0.5)" }}>
          <Image src="/images/fachada.jpg" alt="Fachada Premium" fill style={{ objectFit: "cover" }} sizes="500px" />
          <div style={{ position: "absolute", inset: 0, border: "1px solid rgba(212,175,55,0.15)", borderRadius: 20 }} />
          {/* floating tag */}
          <div style={{ position: "absolute", bottom: 24, left: 24, right: 24, padding: 20, background: "rgba(17,17,17,0.82)", backdropFilter: "blur(16px)", borderRadius: 12, border: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4AF37", fontWeight: 600, marginBottom: 8 }}>
              <Star size={12} fill="#D4AF37" color="#D4AF37" /> Referência em Petrolina - PE
            </div>
            <p style={{ fontSize: 13, color: "#bbb", fontFamily: "Playfair Display, serif", lineHeight: 1.6, fontStyle: "italic" }}>
              &ldquo;A pintura não é a última etapa. Ela é a identidade que coroa a arquitetura.&rdquo;
            </p>
          </div>
        </div>

        {/* Copy */}
        <div>
          <span style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#D4AF37", fontWeight: 600 }}>Quem Somos</span>
          <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(28px,4vw,46px)", fontWeight: 700, color: "#fff", marginTop: 12, marginBottom: 24, lineHeight: 1.2 }}>
            Elevando a Pintura ao Nível de{" "}
            <span className="gold-text">Arte Contemporânea</span>
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 16, color: "#888", fontWeight: 300, fontSize: 15, lineHeight: 1.8 }}>
            <p>Na <strong style={{ color: "#fff", fontWeight: 500 }}>Outlet das Tintas</strong>, acreditamos que cor e textura definem a alma de um espaço. Nascemos como um showroom boutique de alta curadoria, focados em trazer o que há de mais refinado no mundo dos revestimentos.</p>
            <p>Combinamos consultoria especializada, marcas internacionais e tecnologias de impermeabilização molecular de ponta para projetos de alto padrão em Petrolina e região.</p>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 40, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            {[
              { end: 1000, label: "Projetos Executados" },
              { end: 5000, label: "Clientes Satisfeitos" },
              { end: 20,   label: "Marcas Premium" },
              { end: 10,   label: "Anos de Liderança", suffix: " Anos" },
            ].map(s => (
              <div key={s.label}>
                <Counter end={s.end} suffix={s.suffix ?? ""} />
                <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#555", marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>

          <a href="#contato" style={{ marginTop: 36, display: "inline-flex", alignItems: "center", gap: 10, fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#D4AF37", textDecoration: "none", transition: "gap 0.25s" }}
            onMouseEnter={e => (e.currentTarget.style.gap = "16px")}
            onMouseLeave={e => (e.currentTarget.style.gap = "10px")}>
            Conheça Nossa Consultoria Exclusiva <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
