"use client";
import { useState } from "react";
import { Sparkles, Phone, MapPin, Clock, Send, Check, ArrowUp } from "lucide-react";

const Instagram = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><circle cx="12" cy="12" r="4" /><line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
  </svg>
);

const Facebook = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.592 1.972 14.12.95 11.493.95c-5.439 0-9.859 4.37-9.863 9.8-.001 1.716.467 3.39 1.355 4.87L1.97 21.054l5.677-1.488zm9.783-6.457c-.278-.139-1.643-.808-1.897-.9s-.44-.139-.625.139-.718.9-.88 1.085-.324.208-.602.069c-.277-.139-1.173-.431-2.234-1.375-.826-.735-1.384-1.642-1.546-1.92-.162-.278-.017-.428.121-.567.125-.125.278-.324.417-.486.139-.162.185-.278.278-.463.093-.185.046-.347-.023-.486s-.625-1.503-.856-2.059c-.225-.541-.453-.467-.625-.476-.162-.008-.347-.01-.532-.01s-.486.069-.74.347c-.255.278-.972.949-.972 2.313 0 1.365.995 2.685 1.134 2.87.139.185 1.958 2.986 4.743 4.184.662.285 1.18.455 1.583.582.665.211 1.27.181 1.748.11.532-.079 1.643-.671 1.875-1.319.231-.648.231-1.203.162-1.319-.069-.118-.254-.187-.532-.326z" />
  </svg>
);

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "12px 16px",
  background: "rgba(255,255,255,0.04)",
  borderWidth: 1, borderStyle: "solid", borderColor: "rgba(255,255,255,0.1)",
  borderRadius: 10, color: "#fff", fontSize: 14, outline: "none",
  transition: "border-color 0.25s", fontFamily: "inherit",
};

const socialLinks = [
  { href: "https://www.instagram.com/outletdastintas_", icon: <Instagram size={18} /> },
  { href: "https://facebook.com", icon: <Facebook size={18} /> },
];

export default function Footer() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", project: "Residencial", msg: "" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setForm({ name: "", phone: "", email: "", project: "Residencial", msg: "" }); setSent(false); }, 5000);
  };

  return (
    <footer id="contato" style={{ position: "relative", background: "#050505", borderTop: "1px solid rgba(255,255,255,0.07)", padding: "96px 0 48px", overflow: "hidden" }}>
      <div style={{ position: "absolute", right: 0, top: 0, width: 300, height: 300, background: "radial-gradient(circle,rgba(212,175,55,0.06),transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 64, marginBottom: 64 }}>

          {/* Form */}
          <div>
            <span style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#D4AF37", fontWeight: 600 }}>Contato</span>
            <h2 style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 700, color: "#fff", marginTop: 10, marginBottom: 16, lineHeight: 1.2 }}>
              Agende um{" "}
              <span style={{ background: "linear-gradient(135deg,#fff 10%,#D4AF37 60%,#AA7C11 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Atendimento VIP</span>
            </h2>
            <p style={{ color: "#777", fontWeight: 300, fontSize: 14, lineHeight: 1.75, marginBottom: 32 }}>
              Deixe suas informações e o escopo do seu projeto. Um consultor especialista entrará em contato.
            </p>
            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[{ label: "Nome Completo", key: "name", type: "text", ph: "Seu nome" }, { label: "WhatsApp", key: "phone", type: "tel", ph: "(87) 99999-9999" }].map(f => (
                  <div key={f.key}>
                    <label style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#666", fontWeight: 600, display: "block", marginBottom: 6 }}>{f.label}</label>
                    <input type={f.type} required value={(form as Record<string, string>)[f.key]} onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))} style={inputStyle} placeholder={f.ph}
                      onFocus={e => (e.target.style.borderColor = "#D4AF37")} onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
                  </div>
                ))}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#666", fontWeight: 600, display: "block", marginBottom: 6 }}>E-mail</label>
                  <input type="email" required value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} style={inputStyle} placeholder="voce@empresa.com"
                    onFocus={e => (e.target.style.borderColor = "#D4AF37")} onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
                </div>
                <div>
                  <label style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#666", fontWeight: 600, display: "block", marginBottom: 6 }}>Tipo de Projeto</label>
                  <select value={form.project} onChange={e => setForm(p => ({ ...p, project: e.target.value }))} style={{ ...inputStyle, cursor: "pointer" }}>
                    <option style={{ background: "#111" }} value="Residencial">Residencial Alto Padrão</option>
                    <option style={{ background: "#111" }} value="Corporativo">Corporativo / Comercial</option>
                    <option style={{ background: "#111" }} value="Parceria">Parceria (Arquiteto/Construtora)</option>
                  </select>
                </div>
              </div>
              <div>
                <label style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "#666", fontWeight: 600, display: "block", marginBottom: 6 }}>Mensagem</label>
                <textarea rows={4} value={form.msg} onChange={e => setForm(p => ({ ...p, msg: e.target.value }))} style={{ ...inputStyle, resize: "none" }} placeholder="Conte-nos sobre sua obra..."
                  onFocus={e => (e.target.style.borderColor = "#D4AF37")} onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.1)")} />
              </div>
              <button type="submit" disabled={sent} style={{ padding: "14px 24px", borderRadius: 10, background: "linear-gradient(135deg,#D4AF37,#AA7C11)", color: "#000", fontWeight: 700, fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, cursor: sent ? "default" : "pointer", border: "none", opacity: sent ? 0.85 : 1, transition: "box-shadow 0.3s", boxShadow: "none" }}
                onMouseEnter={e => !sent && ((e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(212,175,55,0.4)")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}>
                {sent ? <><Check size={16} /> Mensagem Enviada!</> : <><Send size={15} /> Enviar Solicitação</>}
              </button>
            </form>
          </div>

          {/* Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {[
              { Icon: MapPin, title: "Showroom",               lines: ["Av. da Integração, 1554", "Dom Malan · Petrolina - PE", "CEP 56304-350"] },
              { Icon: Phone,  title: "Canais Diretos",         lines: ["Tel / WhatsApp: (87) 3024-7346"] },
              { Icon: Clock,  title: "Horário de Atendimento", lines: ["Seg a Sex: 08:00 às 18:00", "Sábado: 08:00 às 12:00"] },
            ].map(({ Icon, title, lines }) => (
              <div key={title} style={{ display: "flex", gap: 16 }}>
                <div style={{ padding: 12, background: "rgba(255,255,255,0.04)", borderWidth: 1, borderStyle: "solid", borderColor: "rgba(255,255,255,0.08)", borderRadius: 12, height: "fit-content" }}>
                  <Icon size={18} color="#D4AF37" />
                </div>
                <div>
                  <h4 style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "#fff", marginBottom: 8 }}>{title}</h4>
                  {lines.map(l => <p key={l} style={{ fontSize: 12, color: "#777", lineHeight: 1.8 }}>{l}</p>)}
                </div>
              </div>
            ))}

            {/* Social */}
            <div style={{ display: "flex", gap: 10 }}>
              {socialLinks.map(({ href, icon }) => (
                <SocialBtn key={href} href={href} icon={icon} />
              ))}
            </div>

            {/* Map */}
            <div style={{ borderRadius: 14, overflow: "hidden", borderWidth: 1, borderStyle: "solid", borderColor: "rgba(255,255,255,0.08)", height: 200 }}>
              <iframe title="Localização Outlet das Tintas"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.4357284693954!2d-40.50426872398579!3d-9.389270090688005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x773702a4bf74533%3A0xe547900b991b26f5!2sAv.%20da%20Integra%C3%A7%C3%A3o%2C%201554%20-%20Maria%20Auxiliadora%2C%20Petrolina%20-%20PE!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                width="100%" height="100%" style={{ border: 0, filter: "grayscale(1) brightness(0.7) contrast(1.1)" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 28, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16, fontSize: 12, color: "#555" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Sparkles size={14} color="rgba(212,175,55,0.5)" />
              <span>© {new Date().getFullYear()} Outlet das Tintas. Todos os direitos reservados.</span>
            </div>
            <span style={{ fontSize: 11, color: "#555" }}>
              Desenvolvido por João Ricardo - Engenheiro da Computação{" "}
              <a href="https://instagram.com/joaoricardo.pe" target="_blank" rel="noopener noreferrer" style={{ color: "#D4AF37", textDecoration: "none", fontWeight: 600 }}>@joaoricardo.pe</a>
            </span>
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            {["Política de Privacidade", "Termos de Uso"].map(l => (
              <FooterLink key={l} label={l} />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 99, display: "flex", flexDirection: "column", gap: 12 }}>
        {/* Back to top */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(17,17,17,0.8)", border: "1px solid rgba(212,175,55,0.3)", color: "#D4AF37", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.25s", backdropFilter: "blur(8px)", margin: "0 auto" }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(212,175,55,0.15)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(17,17,17,0.8)"; e.currentTarget.style.transform = "translateY(0)"; }}>
          <ArrowUp size={20} />
        </button>

        {/* WhatsApp FAB (Gold) */}
        <a href="https://wa.me/558730247346" target="_blank" rel="noopener noreferrer"
          style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg,#D4AF37,#AA7C11)", color: "#000", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 24px rgba(212,175,55,0.35)", textDecoration: "none", transition: "transform 0.25s, box-shadow 0.25s", position: "relative" }}
          onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.12)"; e.currentTarget.style.boxShadow = "0 0 36px rgba(212,175,55,0.5)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 0 24px rgba(212,175,55,0.35)"; }}>
          <WhatsAppIcon />
          <span style={{ position: "absolute", top: 0, right: 0, width: 12, height: 12, background: "#ef4444", borderRadius: "50%", borderWidth: 2, borderStyle: "solid", borderColor: "#050505" }} />
        </a>
      </div>
    </footer>
  );
}

function SocialBtn({ href, icon }: { href: string; icon: React.ReactNode }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ padding: 10, background: hov ? "rgba(212,175,55,0.12)" : "rgba(255,255,255,0.04)", borderWidth: 1, borderStyle: "solid", borderColor: hov ? "rgba(212,175,55,0.3)" : "rgba(255,255,255,0.08)", borderRadius: 10, color: hov ? "#D4AF37" : "#777", textDecoration: "none", transition: "all 0.25s", display: "flex" }}>
      {icon}
    </a>
  );
}

function FooterLink({ label }: { label: string }) {
  const [hov, setHov] = useState(false);
  return (
    <a href="#" onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ color: hov ? "#D4AF37" : "#555", textDecoration: "none", transition: "color 0.2s" }}>
      {label}
    </a>
  );
}
