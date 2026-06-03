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

  return (
    <>
      <header className="bg-[#AA1F64] text-white p-4 sticky top-0 z-50 shadow-md font-['Montserrat']">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 gap-4">
          
          <button className="md:hidden text-white shrink-0" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
          </button>

          <div className="hidden md:flex items-center bg-white rounded-full px-4 py-1.5 w-64">
            <input type="text" placeholder="Buscar..." className="bg-transparent text-xs w-full outline-none text-gray-800" />
            <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" className="text-gray-400" />
          </div>

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

          <div className="hidden md:flex items-center gap-9">
            <button 
              className="bg-white text-[#AA1F64] px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-pink-50 transition-all"
              aria-label="Fazer login no sistema corporativo"
            >
              Fazer Login
            </button>
            
            <div className="flex gap-9 text-white items-center">
              <Link to="/Favorites" aria-label="Ir para a página de produtos favoritos">
                <FontAwesomeIcon icon={faHeart} className="cursor-pointer hover:text-pink-300 transition-colors" />
              </Link>
              
              <Link to="/MinhaConta" aria-label="Ir para a página do meu carrinho de compras e histórico de pedidos">
                <FontAwesomeIcon icon={faShoppingCart} className="cursor-pointer hover:text-pink-300 transition-colors" />
              </Link>

              <Link to="/Fidelivenus" aria-label="Ir para a página do Clube Fidelivênus">
                <FontAwesomeIcon icon={faHandHoldingHeart} className="cursor-pointer hover:text-pink-300 transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Mobile Lateral (Seu Menu Lindo e Intocado) */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-[#AA1F64] text-white z-60 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden shadow-2xl`}>
        <div className="p-6 flex flex-col gap-6">
          <button onClick={() => setIsMenuOpen(false)} className="self-end p-2" aria-label="Fechar menu">
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
          
          <nav className="flex flex-col gap-6 font-['Montserrat'] uppercase text-[10px] tracking-widest">
            <Link 
              to="/Favorites" 
              onClick={() => setIsMenuOpen(false)} 
              className="flex items-center gap-3"
              aria-label="Ir para a página de produtos favoritos"
            >
              <FontAwesomeIcon icon={faHeart} /> Favoritos
            </Link>
            
            <Link 
              to="/MinhaConta" 
              onClick={() => setIsMenuOpen(false)} 
              className="flex items-center gap-3"
              aria-label="Ir para a página de minhas compras"
            >
              <FontAwesomeIcon icon={faShoppingCart} /> Minhas Compras
            </Link>
            
            <Link 
              to="/Fidelivenus" 
              onClick={() => setIsMenuOpen(false)} 
              className="flex items-center gap-3"
              aria-label="Ir para a página do Clube Fidelivênus"
            >
              <FontAwesomeIcon icon={faHandHoldingHeart} /> Clube Fidelivênus
            </Link>

            <Link 
              to="/SobreNos" 
              onClick={() => setIsMenuOpen(false)} 
              className="flex items-center gap-3"
              aria-label="Saber mais sobre a Vênus Confeitaria"
            >
              <FontAwesomeIcon icon={faCircleInfo} /> Conheça a Vênus
            </Link>

            <a 
              href="https://maps.app.goo.gl/BEjryJBEsgsw46Js6" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => setIsMenuOpen(false)} 
              className="flex items-center gap-3"
              aria-label="Ver localização da loja no Google Maps (abre em uma nova aba)"
            >
              <FontAwesomeIcon icon={faLocationDot} /> Como Chegar
            </a>

            <a 
              href="https://www.facebook.com/venusconfeitaria" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => setIsMenuOpen(false)} 
              className="flex items-center gap-3"
              aria-label="Visitar nossa página no Facebook (abre em uma nova aba)"
            >
              <FontAwesomeIcon icon={faFacebook} /> Facebook
            </a>

            <a 
              href="https://www.instagram.com/confeitaria.venus" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => setIsMenuOpen(false)} 
              className="flex items-center gap-3"
              aria-label="Visitar nosso perfil no Instagram (abre em uma nova aba)"
            >
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>

            <a 
              href="https://wa.me/5519993643988" 
              target="_blank" 
              rel="noopener noreferrer" 
              onClick={() => setIsMenuOpen(false)} 
              className="flex items-center gap-3"
              aria-label="Conversar conosco pelo WhatsApp (abre em uma nova aba)"
            >
              <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
            </a>

            <Link 
              to="/Ouvidoria" 
              onClick={() => setIsMenuOpen(false)} 
              className="flex items-center gap-3 text-white hover:opacity-80 transition-all font-['Montserrat'] uppercase text-[10px] font-bold tracking-widest"
              aria-label="Ir para a página de Suporte e Ouvidoria"
            >
              <FontAwesomeIcon icon={faHeadphones} className="w-4 h-4 text-pink-200" />
              <span>Suporte / Ouvidoria</span>
            </Link>

            <Link to="/Ouvidoria" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-white hover:opacity-80 transition-all font-['Montserrat'] uppercase text-[10px] font-bold tracking-widest">
              <FontAwesomeIcon icon={faHeadphones} className="w-4 h-4 text-pink-200" />
              <span>Suporte / Ouvidoria</span>
            </Link>
            
            <button 
              className="bg-white text-[#AA1F64] py-3 rounded-full font-bold mt-4"
              aria-label="Fazer login no sistema"
            >
              Fazer Login
            </button>
          </nav>
        </div>
      </aside>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-55 md:hidden" onClick={() => setIsMenuOpen(false)}></div>
      )}
    </>
  );
}