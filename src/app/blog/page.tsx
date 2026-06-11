"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InteractiveAesthetics from "@/components/InteractiveAesthetics";
import { Clock, Search, BookOpen, ArrowRight } from "lucide-react";
import { blogData } from "@/data/blog";

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todas");

  // Filter posts
  const filtered = blogData.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "Todas" || p.tag === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["Todas", "Tendências 2025", "Técnicas", "Paletas & Cores", "Impermeabilização", "Stucco & Texturas", "Guia Prático"];

  return (
    <>
      <InteractiveAesthetics />
      <Header />

      <main style={{ minHeight: "100vh", background: "#050505", paddingTop: 140, paddingBottom: 96, position: "relative" }}>
        
        {/* Background ambient glows */}
        <div style={{ position: "absolute", left: "10%", top: "15%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(212,175,55,0.05),transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: "10%", top: "45%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(15,106,74,0.04),transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          
          {/* Header section */}
          <div style={{ marginBottom: 64 }}>
            <span style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#D4AF37", fontWeight: 600 }}>Artigos Especializados</span>
            <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(36px,5vw,56px)", fontWeight: 700, color: "#fff", marginTop: 12, lineHeight: 1.2 }}>
              Blog da <span style={{ background: "linear-gradient(135deg,#fff 10%,#D4AF37 60%,#AA7C11 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Outlet das Tintas</span>
            </h1>
            <p style={{ color: "#777", marginTop: 16, fontWeight: 300, fontSize: 16, lineHeight: 1.7, maxWidth: 600 }}>
              Conteúdos ricos escritos por engenheiros, decoradores e aplicadores especialistas para orientar sua obra de alto padrão.
            </p>
          </div>

          {/* Controls: Search + Categories */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24, paddingBottom: 24, borderBottom: "1px solid rgba(255,255,255,0.08)", marginBottom: 48 }}>
            
            {/* Categories */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                  style={{
                    padding: "8px 18px",
                    borderRadius: 40,
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.25s",
                    background: activeCategory === c ? "linear-gradient(135deg,#D4AF37,#AA7C11)" : "rgba(255,255,255,0.03)",
                    color: activeCategory === c ? "#000" : "#aaa",
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: activeCategory === c ? "#D4AF37" : "rgba(255,255,255,0.08)",
                  }}
                  onMouseEnter={e => {
                    if (activeCategory !== c) {
                      e.currentTarget.style.color = "#fff";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                    }
                  }}
                  onMouseLeave={e => {
                    if (activeCategory !== c) {
                      e.currentTarget.style.color = "#aaa";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                    }
                  }}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div style={{ position: "relative", width: "100%", maxWidth: 300 }}>
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Pesquisar artigos..."
                style={{
                  width: "100%",
                  padding: "10px 16px 10px 40px",
                  background: "rgba(255,255,255,0.03)",
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: "rgba(255,255,255,0.08)",
                  borderRadius: 40,
                  color: "#fff",
                  outline: "none",
                  fontSize: 13,
                  transition: "border-color 0.25s",
                }}
                onFocus={e => (e.target.style.borderColor = "#D4AF37")}
                onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
              />
              <Search size={15} color="#555" style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)" }} />
            </div>
          </div>

          {/* Grid view of all filtered articles */}
          <div>
            {filtered.length === 0 ? (
              <div style={{ textAlign: "center", padding: "64px 0", color: "#555" }}>
                <BookOpen size={48} style={{ marginBottom: 16, opacity: 0.3 }} />
                <p>Nenhum artigo encontrado para a pesquisa selecionada.</p>
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(340px,1fr))", gap: 28 }}>
                {filtered.map(p => (
                  <Link
                    href={`/blog/${p.slug}`}
                    key={p.slug}
                    style={{ textDecoration: "none", display: "flex" }}
                  >
                    <div
                      style={{
                        borderRadius: 16,
                        background: "rgba(17,17,17,0.7)",
                        backdropFilter: "blur(12px)",
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: "rgba(255,255,255,0.07)",
                        cursor: "pointer",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
                        width: "100%"
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = "rgba(212,175,55,0.25)";
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.5)";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      {p.img && (
                        <div style={{ position: "relative", width: "100%", aspectRatio: "16/10", overflow: "hidden" }}>
                          <Image src={p.img} alt={p.title} fill style={{ objectFit: "cover", filter: "brightness(0.85)" }} sizes="(max-width: 768px) 100vw, 400px" />
                        </div>
                      )}
                      
                      <div style={{ padding: 28, flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <div>
                          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: p.tagColor }}>
                            {p.tag}
                          </span>
                          <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: 18, fontWeight: 700, color: "#fff", marginTop: 10, lineHeight: 1.35 }}>
                            {p.title}
                          </h3>
                          <p style={{ fontSize: 13, color: "#777", lineHeight: 1.6, marginTop: 12 }}>
                            {p.excerpt.slice(0, 110)}...
                          </p>
                        </div>

                        <div style={{ marginTop: 24, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 11, color: "#555" }}>
                            <span>{p.date}</span>
                            <span style={{ display: "flex", alignItems: "center", gap: 3 }}><Clock size={11} /> {p.readTime}</span>
                          </div>
                          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#D4AF37", display: "flex", alignItems: "center", gap: 4 }}>
                            Ler <ArrowRight size={12} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
