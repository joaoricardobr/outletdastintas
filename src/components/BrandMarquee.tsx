"use client";

const brands = [
  { name: "Coral",            sub: "Tintas Premium" },
  { name: "Suvinil",          sub: "Acabamento & Cor" },
  { name: "Sherwin-Williams", sub: "Tecnologia Global" },
  { name: "Quartzolit",       sub: "Revestimento Mineral" },
  { name: "Vedacit",          sub: "Blindagem Molecular" },
  { name: "Sika",             sub: "Engenharia de Proteção" },
];

const all = [...brands, ...brands, ...brands, ...brands];

export default function BrandMarquee() {
  return (
    <div style={{ width: "100%", padding: "40px 0", background: "linear-gradient(90deg,#050505,#0d0d0d,#050505)", overflow: "hidden", position: "relative", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 120, background: "linear-gradient(to right,#050505,transparent)", zIndex: 2, pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 120, background: "linear-gradient(to left,#050505,transparent)", zIndex: 2, pointerEvents: "none" }} />

      <div style={{ display: "flex", width: "max-content" }}>
        <div className="anim-marquee" style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {all.map((b, i) => (
            <BrandItem key={i} brand={b} />
          ))}
        </div>
      </div>
    </div>
  );
}

function BrandItem({ brand }: { brand: typeof brands[0] }) {
  return (
    <div style={{
      flexShrink: 0, padding: "14px 28px",
      /* separate border props to avoid shorthand conflict */
      borderWidth: 1, borderStyle: "solid", borderColor: "rgba(255,255,255,0.06)",
      borderRadius: 12, background: "rgba(255,255,255,0.02)", cursor: "pointer",
    }}>
      <div style={{ fontFamily: "Playfair Display, serif", fontSize: 20, fontWeight: 600, color: "#bbb", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>{brand.name}</div>
      <div style={{ fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "#555", marginTop: 2 }}>{brand.sub}</div>
    </div>
  );
}
