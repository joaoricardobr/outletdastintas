"use client";
import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InteractiveAesthetics from "@/components/InteractiveAesthetics";
import { ArrowLeft, Clock, Search, Tag, BookOpen, ArrowRight } from "lucide-react";

// Corporate / boutique blog articles
const allPosts = [
  {
    id: "1",
    tag: "Tendências 2025",
    tagColor: "#D4AF37",
    title: "Cimento Queimado: O Acabamento que Domina os Projetos de Alto Padrão em Petrolina",
    excerpt: "Conheça as variações de cimento queimado da Outlet das Tintas. Do Stucco Veneziano com brilho espelhado ao acabamento fosco rústico aveludado, entenda como aplicar essa textura de forma a valorizar a arquitetura moderna.",
    content: "O cimento queimado transcendeu seu início industrial para se tornar o acabamento predileto na arquitetura contemporânea de Petrolina e Juazeiro. Sua versatilidade permite que seja aplicado em pisos, paredes internas e até fachadas externas. No entanto, para alcançar o padrão de luxo exigido, a especificação do material é crucial. Nossa curadoria traz fórmulas enriquecidas com resinas elastoméricas que evitam fissuras e desbotamento causados pelo sol intenso da nossa região.",
    readTime: "5 min",
    date: "08 Jun 2025",
    img: "/images/abstract_paint.png",
    author: "Consultor Técnico Outlet",
  },
  {
    id: "2",
    tag: "Técnicas",
    tagColor: "#34D399",
    title: "Tinta Térmica vs. Tinta Convencional: Qual Escolher para o Vale do São Francisco?",
    excerpt: "No clima quente de Petrolina, a escolha da tinta impacta diretamente no conforto térmico e na durabilidade da fachada. Apresentamos o comparativo técnico de refletância e isolamento molecular.",
    content: "O sol do Vale do São Francisco exige soluções que vão além do fator estético. As tintas térmicas de última geração atuam como escudos refletores de raios infravermelhos. Estudos demonstram que a aplicação de revestimentos elastoméricos térmicos da nossa linha premium pode reduzir a temperatura da superfície em até 8°C, reduzindo significativamente os custos com ar condicionado e aumentando o conforto interno.",
    readTime: "4 min",
    date: "02 Jun 2025",
    img: "/images/luxury_villa.png",
    author: "Eng. de Materiais Outlet",
  },
  {
    id: "3",
    tag: "Paletas & Cores",
    tagColor: "#C084FC",
    title: "5 Paletas de Cores que Valorizam Mansões e Projetos Corporativos no Sertão",
    excerpt: "A iluminação solar forte afeta a percepção das cores. Nossos especialistas listam as cores neutras, terrosas e metalizados finos que melhor se adaptam à luz solar do Nordeste.",
    content: "A luz solar intensa do sertão pode 'lavar' tonalidades muito claras ou desbotar pigmentos instáveis. Recomendamos paletas com base em minerais nobres, cinzas aquecidos, beges aveludados e verdes profundos que se integram perfeitamente com a vegetação nativa e com revestimentos de pedra natural. Venha fazer uma simulação de cores 3D em nosso Showroom VIP.",
    readTime: "6 min",
    date: "28 Mai 2025",
    img: "/images/luxury_interior.png",
    author: "Designer de Interiores Outlet",
  },
  {
    id: "4",
    tag: "Impermeabilização",
    tagColor: "#60A5FA",
    title: "Blindagem Molecular: Prevenindo Infiltrações na Sua Obra antes de Pintar",
    excerpt: "Manchas e bolhas estragam o acabamento de grife. Veja como a impermeabilização química de base protege a sua pintura e garante durabilidade eterna ao seu projeto.",
    content: "A umidade ascendente e a chuva forte repentina são os piores inimigos de uma pintura perfeita. A Outlet das Tintas trabalha com impermeabilizantes moleculares avançados (aditivos para concreto, resinas acrílicas e hidrofugantes invisíveis) que penetram nos poros dos materiais de construção, criando uma barreira intransponível à água, mas permitindo que a parede respire.",
    readTime: "7 min",
    date: "20 Mai 2025",
    img: "/images/luxury_interior.png",
    author: "Consultor Técnico Outlet",
  },
  {
    id: "5",
    tag: "Stucco & Texturas",
    tagColor: "#F59E0B",
    title: "Efeito Calce e Texturas Minerais: A Nova Tendência Internacional na Região",
    excerpt: "Diretamente das feiras de Milão, os acabamentos à base de cal natural conquistam clientes exigentes pelo seu aspecto orgânico, toque fosco e propriedades antibacterianas.",
    content: "Texturas à base de cal (Calce) trazem uma sofisticação sem igual aos ambientes. Elas criam uma variação tonal sutil e natural à medida que a luz do sol incide sobre a parede ao longo do dia. Além disso, por serem minerais, são naturalmente resistentes a mofos, tornando-as ideais para o clima do Vale do São Francisco.",
    readTime: "5 min",
    date: "14 Mai 2025",
    img: "/images/abstract_paint.png",
    author: "Curadora de Acabamentos Outlet",
  },
  {
    id: "6",
    tag: "Guia Prático",
    tagColor: "#FB923C",
    title: "O Segredo da Preparação de Superfícies para Pinturas de Alto Padrão",
    excerpt: "Uma pintura premium depende 80% do trabalho invisível: a preparação da parede. Saiba quais massas, seladores e fundos usar para obter a parede perfeita.",
    content: "Mesmo a tinta mais cara do mundo parecerá comum se aplicada sobre uma parede mal preparada. Massas corridas acrílicas com microesferas de vidro e lixamento técnico aspirado criam a base ultra-lisa necessária para que tintas com acabamento acetinado ou semi-brilho revelem seu brilho ideal sem imperfeições.",
    readTime: "3 min",
    date: "07 Mai 2025",
    img: "/images/luxury_villa.png",
    author: "Consultor Técnico Outlet",
  },
];

export default function BlogPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [readPost, setReadPost] = useState<typeof allPosts[0] | null>(null);

  // Filter posts
  const filtered = allPosts.filter(p => {
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

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          
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
                  onClick={() => { setActiveCategory(c); setReadPost(null); }}
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
                onChange={e => { setSearch(e.target.value); setReadPost(null); }}
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

          {/* Main content grid */}
          {readPost ? (
            /* Detailed view of an article */
            <div className="anim-fade-in" style={{ maxWidth: 800, margin: "0 auto", background: "rgba(17,17,17,0.7)", backdropFilter: "blur(20px)", borderRadius: 24, borderWidth: 1, borderStyle: "solid", borderColor: "rgba(255,255,255,0.07)", padding: "40px 48px" }}>
              <button onClick={() => setReadPost(null)} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 18px", borderRadius: 40, background: "rgba(255,255,255,0.03)", border: "none", color: "#ccc", cursor: "pointer", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 32, transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#D4AF37")}
                onMouseLeave={e => (e.currentTarget.style.color = "#ccc")}>
                <ArrowLeft size={14} /> Voltar aos Artigos
              </button>

              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20 }}>
                <span style={{ padding: "4px 12px", borderRadius: 40, background: readPost.tagColor + "15", borderWidth: 1, borderStyle: "solid", borderColor: readPost.tagColor + "33", color: readPost.tagColor, fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>
                  {readPost.tag}
                </span>
                <span style={{ fontSize: 12, color: "#555" }}>{readPost.date} · {readPost.readTime} de leitura</span>
              </div>

              <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(24px,4vw,38px)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: 24 }}>
                {readPost.title}
              </h2>

              <p style={{ fontSize: 16, color: "#D4AF37", fontStyle: "italic", lineHeight: 1.6, marginBottom: 32, paddingLeft: 18, borderLeft: "3px solid #D4AF37" }}>
                {readPost.excerpt}
              </p>

              {readPost.img && (
                <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderRadius: 16, overflow: "hidden", marginBottom: 32, borderWidth: 1, borderStyle: "solid", borderColor: "rgba(255,255,255,0.08)" }}>
                  <Image src={readPost.img} alt={readPost.title} fill style={{ objectFit: "cover" }} sizes="800px" />
                </div>
              )}

              <div style={{ fontSize: 15, color: "#ccc", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 20 }}>
                <p>{readPost.content}</p>
                <p>Para conferir estes materiais de perto e receber o aconselhamento técnico ideal, agende uma consultoria no Showroom Boutique do Outlet das Tintas Petrolina.</p>
              </div>

              <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#555" }}>Escrito por</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginTop: 4 }}>{readPost.author}</div>
                </div>
                <a href="#contato" style={{ padding: "12px 28px", borderRadius: 40, background: "linear-gradient(135deg,#D4AF37,#AA7C11)", color: "#000", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none" }}>Falar com Consultor</a>
              </div>
            </div>
          ) : (
            /* Grid view of all filtered articles */
            <div>
              {filtered.length === 0 ? (
                <div style={{ textAlign: "center", padding: "64px 0", color: "#555" }}>
                  <BookOpen size={48} style={{ marginBottom: 16, opacity: 0.3 }} />
                  <p>Nenhum artigo encontrado para a pesquisa selecionada.</p>
                </div>
              ) : (
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(340px,1fr))", gap: 28 }}>
                  {filtered.map(p => (
                    <div
                      key={p.id}
                      onClick={() => setReadPost(p)}
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
                          <Image src={p.img} alt={p.title} fill style={{ objectFit: "cover", filter: "brightness(0.85)" }} sizes="400px" />
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
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}
