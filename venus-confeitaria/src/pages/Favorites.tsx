import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Heart, 
  Cake, 
  ShoppingCart, 
  Trash2, 
  Sparkles, 
  PlusCircle,
  LayoutGrid,
  Search,
  User,
  Loader2,
  HeartOff
} from 'lucide-react';

// Tipagem para os itens
interface FavoriteItem {
  id: string | number;
  nome: string;
  categoria: string;
  preco: number;
  imagem: string;
}

interface CustomCake {
  id: string;
  nome: string;
  detalhes: string;
  data: string;
}

const FavoritesPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const [customCakes, setCustomCakes] = useState<CustomCake[]>([]);

  // Simulação de carregamento de dados
  useEffect(() => {
    const timer = setTimeout(() => {
      setFavorites([
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
      setCustomCakes([
        { 
          id: 'c1', 
          nome: 'Meu Bolo de Aniversário', 
          detalhes: 'Massa de Baunilha, Recheio de Nozes, Cobertura de Ganache',
          data: 'Criado em 12/03/2024'
        }
      ]);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fff0f5] flex items-center justify-center">
        <Loader2 className="w-10 h-10 text-[#9d1d5a] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fff0f5] font-['Montserrat'] pb-32">
      {/* Header Estilo App */}
      <nav className="bg-white/70 backdrop-blur-xl sticky top-0 z-50 border-b border-pink-100/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <button className="flex items-center gap-2 text-gray-500 hover:text-[#9d1d5a] transition-all group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest hidden sm:inline">Voltar ao Cardápio</span>
          </button>
          
          <div className="flex flex-col items-center">
            <span className="font-['Playfair_Display'] text-2xl font-bold text-gray-900 leading-none">Vênus</span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-[#9d1d5a] font-bold">Confeitaria</span>
          </div>

          <div className="w-20 hidden sm:block"></div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-12">
        <header className="mb-12">
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl text-gray-900 italic">Minha Seleção</h1>
          <p className="text-gray-500 mt-2 font-light">Os seus desejos mais doces guardados num só lugar.</p>
        </header>

        {favorites.length === 0 && customCakes.length === 0 ? (
          <div className="text-center py-20">
            <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <HeartOff className="w-10 h-10 text-pink-200" />
            </div>
            <p className="text-gray-400 italic font-light">Ainda não favoritou nenhuma delícia...</p>
            <button className="mt-8 px-10 py-4 bg-[#9d1d5a] text-white rounded-full font-bold shadow-lg shadow-pink-200/50 hover:scale-105 transition-transform active:scale-95">
              Explorar Cardápio
            </button>
          </div>
        ) : (
          <>
            {/* Seção: Bolos Personalizados */}
            <section className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-['Playfair_Display'] text-2xl text-gray-800">Criações Exclusivas</h2>
                <div className="h-px bg-pink-200 flex-1"></div>
                <Sparkles className="text-pink-400 w-5 h-5" />
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {customCakes.map((cake) => (
                  <div key={cake.id} className="bg-white rounded-2rem p-6 border border-pink-100 flex flex-col md:flex-row gap-6 items-center group hover:border-[#aa1f64] transition-all duration-500">
                    <div className="w-20 h-20 bg-pink-50 rounded-2xl flex items-center justify-center text-[#aa1f64] group-hover:scale-110 transition-transform">
                      <Cake className="w-10 h-10" />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="font-['Playfair_Display'] text-xl text-gray-900">{cake.nome}</h3>
                      <p className="text-sm text-gray-500 mt-1 italic font-light">{cake.detalhes}</p>
                      <span className="text-[9px] text-gray-300 uppercase mt-3 block tracking-widest">{cake.data}</span>
                    </div>
                    <div className="flex gap-3">
                      <button className="p-4 bg-pink-50 text-[#aa1f64] rounded-2xl hover:bg-[#aa1f64] hover:text-white transition-all shadow-sm">
                        <ShoppingCart className="w-5 h-5" />
                      </button>
                      <button className="p-4 bg-gray-50 text-gray-400 rounded-2xl hover:bg-red-50 hover:text-red-500 transition-all">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 py-8 border-2 border-dashed border-pink-200 rounded-[2.5rem] text-pink-400 font-bold flex items-center justify-center gap-3 hover:bg-white hover:border-[#aa1f64] hover:text-[#aa1f64] transition-all group overflow-hidden relative">
                <div className="flex items-center gap-3 relative z-10">
                  <PlusCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span className="tracking-tight">Montar um novo Bolo Personalizado</span>
                </div>
              </button>
            </section>

            {/* Seção: Doces Favoritos */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-['Playfair_Display'] text-2xl text-gray-800">Doces Favoritos</h2>
                <div className="h-px bg-pink-200 flex-1"></div>
                <Heart className="text-[#aa1f64] w-5 h-5 fill-[#9d1d5a]" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {favorites.map((item) => (
                  <div key={item.id} className="bg-white rounded-[2.5rem] overflow-hidden border border-pink-50 group hover:shadow-2xl hover:shadow-pink-200/40 transition-all duration-500">
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={item.imagem} 
                        alt={item.nome}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <button className="absolute top-5 right-5 bg-white/90 backdrop-blur-md p-3 rounded-full text-red-500 shadow-lg hover:scale-110 transition-transform">
                        <Heart className="fill-current w-5 h-5" />
                      </button>
                    </div>
                    <div className="p-8">
                      <span className="text-[10px] font-bold text-pink-400 uppercase tracking-[0.2em]">{item.categoria}</span>
                      <h3 className="font-['Playfair_Display'] text-2xl text-gray-800 mt-2">{item.nome}</h3>
                      <div className="flex justify-between items-center mt-6">
                        <span className="font-bold text-xl text-[#9d1d5a]">€ {item.preco.toFixed(2)}</span>
                        <button className="text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-[#9d1d5a] border-b border-transparent hover:border-[#9d1d5a] transition-all pb-1">
                          Adicionar +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      {/* Barra de Navegação Mobile (Estilo Floating) */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-white/80 backdrop-blur-2xl border border-white/20 p-4 rounded-[2.5rem] shadow-[0_20px_50px_rgba(157,29,90,0.15)] flex justify-around items-center z-60 md:hidden">
        <button className="p-3 text-gray-300 hover:text-pink-400 transition-colors">
          <LayoutGrid className="w-6 h-6" />
        </button>
        <button className="p-3 text-gray-300 hover:text-pink-400 transition-colors">
          <Search className="w-6 h-6" />
        </button>
        
        {/* Cart Button */}
        <div className="relative -mt-16">
          <button className="w-16 h-16 bg-[#9d1d5a] rounded-full flex items-center justify-center border-[6px] border-[#fff0f5] shadow-xl text-white active:scale-90 transition-transform">
            <ShoppingCart className="w-6 h-6" />
          </button>
        </div>

        <button className="p-3 text-[#9d1d5a] transition-colors">
          <Heart className="w-6 h-6 fill-current" />
        </button>
        <button className="p-3 text-gray-300 hover:text-pink-400 transition-colors">
          <User className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default FavoritesPage;