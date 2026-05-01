import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {
  faHeart,
  faCartShopping,
  faHandHoldingHeart,
  faMagnifyingGlass,
  faBookOpen,
  faCakeCandles,
  faLocationDot,
  faHeadphones,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import logo from './assets/logo.png';
// import {img1, img2, img3, img4, img5 } from './assets/carrossel.png';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FFF0FA] font-sans text-gray-800 pb-12">
      
      {/* HEADER VINHO */}
      <header className="bg-[#AA1F64] text-white p-4 sticky top-0 z-50 shadow-md font-['Montserrat']">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 gap-4">
          
          {/* Menu Hambúrguer (Mobile) */}
          <button
            className="md:hidden text-white focus:outline-none shrink-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>

          {/* Busca Desktop */}
          <div className="hidden md:flex items-center bg-white rounded-full px-4 py-1.5 w-64 shadow-sm">
            <input
              type="text"
              placeholder="Buscar..."
              className="bg-transparent border-none text-xs w-full outline-none text-gray-800 placeholder:text-gray-400"
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" className="text-gray-400" />
          </div>

          {/* Logo Central */}
          <div className="flex flex-col items-center flex-1 md:flex-none">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full p-1 border-2 border-pink-200 shadow-md">
              <img src={logo} alt="Vênus Confeitaria" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Ações Desktop */}
          <div className="hidden md:flex items-center gap-6">
            <button className="bg-white text-[#AA1F64] px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-pink-50 transition-all">
              Fazer Login
            </button>
            <div className="flex gap-4 text-white">
              <FontAwesomeIcon icon={faHeart} className="cursor-pointer hover:text-pink-300 transition-colors" />
              <FontAwesomeIcon icon={faCartShopping} className="cursor-pointer hover:text-pink-300 transition-colors" />
              <FontAwesomeIcon icon={faHandHoldingHeart} className="cursor-pointer hover:text-pink-300 transition-colors" />
            </div>
          </div>

          {/* Busca Ícone (Mobile) */}
          <div className="md:hidden flex items-center bg-white rounded-full p-2 w-10 h-10 justify-center">
             <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" className="text-[#AA1F64]" />
          </div>
        </div>
      </header>

      {/* MENU LATERAL MOBILE */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-[#AA1F64] text-white z-60 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden shadow-2xl`}>
        <div className="p-6 flex flex-col gap-6">
          <button onClick={() => setIsMenuOpen(false)} className="self-end text-white"><FontAwesomeIcon icon={faTimes} size="lg" /></button>
          <nav className="flex flex-col gap-6 font-['Montserrat'] uppercase text-[10px] tracking-widest">
            <a href="#" className="flex items-center gap-3 border-b border-white/10 pb-2"><FontAwesomeIcon icon={faHeart} /> Favoritos</a>
            <a href="#" className="flex items-center gap-3 border-b border-white/10 pb-2"><FontAwesomeIcon icon={faCartShopping} /> Carrinho</a>
            <a href="#" className="flex items-center gap-3 border-b border-white/10 pb-2"><FontAwesomeIcon icon={faHandHoldingHeart} /> Clube Fidelivênus</a>
            <button className="bg-white text-[#AA1F64] py-3 rounded-full font-bold">Fazer Login</button>
          </nav>
        </div>
      </aside>

      {/* OVERLAY */}
      {isMenuOpen && <div className="fixed inset-0 bg-black/50 z-55 md:hidden" onClick={() => setIsMenuOpen(false)}></div>}

      <main className="max-w-6xl mx-auto px-4 mt-8">
  
  {/* 1. SEÇÃO DO CARROSSEL (Onde você vai colocar as fotos de ontem) */}
  <section className="mb-12">
    <div className="relative h-64 md:h-96 rounded-[3rem] overflow-hidden shadow-xl bg-white flex items-center justify-center border-8 border-white">
       {/* Dica: Aqui você poderá usar um map com as imagens da pasta assets/carrossel */}
       <p className="text-gray-400 font-['Playfair_Display'] italic text-2xl">Carrossel Vênus</p>
    </div>
  </section>

  {/* 2. SEÇÃO DE PROMOÇÕES (Cole aqui a versão com Scroll Horizontal) */}
  <section className="bg-[#f2d5da] rounded-[3rem] p-8 border border-white shadow-sm mb-12 overflow-hidden">
    <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-700 mb-8 border-b border-white/50 pb-2">
      Promoções
    </h2>
    <div className="flex overflow-x-auto pb-4 gap-6 snap-x md:grid md:grid-cols-4 md:overflow-x-hidden md:pb-0 scrollbar-hide">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex flex-col items-center min-w-140px snap-center group">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white mb-3 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-pink-100 flex items-center justify-center text-[10px] text-pink-400">DOCE {i}</div>
          </div>
          <p className="text-[10px] font-bold text-center uppercase tracking-tighter">Torta de Morango</p>
          <p className="text-[#AA1F64] font-bold">R$ 12,00</p>
        </div>
      ))}
    </div>
  </section>

  {/* 3. SEÇÃO DE CATEGORIAS (Cole aqui a versão com Scroll Horizontal) */}
  <section className="bg-[#f2d5da] rounded-[3rem] p-8 border border-white shadow-sm">
    <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-700 mb-10">
      Categorias
    </h2>
    <div className="flex overflow-x-auto pb-4 gap-8 md:flex-wrap md:justify-center md:overflow-x-hidden scrollbar-hide snap-x">
      {['Chocolate', 'Bolos', 'Brownies', 'Cookies'].map((cat) => (
        <div key={cat} className="flex flex-col items-center gap-3 min-w-90px snap-center">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#AA1F64] p-1 bg-white shadow-md hover:rotate-6 transition-transform">
            <div className="w-full h-full rounded-full bg-pink-50"></div>
          </div>
          <span className="text-[9px] font-bold uppercase tracking-widest text-[#AA1F64]">{cat}</span>
        </div>
      ))}
      <div className="flex flex-col items-center gap-3 min-w-90px snap-center">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex items-center justify-center border-2 border-white shadow-md cursor-pointer hover:bg-pink-50">
          <FontAwesomeIcon icon={faBookOpen} size="xl" className="text-[#AA1F64]" />
        </div>
        <span className="text-[9px] font-bold uppercase tracking-widest text-[#AA1F64]">Catálogo</span>
      </div>
    </div>
  </section>

</main>

      {/* FOOTER */}
      {/* FOOTER AJUSTADO - COMPACTO E RESPONSIVO */}
<footer className="bg-[#AA1F64] text-white pt-12 pb-8 px-6 mt-16 font-['Montserrat']">
  <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-4 gap-10 items-center md:items-start text-center md:text-left">
    
    {/* 1. CONHEÇA A VÊNUS - Mais slim */}
    <div className="flex flex-col items-center md:items-start gap-3 w-full max-w-200px">
      <h4 className="text-[9px] font-bold tracking-[0.2em] uppercase opacity-80">
        Conheça a Vênus
      </h4>
      <div className="flex justify-center text-pink-200 hover:text-white transition-colors">
        <FontAwesomeIcon icon={faCakeCandles} className="text-xl" />
      </div>
    </div>

    {/* 2. COMO CHEGAR */}
    <div className="flex flex-col items-center md:items-start gap-3 w-full max-w-200px">
      <h4 className="text-[9px] font-bold tracking-[0.2em] uppercase opacity-80">
        Como Chegar
      </h4>
      <div className="flex justify-center text-pink-200 hover:text-white transition-colors">
        <FontAwesomeIcon icon={faLocationDot} className="text-xl" />
      </div>
    </div>

    {/* 3. NOSSOS CONTATOS - Redes sociais alinhadas */}
    <div className="flex flex-col items-center md:items-start gap-3 w-full max-w-200px">
      <h4 className="text-[9px] font-bold tracking-[0.2em] uppercase opacity-80">
        Nossos Contatos
      </h4>
      <div className="flex justify-center gap-6 text-pink-200">
        <FontAwesomeIcon icon={faInstagram} className="text-xl hover:text-white cursor-pointer transition-all" />
        <FontAwesomeIcon icon={faFacebook} className="text-xl hover:text-white cursor-pointer transition-all" />
        <FontAwesomeIcon icon={faWhatsapp} className="text-xl hover:text-white cursor-pointer transition-all" />
      </div>
    </div>

    {/* 4. SUPORTE AO CLIENTE */}
    <div className="flex flex-col items-center md:items-start gap-3 w-full max-w-200px">
      <h4 className="text-[9px] font-bold tracking-[0.2em] uppercase opacity-80">
        Suporte ao Cliente
      </h4>
      <div className="flex justify-center text-pink-200 hover:text-white transition-colors">
        <FontAwesomeIcon icon={faHeadphones} className="text-xl" />
      </div>
    </div>

  </div>

  {/* Divisor e Copyright mais discreto */}
  <div className="max-w-6xl mx-auto border-t border-white/10 mt-12 pt-6">
    <p className="text-center text-[8px] opacity-40 uppercase tracking-[0.4em] leading-relaxed">
      Vênus Confeitaria © 2026 <br className="md:hidden" /> 
      Todos os direitos reservados.
    </p>
  </div>
</footer>
    </div>
  );
}