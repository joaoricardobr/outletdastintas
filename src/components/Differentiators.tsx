"use client";
import { useState } from "react";
import { Truck, Compass, Factory, Gem, Crown, CreditCard } from "lucide-react";

const items = [
  { icon: Truck,      title: "Entrega Rápida & Rastreável",  desc: "Logística expressa para Petrolina e Juazeiro, garantindo que o cronograma da sua obra nunca seja interrompido." },
  { icon: Compass,    title: "Consultoria Especializada",     desc: "Atendimento técnico e estético para especificação de cores, texturas e compatibilidade de materiais." },
  { icon: Factory,    title: "Tintas Direto da Fábrica",      desc: "Parceria direta com as maiores multinacionais, garantindo lotes novos e procedência 100% original." },
  { icon: Gem,        title: "Melhores Condições & Preços",   desc: "Preços de atacado no varejo de luxo, com economia inteligente em grandes metragens." },
  { icon: Crown,      title: "Atendimento Premium VIP",       desc: "Horário exclusivo no showroom, WhatsApp dedicado e visita técnica diretamente na sua obra." },
  { icon: CreditCard, title: "Parcelamento Facilitado",        desc: "Condições customizadas com parcelamento flexível em cartões corporativos ou faturamento direto." },
];

export default function Differentiators() {
  return (
    <section id="diferenciais" style={{ width: "100%", padding: "96px 0", background: "#050505", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: 800, height: 300, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(15,106,74,0.06),transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: 24, marginBottom: 64 }}>
          <div style={{ maxWidth: 480 }}>
            <span style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#D4AF37", fontWeight: 600 }}>Diferenciais</span>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(28px,4vw,46px)", fontWeight: 700, color: "#fff", marginTop: 12, lineHeight: 1.2 }}>
              A Excelência em <span style={{ background: "linear-gradient(135deg,#fff 10%,#D4AF37 60%,#AA7C11 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Cada Detalhe</span>
            </h2>
          </div>
          <p style={{ color: "#666", maxWidth: 360, fontWeight: 300, fontSize: 15, lineHeight: 1.7 }}>
            Mais do que vender tintas, oferecemos um ecossistema completo de suporte técnico e comercial de alto padrão.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 20 }}>
          {items.map((item, i) => <DiffCard key={i} item={item} />)}
        </div>
      </div>
    </section>
  );
}

function DiffCard({ item }: { item: typeof items[0] }) {
  const [hov, setHov] = useState(false);
  const Icon = item.icon;
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: 28, borderRadius: 14,
        background: hov ? "rgba(212,175,55,0.04)" : "rgba(17,17,17,0.65)",
        backdropFilter: "blur(12px)",
        /* separate border props — no shorthand conflict */
        borderWidth: 1, borderStyle: "solid",
        borderColor: hov ? "rgba(212,175,55,0.28)" : "rgba(255,255,255,0.06)",
        transition: "border-color 0.3s, background 0.3s, transform 0.3s",
        transform: hov ? "translateY(-3px)" : "translateY(0)",
        cursor: "pointer", position: "relative", overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,#D4AF37,transparent)", transform: hov ? "scaleX(1)" : "scaleX(0)", transition: "transform 0.4s", transformOrigin: "center" }} />

      <div style={{ padding: 10, borderRadius: 10, background: hov ? "rgba(212,175,55,0.1)" : "rgba(255,255,255,0.05)", borderWidth: 1, borderStyle: "solid", borderColor: hov ? "rgba(212,175,55,0.2)" : "rgba(255,255,255,0.08)", width: "fit-content", marginBottom: 20, transition: "background 0.3s, border-color 0.3s" }}>
        <Icon size={22} color="#D4AF37" />
      </div>
      <h3 style={{ fontSize: 16, fontWeight: 700, color: hov ? "#D4AF37" : "#fff", transition: "color 0.3s", marginBottom: 10 }}>{item.title}</h3>
      <p style={{ fontSize: 13, color: "#777", lineHeight: 1.65 }}>{item.desc}</p>
    </div>
  );
}
