import React from 'react';

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
  )
};

export default function SobreNos() {
  return (
    <div className="font-['Montserrat'] bg-[#fff0f5] min-h-screen">
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

        {/* Pillars Section (Cards) */}
        <section className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Visão */}
          <div className="bg-white p-8 rounded-2xl text-center shadow-sm border border-pink-100 transition-all hover:-translate-y-2 hover:shadow-lg">
            <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#9d1d5a]">
              <Icons.Eye />
            </div>
            <h3 className="font-['Playfair_Display'] text-2xl text-[#9d1d5a] mb-4">Nossas Visões</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Ser a referência nacional em confeitaria artística, unindo tradição e inovação em cada detalhe.</p>
          </div>

          {/* Missão */}
          <div className="bg-[#9d1d5a] text-white p-8 rounded-2xl text-center shadow-xl transition-all hover:-translate-y-2">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icons.Target />
            </div>
            <h3 className="font-['Playfair_Display'] text-2xl mb-4">Nossas Missões</h3>
            <p className="opacity-90 text-sm leading-relaxed">Proporcionar experiências sensoriais inesquecíveis, transformando sonhos em doces realidades com paixão.</p>
          </div>

          {/* Entrega */}
          <div className="bg-white p-8 rounded-2xl text-center shadow-sm border border-pink-100 transition-all hover:-translate-y-2 hover:shadow-lg">
            <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#9d1d5a]">
              <Icons.Gift />
            </div>
            <h3 className="font-['Playfair_Display'] text-2xl text-[#9d1d5a] mb-4">O que Entregamos</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Mais do que sobremesas, entregamos exclusividade, pontualidade e o ingrediente secreto: muito amor.</p>
          </div>
        </section>
      </main>

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