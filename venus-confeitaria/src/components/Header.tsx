import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHandHoldingHeart, faMagnifyingGlass, faBars, faTimes, faCakeCandles, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo.png';


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
            <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-full p-1 border-2 border-pink-200">
              <img src={logo} alt="Vênus Confeitaria" className="w-full h-full object-contain" />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <button className="bg-white text-[#AA1F64] px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-pink-50 transition-all">
              Fazer Login
            </button>
            <div className="flex gap-4 text-white">
              <FontAwesomeIcon icon={faHeart} className="cursor-pointer hover:text-pink-300" />
              {/* Ícone da Sacola / Minha Conta */}
                <Link to="/MinhaConta" className="p-2 bg-pink-50 text-[#9d1d5a] rounded-full hover:bg-pink-100 transition-all relative">
                <FontAwesomeIcon icon={faCartShopping} className="cursor-pointer hover:text-pink-300 transition-colors" />
                {/* Badge de Itens (Opcional)
                 <span className="absolute -top-1 -right-1 bg-[#9d1d5a] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">2</span> */}
              </Link>
              <Link to="/Fidelivenus" title="Clube Fidelivênus">
                <FontAwesomeIcon icon={faHandHoldingHeart} className="cursor-pointer hover:text-pink-300 transition-colors" />
            </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Menu Mobile Lateral */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-[#AA1F64] text-white z-60 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden shadow-2xl`}>
        <div className="p-6 flex flex-col gap-6">
          <button onClick={() => setIsMenuOpen(false)} className="self-end"><FontAwesomeIcon icon={faTimes} size="lg" /></button>
          <nav className="flex flex-col gap-6 font-['Montserrat'] uppercase text-[10px] tracking-widest">
            <Link to="/" className="flex items-center gap-3"><FontAwesomeIcon icon={faHeart} /> Favoritos</Link>
            <Link to="/SobreNos" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3">
            <FontAwesomeIcon icon={faCakeCandles} /> Sobre Nós
            </Link>
            <Link to="/Fidelivenus" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3">
            <FontAwesomeIcon icon={faHandHoldingHeart} /> Clube Fidelivênus
            </Link>
            <button className="bg-white text-[#AA1F64] py-3 rounded-full font-bold">Fazer Login</button>
          </nav>
        </div>
      </aside>
      {isMenuOpen && <div className="fixed inset-0 bg-black/50 z-55 md:hidden" onClick={() => setIsMenuOpen(false)}></div>}
    </>
  );
}