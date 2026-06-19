/* eslint-disable @next/next/no-img-element */

"use client";

function GlobeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-7 h-7 md:w-9 md:h-9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.2 2.6 3.4 5.6 3.4 9s-1.2 6.4-3.4 9" />
      <path d="M12 3c-2.2 2.6-3.4 5.6-3.4 9s1.2 6.4 3.4 9" />
    </svg>
  );
}

export default function Home() {
  const whatsappComercial =
    "https://wa.me/554892070377?text=Olá%2C%20gostaria%20de%20falar%20com%20a%20equipe%20comercial%20da%20Global%20SC.";

  const fornecedores = [
    {
      id: "inovare",
      img: "/banner-inovare.png",
      url: "https://inovarerepresentacoes.pedidook.com.br",
    },
    {
      id: "kontudo",
      img: "/banner-kontudo.png",
      url: "https://importadorakontudo.pedidook.com.br",
    },
    {
      id: "surf",
      img: "/banner-surf.png",
      url: "https://importadorakontudosurf.pedidook.com.br",
    },
    {
      id: "cunha",
      img: "/banner-cunha.png",
      url: "https://importadoradocunha.pedidook.com.br",
    },
    {
      id: "scfashion",
      img: "/banner-scfashion.png",
      url: "https://scfashionatacadista.com",
    },
  ];

  const faqItems = [
    {
      text: "1) O QUE A GLOBAL SC FAZ?",
      url: "/faq",
      order: "order-1 md:order-1",
    },
    {
      text: "4) O FRETE É GRÁTIS?",
      url: "/faq/frete",
      order: "order-4 md:order-2",
    },
    {
      text: "2) COMO FAÇO PARA COMPRAR?",
      url: "/faq/como-comprar",
      order: "order-2 md:order-3",
    },
    {
      text: "5) O PRODUTO TEM GARANTIA?",
      url: "/faq/garantia",
      order: "order-5 md:order-4",
    },
    {
      text: "3) QUAL O PRAZO DE ENTREGA?",
      url: "/faq/prazo-de-entrega",
      order: "order-3 md:order-5",
    },
    {
      text: "6) COMO ENTRO EM CONTATO?",
      url: "/faq/contato",
      order: "order-6 md:order-6",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-[#eeeeee] text-black font-sans antialiased overflow-x-hidden flex justify-center">
      <div className="w-full max-w-[1260px] bg-[#eeeeee] flex flex-col shadow-xl">
        {/* 1. MENU SUPERIOR */}
        <nav className="w-full bg-[#eeeeee] py-4 px-4">
          <div className="flex flex-wrap justify-center items-center gap-x-10 md:gap-x-14 gap-y-2 text-[10px] md:text-[12px] font-medium underline underline-offset-4 decoration-black">
            <a
              href="/quem-somos"
              className="hover:text-[#9f7524] transition-colors"
            >
              Quem Somos
            </a>

            <a
              href="/como-funciona"
              className="hover:text-[#9f7524] transition-colors"
            >
              Como Funciona
            </a>

            <a
              href="/politica-de-privacidade"
              className="hover:text-[#9f7524] transition-colors"
            >
              Política de Privacidade
            </a>

            <a
              href="/termos-de-uso"
              className="hover:text-[#9f7524] transition-colors"
            >
              Termos de Uso
            </a>
          </div>
        </nav>

        {/* 2. CABEÇALHO */}
        <header className="w-full bg-[#eeeeee]">
          <div className="w-full bg-black border-t-4 border-b-4 border-[#a97820] relative py-5 text-center px-4">
            <a href="/" className="inline-block hover:scale-[1.01] transition-transform">
              <img
                src="/logo.png"
                alt="GLOBAL SC"
                className="h-14 md:h-16 object-contain mx-auto"
              />
            </a>

            <div className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 flex gap-5 text-[#c79a3a] text-xl md:text-2xl">
              <a
                href={whatsappComercial}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:scale-110 transition-transform"
              >
                ◉
              </a>

              <a
                href="mailto:contato@globalscaltoatacado.com"
                aria-label="E-mail"
                className="hover:scale-110 transition-transform"
              >
                ✉
              </a>
            </div>
          </div>
        </header>

        {/* 3. HERO */}
        <section className="w-full bg-[#eeeeee]">
          <div className="w-full bg-black">
            <img
              src="/hero-bg.png"
              alt="Global SC - Fábricas e Importadora"
              className="w-full h-auto block object-cover"
            />

            <div className="h-12 md:h-16 bg-black relative">
              <div className="absolute right-6 md:right-14 bottom-4 md:bottom-6 w-28 md:w-40 h-0.5 bg-[#a97820]" />
            </div>
          </div>
        </section>

        {/* 4. CATÁLOGOS */}
        <section className="w-full bg-[#eeeeee] pt-12 md:pt-16 pb-8">
          <div className="w-full px-4 md:px-10 flex flex-col items-center">
            <div className="w-full max-w-[1040px] bg-white border-[3px] border-[#9b7324] rounded-[52px] md:rounded-[68px] px-5 py-5 md:py-6 text-center shadow-sm">
              <div className="flex justify-between items-center w-full gap-2">
                <div className="text-[#9b7324] shrink-0">
                  <GlobeIcon />
                </div>

                <h2 className="text-xs sm:text-lg md:text-[26px] font-bold uppercase tracking-[0.16em] md:tracking-[0.25em] leading-tight px-2">
                  CATÁLOGOS DE FORNECEDORES
                </h2>

                <div className="text-[#9b7324] shrink-0">
                  <GlobeIcon />
                </div>
              </div>

              <p className="mt-4 md:mt-5 text-[11px] sm:text-sm md:text-[18px] uppercase tracking-[0.02em] md:tracking-[0.04em] leading-tight">
                ESCOLHA UM FORNECEDOR{" "}
                <span className="font-bold underline underline-offset-4">
                  CLICANDO
                </span>{" "}
                NOS BANNERS ABAIXO
              </p>
            </div>

            <div className="mt-8 mb-6 flex flex-col items-center gap-0">
              <div className="w-12 h-12 md:w-15 md:h-15 border-r-[3px] border-b-[3px] border-[#9b7324] rotate-45" />
              <div className="w-16 h-16 md:w-20 md:h-20 border-r-4 border-b-4 border-[#9b7324] rotate-45 -mt-9 md:-mt-13" />
            </div>
          </div>

          {/* 5. BANNERS LATERAIS */}
          <div className="w-full mt-4">
            <div className="w-full max-w-[1140px] mx-auto px-4 md:px-8 space-y-5 md:space-y-6">
              {fornecedores.map((fornecedor) => (
                <a
                  key={fornecedor.id}
                  href={fornecedor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-row items-center justify-between gap-4 md:gap-8 w-full hover:scale-[1.005] transition-all duration-200"
                >
                  <div className="flex-1 bg-white border border-black/35 overflow-hidden shadow-md">
                    <img
                      src={fornecedor.img}
                      alt={`Banner ${fornecedor.id}`}
                      className="w-full h-auto block"
                    />
                  </div>

                  <div className="w-[70px] md:w-[96px] flex flex-col items-center justify-center select-none shrink-0">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-black text-white flex items-center justify-center shadow-md group-hover:bg-zinc-800 transition-colors">
                      <span className="text-[34px] md:text-[40px] font-black leading-none -mt-1">
                        ←
                      </span>
                    </div>

                    <span className="mt-1.5 text-[11px] md:text-[14px] font-bold uppercase leading-none tracking-widest text-black">
                      CLIQUE
                    </span>

                    <span className="text-[28px] md:text-[36px] text-[#c9a300] -mt-1 ml-3 leading-none">
                      👆
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 6. SOBRE NÓS */}
        <section id="sobre" className="w-full bg-[#eeeeee] pt-6 pb-12 px-4 md:px-8">
          <div className="w-full text-center mb-8">
            <h2 className="inline-block text-[32px] md:text-[42px] font-light uppercase tracking-[0.04em] border-b-2 border-black pb-2">
              SOBRE NÓS
            </h2>
          </div>

          <div className="w-full max-w-[1140px] mx-auto">
            <div className="bg-black border-y-[4px] border-[#a97820] p-4 md:p-8 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-6 md:gap-10 items-center">
                <div className="border border-[#a97820] overflow-hidden bg-black flex shadow-inner">
                  <img
                    src="/sobre-nos.jpg"
                    alt="Sobre nós"
                    className="w-full h-full object-cover block"
                  />
                </div>

                <div className="text-white flex flex-col justify-center px-2 md:px-6">
                  <p className="text-[11px] md:text-[12px] uppercase tracking-[0.08em] leading-relaxed text-justify break-words">
                    A GLOBAL SC FÁBRICA E IMPORTADORA ALTO ATACADO é um
                    ecossistema comercial criado para conectar
                    Fabricantes/Importadores e Atacadistas de maneira estratégica
                    e moderna. Funcionamos como um shopping de alto atacado
                    digital, onde marcas e produtos podem se apresentar ao
                    mercado e ampliar suas oportunidades de vendas.
                  </p>

                  <p className="text-[11px] md:text-[12px] uppercase tracking-[0.08em] leading-relaxed text-justify mt-5 break-words">
                    Nosso propósito é facilitar conexões comerciais, criando um
                    ambiente profissional onde as Distribuidoras ganham
                    visibilidade e atacadistas encontram produtos com mais
                    praticidade e confiança.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FAQ */}
        <section id="faq" className="w-full bg-[#eeeeee] py-10 px-4 md:px-8">
          <div className="w-full max-w-[1140px] mx-auto">
            <div className="bg-[#eeeeee] border-2 border-black rounded-[24px] md:rounded-[40px] p-8 md:p-12 shadow-sm">
              <h2 className="inline-block text-[32px] md:text-[42px] font-normal uppercase border-b-2 border-black pb-2 mb-10">
                FAQ:
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {faqItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    className={`${item.order} border-2 border-black rounded-lg bg-white py-4 px-6 text-[11px] md:text-[14px] font-bold uppercase tracking-[0.05em] text-center hover:bg-zinc-100 hover:scale-[1.02] transition-all shadow-sm`}
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. SELOS */}
        <section className="w-full bg-[#eeeeee] border-t-[3px] border-[#9b7324] py-10 px-4 md:px-8">
          <div className="w-full max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="h-[80px] bg-white border border-[#d8a51d] rounded-[14px] flex items-center justify-start gap-4 px-6 shadow-sm">
              <svg
                viewBox="0 0 80 50"
                className="w-[44px] h-[30px] text-[#c89413] shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 16h26" />
                <path d="M1 23h26" />
                <path d="M8 30h20" />
                <path d="M34 14h20v20H34z" />
                <path d="M54 22h10l7 8v4H54z" />
                <circle cx="43" cy="38" r="4" />
                <circle cx="66" cy="38" r="4" />
              </svg>

              <div>
                <h4 className="text-[14px] font-black uppercase tracking-[0.20em] leading-none text-black">
                  FRETE A COMBINAR:
                </h4>

                <p className="text-[8px] text-gray-500 uppercase mt-1.5 tracking-[0.10em] leading-tight break-words">
                  FRETE NA REGIÃO DE FLORIANÓPOLIS.
                  <br />
                  OUTRA REGIÃO CONSULTAR VALOR
                </p>
              </div>
            </div>

            <div className="h-[80px] bg-white border border-[#d8a51d] rounded-[14px] flex items-center justify-start gap-4 px-6 shadow-sm">
              <svg
                viewBox="0 0 60 60"
                className="w-[40px] h-[40px] text-[#c89413] shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="30" cy="22" r="12" />
                <path d="M18 23v-4a12 12 0 0 1 24 0v4" />
                <path d="M17 25h-4v10h6" />
                <path d="M43 25h4v10h-6" />
                <path d="M42 35c0 6-5 9-12 9" />
                <path d="M24 44h12" />
                <path d="M16 56c2-8 8-12 14-12s12 4 14 12" />
              </svg>

              <div>
                <h4 className="text-[14px] font-black uppercase tracking-[0.20em] leading-none text-black">
                  ATENDIMENTO:
                </h4>

                <p className="text-[8px] text-gray-500 uppercase mt-1.5 tracking-[0.10em] leading-tight break-words">
                  DE SEGUNDA A SEXTA DAS 7H - 20H
                </p>
              </div>
            </div>

            <div className="h-[80px] bg-white border border-[#d8a51d] rounded-[14px] flex items-center justify-start gap-4 px-6 shadow-sm">
              <svg
                viewBox="0 0 60 60"
                className="w-[40px] h-[40px] text-[#c89413] shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M30 5l20 8v14c0 14-9 23-20 28C19 50 10 41 10 27V13z" />
                <path d="M20 30l7 7 14-17" />
              </svg>

              <div>
                <h4 className="text-[14px] font-black uppercase tracking-[0.20em] leading-none text-black">
                  SITE SEGURO:
                </h4>

                <p className="text-[8px] text-gray-500 uppercase mt-1.5 tracking-[0.10em] leading-tight break-words">
                  SITE 100% CONFIÁVEL E APROVADO
                  <br />
                  NO TRUSTPILOT
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. RODAPÉ INSTITUCIONAL */}
        <footer className="w-full bg-black text-white border-t-[4px] border-[#9b7324] overflow-hidden pt-6">
          <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center md:items-end justify-between border-b border-[#c79a3a] pb-4 gap-6">
              <div className="w-[200px] md:w-[240px] h-[70px] md:h-[85px] bg-[#111111] flex items-center justify-center border border-zinc-800 shadow-inner shrink-0">
                <img
                  src="/logo.png"
                  alt="GLOBAL SC"
                  className="max-h-[50px] md:max-h-[60px] object-contain"
                />
              </div>

              <div className="flex-1 flex flex-col md:flex-row justify-around items-end w-full gap-4 pb-1">
                <a
                  href="/quem-somos"
                  className="text-[11px] md:text-[13px] uppercase tracking-[0.2em] font-normal border-b border-white pb-1 px-4 hover:border-[#c79a3a] hover:text-[#c79a3a] transition-colors"
                >
                  SOBRE NÓS
                </a>

                <a
                  href={whatsappComercial}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] md:text-[13px] uppercase tracking-[0.2em] font-normal border-b border-white pb-1 px-4 hover:border-[#c79a3a] hover:text-[#c79a3a] transition-colors"
                >
                  FALE CONOSCO
                </a>

                <a
                  href="/trabalhe-conosco"
                  className="text-[11px] md:text-[13px] uppercase tracking-[0.2em] font-normal border-b border-white pb-1 px-4 hover:border-[#c79a3a] hover:text-[#c79a3a] transition-colors"
                >
                  TRABALHE CONOSCO
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[200px_240px_180px_1fr] gap-6 md:gap-8 pt-5 pb-0 items-start justify-between">
              {/* Coluna 1: CONTATO */}
              <div className="flex flex-col items-center md:items-start space-y-4">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#c79a3a]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>

                  <span className="text-[12px] md:text-[14px] font-bold uppercase tracking-widest">
                    CONTATO:
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full justify-center md:justify-start">
                  <svg
                    className="w-5 h-5 text-[#c79a3a] shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>

                  <a
                    href={whatsappComercial}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#c79a3a] text-white text-[10px] uppercase font-bold py-2 px-4 rounded w-full max-w-[200px] text-center underline underline-offset-2 shadow-md"
                  >
                    +55 48 9207-0377
                  </a>
                </div>

                <div className="flex items-center gap-3 w-full justify-center md:justify-start">
                  <svg
                    className="w-5 h-5 text-[#c79a3a] shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>

                  <a
                    href="mailto:contato@globalscaltoatacado.com"
                    className="bg-[#c79a3a] text-white text-[7px] md:text-[7px] uppercase font-bold py-2 px-4 rounded w-full max-w-[200px] text-center whitespace-nowrap underline underline-offset-2 shadow-md"
                  >
                    contato@globalscaltoatacado.com
                  </a>
                </div>
              </div>

              {/* Coluna 2: POLÍTICAS */}
              <div className="flex flex-col items-center md:items-start space-y-4 w-full">
                <div className="flex items-center gap-3 mb-1">
                  <svg
                    className="w-5 h-5 text-[#c79a3a]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>

                  <span className="text-[12px] md:text-[14px] font-bold uppercase tracking-widest">
                    POLÍTICAS:
                  </span>
                </div>

                <a
                  href="/politica-de-privacidade"
                  className="bg-[#c79a3a] text-white text-[10px] uppercase font-bold py-2 px-4 rounded w-full max-w-[220px] text-center underline underline-offset-2 shadow-md block"
                >
                  Política de Privacidade (LGPD)
                </a>

                <a
                  href="/politicas-de-troca"
                  className="bg-[#c79a3a] text-white text-[10px] uppercase font-bold py-2 px-4 rounded w-full max-w-[220px] text-center underline underline-offset-2 shadow-md block"
                >
                  Políticas de Troca
                </a>

                <a
                  href="/termos-de-uso"
                  className="bg-[#c79a3a] text-white text-[10px] uppercase font-bold py-2 px-4 rounded w-full max-w-[220px] text-center underline underline-offset-2 shadow-md block"
                >
                  Termos de Uso e Condições Gerais
                </a>

                <a
                  href="/aviso-legal"
                  className="bg-[#c79a3a] text-white text-[10px] uppercase font-bold py-2 px-4 rounded w-full max-w-[220px] text-center underline underline-offset-2 shadow-md block"
                >
                  Aviso Legal
                </a>
              </div>

              {/* Coluna 3: TUTORIAL */}
              <div className="flex flex-col items-center md:items-start space-y-5">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#c79a3a]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>

                  <span className="text-[12px] md:text-[14px] font-bold uppercase tracking-widest">
                    TUTORIAL:
                  </span>
                </div>

                <a
                  href="/faq/como-comprar"
                  className="bg-[#c79a3a] text-white text-[10px] uppercase font-bold py-2 px-4 rounded w-full max-w-[160px] text-center underline underline-offset-2 shadow-md block"
                >
                  como comprar ?
                </a>
              </div>

              {/* Coluna 4: FOTO DO TIAGO */}
              <div className="self-end relative flex justify-end items-end h-[240px] md:h-[260px] w-full -mr-4 md:-mr-8">
                <div className="absolute inset-0 z-0 flex items-end justify-end opacity-[0.08] text-[#c79a3a] pointer-events-none">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="w-[300px] h-[300px] md:w-[360px] md:h-[360px] -mb-10 -mr-10"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>

                <img
                  src="/foto-tiago.png"
                  alt="Tiago Braga - Equipe Comercial"
                  className="relative z-10 w-full max-w-[260px] md:max-w-[320px] h-full object-contain object-right-bottom block"
                />
              </div>
            </div>
          </div>

          {/* FAIXA JURÍDICA */}
          <div className="bg-[#c79a3a] text-black text-[9px] md:text-[10px] font-bold text-center uppercase leading-relaxed px-4 py-4 tracking-[0.08em] border-t-2 border-black relative z-20 shadow-md">
            ESTE CATÁLOGO B2B DESTINA-SE EXCLUSIVAMENTE À CONSULTA DE PRODUTOS
            E SOLICITAÇÃO DE ORÇAMENTOS. NÃO SÃO REALIZADOS PAGAMENTOS PELO
            SITE VIA PIX, BOLETO OU CARTÃO. TODAS AS NEGOCIAÇÕES, DESCONTOS E
            FORMAS DE PAGAMENTO DEVEM SER TRATADAS DIRETAMENTE COM A EMPRESA
            FORNECEDORA OU ATRAVÉS DO FINANCEIRO: (48) 9207-0377 – TIAGO
            BRAGA.
          </div>

          {/* ASSINATURA */}
          <div className="text-center text-[10px] md:text-[11px] text-zinc-500 py-6 space-y-1.5 bg-[#080808] tracking-widest uppercase relative z-20 font-light">
            <p>© 2026 Global SC Alto Atacado. Todos os direitos reservados.</p>

            <p>
              GLOBAL SC FÁBRICA E IMPORTADORA ALTO ATACADO | CNPJ:
              59.987.080/0001-63
            </p>

            <p>
              Sede Administrativa: Av. Marginal Oeste, 90 - Monte Alegre,
              Camboriú - SC, 88340-000
            </p>

            <p>Contato Institucional: contato@globalscaltoatacado.com</p>

            <p className="text-zinc-600 text-[9px]">
              Plataforma B2B de Intermediação Comercial – Modelo de Catálogo
              Digital Automatizado (Asset-Light).
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}