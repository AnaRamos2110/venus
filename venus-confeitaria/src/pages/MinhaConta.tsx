import React, { useState } from 'react';

// Ícones SVG integrados para garantir performance e evitar erros de compilação
const Icons = {
  ArrowLeft: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
  ),
  Minus: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/></svg>
  ),
  Plus: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
  ),
  Cake: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/><path d="M7 4h.01"/><path d="M12 4h.01"/><path d="M17 4h.01"/></svg>
  ),
  Trash: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
  ),
  ArrowRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  )
};

export default function MinhaConta() {
  const [activeTab, setActiveTab] = useState<'cart' | 'history'>('cart');

  return (
    <div className="min-h-screen bg-[#fff0f5] font-['Montserrat'] pb-24">
      {/* Navegação Superior */}
      <nav className="bg-white/70 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-20 flex justify-between items-center">
          <button className="text-gray-400 hover:text-[#9d1d5a] transition-colors">
            <Icons.ArrowLeft />
          </button>
          <span className="font-['Playfair_Display'] text-xl font-bold text-gray-800">Minha Conta</span>
          <div className="w-6"></div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-8">
        
        {/* Alternador de Abas */}
        <div className="flex mb-8">
          <button 
            onClick={() => setActiveTab('cart')}
            className={`flex-1 py-4 font-bold text-sm uppercase tracking-widest transition-all border-b-2 ${
              activeTab === 'cart' 
                ? 'text-[#9d1d5a] border-[#9d1d5a]' 
                : 'text-gray-400 border-transparent'
            }`}
          >
            Carrinho (2)
          </button>
          <button 
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-4 font-bold text-sm uppercase tracking-widest transition-all border-b-2 ${
              activeTab === 'history' 
                ? 'text-[#9d1d5a] border-[#9d1d5a]' 
                : 'text-gray-400 border-transparent'
            }`}
          >
            Histórico
          </button>
        </div>

        {/* CONTEÚDO DINÂMICO */}
        {activeTab === 'cart' ? (
          <div className="animate-fadeIn space-y-6">
            {/* Itens do Carrinho */}
            <div className="space-y-4">
              {/* Item 1: Doce Comum */}
              <div className="bg-white p-6 rounded-2rem shadow-sm flex items-center gap-6 group hover:shadow-md transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1559598467-f8b76c8155d0?auto=format&fit=crop&w=150&q=80" 
                  className="w-20 h-20 rounded-2xl object-cover shadow-inner" 
                  alt="Brigadeiro" 
                />
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">Brigadeiro Gourmet Pistáchio</h3>
                  <p className="text-xs text-gray-400 uppercase tracking-tighter">Unidade</p>
                  <span className="text-[#AA1f64] font-bold mt-2 block italic text-lg">€ 2.50</span>
                </div>
                <div className="flex items-center gap-3 bg-pink-50 px-4 py-2 rounded-2xl border border-pink-100">
                  <button className="text-[#AA1f64] hover:scale-125 transition-transform"><Icons.Minus /></button>
                  <span className="font-bold text-sm min-w-20px text-center">4</span>
                  <button className="text-[#AA1f64] hover:scale-125 transition-transform"><Icons.Plus /></button>
                </div>
              </div>

              {/* Item 2: Bolo Personalizado */}
              <div className="bg-white p-6 rounded-2rem shadow-sm border-l-4 border-[#AA1f64] flex items-center gap-6 group hover:shadow-md transition-shadow">
                <div className="w-20 h-20 bg-pink-50 rounded-2xl flex items-center justify-center text-[#AA1f64]">
                  <Icons.Cake />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-800">Bolo da Ana</h3>
                    <span className="text-[9px] bg-pink-100 text-[#AA1f64] px-2 py-0.5 rounded-full font-black uppercase tracking-widest">Personalizado</span>
                  </div>
                  <p className="text-xs text-gray-400 italic mt-1 font-medium">Massa Cacau, Recheio Nozes, Ganache</p>
                  <span className="text-[#AA1f64] font-bold mt-2 block italic text-lg">€ 45.00</span>
                </div>
                <button className="text-gray-300 hover:text-red-500 transition-colors p-2">
                  <Icons.Trash />
                </button>
              </div>
            </div>

            {/* Resumo Financeiro */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-pink-200/20 mt-12 space-y-4 border border-pink-50/50 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[#AA1f64]/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
               
               <div className="flex justify-between text-sm font-medium text-gray-500">
                  <span>Subtotal</span>
                  <span>€ 55.00</span>
                </div>
                <div className="flex justify-between text-sm font-medium text-gray-500">
                  <span>Taxa de Entrega</span>
                  <span className="text-green-500 font-bold uppercase text-[10px] tracking-widest bg-green-50 px-2 py-1 rounded-lg">Grátis</span>
                </div>
                <div className="h-px bg-pink-50 my-2"></div>
                <div className="flex justify-between items-center relative z-10">
                  <span className="font-['Playfair_Display'] text-2xl text-gray-800">Total</span>
                  <span className="text-3xl font-black text-[#AA1f64] drop-shadow-sm">€ 55.00</span>
                </div>
                
                <button className="w-full bg-[#AA1f64] text-white py-5 rounded-1.5rem font-bold shadow-lg shadow-pink-200 mt-4 hover:bg-[#7a1645] hover:-translate-y-1 transition-all flex items-center justify-center gap-3 active:scale-95">
                  Finalizar Encomenda
                  <Icons.ArrowRight />
                </button>
            </div>
          </div>
        ) : (
          <div className="animate-fadeIn space-y-6">
            {/* Card de Encomenda 1 */}
            <div className="bg-white p-6 rounded-2rem shadow-sm border border-pink-50 hover:border-pink-200 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Encomenda #8821</span>
                  <h4 className="font-bold text-gray-800 text-lg">14 de Março, 2024</h4>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-black px-3 py-1.5 rounded-full bg-amber-100 text-amber-700">Em Preparação</span>
              </div>
              <p className="text-sm text-gray-500 mb-6 font-medium">2 itens • Total: <span className="text-[#AA1f64] font-bold">€ 22.50</span></p>
              <button className="w-full py-4 border border-pink-100 rounded-2xl text-[10px] font-black text-gray-400 hover:bg-[#AA1f64] hover:text-white hover:border-[#AA1f64] transition-all uppercase tracking-[0.3em]">
                Ver Detalhes
              </button>
            </div>

            {/* Card de Encomenda 2 */}
            <div className="bg-white p-6 rounded-2rem shadow-sm opacity-90 border border-transparent hover:border-pink-100 transition-all">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Encomenda #8710</span>
                  <h4 className="font-bold text-gray-800 text-lg">02 de Março, 2024</h4>
                </div>
                <span className="text-[10px] uppercase tracking-widest font-black px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-700">Entregue</span>
              </div>
              <p className="text-sm text-gray-500 mb-6 font-medium">1 item • Total: <span className="text-[#9d1d5a] font-bold">€ 40.00</span></p>
              <button className="w-full py-4 border border-[#9d1d5a] rounded-2xl text-[10px] font-black text-[#9d1d5a] hover:bg-[#9d1d5a] hover:text-white transition-all uppercase tracking-[0.3em]">
                Repetir Pedido
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}