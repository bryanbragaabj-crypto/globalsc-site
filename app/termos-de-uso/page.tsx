/* eslint-disable @next/next/no-img-element */

export default function TermosDeUso() {
  return (
    <main className="min-h-screen w-full bg-[#eeeeee] text-black font-sans antialiased overflow-x-hidden flex justify-center">
      <div className="w-full max-w-[1260px] bg-[#eeeeee] flex flex-col shadow-xl min-h-screen">
        
        {/* MENU SUPERIOR */}
        <nav className="w-full bg-[#eeeeee] py-4 px-4">
          <div className="flex flex-wrap justify-center items-center gap-x-10 md:gap-x-14 gap-y-2 text-[10px] md:text-[12px] font-medium underline underline-offset-4 decoration-black">
            <a href="/quem-somos" className="hover:text-[#9f7524] transition-colors">Quem Somos</a>
            <a href="/como-funciona" className="hover:text-[#9f7524] transition-colors">Como Funciona</a>
            <a href="/politica-de-privacidade" className="hover:text-[#9f7524] transition-colors">PolÃ­tica de Privacidade</a>
            <a href="/termos-de-uso" className="hover:text-[#9f7524] transition-colors">Termos de Uso</a>
          </div>
        </nav>

        {/* CABEÃ‡ALHO */}
        <header className="w-full bg-[#eeeeee]">
          <div className="w-full bg-black border-t-[4px] border-b-[4px] border-[#a97820] py-5 text-center px-4">
            <a href="/" className="inline-block hover:scale-[1.01] transition-transform">
              <img src="/logo.png" alt="GLOBAL SC" className="h-14 md:h-16 object-contain mx-auto" />
            </a>
          </div>
        </header>

        {/* BANNER DA PÃGINA */}
        <div className="w-full bg-black border-b-[4px] border-[#a97820]">
          <img 
            src="/banner-termos.png" 
            alt="Termos de Uso - Global SC" 
            className="w-full h-[180px] md:h-[280px] object-cover block" 
          />
        </div>

        {/* CONTEÃšDO PRINCIPAL (DOCUMENTO JURÃDICO) */}
        <section className="w-full bg-white py-12 px-4 md:px-12 flex-grow flex justify-center">
          <div className="w-full max-w-[1000px] border border-gray-300 rounded-[20px] bg-[#fbfbfb] p-6 md:p-12 shadow-sm">
            
            <h2 className="text-[16px] md:text-[20px] font-black uppercase tracking-wide text-black border-b-2 border-gray-200 pb-4 mb-8">
              ðŸ“Œ Termos de Uso e CondiÃ§Ãµes Gerais
            </h2>

            <div className="text-[12px] md:text-[14px] text-gray-800 leading-relaxed text-justify space-y-6">
              
              <p>
                O presente instrumento estabelece os Termos e CondiÃ§Ãµes Gerais de Uso da plataforma GLOBAL SC ATACADO (doravante denominada simplesmente "PLATAFORMA" ou "GLOBAL SC"), aplicÃ¡veis a todos os usuÃ¡rios que acessarem seus conteÃºdos, catÃ¡logos, fornecedores e informaÃ§Ãµes comerciais. A utilizaÃ§Ã£o da plataforma implica na leitura, compreensÃ£o e aceitaÃ§Ã£o integral das disposiÃ§Ãµes abaixo.
              </p>

              <h3 className="font-bold text-black uppercase mt-8 border-l-[3px] border-[#9b7324] pl-3">
                CLÃUSULA 1 â€“ DA NATUREZA DA PLATAFORMA
              </h3>
              <p>
                <strong>1.1.</strong> A GLOBAL SC ATACADO consiste em uma plataforma digital B2B destinada Ã  divulgaÃ§Ã£o de fornecedores, fabricantes, distribuidores, importadoras e produtos voltados ao mercado atacadista.<br/>
                <strong>1.2.</strong> A plataforma possui carÃ¡ter estritamente informativo e comercial, funcionando como catÃ¡logo digital para consulta de produtos, fornecedores e oportunidades comerciais.<br/>
                <strong>1.3.</strong> A GLOBAL SC atua como um intermediador, nÃ£o vende produtos de forma direta, nÃ£o processa pagamentos, nÃ£o emite notas fiscais de venda e nÃ£o mantÃ©m estoque prÃ³prio.<br/>
                <strong>1.4.</strong> Toda negociaÃ§Ã£o comercial ocorre diretamente entre o comprador e o fornecedor responsÃ¡vel pelo produto anunciado.
              </p>

              <h3 className="font-bold text-black uppercase mt-8 border-l-[3px] border-[#9b7324] pl-3">
                CLÃUSULA 2 â€“ DO CADASTRO E ACESSO
              </h3>
              <p>
                <strong>2.1.</strong> O acesso a determinadas Ã¡reas da plataforma poderÃ¡ exigir cadastro prÃ©vio.<br/>
                <strong>2.2.</strong> O usuÃ¡rio declara que todas as informaÃ§Ãµes fornecidas sÃ£o verdadeiras, completas e atualizadas.<br/>
                <strong>2.3.</strong> A GLOBAL SC poderÃ¡ solicitar documentos para validaÃ§Ã£o cadastral sempre que considerar necessÃ¡rio.<br/>
                <strong>2.4.</strong> O usuÃ¡rio Ã© responsÃ¡vel pela guarda de seus dados de acesso e senha.
              </p>

              <h3 className="font-bold text-black uppercase mt-8 border-l-[3px] border-[#9b7324] pl-3">
                CLÃUSULA 3 â€“ DOS PRODUTOS E FORNECEDORES
              </h3>
              <p>
                <strong>3.1.</strong> Os produtos, imagens, descriÃ§Ãµes, preÃ§os, estoques, prazos de entrega e demais informaÃ§Ãµes exibidas na plataforma sÃ£o fornecidos pelos respectivos fornecedores.<br/>
                <strong>3.2.</strong> A GLOBAL SC nÃ£o garante a disponibilidade contÃ­nua de produtos anunciados.<br/>
                <strong>3.3.</strong> AlteraÃ§Ãµes de preÃ§os, estoques, condiÃ§Ãµes comerciais e disponibilidade poderÃ£o ocorrer sem aviso prÃ©vio, sendo de responsabilidade exclusiva do fornecedor.<br/>
                <strong>3.4.</strong> A responsabilidade pela qualidade, fabricaÃ§Ã£o, garantia, regularidade fiscal e entrega dos produtos pertence exclusivamente ao fornecedor responsÃ¡vel pela emissÃ£o da respectiva Nota Fiscal.
              </p>

              <h3 className="font-bold text-black uppercase mt-8 border-l-[3px] border-[#9b7324] pl-3">
                CLÃUSULA 4 â€“ DAS NEGOCIAÃ‡Ã•ES COMERCIAIS
              </h3>
              <p>
                <strong>4.1.</strong> A plataforma atua apenas como facilitadora de conexÃµes entre compradores e fornecedores.<br/>
                <strong>4.2.</strong> A GLOBAL SC nÃ£o recebe pagamentos via PIX, cartÃµes de crÃ©dito, cartÃµes de dÃ©bito, boletos bancÃ¡rios, transferÃªncia bancÃ¡ria ou qualquer outro meio de pagamento.<br/>
                <strong>4.3.</strong> CondiÃ§Ãµes comerciais, descontos, faturamentos, formas de pagamento, fretes e demais condiÃ§Ãµes de negociaÃ§Ã£o deverÃ£o ser tratadas diretamente com o fornecedor responsÃ¡vel.<br/>
                <strong>4.4.</strong> A plataforma nÃ£o atua como instituiÃ§Ã£o financeira, correspondente bancÃ¡rio ou intermediadora de pagamentos.
              </p>

              <h3 className="font-bold text-black uppercase mt-8 border-l-[3px] border-[#9b7324] pl-3">
                CLÃUSULA 5 â€“ DAS TROCAS, DEVOLUÃ‡Ã•ES E GARANTIAS
              </h3>
              <p>
                <strong>5.1.</strong> As polÃ­ticas de troca, devoluÃ§Ã£o, garantia e logÃ­stica reversa serÃ£o regidas pelos documentos especÃ­ficos disponibilizados na plataforma ou pelos fornecedores responsÃ¡veis.<br/>
                <strong>5.2.</strong> A GLOBAL SC nÃ£o executa processos de troca, coleta, logÃ­stica reversa ou reembolso.<br/>
                <strong>5.3.</strong> Produtos com defeito de fabricaÃ§Ã£o ou vÃ­cios ocultos sÃ£o de responsabilidade exclusiva da marca/fabricante.
              </p>

              <h3 className="font-bold text-black uppercase mt-8 border-l-[3px] border-[#9b7324] pl-3">
                CLÃUSULA 6 â€“ LIMITAÃ‡ÃƒO DE RESPONSABILIDADE
              </h3>
              <p>
                <strong>6.1.</strong> A GLOBAL SC atua exclusivamente como vitrine digital de divulgaÃ§Ã£o (intermediaÃ§Ã£o Asset-Light).<br/>
                <strong>6.2.</strong> A plataforma nÃ£o se responsabiliza por:<br/>
                â€¢ NegociaÃ§Ãµes realizadas entre usuÃ¡rios e fornecedores;<br/>
                â€¢ Pagamentos efetuados diretamente a empresas fornecedoras;<br/>
                â€¢ Entregas, atrasos ou extravios;<br/>
                â€¢ DivergÃªncias de estoque;<br/>
                â€¢ Defeitos de fabricaÃ§Ã£o;<br/>
                â€¢ Garantia dos produtos;<br/>
                â€¢ InformaÃ§Ãµes fornecidas pelos anunciantes;<br/>
                â€¢ Lucros cessantes, perdas comerciais ou prejuÃ­zos decorrentes de relaÃ§Ãµes estabelecidas entre compradores e fornecedores.<br/>
                <strong>6.3.</strong> A responsabilidade cÃ­vel, criminal, serviÃ§os, notas fiscais, tributos e cumprimento das obrigaÃ§Ãµes comerciais pertence exclusivamente ao fornecedor responsÃ¡vel.
              </p>

              <h3 className="font-bold text-black uppercase mt-8 border-l-[3px] border-[#9b7324] pl-3">
                CLÃUSULA 7 â€“ TRATAMENTO DE DADOS
              </h3>
              <p>
                A plataforma poderÃ¡ registrar dados bÃ¡sicos de navegaÃ§Ã£o, incluindo endereÃ§os IP, data, horÃ¡rio de acesso, navegador utilizado e demais informaÃ§Ãµes necessÃ¡rias para seguranÃ§a, auditoria e cumprimento da legislaÃ§Ã£o aplicÃ¡vel. O tratamento de dados observarÃ¡ as disposiÃ§Ãµes da PolÃ­tica de Privacidade e da Lei Geral de ProteÃ§Ã£o de Dados (LGPD).
              </p>

              <h3 className="font-bold text-black uppercase mt-8 border-l-[3px] border-[#9b7324] pl-3">
                CLÃUSULA 8 â€“ PROPRIEDADE INTELECTUAL
              </h3>
              <p>
                <strong>8.1.</strong> Todo o conteÃºdo da plataforma, incluindo textos, logotipos, marcas, imagens, layouts e elementos grÃ¡ficos, Ã© protegido pela legislaÃ§Ã£o de propriedade intelectual.<br/>
                <strong>8.2.</strong> Ã‰ proibida a reproduÃ§Ã£o, distribuiÃ§Ã£o ou utilizaÃ§Ã£o sem autorizaÃ§Ã£o prÃ©via e expressa dos respectivos titulares.
              </p>

              <h3 className="font-bold text-black uppercase mt-8 border-l-[3px] border-[#9b7324] pl-3">
                CLÃUSULA 9 â€“ ALTERAÃ‡Ã•ES DOS TERMOS
              </h3>
              <p>
                <strong>9.1.</strong> A GLOBAL SC poderÃ¡ modificar estes Termos de Uso a qualquer momento, visando adequaÃ§Ã£o legal, operacional ou comercial.<br/>
                <strong>9.2.</strong> As versÃµes atualizadas entrarÃ£o em vigor a partir de sua publicaÃ§Ã£o na plataforma.
              </p>

              <h3 className="font-bold text-black uppercase mt-8 border-l-[3px] border-[#9b7324] pl-3">
                CLÃUSULA 10 â€“ FORO
              </h3>
              <p>
                Fica eleito o Foro da Comarca de FlorianÃ³polis, Estado de Santa Catarina, para dirimir quaisquer controvÃ©rsias decorrentes destes Termos de Uso, renunciando as partes a qualquer outro, por mais privilegiado que seja.
              </p>

              <h3 className="font-bold text-black uppercase mt-8 border-l-[3px] border-[#9b7324] pl-3">
                CLÃUSULA 11 â€“ ACEITAÃ‡ÃƒO
              </h3>
              <p>
                <strong>11.1.</strong> Ao acessar ou utilizar a plataforma, o usuÃ¡rio declara ter lido, compreendido e aceitado integralmente os presentes Termos e CondiÃ§Ãµes Gerais de Uso.<br/>
                <strong>11.2.</strong> Caso nÃ£o concorde com qualquer disposiÃ§Ã£o deste documento, o usuÃ¡rio deverÃ¡ interromper imediatamente a navegaÃ§Ã£o e a utilizaÃ§Ã£o da plataforma.
              </p>
            </div>

            {/* BOTÃƒO VOLTAR - COR SÃ“LIDA #947027 COM BORDA INFERIOR BRANCA */}
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
// COMPONENTES DE RODAPÃ‰ E SELOS
// ============================================================================

function renderSelos() {
  return (
    <section className="w-full bg-[#eeeeee] border-t-[3px] border-[#9b7324] py-10 px-4 md:px-8">
      <div className="w-full max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="h-[80px] bg-white border border-[#d8a51d] rounded-[14px] flex items-center justify-start gap-4 px-6 shadow-sm"><svg viewBox="0 0 80 50" className="w-[44px] h-[30px] text-[#c89413] shrink-0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 16h26" /><path d="M1 23h26" /><path d="M8 30h20" /><path d="M34 14h20v20H34z" /><path d="M54 22h10l7 8v4H54z" /><circle cx="43" cy="38" r="4" /><circle cx="66" cy="38" r="4" /></svg><div><h4 className="text-[14px] font-black uppercase tracking-[0.20em] leading-none text-black">FRETE A COMBINAR:</h4><p className="text-[8px] text-gray-500 uppercase mt-1.5 tracking-[0.10em] leading-tight break-words">FRETE NA REGIÃƒO DE FLORIANÃ“POLIS.<br/>OUTRA REGIÃƒO CONSULTAR VALOR</p></div></div>
        <div className="h-[80px] bg-white border border-[#d8a51d] rounded-[14px] flex items-center justify-start gap-4 px-6 shadow-sm"><svg viewBox="0 0 60 60" className="w-[40px] h-[40px] text-[#c89413] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="30" cy="22" r="12" /><path d="M18 23v-4a12 12 0 0 1 24 0v4" /><path d="M17 25h-4v10h6" /><path d="M43 25h4v10h-6" /><path d="M42 35c0 6-5 9-12 9" /><path d="M24 44h12" /><path d="M16 56c2-8 8-12 14-12s12 4 14 12" /></svg><div><h4 className="text-[14px] font-black uppercase tracking-[0.20em] leading-none text-black">ATENDIMENTO:</h4><p className="text-[8px] text-gray-500 uppercase mt-1.5 tracking-[0.10em] leading-tight break-words">DE SEGUNDA A SEXTA DAS 7H - 20H</p></div></div>
        <div className="h-[80px] bg-white border border-[#d8a51d] rounded-[14px] flex items-center justify-start gap-4 px-6 shadow-sm"><svg viewBox="0 0 60 60" className="w-[40px] h-[40px] text-[#c89413] shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M30 5l20 8v14c0 14-9 23-20 28C19 50 10 41 10 27V13z" /><path d="M20 30l7 7 14-17" /></svg><div><h4 className="text-[14px] font-black uppercase tracking-[0.20em] leading-none text-black">SITE SEGURO:</h4><p className="text-[8px] text-gray-500 uppercase mt-1.5 tracking-[0.10em] leading-tight break-words">SITE 100% CONFIÃVEL E APROVADO<br/>NO TRUSTPILOT</p></div></div>
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
            <a href="/quem-somos" className="text-[11px] md:text-[13px] uppercase tracking-[0.2em] font-normal border-b border-white pb-1 px-4 hover:border-[#c79a3a] transition-colors">SOBRE NÃ“S</a>
            <a href="/faq/contato" className="text-[11px] md:text-[13px] uppercase tracking-[0.2em] font-normal border-b border-white pb-1 px-4 hover:border-[#c79a3a] transition-colors">FALE CONOSCO</a>
            <a href="/trabalhe-conosco" className="text-[11px] md:text-[13px] uppercase tracking-[0.2em] font-normal border-b border-white pb-1 px-4 hover:border-[#c79a3a] transition-colors">TRABALHE CONOSCO</a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[200px_240px_180px_1fr] gap-6 md:gap-8 pt-5 pb-0 items-start justify-between">
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center gap-3"><svg className="w-5 h-5 text-[#c79a3a]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg><span className="text-[12px] md:text-[14px] font-bold uppercase tracking-widest">CONTATO:</span></div>
            <div className="flex items-center gap-3 w-full justify-center md:justify-start"><svg className="w-5 h-5 text-[#c79a3a] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg><a href="https://wa.me/554892070377" target="_blank" rel="noopener noreferrer" className="bg-[#c79a3a] text-white text-[10px] uppercase font-bold py-2 px-4 rounded w-full max-w-[200px] text-center underline underline-offset-2 shadow-md">+55 48 9207-0377</a></div>
            <div className="flex items-center gap-3 w-full justify-center md:justify-start"><svg className="w-5 h-5 text-[#c79a3a] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><a href="mailto:contato@screpresentation.com.br" className="bg-[#c79a3a] text-white text-[7px] md:text-[7px] uppercase font-bold py-2 px-2 rounded w-full max-w-[200px] text-center whitespace-nowrap underline underline-offset-2 shadow-md">contato@globalscaltoatacado.com</a></div>
          </div>
          <div className="flex flex-col items-center md:items-start space-y-4 w-full">
            <div className="flex items-center gap-3 mb-1"><svg className="w-5 h-5 text-[#c79a3a]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg><span className="text-[12px] md:text-[14px] font-bold uppercase tracking-widest">POLÃTICAS:</span></div>
            <a href="/politica-de-privacidade" className="bg-[#c79a3a] text-white text-[10px] uppercase font-bold py-2 px-4 rounded w-full max-w-[220px] text-center underline underline-offset-2 shadow-md block">PolÃ­tica de Privacidade (LGPD)</a>
            <a href="/politicas-de-troca" className="bg-[#c79a3a] text-white text-[10px] uppercase font-bold py-2 px-4 rounded w-full max-w-[220px] text-center underline underline-offset-2 shadow-md block">PolÃ­ticas de Troca</a>
            <a href="/termos-de-uso" className="bg-[#c79a3a] text-white text-[10px] uppercase font-bold py-2 px-4 rounded w-full max-w-[220px] text-center underline underline-offset-2 shadow-md block">Termos de Uso e CondiÃ§Ãµes Gerais</a>
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
        ESTE CATÃLOGO B2B DESTINA-SE EXCLUSIVAMENTE Ã€ CONSULTA DE PRODUTOS E SOLICITAÃ‡ÃƒO DE ORÃ‡AMENTOS. NÃƒO SÃƒO REALIZADOS PAGAMENTOS PELO SITE VIA PIX, BOLETO OU CARTÃƒO. TODAS AS NEGOCIAÃ‡Ã•ES, DESCONTOS E FORMAS DE PAGAMENTO DEVEM SER TRATADAS DIRETAMENTE COM A EMPRESA FORNECEDORA OU ATRAVÃ‰S DO FINANCEIRO: (48) 99207-0377 â€“ TIAGO BRAGA.
      </div>
      <div className="text-center text-[10px] md:text-[11px] text-zinc-500 py-6 space-y-1.5 bg-[#080808] tracking-widest uppercase relative z-20 font-light">
        <p>Â© 2026 Global SC Alto Atacado. Todos os direitos reservados.</p>
        <p>GLOBAL SC FÃBRICA E IMPORTADORA ALTO ATACADO | CNPJ: 59.987.080/0001-63</p>
        <p>Sede Administrativa: Av. Marginal Oeste, 90 - Monte Alegre, CamboriÃº - SC, 88340-000</p>
        <p>Contato Institucional: contato@globalscaltoatacado.com</p>
        <p className="text-zinc-600 text-[9px]">Plataforma B2B de IntermediaÃ§Ã£o Comercial â€“ Modelo de CatÃ¡logo Digital Automatizado (Asset-Light).</p>
      </div>
    </footer>
  );
}