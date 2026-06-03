import React, { useState } from 'react';

const Icons = {
  Cake: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/><path d="M7 4h.01"/><path d="M12 4h.01"/><path d="M17 4h.01"/></svg>
  ),
  Eye: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
  ),
  Target: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
  ),
  Gift: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"/><rect width="20" height="5" x="2" y="7"/><line x1="12" x2="12" y1="22" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
  ),
  Close: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
  )
};

export default function SobreNos() {
  // Estado para controlar qual pilar foi clicado e abrir o Pop-up
  const [pilarAtivo, setPilarAtivo] = useState<number | null>(null);

  const dadosDosPilares = [
    {
      titulo: "Nossas Visões",
      resumo: "Ser a referência nacional em confeitaria artística, unindo tradição e inovação em cada detalhe.",
      detalhe: "Não queremos apenas fazer bolos, queremos redefinir o conceito de confeitaria artística. Buscamos incansavelmente novas técnicas de colorimetry e modelagem estrutural, garantindo que o seu evento tenha uma obra-prima que seja tão inesquecível aos olhos quanto é maravilhosa ao paladar.",
      icon: <Icons.Eye />,
      isDark: false
    },
    {
      titulo: "Nossas Missões",
      resumo: "Proporcionar experiências sensoriais inesquecíveis, transformando sonhos em doces realidades com paixão.",
      detalhe: "Nossa missão diária é pegar aquela ideia abstrata, aquele sonho de infância ou o tema da festa perfeita e materializá-lo em texturas equilibradas, recheios cremosos e designs de arrancar o fôlego. Trabalhamos com afeto e precisão para que a primeira mordida seja um portal de pura felicidade.",
      icon: <Icons.Target />,
      isDark: true
    },
    {
      titulo: "O que Entregamos",
      resumo: "Mais do que sobremesas, entregamos exclusividade, pontualidade e o ingrediente secreto: muito amor.",
      detalhe: "Nosso padrão de entrega é absoluto. Cada encomenda é tratada como um projeto único e exclusivo: desde a seleção rigorosa de insumos nobres até a entrega pontual monitorada. O ingrediente que une tudo isso é o amor pelo ofício, garantindo uma experiência impecável do carrinho ao primeiro pedaço.",
      icon: <Icons.Gift />,
      isDark: false
    }
  ];

  return (
    <div className="font-['Montserrat'] bg-[#fff0f5] min-h-screen relative">
      {/* Hero Section */}
      <header 
        className="relative h-[50vh] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(157, 29, 90, 0.8), rgba(157, 29, 90, 0.8)), url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')` 
        }}
      >
        <div className="px-4 animate-fadeIn">
          <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl mb-4">Vênus Confeitaria</h1>
          <p className="text-xl md:text-2xl font-light italic">Onde a doçura encontra a arte</p>
          <div className="mt-8 w-24 h-1 bg-white mx-auto opacity-50 rounded-full"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 max-w-5xl">
        
        {/* About Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <h2 className="font-['Playfair_Display'] text-4xl text-[#9d1d5a] mb-6 italic">A Nossa História</h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700">
              <p>
                Existem momentos na vida que pedem mais do que um sabor; pedem uma memória. Desde 2020, a <strong>Vênus Confeitaria</strong> nasceu com o propósito de transformar açúcar, técnica e afeto em verdadeiras obras de arte comestíveis.
              </p>
              <p>
                Acreditamos que cada bolo conta uma história e cada doce é um capítulo de celebração. O nosso compromisso é com a excelência artesanal e a satisfação de criar sorrisos através do paladar.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 relative group">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#9d1d5a] rounded-lg z-0 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <img 
              src="https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Bolo Artístico" 
              className="rounded-lg shadow-xl relative z-10 w-full h-96 object-cover"
            />
          </div>
        </section>

        {/* Pillars Section — DESIGN ORIGINAL PRESERVADO (Igual ao print image_84e3e8.png) */}
        <section className="grid md:grid-cols-3 gap-8 mb-12">
          {dadosDosPilares.map((pilar, index) => (
            <div
              key={index}
              onClick={() => setPilarAtivo(index)}
              className={`cursor-pointer p-8 rounded-2xl text-center transition-all duration-300 active:scale-95 group
                ${pilar.isDark 
                  ? 'bg-[#9d1d5a] text-white shadow-xl hover:-translate-y-2' 
                  : 'bg-white p-8 rounded-2xl text-center shadow-sm border border-pink-100 hover:-translate-y-2 hover:shadow-lg'
                }`}
              role="button"
              tabIndex={0}
              aria-label={`Ver mais sobre ${pilar.titulo}`}
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110 duration-300
                ${pilar.isDark ? 'bg-white/10 text-white' : 'bg-pink-50 text-[#9d1d5a]'}`}
              >
                {pilar.icon}
              </div>
              <h3 className={`font-['Playfair_Display'] text-2xl mb-4 ${!pilar.isDark ? 'text-[#9d1d5a]' : ''}`}>
                {pilar.titulo}
              </h3>
              <p className={`text-sm leading-relaxed ${!pilar.isDark ? 'text-gray-600' : 'opacity-90'}`}>
                {pilar.resumo}
              </p>
              <span className={`inline-block mt-4 text-[10px] uppercase tracking-wider font-bold opacity-0 group-hover:opacity-60 transition-opacity duration-300 ${!pilar.isDark ? 'text-[#9d1d5a]' : 'text-pink-200'}`}>
                Clique para expandir +
              </span>
            </div>
          ))}
        </section>
      </main>

      {/* MODAL ANIMADO (OVERLAY) — O ELEMENTO "UAU!" SEM CONFUSÃO VISUAL */}
      {pilarAtivo !== null && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setPilarAtivo(null)} // Fecha se clicar no fundo escuro
        >
          {/* Card do Pop-up */}
          <div 
            className={`w-full max-w-lg rounded-2xl p-8 text-center relative shadow-2xl transform transition-all animate-scale-up
              ${dadosDosPilares[pilarAtivo].isDark ? 'bg-[#9d1d5a] text-white' : 'bg-white text-gray-800 border border-pink-100'}`}
            onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar dentro do card
          >
            {/* Botão Fechar */}
            <button 
              onClick={() => setPilarAtivo(null)}
              className={`absolute top-4 right-4 p-2 rounded-full transition-colors ${dadosDosPilares[pilarAtivo].isDark ? 'hover:bg-white/10 text-pink-200' : 'hover:bg-pink-50 text-stone-400'}`}
              aria-label="Fechar detalhes"
            >
              <Icons.Close />
            </button>

            {/* Ícone */}
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 scale-110
              ${dadosDosPilares[pilarAtivo].isDark ? 'bg-white/10 text-white' : 'bg-pink-50 text-[#9d1d5a]'}`}
            >
              {dadosDosPilares[pilarAtivo].icon}
            </div>

            {/* Título */}
            <h3 className={`font-['Playfair_Display'] text-3xl mb-4 ${!dadosDosPilares[pilarAtivo].isDark ? 'text-[#9d1d5a]' : ''}`}>
              {dadosDosPilares[pilarAtivo].titulo}
            </h3>

            {/* Texto Detalhado Real */}
            <p className={`text-base leading-relaxed mb-6 italic font-medium ${!dadosDosPilares[pilarAtivo].isDark ? 'text-gray-700' : 'text-pink-50'}`}>
              "{dadosDosPilares[pilarAtivo].detalhe}"
            </p>

            <button 
              onClick={() => setPilarAtivo(null)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-transform active:scale-95
                ${dadosDosPilares[pilarAtivo].isDark ? 'bg-white text-[#9d1d5a] hover:bg-pink-50' : 'bg-[#9d1d5a] text-white hover:bg-[#85164b]'}`}
            >
              Entendi
            </button>
          </div>
        </div>
      )}

      {/* Decorative Bottom Quote */}
      <section className="bg-white py-12 border-t border-pink-100">
        <div className="container mx-auto px-4 text-center">
          <div className="text-[#9d1d5a] mb-4 opacity-30 flex justify-center scale-150">
            <Icons.Cake />
          </div>
          <p className="font-['Playfair_Display'] text-2xl text-[#9d1d5a] italic">
            "A doçura de Vênus em cada detalhe da sua festa."
          </p>
        </div>
      </section>
    </div>
  );
}