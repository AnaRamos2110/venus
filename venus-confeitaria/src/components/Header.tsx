import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeart, 
  faShoppingCart, 
  faHandHoldingHeart, 
  faBars, 
  faTimes, 
  faMagnifyingGlass,
  faHeadphones, 
  faLocationDot,
  faCircleInfo
} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.png'; // Verifique se o caminho da logo está correto

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // FIÇÃO DA BARRA DE PESQUISA (Guarda o que o usuário digita)
  const [termoBusca, setTermoBusca] = useState('');
  const [isSearchOpenMobile, setIsSearchOpenMobile] = useState(false);

  // Função que dispara quando o usuário aperta Enter na busca
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("A Vênus está buscando por:", termoBusca);
    setIsSearchOpenMobile(false); // Fecha o modal após buscar
  };

  return (
    <>
      <header className="bg-[#AA1F64] text-white p-4 sticky top-0 z-50 shadow-md font-['Montserrat']">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 gap-4">
          
          {/* Botão Hambúrguer */}
          <button className="md:hidden text-white shrink-0" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>

          {/* BARRA DE PESQUISA — DESKTOP (Ajustada com 'hidden' para não quebrar o mobile) */}
          <form onSubmit={handleSearchSubmit} className="hidden md:flex items-center bg-white rounded-full px-4 py-1.5 w-64">
            <input 
              type="text" 
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
              placeholder="Buscar..." 
              className="bg-transparent text-xs w-full outline-none text-gray-800" 
            />
            <button type="submit">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" className="text-gray-400 hover:text-[#AA1F64] transition-colors" />
            </button>
          </form>

          {/* LUPA DE BUSCA — VERSÃO MOBILE (SÓ APARECE EM CELULAR) */}
          <button 
            onClick={() => setIsSearchOpenMobile(true)} 
            className="md:hidden p-2 text-white hover:opacity-80 transition-all"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          </button>

          {/* Logo Central */}
          <Link to="/" className="flex flex-col items-center">
            <div className="w-14 h-14 md:w-20 md:h-20 bg-white rounded-full p-1 border-2 border-pink-200">
              <img 
                src={logo || "/logo.png"} 
                alt="Vênus Confeitaria" 
                className="w-full h-full object-contain" 
                onError={(e) => { e.currentTarget.src = "https://placehold.co/100" }} 
              />
            </div>
          </Link>

          {/* Menu de Links Desktop */}
          <div className="hidden md:flex items-center gap-9">
            <button className="bg-white text-[#AA1F64] px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-pink-50 transition-all">
              Fazer Login
            </button>
            
            <div className="flex gap-9 text-white items-center">
              <Link to="/Favorites">
                <FontAwesomeIcon icon={faHeart} className="cursor-pointer hover:text-pink-300 transition-colors" />
              </Link>
              
              <Link to="/MinhaConta">
                <FontAwesomeIcon icon={faShoppingCart} className="cursor-pointer hover:text-pink-300 transition-colors" />
              </Link>

              <Link to="/Fidelivenus">
                <FontAwesomeIcon icon={faHandHoldingHeart} className="cursor-pointer hover:text-pink-300 transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Mobile Lateral (Seu Menu Lindo e Intocado) */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-[#AA1F64] text-white z-60 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden shadow-2xl`}>
        <div className="p-6 flex flex-col gap-6">
          <button onClick={() => setIsMenuOpen(false)} className="self-end p-2">
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
          
          <nav className="flex flex-col gap-6 font-['Montserrat'] uppercase text-[10px] tracking-widest">
            <Link to="/Favorites" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3">
              <FontAwesomeIcon icon={faHeart} /> Favoritos
            </Link>
            
            <Link to="/MinhaConta" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3">
              <FontAwesomeIcon icon={faShoppingCart} /> Minhas Compras
            </Link>
            
            <Link to="/Fidelivenus" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3">
              <FontAwesomeIcon icon={faHandHoldingHeart} /> Clube Fidelivênus
            </Link>

            <Link to="/SobreNos" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3">
              <FontAwesomeIcon icon={faCircleInfo} /> Sobre Nós
            </Link>

            <Link to="/https://maps.app.goo.gl/BEjryJBEsgsw46Js6" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3">
              <FontAwesomeIcon icon={faLocationDot} /> Como Chegar
            </Link>

            <Link to="/https://www.facebook.com/venusconfeitaria" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3">
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </Link>

            <Link to="/https://www.instagram.com/confeitaria.venus" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3">
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </Link>

            <Link to="/https://wa.me/5519993643988" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3">
              <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
            </Link>

            <Link to="/Ouvidoria" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-white hover:opacity-80 transition-all font-['Montserrat'] uppercase text-[10px] font-bold tracking-widest">
              <FontAwesomeIcon icon={faHeadphones} className="w-4 h-4 text-pink-200" />
              <span>Suporte / Ouvidoria</span>
            </Link>
            
            <button className="bg-white text-[#AA1F64] py-3 rounded-full font-bold mt-4">
              Fazer Login
            </button>
          </nav>
        </div>
      </aside>

      {/* TELA DE BUSCA EXCLUSIVA MOBILE (OPÇÃO 2) */}
      {isSearchOpenMobile && (
        <div className="fixed inset-0 bg-[#FFF0FA] z-50 flex flex-col p-6 font-['Montserrat'] md:hidden animate-fade-in">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-gray-900 italic">O que vamos adoçar hoje?</h2>
            <button 
              onClick={() => setIsSearchOpenMobile(false)}
              className="p-2 bg-white rounded-full text-stone-400 shadow-sm"
            >
              <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSearchSubmit} className="relative w-full">
            <input 
              type="text"
              autoFocus
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
              placeholder="Buscar bolo, brigadeiro, docinhos..."
              className="w-full bg-white text-gray-800 pl-12 pr-4 py-4 rounded-3xl border border-pink-100 focus:outline-none focus:ring-2 focus:ring-[#AA1F64] shadow-inner text-sm"
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
          </form>

          {termoBusca && (
            <p className="text-stone-400 text-xs mt-3 italic ml-2">
              Aperte enter para pesquisar por "{termoBusca}"
            </p>
          )}
        </div>
      )}

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-55 md:hidden" onClick={() => setIsMenuOpen(false)}></div>
      )}
    </>
  );
}