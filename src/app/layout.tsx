import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://outletdastintaspetrolina.com.br"),
  title: "Outlet das Tintas | Tintas & Acabamentos Premium em Petrolina-PE",
  description:
    "Showroom boutique especializado em tintas, revestimentos, texturas e acabamentos de alto padrão. Av. da Integração 1554, Petrolina-PE.",
  keywords: ["tintas premium Petrolina", "revestimentos luxo", "Outlet das Tintas", "Suvinil", "Coral", "Sherwin Williams"],
  authors: [{ name: "Outlet das Tintas" }],
  robots: "index, follow",
  openGraph: {
    title: "Outlet das Tintas | Showroom Premium Petrolina",
    description: "Tintas, revestimentos e texturas de alto padrão para projetos residenciais e corporativos.",
    type: "website",
    locale: "pt_BR",
    url: "https://outletdastintaspetrolina.com.br",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: "#050505", color: "#fff", minHeight: "100vh" }}>
        {children}
      </body>
    </html>
  );
}
