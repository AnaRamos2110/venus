import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 mt-8">
      <section className="mb-12">
        <div className="relative h-64 md:h-96 rounded-[3rem] overflow-hidden shadow-xl bg-white flex items-center justify-center border-8 border-white">
          <p className="text-gray-400 font-['Playfair_Display'] italic text-2xl">Carrossel Vênus</p>
        </div>
      </section>

      <section className="bg-[#f2d5da] rounded-[3rem] p-8 border border-white shadow-sm mb-12">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-700 mb-8 border-b border-white/50 pb-2">Promoções</h2>
        <div className="flex overflow-x-auto pb-4 gap-6 md:grid md:grid-cols-4 scrollbar-hide">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col items-center min-w-140px group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg bg-white mb-3 group-hover:scale-105 transition-transform"></div>
              <p className="text-[10px] font-bold uppercase">Torta de Morango</p>
              <p className="text-[#AA1F64] font-bold">R$ 12,00</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f2d5da] rounded-[3rem] p-8 border border-white shadow-sm">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-700 mb-10">Categorias</h2>
        <div className="flex overflow-x-auto pb-4 gap-8 md:flex-wrap md:justify-center scrollbar-hide">
          {['Chocolate', 'Bolos', 'Brownies', 'Cookies'].map((cat) => (
            <div key={cat} className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#AA1F64] bg-white shadow-md"></div>
              <span className="text-[9px] font-bold uppercase text-[#AA1F64]">{cat}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}