"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, BookOpen, Tag } from "lucide-react";
import { blogData as posts } from "@/data/blog";

export default function BlogSection() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <section id="blog" style={{ width: "100%", padding: "96px 0", background: "#050505", position: "relative", overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
      {/* ambient glow */}
      <div style={{ position: "absolute", left: "20%", bottom: "20%", width: 600, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(212,175,55,0.05),transparent 70%)", filter: "blur(80px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 56 }}>
          <div>
            <span style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#D4AF37", fontWeight: 600 }}>Blog & Conteúdo</span>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(28px,4vw,46px)", fontWeight: 700, color: "#fff", marginTop: 12, lineHeight: 1.2 }}>
              Conhecimento que{" "}
              <span style={{ background: "linear-gradient(135deg,#fff 10%,#D4AF37 60%,#AA7C11 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", fontStyle: "italic", fontWeight: 400 }}>Transforma</span>
            </h2>
          </div>
          <p style={{ color: "#666", maxWidth: 360, fontWeight: 300, fontSize: 15, lineHeight: 1.7 }}>
            Técnicas, tendências e dicas exclusivas do universo dos acabamentos premium para você tomar as melhores decisões.
          </p>
        </div>

        {/* Featured + side list */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 32, marginBottom: 40 }}>

          {/* Featured card */}
          <div style={{ gridColumn: "span 2" }} className="blog-feat">
            <FeaturedCard post={featured} />
          </div>

          {/* Secondary cards stacked */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {rest.slice(0, 2).map(p => <SmallCard key={p.id} post={p} />)}
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
          {rest.slice(2).map(p => <GridCard key={p.id} post={p} />)}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", borderRadius: 40, borderWidth: 1, borderStyle: "solid", borderColor: "rgba(212,175,55,0.35)", background: "rgba(212,175,55,0.07)", color: "#D4AF37", textDecoration: "none", fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", transition: "all 0.25s" }}>
            <BookOpen size={15} /> Ver Todos os Artigos <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <style>{`@media(max-width:640px){.blog-feat{grid-column:span 1!important;}}`}</style>
    </section>
  );
}

/* ── Featured large card ───────────────────────────────────────── */
function FeaturedCard({ post }: { post: typeof posts[0] }) {
  const [hov, setHov] = useState(false);
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{ borderRadius: 20, overflow: "hidden", cursor: "pointer", borderWidth: 1, borderStyle: "solid", borderColor: hov ? "rgba(212,175,55,0.28)" : "rgba(255,255,255,0.07)", transition: "border-color 0.3s, box-shadow 0.3s", boxShadow: hov ? "0 24px 60px rgba(0,0,0,0.5)" : "none", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}>

        {/* image */}
        <div style={{ position: "relative", minHeight: 280, overflow: "hidden" }}>
          <Image src={post.img!} alt={post.title} fill style={{ objectFit: "cover", transition: "transform 0.6s", transform: hov ? "scale(1.05)" : "scale(1)", filter: "brightness(0.75)" }} sizes="(max-width: 768px) 100vw, 600px" />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(5,5,5,0.6),transparent)" }} />
          <span style={{ position: "absolute", top: 20, left: 20, padding: "4px 12px", borderRadius: 40, background: post.tagColor + "22", borderWidth: 1, borderStyle: "solid", borderColor: post.tagColor + "55", color: post.tagColor, fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            ★ Destaque
          </span>
        </div>

        {/* content */}
        <div style={{ padding: "32px 36px", background: "rgba(17,17,17,0.85)", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 20 }}>
          <div>
            <TagBadge tag={post.tag} color={post.tagColor} />
            <h3 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(18px,2vw,26px)", fontWeight: 700, color: "#fff", marginTop: 12, lineHeight: 1.3, transition: "color 0.3s", ...(hov ? { color: "#D4AF37" } : {}) }}>
              {post.title}
            </h3>
            <p style={{ fontSize: 14, color: "#888", lineHeight: 1.7, marginTop: 14 }}>{post.excerpt}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
            <Meta date={post.date} readTime={post.readTime} />
            <ReadMore hov={hov} />
          </div>
        </div>
      </div>
    </Link>
  );
}

/* ── Small side card ───────────────────────────────────────────── */
function SmallCard({ post }: { post: typeof posts[0] }) {
  const [hov, setHov] = useState(false);
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{ padding: "20px 24px", borderRadius: 14, borderWidth: 1, borderStyle: "solid", borderColor: hov ? "rgba(212,175,55,0.25)" : "rgba(255,255,255,0.07)", background: "rgba(17,17,17,0.7)", cursor: "pointer", transition: "border-color 0.3s, background 0.3s, transform 0.3s", transform: hov ? "translateX(4px)" : "translateX(0)" }}>
        <TagBadge tag={post.tag} color={post.tagColor} />
        <h3 style={{ fontSize: 15, fontWeight: 700, color: hov ? "#D4AF37" : "#fff", marginTop: 10, lineHeight: 1.35, transition: "color 0.3s" }}>{post.title}</h3>
        <div style={{ marginTop: 14, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Meta date={post.date} readTime={post.readTime} />
          <ArrowRight size={15} color={hov ? "#D4AF37" : "#555"} style={{ transition: "color 0.3s, transform 0.3s", transform: hov ? "translateX(4px)" : "none", flexShrink: 0 }} />
        </div>
      </div>
    </Link>
  );
}

/* ── Bottom grid card ──────────────────────────────────────────── */
function GridCard({ post }: { post: typeof posts[0] }) {
  const [hov, setHov] = useState(false);
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{ padding: "24px 28px", borderRadius: 14, borderWidth: 1, borderStyle: "solid", borderColor: hov ? "rgba(212,175,55,0.22)" : "rgba(255,255,255,0.06)", background: "rgba(17,17,17,0.65)", cursor: "pointer", transition: "border-color 0.3s, transform 0.3s", transform: hov ? "translateY(-3px)" : "translateY(0)", position: "relative", overflow: "hidden", height: "100%" }}>
        {/* top line sweep */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg,transparent,${post.tagColor},transparent)`, transform: hov ? "scaleX(1)" : "scaleX(0)", transition: "transform 0.4s" }} />
        <TagBadge tag={post.tag} color={post.tagColor} />
        <h3 style={{ fontSize: 15, fontWeight: 700, color: hov ? "#D4AF37" : "#fff", marginTop: 10, lineHeight: 1.35, transition: "color 0.3s", marginBottom: 10 }}>{post.title}</h3>
        {post.excerpt && <p style={{ fontSize: 12, color: "#777", lineHeight: 1.6, marginBottom: 16 }}>{post.excerpt.slice(0, 90)}...</p>}
        <Meta date={post.date} readTime={post.readTime} />
      </div>
    </Link>
  );
}

/* ── Shared sub-components ─────────────────────────────────────── */
function TagBadge({ tag, color }: { tag: string; color: string }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color }}>
      <Tag size={10} /> {tag}
    </span>
  );
}

function Meta({ date, readTime }: { date: string; readTime: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 11, color: "#555" }}>
      <span>{date}</span>
      <span style={{ display: "flex", alignItems: "center", gap: 4 }}><Clock size={11} /> {readTime}</span>
    </div>
  );
}

function ReadMore({ hov }: { hov: boolean }) {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: hov ? "#D4AF37" : "#555", transition: "color 0.3s" }}>
      Ler Artigo <ArrowRight size={13} style={{ transition: "transform 0.25s", transform: hov ? "translateX(4px)" : "none" }} />
    </span>
  );
}
