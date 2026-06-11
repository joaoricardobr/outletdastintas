import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogData } from "@/data/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InteractiveAesthetics from "@/components/InteractiveAesthetics";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogData.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Format content to handle line breaks elegantly
  const paragraphs = post.content.split('\n\n');

  return (
    <>
      <InteractiveAesthetics />
      <Header />

      <main style={{ minHeight: "100vh", background: "#050505", paddingTop: 140, paddingBottom: 96, position: "relative", overflow: "hidden" }}>
        {/* Background ambient glows */}
        <div style={{ position: "absolute", left: "10%", top: "15%", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle,${post.tagColor}15,transparent 70%)`, filter: "blur(80px)", pointerEvents: "none" }} />
        
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 18px", borderRadius: 40, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", color: "#ccc", textDecoration: "none", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 32, transition: "all 0.3s" }}>
            <ArrowLeft size={14} /> Voltar aos Artigos
          </Link>

          <article className="anim-fade-in" style={{ background: "rgba(17,17,17,0.7)", backdropFilter: "blur(20px)", borderRadius: 24, borderWidth: 1, borderStyle: "solid", borderColor: "rgba(255,255,255,0.07)", padding: "40px 48px" }}>
            
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20 }}>
              <span style={{ padding: "4px 12px", borderRadius: 40, background: post.tagColor + "15", borderWidth: 1, borderStyle: "solid", borderColor: post.tagColor + "33", color: post.tagColor, fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                {post.tag}
              </span>
              <span style={{ fontSize: 12, color: "#555" }}>{post.date} · {post.readTime} de leitura</span>
            </div>

            <h1 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 24 }}>
              {post.title}
            </h1>

            <p style={{ fontSize: 16, color: "#D4AF37", fontStyle: "italic", lineHeight: 1.6, marginBottom: 32, paddingLeft: 18, borderLeft: "3px solid #D4AF37" }}>
              {post.excerpt}
            </p>

            {post.img && (
              <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: 16, overflow: "hidden", marginBottom: 40, borderWidth: 1, borderStyle: "solid", borderColor: "rgba(255,255,255,0.08)" }}>
                <Image src={post.img} alt={post.title} fill style={{ objectFit: "cover" }} sizes="(max-width: 768px) 100vw, 800px" priority />
              </div>
            )}

            <div style={{ fontSize: 16, color: "#ccc", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 24 }}>
              {paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
              <p style={{ fontWeight: 600, color: "#fff", marginTop: 16 }}>Para conferir estes materiais de perto e receber o aconselhamento técnico ideal, agende uma consultoria no Showroom Boutique do Outlet das Tintas Petrolina.</p>
            </div>

            <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
              <div>
                <div style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#555" }}>Escrito por</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginTop: 4 }}>{post.author}</div>
              </div>
              <a href="https://wa.me/558730247346" target="_blank" rel="noopener noreferrer" style={{ padding: "12px 28px", borderRadius: 40, background: "linear-gradient(135deg,#D4AF37,#AA7C11)", color: "#000", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none", transition: "transform 0.3s", boxShadow: "0 4px 14px rgba(212,175,55,0.4)" }}>
                Falar com Consultor
              </a>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
