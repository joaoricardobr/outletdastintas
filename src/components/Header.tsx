"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Sparkles } from "lucide-react";

const links = [
  { label: "Showroom",    href: "/#showroom" },
  { label: "Produtos",    href: "/#produtos" },
  { label: "A Marca",     href: "/#sobre" },
  { label: "Diferenciais", href: "/#diferenciais" },
  { label: "Blog",        href: "/blog" },
  { label: "Depoimentos", href: "/#depoimentos" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    fn(); // run once on mount
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 50,
        transition: "background 0.4s, border-color 0.4s, padding 0.3s, backdrop-filter 0.4s",
        /* Always semi-visible — gets stronger on scroll */
        background: scrolled
          ? "rgba(5,5,5,0.88)"
          : "rgba(5,5,5,0.45)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: scrolled ? "12px 0" : "18px 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ padding: 6, borderRadius: 8, borderWidth: 1, borderStyle: "solid", borderColor: "rgba(212,175,55,0.3)", background: "rgba(212,175,55,0.08)" }}>
            <Sparkles size={17} color="#D4AF37" />
          </div>
          <div>
            <div style={{ fontFamily: "Playfair Display, serif", fontSize: 17, fontWeight: 700, color: "#fff", letterSpacing: "0.12em", textTransform: "uppercase", lineHeight: 1 }}>
              Outlet <span style={{ color: "#D4AF37", fontStyle: "italic", fontWeight: 400 }}>das</span> Tintas
            </div>
            <div style={{ fontSize: 8, letterSpacing: "0.3em", color: "#666", textTransform: "uppercase", marginTop: 2 }}>Boutique Revestimentos</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 28 }} className="hd-nav">
          {links.map(l => (
            <NavLink key={l.href} href={l.href} label={l.label} />
          ))}
          <a
            href="#contato"
            style={{ padding: "8px 20px", borderRadius: 40, borderWidth: 1, borderStyle: "solid", borderColor: "#D4AF37", color: "#D4AF37", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: 6, transition: "background 0.25s, color 0.25s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#D4AF37"; (e.currentTarget as HTMLElement).style.color = "#000"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#D4AF37"; }}
          >
            <Phone size={12} /> VIP
          </a>
        </nav>

        {/* Mobile button */}
        <button onClick={() => setMenuOpen(v => !v)} style={{ background: "rgba(255,255,255,0.08)", borderWidth: 1, borderStyle: "solid", borderColor: "rgba(255,255,255,0.12)", borderRadius: 8, padding: 8, color: "#fff", cursor: "pointer" }} className="hd-mob">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "rgba(5,5,5,0.96)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(255,255,255,0.07)", padding: "20px 24px 28px", display: "flex", flexDirection: "column", gap: 18 }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              style={{ fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase", color: "#ccc", textDecoration: "none" }}>
              {l.label}
            </a>
          ))}
          <a href="#contato" onClick={() => setMenuOpen(false)}
            style={{ padding: "12px 0", textAlign: "center", borderRadius: 40, background: "linear-gradient(135deg,#D4AF37,#AA7C11)", color: "#000", fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none" }}>
            Falar com Consultor
          </a>
        </div>
      )}

      <style>{`
        @media(min-width:900px){.hd-nav{display:flex!important;}.hd-mob{display:none!important;}}
        @media(max-width:899px){.hd-nav{display:none!important;}.hd-mob{display:block!important;}}
      `}</style>
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: hov ? "#D4AF37" : "#999", textDecoration: "none", transition: "color 0.2s", position: "relative" }}>
      {label}
      {/* underline dot indicator */}
      <span style={{ display: "block", height: 1, width: hov ? "100%" : 0, background: "#D4AF37", transition: "width 0.25s", marginTop: 3 }} />
    </a>
  );
}
