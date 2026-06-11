"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import * as Icons from "lucide-react";
import { productsData } from "@/data/products";

export default function ProductCards() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 24, width: "100%" }}>
      {productsData.map(c => <Card key={c.slug} card={c} />)}
    </div>
  );
}

function Card({ card }: { card: typeof productsData[0] }) {
  const [hov, setHov] = useState(false);
  const Icon = Icons[card.iconName as keyof typeof Icons] as React.ElementType;
  
  return (
    <Link href={`/produtos/${card.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          position: "relative", borderRadius: 16, padding: 32,
          background: "rgba(17,17,17,0.72)", backdropFilter: "blur(16px)",
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
            <div style={{ padding: 12, borderRadius: 12, background: hov ? `${card.color}18` : "rgba(255,255,255,0.05)", borderWidth: 1, borderStyle: "solid", borderColor: hov ? `${card.color}33` : "rgba(255,255,255,0.08)", transition: "background 0.3s, border-color 0.3s" }}>
              {Icon && <Icon size={26} color={card.color} />}
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
    </Link>
  );
}
