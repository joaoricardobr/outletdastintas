import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandMarquee from "@/components/BrandMarquee";
import ShowroomSlider from "@/components/ShowroomSlider";
import ProductCards from "@/components/ProductCards";
import InstitutionalSection from "@/components/InstitutionalSection";
import Differentiators from "@/components/Differentiators";
import VideoSection from "@/components/VideoSection";
import BlogSection from "@/components/BlogSection";
import Testimonials from "@/components/Testimonials";
import InstagramGallery from "@/components/InstagramGallery";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import InteractiveAesthetics from "@/components/InteractiveAesthetics";

const sectionTitle = (label: string, title: React.ReactNode, sub?: string) => (
  <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 56px" }}>
    <span style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#D4AF37", fontWeight: 600 }}>{label}</span>
    <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 700, color: "#fff", marginTop: 12, lineHeight: 1.2 }}>{title}</h2>
    {sub && <p style={{ color: "#777", marginTop: 14, fontWeight: 300, fontSize: 15, lineHeight: 1.7 }}>{sub}</p>}
  </div>
);

const goldSpan = (text: string) => (
  <span style={{ background: "linear-gradient(135deg,#fff 10%,#D4AF37 60%,#AA7C11 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{text}</span>
);

export default function Home() {
  return (
    <>
      <InteractiveAesthetics />
      <Header />

      <main>
        {/* ── Hero ───────────────────────────────── */}
        <HeroSection />

        {/* ── Brand logos ────────────────────────── */}
        <BrandMarquee />

        {/* ── Showroom Slider ────────────────────── */}
        <section id="showroom" style={{ width: "100%", padding: "96px 0", background: "#050505", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: 0, top: "25%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(212,175,55,0.05),transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            {sectionTitle("Showroom Digital", <>Projetos {goldSpan("Antes e Depois")}</>, "Compare a transformação com a aplicação das nossas texturas e revestimentos especiais de grife.")}
            <ShowroomSlider />
          </div>
        </section>

        {/* ── Products ───────────────────────────── */}
        <section id="produtos" style={{ width: "100%", padding: "96px 0", background: "#070707", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: 40, width: 700, height: 350, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(15,106,74,0.06),transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            {sectionTitle("Experiência de Produtos", <>Curadoria de {goldSpan("Revestimentos")}</>, "Explore nossas categorias equipadas com micropartículas refletoras e nanotecnologia de proteção.")}
            <ProductCards />
          </div>
        </section>

        {/* ── Institutional ──────────────────────── */}
        <InstitutionalSection />

        {/* ── Differentiators ────────────────────── */}
        <Differentiators />

        {/* ── Videos ─────────────────────────────── */}
        <VideoSection />

        {/* ── Blog ───────────────────────────────────── */}
        <BlogSection />

        {/* ── Testimonials ───────────────────────── */}
        <Testimonials />

        {/* ── Instagram Gallery ──────────────────── */}
        <InstagramGallery />

        {/* ── Final CTA ──────────────────────────── */}
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
