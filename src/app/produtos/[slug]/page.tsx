import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { productsData } from "@/data/products";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InteractiveAesthetics from "@/components/InteractiveAesthetics";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = productsData.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <InteractiveAesthetics />
      <Header />

      <main style={{ minHeight: "100vh", background: "#050505", paddingTop: 140, paddingBottom: 96, position: "relative", overflow: "hidden" }}>
        {/* Background glows based on product color */}
        <div style={{ position: "absolute", left: "10%", top: "15%", width: 600, height: 600, borderRadius: "50%", background: `radial-gradient(circle,${product.color}15,transparent 70%)`, filter: "blur(80px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <Link href="/#produtos" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 18px", borderRadius: 40, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "#ccc", textDecoration: "none", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 48, transition: "all 0.3s" }}>
            <ArrowLeft size={14} /> Voltar aos Produtos
          </Link>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 64, alignItems: "center" }}>
            
            {/* Product Info */}
            <div>
              <span style={{ padding: "6px 14px", borderRadius: 40, background: `${product.color}15`, border: `1px solid ${product.color}44`, color: product.color, fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                {product.sub}
              </span>
              
              <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(40px,5vw,64px)", fontWeight: 700, color: "#fff", marginTop: 24, lineHeight: 1.1 }}>
                {product.title}
              </h1>
              
              <p style={{ fontSize: 18, color: product.color, fontStyle: "italic", lineHeight: 1.6, marginTop: 24, paddingLeft: 20, borderLeft: `3px solid ${product.color}` }}>
                {product.desc}
              </p>
              
              <p style={{ fontSize: 15, color: "#ccc", lineHeight: 1.8, marginTop: 32 }}>
                {product.longDesc}
              </p>

              <div style={{ marginTop: 48 }}>
                <h3 style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff", marginBottom: 24 }}>Benefícios Exclusivos</h3>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 16 }}>
                  {product.benefits.map((benefit, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 14, color: "#aaa", lineHeight: 1.5 }}>
                      <CheckCircle2 size={20} color={product.color} style={{ flexShrink: 0 }} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: 56, display: "flex", gap: 16, flexWrap: "wrap" }}>
                <a href="https://wa.me/558730247346" target="_blank" rel="noopener noreferrer" style={{ padding: "16px 32px", borderRadius: 40, background: `linear-gradient(135deg, ${product.color}, #AA7C11)`, color: "#000", fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", textDecoration: "none", display: "inline-block", transition: "transform 0.3s", boxShadow: `0 10px 30px ${product.color}44` }}>
                  Falar com Especialista
                </a>
              </div>
            </div>

            {/* Product Image Showcase */}
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", inset: -20, borderRadius: 24, background: `linear-gradient(135deg, ${product.color}22, transparent)`, border: `1px solid ${product.color}33`, zIndex: 0 }} />
              <div style={{ position: "relative", width: "100%", aspectRatio: "4/5", borderRadius: 16, overflow: "hidden", zIndex: 1, boxShadow: "0 20px 60px rgba(0,0,0,0.8)" }}>
                <Image src={product.image} alt={product.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 50vw" priority />
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
