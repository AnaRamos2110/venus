import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCakeCandles, faLocationDot, faHeadphones } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    /* Esconde no mobile/tablet, exibe na versão web */
    <footer className="hidden lg:block bg-[#AA1F64] text-white pt-12 pb-8 px-6 mt-16 font-['Montserrat']">
      
      {/* Grid de 4 colunas */}
      <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8 items-start">
        
        {/* CONHEÇA A VÊNUS */}
        <div className="flex flex-col items-center text-center gap-3">
          <h4 className="text-[9px] font-bold tracking-[0.2em] uppercase opacity-80">
            Conheça a Vênus
          </h4>
          <Link to="/SobreNos" className="text-pink-200 hover:text-white transition-all hover:scale-110">
            <FontAwesomeIcon icon={faCakeCandles} className="text-xl" />
          </Link>
        </div>

        {/* COMO CHEGAR */}
        <div className="flex flex-col items-center text-center gap-3">
          <Link to="/ComoChegar" className="text-pink-200 hover:text-white transition-all hover:scale-110">
             <FontAwesomeIcon icon={faLocationDot} className="text-xl" />
          </Link>
          <h4 className="text-[9px] font-bold tracking-[0.2em] uppercase opacity-80">
            Como Chegar
          </h4>
          <FontAwesomeIcon icon={faLocationDot} className="text-xl text-pink-200" />
        </div>

        {/* NOSSOS CONTATOS */}
        <div className="flex flex-col items-center text-center gap-3">
          <h4 className="text-[9px] font-bold tracking-[0.2em] uppercase opacity-80">
            Nossos Contatos
          </h4>
          <div className="flex gap-6 text-pink-200 justify-center">
            <FontAwesomeIcon icon={faInstagram} className="text-xl hover:text-white cursor-pointer transition-colors" />
            <FontAwesomeIcon icon={faFacebook} className="text-xl hover:text-white cursor-pointer transition-colors" />
            <FontAwesomeIcon icon={faWhatsapp} className="text-xl hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>

        {/* SUPORTE AO CLIENTE */}
        <div className="flex flex-col items-center text-center gap-3">
          <h4 className="text-[9px] font-bold tracking-[0.2em] uppercase opacity-80">
            Suporte ao Cliente
          </h4>
          <div className="flex items-center gap-2 text-pink-200 justify-center">
             <FontAwesomeIcon icon={faHeadphones} className="text-xl" />
             <span className="text-[9px] uppercase tracking-widest text-white">Ouvidoria</span>
          </div>
        </div>

      </div>

      <div className="max-w-6xl mx-auto border-t border-white/10 mt-12 pt-6">
        <p className="text-center text-[8px] opacity-40 uppercase tracking-[0.4em]">Vênus Confeitaria © 2026</p>
      </div>
    </footer>
  );
}