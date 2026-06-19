import "./globals.css";

export const metadata = {
  title: "Global SC Alto Atacado",
  description: "Plataforma B2B de Intermediação Comercial",
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