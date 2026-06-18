import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

interface Produto {
  id: string;
  nome: string;
  precoOriginal: number;
  precoPromocional: number;
  imagemUrl: string;
  categoria: string;
  desconto: string;
}

export default function Promocoes() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardsVisiveis, setCardsVisiveis] = useState(3);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const promocoes: Produto[] = [
    {
      id: "p1",
      nome: "Bolo Trufado Red Velvet",
      precoOriginal: 120.00,
      precoPromocional: 95.00,
      imagemUrl: "/carrossel/img1.png",
      categoria: "bolos",
      desconto: "20% OFF"
    },
    {
      id: "p2",
      nome: "Cento de Brigadeiro Belga",
      precoOriginal: 180.00,
      precoPromocional: 140.00,
      imagemUrl: "/carrossel/img5.png",
      categoria: "docinhos",
      desconto: "22% OFF"
    },
    {
      id: "p3",
      nome: "Torta Holandesa Suprema",
      precoOriginal: 95.00,
      precoPromocional: 76.00,
      imagemUrl: "/carrossel/img2.png",
      categoria: "tortas",
      desconto: "20% OFF"
    },
    {
      id: "p4",
      nome: "Combo 6 Brownies Recheados",
      precoOriginal: 48.00,
      precoPromocional: 38.00,
      imagemUrl: "/carrossel/img4.png",
      categoria: "brownies",
      desconto: "20% OFF"
    },
    {
      id: "p5",
      nome: "Copo da Felicidade Ninho",
      precoOriginal: 26.00,
      precoPromocional: 19.90,
      imagemUrl: "/carrossel/img3.png",
      categoria: "copo da felicidade",
      desconto: "23% OFF"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsVisiveis(1);
      } else if (window.innerWidth < 1024) {
        setCardsVisiveis(2);
      } else {
        setCardsVisiveis(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, isPaused, cardsVisiveis]);

  const limitIndex = promocoes.length - cardsVisiveis;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= limitIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? limitIndex : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section 
      className="bg-[#F2D5DA] rounded-[3.5rem] p-6 md:p-8 border border-white shadow-sm font-['Montserrat'] relative select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex justify-between items-center mb-6 border-b border-white/40 pb-3">
        <h2 className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#AA1F64]">
          Ofertas Imperdíveis 🔥
        </h2>
        
        {/* Navigation Arrows for desktop */}
        <div className="hidden sm:flex gap-2">
          <button 
            onClick={handlePrev}
            className="w-8 h-8 rounded-full bg-white text-[#AA1F64] hover:bg-[#AA1F64] hover:text-white transition-all duration-300 flex items-center justify-center shadow-md active:scale-90"
            aria-label="Promoção anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button 
            onClick={handleNext}
            className="w-8 h-8 rounded-full bg-white text-[#AA1F64] hover:bg-[#AA1F64] hover:text-white transition-all duration-300 flex items-center justify-center shadow-md active:scale-90"
            aria-label="Próxima promoção"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Slide View Container */}
      <div className="overflow-hidden w-full px-1">
        <div 
          className="flex transition-transform duration-500 ease-in-out gap-4 md:gap-6"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / cardsVisiveis + (cardsVisiveis > 1 ? 1 : 0)) }%)`
          }}
        >
          {promocoes.map((produto) => (
            <div
              key={produto.id}
              className="shrink-0 flex flex-col items-center p-4 bg-white/40 rounded-[2.5rem] border border-white/60 shadow-sm transition-all duration-300 hover:bg-white/80"
              style={{ 
                width: cardsVisiveis === 1 ? '100%' : cardsVisiveis === 2 ? 'calc(50% - 12px)' : 'calc(33.333% - 16px)' 
              }}
            >
              <button
                onClick={() => navigate(`/Catalogo?categoria=${produto.categoria}`)}
                className="flex flex-col items-center w-full group focus:outline-none"
                aria-label={`Ver promoção do produto ${produto.nome}`}
              >
                {/* Image Circle with tag */}
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg bg-white mb-3 overflow-hidden flex items-center justify-center relative">
                  <img 
                    src={produto.imagemUrl} 
                    alt={produto.nome} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => { e.currentTarget.src = "https://placehold.co/200" }}
                  />
                  {/* Floating Discount Badge */}
                  <span className="absolute top-1 right-1 bg-[#AA1F64] text-white text-[7px] font-black uppercase px-2 py-0.5 rounded-full shadow-md">
                    {produto.desconto}
                  </span>
                </div>

                {/* Text Details */}
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-gray-800 line-clamp-1 max-w-36 mb-1 group-hover:text-[#AA1F64] transition-colors">
                  {produto.nome}
                </p>
                
                {/* Price Comparisons */}
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 line-through text-[9px] font-bold">
                    {produto.precoOriginal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                  </span>
                  <span className="text-[#AA1F64] font-black text-xs md:text-sm">
                    {produto.precoPromocional.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Indicators (dots) */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: limitIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 transition-all duration-300 ${
              index === currentIndex ? "w-6 bg-[#AA1F64]" : "w-2 bg-white/60 hover:bg-white"
            } rounded-full`}
            aria-label={`Ir para a seção ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}