import React, { useState, useEffect, useRef } from "react";
// Imports corrigidos de acordo com a sua árvore de arquivos!
import img1 from "../assets/carrossel/img1.png";
import img2 from "../assets/carrossel/img2.png";
import img3 from "../assets/carrossel/img3.png";
import img4 from "../assets/carrossel/img4.png";
import img5 from "../assets/carrossel/img5.png";

export default function Carrossel() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const slides = [
    { imagem: img1, titulo: "Doces Finos", desc: "Sabor sofisticado para os seus momentos especiais." },
    { imagem: img2, titulo: "Tortas Especiais", desc: "Uma explosão de sabores a cada pedaço." },
    { imagem: img3, titulo:  "Nossas especialidades", desc: "O clássico brownie com um toque único da Vênus." },
    { imagem: img4, titulo:  "Novidade: Bolo de pote de Ninho com Nutella", desc: "Venha conferir nosso mais incrível lançamento!" },
    { imagem: img5, titulo:  "Nossos Bolos", desc: "Feitos com amor e ingredientes selecionados."}
  ];

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(nextSlide, 5000);
    return () => resetTimeout();
  }, [current]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) nextSlide();
    if (touchStartX.current - touchEndX.current < -50) prevSlide();
  };

  return (
    <div 
      className="relative w-full h-[300px] md:h-[450px] overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-xl border-4 md:border-8 border-white bg-pink-50 select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.imagem}
            alt={slide.titulo}
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-12 text-white">
            <h3 className="text-xl md:text-3xl font-bold tracking-wide italic font-['Playfair_Display']">
              {slide.titulo}
            </h3>
            <p className="text-xs md:text-sm text-pink-100 mt-1 max-w-md font-['Montserrat']">
              {slide.desc}
            </p>
          </div>
        </div>
      ))}

      {/* Setas */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-sm transition-all"
        aria-label="Slide anterior"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center bg-white/20 hover:bg-white/40 text-white rounded-full backdrop-blur-sm transition-all"
        aria-label="Próximo slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Bolinhas */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === current ? "w-6 bg-white" : "w-2 bg-white/50"
            }`}
            aria-label={`Ir para o slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}