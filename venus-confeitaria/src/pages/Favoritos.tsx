import React, { useState, useEffect, type JSX } from 'react';

// Componente de Ícone SVG personalizado para substituir o FontAwesome e evitar erros de compilação
const Icon = ({ name, className = "w-5 h-5" }: { name: string, className?: string }) => {
  const icons: Record<string, JSX.Element> = {
    arrowLeft: <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />,
    heart: <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />,
    cart: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125(0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />,
    plus: <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />,
    grid: <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25a2.25 2.25 0 0 1-2.25 2.25h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />,
    search: <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />,
    user: <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />,
    empty: <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z M18 12L6 12" />
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      {icons[name] || null}
    </svg>
  );
};

const Favoritos: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [favoritos, setFavoritos] = useState([
    { 
      id: 1, 
      nome: 'Brigadeiro de Pistáchio', 
      categoria: 'Docinhos', 
      preco: 2.50, 
      imagem: 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?auto=format&fit=crop&w=400&q=80' 
    },
    { 
      id: 2, 
      nome: 'Bolo Red Velvet', 
      categoria: 'Bolos', 
      preco: 35.00, 
      imagem: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=400&q=80' 
    }
  ]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FFF0FA] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-pink-100 border-t-[#AA1F64] rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF0FA] font-sans pb-32">
      {/* Header com Placeholder de Logo (para evitar erro de path inexistente) */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <button className="flex items-center gap-2 text-stone-400 hover:text-[#AA1F64] transition-all">
            <Icon name="arrowLeft" className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:inline">Voltar para Home</span>
          </button>
          
          

          <div className="w-10"></div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-12">
        <header className="mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-gray-900 italic font-bold">Minha Seleção</h1>
          <p className="text-stone-500 mt-2 font-light text-sm">Os seus desejos mais doces guardados num só lugar.</p>
        </header>

        {favoritos.length === 0 ? (
          <div className="text-center py-20 bg-white/50 rounded-[3rem] border border-white flex flex-col items-center">
            <Icon name="empty" className="w-16 h-16 text-pink-200 mb-6" />
            <p className="text-stone-400 italic font-light">Sua lista está vazia...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {favoritos.map((item) => (
              <div key={item.id} className="bg-white rounded-[2.5rem] overflow-hidden border border-pink-50 group hover:shadow-2xl hover:shadow-pink-200/30 transition-all duration-500">
                <div className="relative h-64 overflow-hidden bg-stone-100">
                  <img src={item.imagem} alt={item.nome} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <button className="absolute top-5 right-5 bg-white/90 backdrop-blur-md p-3 rounded-full text-[#AA1F64] shadow-lg">
                    <Icon name="heart" className="w-5 h-5 fill-current" />
                  </button>
                </div>
                <div className="p-8">
                  <span className="text-[10px] font-bold text-[#AA1F64] uppercase tracking-[0.2em]">{item.categoria}</span>
                  <h3 className="font-serif text-2xl text-gray-800 mt-2 font-bold">{item.nome}</h3>
                  <div className="flex justify-between items-center mt-6">
                    <span className="font-bold text-xl text-gray-900">€ {item.preco.toFixed(2)}</span>
                    <button className="text-[10px] font-bold uppercase tracking-widest text-[#AA1F64] flex items-center gap-2 hover:opacity-70 transition-all">
                      Comprar <Icon name="cart" className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Navegação Mobile Estilo App */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-xs bg-white/90 backdrop-blur-2xl border border-white/20 p-4 rounded-[2.5rem] shadow-2xl flex justify-around items-center md:hidden">
        <button className="p-2 text-stone-300"><Icon name="grid" /></button>
        <button className="p-2 text-stone-300"><Icon name="search" /></button>
        <div className="relative -mt-14">
          <button className="w-14 h-14 bg-[#AA1F64] rounded-full flex items-center justify-center text-white shadow-lg border-4 border-[#FFF0FA]">
            <Icon name="plus" />
          </button>
        </div>
        <button className="p-2 text-[#AA1F64]"><Icon name="heart" className="fill-current" /></button>
        <button className="p-2 text-stone-300"><Icon name="user" /></button>
      </div>
    </div>
  );
};

export default Favoritos;