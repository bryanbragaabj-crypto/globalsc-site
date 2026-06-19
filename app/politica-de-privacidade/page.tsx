/* eslint-disable @next/next/no-img-element */

export default function PoliticaDePrivacidade() {
  return (
    <main className="min-h-screen w-full bg-[#eeeeee] text-black font-sans antialiased overflow-x-hidden flex justify-center">
      <div className="w-full max-w-[1260px] bg-[#eeeeee] flex flex-col shadow-xl min-h-screen">
        
        {/* MENU SUPERIOR */}
        <nav className="w-full bg-[#eeeeee] py-4 px-4">
          <div className="flex flex-wrap justify-center items-center gap-x-10 md:gap-x-14 gap-y-2 text-[10px] md:text-[12px] font-medium underline underline-offset-4 decoration-black">
            <a href="/quem-somos" className="hover:text-[#9f7524] transition-colors">Quem Somos</a>
            <a href="/como-funciona" className="hover:text-[#9f7524] transition-colors">Como Funciona</a>
            <a href="/politica-de-privacidade" className="hover:text-[#9f7524] transition-colors">Política de Privacidade</a>
            <a href="/termos-de-uso" className="hover:text-[#9f7524] transition-colors">Termos de Uso</a>
          </div>
        </nav>

        {/* CABEÇALHO */}
        <header className="w-full bg-[#eeeeee]">
          <div className="w-full bg-black border-t-[4px] border-b-[4px] border-[#a97820] py-5 text-center px-4">
            <a href="/" className="inline-block hover:scale-[1.01] transition-transform">
              <img src="/logo.png" alt="GLOBAL SC" className="h-14 md:h-16 object-contain mx-auto" />
            </a>
          </div>
        </header>

        {/* BANNER DA PÁGINA */}
        <div className="w-full bg-black border-b-[4px] border-[#a97820]">
          {/* Certifique-se de que a extensão aqui corresponda ao arquivo que você salvou (.png ou .jpg) */}
          <img 
            src="/banner-privacidade.png" 
            alt="Política de Privacidade - Global SC" 
            className="w-full h-[180px] md:h-[280px] object-cover block" 
          />
        </div>

        {/* CONTEÚDO PRINCIPAL (DOCUMENTO JURÍDICO) */}
        <section className="w-full bg-white py-12 px-4 md:px-12 flex-grow flex justify-center">
          <div className="w-full max-w-[1000px] border border-gray-300 rounded-[20px] bg-[#fbfbfb] p-6 md:p-12 shadow-sm">
            
            <h2 className="text-[16px] md:text-[20px] font-black uppercase tracking-wide text-black border-b-2 border-gray-200 pb-4 mb-8">
              📌 Política de Privacidade (LGPD)
            </h2>

            <div className="text-[12px] md:text-[14px] text-gray-800 leading-relaxed text-justify space-y-6">
              
              <p>
                A <strong>GLOBAL SC Atacado</strong> respeita a privacidade de seus usuários e está comprometida com a proteção dos dados pessoais em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
              </p>
              <p>
                Esta Política de Privacidade tem como objetivo informar de forma transparente como coletamos, utilizamos, armazenamos e protegemos os seus dados, bem como quais são os seus direitos sobre eles.
              </p>

              <h3 className="font-bold text-black uppercase mt-8 border-l-[3px] border-[#9b7324] pl-3">
                1. Coleta de Informações
              </h3>
              <p>Podemos coletar informações fornecidas diretamente por você no ato do contato ou cadastro, tais como:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nome completo;</li>
                <li>Telefone / WhatsApp;</li>
                <li>E-mail;</li>
                <li>CNPJ ou CPF;</li>
                <li>Dados empresariais (quando aplicável).</li>
              </ul>

              <h3 className="font-bold text-black uppercase mt-8 border-l-[3px] border-[#9b7324] pl-3">
                2. Utilização dos Dados
              </h3>
              <p>Os dados coletados podem ser utilizados para:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Realizar atendimento e suporte ao usuário;</li>
                <li>Facilitar a conexão comercial entre Lojistas e Fornecedores parceiros;</li>
                <li>Processar solicitações e orçamentos na plataforma;</li>
                <li>Melhorar a experiência de navegação e utilização do site;</li>
                <li>Enviar informações institucionais e comerciais, quando autorizado pelo usuário;</li>
                <li>Cumprir obrigações legais e regulatórias.</li>
              </ul>

              <h3 className="font-bold text-black uppercase mt-8 border-l-[3px] border-[#9b7324] pl-3">
                3. Compartilhamento de Dados
              </h3>
              <p>
                A GLOBAL SC preserva a segurança e sigilo de seus dados. As informações poderão ser compartilhadas <strong>apenas quando necessário</strong> para:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Encaminhamento de solicitações comerciais aos fabricantes/importadoras parceiros para fins de faturamento e logística;</li>
                <li>Prestadores de serviços essenciais para o funcionamento da plataforma (provedores de hospedagem, etc.);</li>
                <li>Cumprimento de obrigações legais ou requisições de autoridades competentes.</li>
              </ul>

              <h3 className="font-bold text-black uppercase mt-8 border-l-[3px] border-[#9b7324] pl-3">
                4. Segurança das Informações
              </h3>
              <p>
                Adotamos medidas técnicas e administrativas adequadas para proteger os dados pessoais contra acessos não autorizados, perdas, alterações, divulgações indevidas ou qualquer forma de tratamento inadequado.
              </p>

              <h3 className="font-bold text-black uppercase mt-8 border-l-[3px] border-[#9b7324] pl-3">
                5. Direitos do Titular dos Dados
              </h3>
              <p>Nos termos da LGPD (Lei nº 13.709/2018), o usuário possui o direito de:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Confirmar a existência de tratamento de seus dados;</li>
                <li>Solicitar acesso, correção ou atualização de seus dados;</li>
                <li>Solicitar a exclusão de dados quando permitido pela legislação;</li>
                <li>Revogar consentimentos anteriormente concedidos.</li>
              </ul>

              <h3 className="font-bold text-black uppercase mt-8 border-l-[3px] border-[#9b7324] pl-3">
                6. Cookies
              </h3>
              <p>
                Nosso site utiliza cookies e tecnologias semelhantes para melhorar a navegação, personalizar a experiência e extrair dados estatísticos sobre a utilização da plataforma. O usuário pode configurar seu navegador para bloquear cookies, ciente de que isso pode impactar algumas funcionalidades.
              </p>

              <h3 className="font-bold text-black uppercase mt-8 border-l-[3px] border-[#9b7324] pl-3">
                7. Armazenamento dos Dados
              </h3>
              <p>
                Os dados são armazenados apenas pelo tempo necessário para cumprir as finalidades descritas nesta Política, atender obrigações legais, resguardar direitos da plataforma e observar os prazos previstos em lei.
              </p>

              <h3 className="font-bold text-black uppercase mt-8 border-l-[3px] border-[#9b7324] pl-3">
                8. Alterações desta Política
              </h3>
              <p>
                Esta Política de Privacidade poderá ser atualizada periodicamente para refletir melhorias em nossos serviços, adequações normativas ou mudanças regulatórias.
              </p>

              <h3 className="font-bold text-black uppercase mt-8 border-l-[3px] border-[#9b7324] pl-3">
                9. Contato
              </h3>
              <p>
                Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento de dados pessoais, entre em contato através dos nossos canais oficiais institucionais:<br/>
                <strong>E-mail:</strong> contato@globalscaltoatacado.com<br/>
                <strong>WhatsApp:</strong> (48) 99207-0377
              </p>

              <h3 className="font-bold text-black uppercase mt-8 border-l-[3px] border-[#9b7324] pl-3">
                10. Disposições Finais
              </h3>
              <p>
                A utilização da plataforma implica na ciência e concordância com esta Política de Privacidade.
              </p>
            </div>

            {/* BOTÃO VOLTAR - COR SÓLIDA #947027 COM BORDA INFERIOR BRANCA */}
            <div className="mt-16 flex justify-center w-full">
              <a 
                href="/" 
                style={{ backgroundColor: '#947027' }}
                className="w-[260px] md:w-[300px] h-[60px] md:h-[65px] rounded-full flex items-center justify-center hover:scale-105 hover:bg-[#76591f] transition-all shadow-md"
              >
                <span className="text-white font-bold text-[22px] md:text-[26px] border-b-[3px] border-white pb-1 leading-none">
                  Voltar
                </span>
              </a>
            </div>

          </div>
        </section>

        {renderSelos()}
        {renderRodape()}
      </div>
    </main>
  );
}

// ============================================================================
// COMPONENTES DE RODAPÉ E SELOS (Mantendo a padronização exata)
// ============================================================================

function renderSelos() {
  return (
    <section className="w-full bg-[#eeeeee] border-t-[3px] border-[#9b7324] py-10 px-4 md:px-8">
      <div className="w-full max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="h-[80px] bg-white border border-[#d8a51d] rounded-[14px] flex items-center justify-start gap-4 px-6 shadow-sm"><svg viewBox="0 0 80 50" className="w-[44px] h-[30px] text-[#c89413] shrink-0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 16h26" /><path d="M1 23h26" /><path d="M8 30h20" /><path d="M34 14h20v20H34z" /><path d="M54 22h10l7 8v4H54z" /><circle cx="43" cy="38" r="4" /><circle cx="66" cy="38" r="4" /></svg><div><h4 className="text-[14px] font-black uppercase tracking-[0.20em] leading-none text-black">FRETE A COMBINAR:</h4><p className="text-[8px] text-gray-500 uppercase mt-1.5 tracking-[0.10em] leading-tight break-words">FRETE NA REGIÃO DE FLORIANÓPOLIS.<br/>OUTRA REGIÃO CONSULTAR VALOR</p></div></div>
        <div className="h-[80px] bg-white border border-[#d8a51d] rounded-[14px] flex items-center justify-start gap-4 px-6 shadow-sm"><svg viewBox="0 0 60 60" className="w-[40px] h-[40px] text-[#c89413] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="30" cy="22" r="12" /><path d="M18 23v-4a12 12 0 0 1 24 0v4" /><path d="M17 25h-4v10h6" /><path d="M43 25h4v10h-6" /><path d="M42 35c0 6-5 9-12 9" /><path d="M24 44h12" /><path d="M16 56c2-8 8-12 14-12s12 4 14 12" /></svg><div><h4 className="text-[14px] font-black uppercase tracking-[0.20em] leading-none text-black">ATENDIMENTO:</h4><p className="text-[8px] text-gray-500 uppercase mt-1.5 tracking-[0.10em] leading-tight break-words">DE SEGUNDA A SEXTA DAS 7H - 20H</p></div></div>
        <div className="h-[80px] bg-white border border-[#d8a51d] rounded-[14px] flex items-center justify-start gap-4 px-6 shadow-sm"><svg viewBox="0 0 60 60" className="w-[40px] h-[40px] text-[#c89413] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M30 5l20 8v14c0 14-9 23-20 28C19 50 10 41 10 27V13z" /><path d="M20 30l7 7 14-17" /></svg><div><h4 className="text-[14px] font-black uppercase tracking-[0.20em] leading-none text-black">SITE SEGURO:</h4><p className="text-[8px] text-gray-500 uppercase mt-1.5 tracking-[0.10em] leading-tight break-words">SITE 100% CONFIÁVEL E APROVADO<br/>NO TRUSTPILOT</p></div></div>
      </div>
    </section>
  );
}

function renderRodape() {
  return (
    <footer className="w-full bg-black text-white border-t-[4px] border-[#9b7324] overflow-hidden pt-6 mt-auto">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between border-b border-[#c79a3a] pb-4 gap-6">
          <div className="w-[200px] md:w-[240px] h-[70px] md:h-[85px] bg-[#111111] flex items-center justify-center border border-zinc-800 shadow-inner shrink-0">
            <img src="/logo.png" alt="GLOBAL SC" className="max-h-[50px] md:max-h-[60px] object-contain" />
          </div>
          <div className="flex-1 flex flex-col md:flex-row justify-around items-end w-full gap-4 pb-1">
            <a href="/quem-somos" className="text-[11px] md:text-[13px] uppercase tracking-[0.2em] font-normal border-b border-white pb-1 px-4 hover:border-[#c79a3a] transition-colors">SOBRE NÓS</a>
            <a href="/faq/contato" className="text-[11px] md:text-[13px] uppercase tracking-[0.2em] font-normal border-b border-white pb-1 px-4 hover:border-[#c79a3a] transition-colors">FALE CONOSCO</a>
            <a href="/trabalhe-conosco" className="text-[11px] md:text-[13px] uppercase tracking-[0.2em] font-normal border-b border-white pb-1 px-4 hover:border-[#c79a3a] transition-colors">TRABALHE CONOSCO</a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[200px_240px_180px_1fr] gap-6 md:gap-8 pt-5 pb-0 items-start justify-between">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center gap-3"><svg className="w-5 h-5 text-[#c79a3a]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg><span className="text-[12px] md:text-[14px] font-bold uppercase tracking-widest">CONTATO:</span></div>
            <div className="flex items-center gap-3 w-full justify-center md:justify-start"><svg className="w-5 h-5 text-[#c79a3a] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg><a href="https://wa.me/554892070377" target="_blank" rel="noopener noreferrer" className="bg-[#c79a3a] text-white text-[10px] uppercase font-bold py-2 px-4 rounded w-full max-w-[200px] text-center underline underline-offset-2 shadow-md">+55 48 9207-0377</a></div>
            <div className="flex items-center gap-3 w-full justify-center md:justify-start"><svg className="w-5 h-5 text-[#c79a3a] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><a href="mailto:contato@globalscaltoatacado.com" className="bg-[#c79a3a] text-white text-[7px] md:text-[7px] uppercase font-bold py-2 px-2 rounded w-full max-w-[200px] text-center whitespace-nowrap underline underline-offset-2 shadow-md">contato@globalscaltoatacado.com</a></div>
          </div>
          <div className="flex flex-col items-center md:items-start space-y-4 w-full">
            <div className="flex items-center gap-3 mb-1"><svg className="w-5 h-5 text-[#c79a3a]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg><span className="text-[12px] md:text-[14px] font-bold uppercase tracking-widest">POLÍTICAS:</span></div>
            <a href="/politica-de-privacidade" className="bg-[#c79a3a] text-white text-[10px] uppercase font-bold py-2 px-4 rounded w-full max-w-[220px] text-center underline underline-offset-2 shadow-md block">Política de Privacidade (LGPD)</a>
            <a href="/politicas-de-troca" className="bg-[#c79a3a] text-white text-[10px] uppercase font-bold py-2 px-4 rounded w-full max-w-[220px] text-center underline underline-offset-2 shadow-md block">Políticas de Troca</a>
            <a href="/termos-de-uso" className="bg-[#c79a3a] text-white text-[10px] uppercase font-bold py-2 px-4 rounded w-full max-w-[220px] text-center underline underline-offset-2 shadow-md block">Termos de Uso e Condições Gerais</a>
            <a href="/aviso-legal" className="bg-[#c79a3a] text-white text-[10px] uppercase font-bold py-2 px-4 rounded w-full max-w-[220px] text-center underline underline-offset-2 shadow-md block">Aviso Legal</a>
          </div>
          <div className="flex flex-col items-center md:items-start space-y-5">
            <div className="flex items-center gap-3"><svg className="w-5 h-5 text-[#c79a3a]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg><span className="text-[12px] md:text-[14px] font-bold uppercase tracking-widest">TUTORIAL:</span></div>
            <a href="/faq/como-comprar" className="bg-[#c79a3a] text-white text-[10px] uppercase font-bold py-2 px-4 rounded w-full max-w-[160px] text-center underline underline-offset-2 shadow-md block">como comprar ?</a>
          </div>
          <div className="self-end relative flex justify-end items-end h-[240px] md:h-[260px] w-full -mr-4 md:-mr-8">
            <div className="absolute inset-0 z-0 flex items-end justify-end opacity-[0.08] text-[#c79a3a] pointer-events-none"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" className="w-[300px] h-[300px] md:w-[360px] md:h-[360px] -mb-10 -mr-10"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
            <img src="/foto-tiago.png" alt="Tiago Braga - Equipe Comercial" className="relative z-10 w-full max-w-[260px] md:max-w-[320px] h-full object-contain object-right-bottom block" />
          </div>
        </div>
      </div>
      <div className="bg-[#c79a3a] text-black text-[9px] md:text-[10px] font-bold text-center uppercase leading-relaxed px-4 py-4 tracking-[0.08em] border-t-2 border-black relative z-20 shadow-md">
        ESTE CATÁLOGO B2B DESTINA-SE EXCLUSIVAMENTE À CONSULTA DE PRODUTOS E SOLICITAÇÃO DE ORÇAMENTOS. NÃO SÃO REALIZADOS PAGAMENTOS PELO SITE VIA PIX, BOLETO OU CARTÃO. TODAS AS NEGOCIAÇÕES, DESCONTOS E FORMAS DE PAGAMENTO DEVEM SER TRATADAS DIRETAMENTE COM A EMPRESA FORNECEDORA OU ATRAVÉS DO FINANCEIRO: (48) 99207-0377 – TIAGO BRAGA.
      </div>
      <div className="text-center text-[10px] md:text-[11px] text-zinc-500 py-6 space-y-1.5 bg-[#080808] tracking-widest uppercase relative z-20 font-light">
        <p>© 2026 Global SC Alto Atacado. Todos os direitos reservados.</p>
        <p>GLOBAL SC FÁBRICA E IMPORTADORA ALTO ATACADO | CNPJ: 59.987.080/0001-63</p>
        <p>Sede Administrativa: Av. Marginal Oeste, 90 - Monte Alegre, Camboriú - SC, 88340-000</p>
        <p>Contato Institucional: contato@globalscaltoatacado.com</p>
        <p className="text-zinc-600 text-[9px]">Plataforma B2B de Intermediação Comercial – Modelo de Catálogo Digital Automatizado (Asset-Light).</p>
      </div>
    </footer>
  );
}