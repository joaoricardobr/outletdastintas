"use client";
import { useState } from "react";
import { Sparkles, Palette, Layers, ShieldCheck, Hammer, Bookmark, ArrowUpRight } from "lucide-react";

const cards = [
  { id:"premium",    icon: Sparkles,    color: "#D4AF37", title: "Tintas Premium",      sub: "Exclusividade & Alta Cobertura",  desc: "Fórmula de ultra-rendimento com micropartículas refletoras e acabamento aveludado incomparável." },
  { id:"decor",      icon: Palette,     color: "#34D399", title: "Tintas Decorativas",  sub: "Design & Paletas de Grife",       desc: "Cores sob medida desenvolvidas em parceria com arquitetos de renome para harmonização perfeita." },
  { id:"textures",   icon: Layers,      color: "#F59E0B", title: "Texturas de Luxo",    sub: "Cimento Queimado & Stucco",       desc: "Acabamentos minerais que criam relevos orgânicos, toque de pedra natural e elegância rústica." },
  { id:"waterproof", icon: ShieldCheck, color: "#60A5FA", title: "Impermeabilizantes",  sub: "Proteção Molecular Avançada",     desc: "Soluções hidrofóbicas definitivas que blindam superfícies contra infiltrações e intempéries." },
  { id:"tools",      icon: Hammer,      color: "#FB923C", title: "Ferramentas Premium", sub: "Precisão Profissional",           desc: "Equipamentos ergonômicos projetados para garantir aplicação uniforme e sem marcas." },
  { id:"accessories",icon: Bookmark,    color: "#C084FC", title: "Acessórios",          sub: "Perfeição no Acabamento",         desc: "Fitas de alta precisão, niveladores e insumos essenciais para o detalhamento cirúrgico." },
];

export default function ProductCards() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 24, width: "100%" }}>
      {cards.map(c => <Card key={c.id} card={c} />)}
    </div>
  );
}

function Card({ card }: { card: typeof cards[0] }) {
  const [hov, setHov] = useState(false);
  const Icon = card.icon;
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: "relative", borderRadius: 16, padding: 32,
        background: "rgba(17,17,17,0.72)", backdropFilter: "blur(16px)",
        /* Use separate border properties — no shorthand/non-shorthand mix */
        borderWidth: 1, borderStyle: "solid",
        borderColor: hov ? `${card.color}44` : "rgba(255,255,255,0.07)",
        cursor: "pointer",
        transition: "border-color 0.3s, box-shadow 0.3s, transform 0.3s",
        boxShadow: hov ? `0 20px 60px rgba(0,0,0,0.5),0 0 30px ${card.color}18` : "none",
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        overflow: "hidden", minHeight: 280,
        display: "flex", flexDirection: "column", justifyContent: "space-between",
      }}
    >
      {/* corner glow */}
      <div style={{ position: "absolute", top: -40, right: -40, width: 120, height: 120, borderRadius: "50%", background: `radial-gradient(circle,${card.color}22,transparent)`, filter: "blur(20px)", transition: "transform 0.5s", transform: hov ? "scale(1.4)" : "scale(1)" }} />

      <div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
          {/* icon box — separate border properties */}
          <div style={{ padding: 12, borderRadius: 12, background: hov ? `${card.color}18` : "rgba(255,255,255,0.05)", borderWidth: 1, borderStyle: "solid", borderColor: hov ? `${card.color}33` : "rgba(255,255,255,0.08)", transition: "background 0.3s, border-color 0.3s" }}>
            <Icon size={26} color={card.color} />
          </div>
          <ArrowUpRight size={18} color={hov ? card.color : "#555"} style={{ transition: "color 0.3s, transform 0.3s", transform: hov ? "translate(2px,-2px)" : "none" }} />
        </div>
        <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: `${card.color}cc`, fontWeight: 600, marginBottom: 6 }}>{card.sub}</div>
        <h3 style={{ fontSize: 20, fontWeight: 700, color: hov ? card.color : "#fff", transition: "color 0.3s", marginBottom: 12 }}>{card.title}</h3>
      </div>

      <div>
        <p style={{ fontSize: 13, color: hov ? "#aaa" : "#888", lineHeight: 1.65, transition: "color 0.3s" }}>{card.desc}</p>
        <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 10, fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: hov ? "#fff" : "#555", transition: "color 0.3s" }}>
          Explorar Tecnologia
          <div style={{ height: 1, background: hov ? card.color : "#444", transition: "width 0.3s, background 0.3s", width: hov ? 32 : 20 }} />
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${card.color},transparent)`, transform: hov ? "scaleX(1)" : "scaleX(0)", transition: "transform 0.5s", transformOrigin: "center" }} />
    </div>
  );
}
