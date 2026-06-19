import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://globalscaltoatacado.com"),

  title: "Global SC Alto Atacado | Fábricas e Importadoras",
  description:
    "Plataforma B2B que conecta lojistas, fábricas, importadoras e fornecedores para compras no atacado.",

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Global SC Alto Atacado",
    title: "Global SC Alto Atacado | Fábricas e Importadoras",
    description:
      "Catálogos de fornecedores, produtos para atacado e atendimento comercial para lojistas.",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Global SC Alto Atacado - Fábricas e Importadoras",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Global SC Alto Atacado | Fábricas e Importadoras",
    description:
      "Catálogos de fornecedores, produtos para atacado e atendimento comercial para lojistas.",
    images: ["/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased bg-white text-black">
        {children}
      </body>
    </html>
  );
}