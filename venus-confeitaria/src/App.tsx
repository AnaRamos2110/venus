
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import {
  faHeart,
  faCartShopping,
  faCoins,
  faMagnifyingGlass,
  faBookOpen,
  faCakeCandles,
  faLocationDot,
  faHeadphones
} from '@fortawesome/free-solid-svg-icons'
import logo from './assets/logo.png' // Verifique se o caminho está correto em relação ao App.tsx

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFF0FA] font-sans text-gray-800 pb-12">
      
      {/* HEADER VINHO */}
      <header className="bg-[#AA1F64] text-white p-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          
          {/* Busca */}
          <div className="hidden md:flex items-center bg-white rounded-full px-4 py-1.5 w-64">
            <input 
              type="text" 
              placeholder="Buscar..." 
              className="bg-transparent border-none text-xs w-full outline-none text-gray-800 placeholder:text-gray-400" 
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" className="text-gray-400" />
          </div>

          {/* Logo Central */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-full p-1 border-2 border-pink-200 shadow-inner">
              <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center text-[#AA1F64] font-bold">
                <img src={logo} alt="Logo Vênus Confeitaria" className="w-full h-full object-contain" />
              </div>
            </div>
            <p className="text-[10px] italic mt-2 opacity-90">
              Vênus: - A expressão do amor em forma doce.
            </p>
          </div>

          {/* Ações */}
          <div className="flex items-center gap-6">
            <button className="bg-white text-[#AA1F64] px-5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-pink-50 transition">
              Fazer Login
            </button>
            <div className="flex gap-4">
              <FontAwesomeIcon icon={faHeart} size="xl" className="cursor-pointer hover:text-pink-300" />
              <FontAwesomeIcon icon={faCartShopping} size="xl" className="cursor-pointer hover:text-pink-300" />
              <FontAwesomeIcon icon={faCoins} size="xl" className="cursor-pointer hover:text-pink-300" />
            </div>
          </div>
        </div>
      </header>

      {/* CARROSSEL (Simulado) */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="relative h-64 md:h-80 rounded-4xl overflow-hidden shadow-xl bg-white flex items-center justify-center border-8 border-white">
           <p className="text-gray-400 font-serif italic text-2xl">espaço para o carrossel</p>
           {/* Aqui entrariam as imagens dos brigadeiros da sua foto */}
        </div>
      </section>

      {/* PROMOÇÕES */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-[#f2d5da] rounded-[3rem] p-8 border border-white shadow-sm relative overflow-hidden">
          {/* Fundo com marcas d'água (simulado) */}
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-700 mb-8 border-b border-white/50 pb-2">Promoções</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white mb-3">
                  <div className="w-full h-full bg-pink-100 flex items-center justify-center text-[10px] text-pink-400 uppercase">Doce {i}</div>
                </div>
                <p className="text-[10px] font-bold text-center">Torta de Morango</p>
                <p className="text-[9px] text-[#AA1F64] font-bold">R$ 12,00</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-[#f2d5da] rounded-[3rem] p-8 border border-white shadow-sm">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-700 mb-10">Categorias</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {['Chocolate', 'Bolos', 'Brownies', 'Cookies'].map((cat) => (
              <div key={cat} className="flex flex-col items-center gap-3">
                <div className="w-24 h-24 rounded-full border-2 border-[#AA1F64] p-1 bg-white shadow-md">
                  <div className="w-full h-full rounded-full bg-pink-50"></div>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#AA1F64]">{cat}</span>
              </div>
            ))}
            <div className="flex flex-col items-center gap-3">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center border-2 border-white shadow-md">
                <FontAwesomeIcon icon={faBookOpen} size="2xl" className="text-[#AA1F64]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#AA1F64]">Nosso catálogo</span>
            </div>
          </div>
        </div>
      </section>

  {/* FOOTER - COMPONENTIZADO PARA ALINHAMENTO PERFEITO */}
<footer className="bg-[#AA1F64] text-white pt-16 pb-8 px-8 mt-12">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
    
    {/* Bloco 1: CakeSlice */}
    <div className="grid grid-cols-1 justify-items-center md:justify-items-start gap-4">
      <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase text-center md:text-left">Conheça a Vênus</h4>
      <div className="flex justify-center text-pink-200">
        <FontAwesomeIcon icon={faCakeCandles} size="lg" className="hover:text-pink-300 cursor-pointer transition-colors" />
      </div>
    </div>

    {/* Bloco 2: MapPin */}
    <div className="grid grid-cols-1 justify-items-center md:justify-items-start gap-4">
      <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase">Como Chegar</h4>
      <div className="flex justify-center text-pink-200">
        <FontAwesomeIcon icon={faLocationDot} size="lg" className="hover:text-pink-300 cursor-pointer transition-colors" />
      </div>
    </div>

    {/* Bloco 3: Redes Sociais (O seu modelo de sucesso) */}
    <div className="grid grid-cols-1 justify-items-center md:justify-items-start gap-4">
      <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase">Nossos Contatos</h4>
      <div className="flex justify-center gap-4 text-pink-200">
        <FontAwesomeIcon icon={faInstagram} size="lg" className="hover:text-pink-300 cursor-pointer transition-colors" />
        <FontAwesomeIcon icon={faFacebook} size="lg" className="hover:text-pink-300 cursor-pointer transition-colors" />
        <FontAwesomeIcon icon={faWhatsapp} size="lg" className="hover:text-pink-300 cursor-pointer transition-colors" />
      </div>
    </div>

    {/* Bloco 4: Headphones */}
    <div className="grid grid-cols-1 justify-items-center md:justify-items-start gap-4">
      <h4 className="text-[10px] font-bold tracking-[0.2em] uppercase">Suporte ao Cliente</h4>
      <div className="flex justify-center text-pink-200">
        <FontAwesomeIcon icon={faHeadphones} size="lg" className="hover:text-pink-300 cursor-pointer transition-colors" />
      </div>
    </div>

  </div>

  <p className="text-center mt-16 text-[9px] opacity-50 uppercase tracking-[0.3em]">
    Vênus Confeitaria © 2026 -- Todos os direitos reservados.
  </p>
</footer>
    </div>
  )
}