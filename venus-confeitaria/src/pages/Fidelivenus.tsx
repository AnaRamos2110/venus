import React from 'react';

// Ícones SVG integrados para evitar erros de dependência
const Icons = {
  Star: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  ),
  Flower: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 7.5V2"/><path d="m4.93 4.93 1.41 1.41"/><path d="M7.5 12H2"/><path d="m13.06 13.06 1.41 1.41"/><path d="M12 16.5V22"/><path d="m17.66 17.66 1.41 1.41"/><path d="M16.5 12H22"/><path d="m19.07 4.93-1.41 1.41"/><path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M12 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z"/><path d="M12 12a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/><path d="M12 12a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"/></svg>
  ),
  Ticket: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>
  ),
  Cake: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"/><path d="M2 21h20"/><path d="M7 8v3"/><path d="M12 8v3"/><path d="M17 8v3"/><path d="M7 4h.01"/><path d="M12 4h.01"/><path d="M17 4h.01"/></svg>
  ),
  Camera: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
  ),
  Users: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
  Lock: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
  ),
  ChevronRight: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  ),
  CheckCircle: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
  ),
  Award: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
  )
};

export default function Fidelivenus() {
  // Simulação de dados que virão do Firebase depois
  const userPoints = 1250;
  const nextRewardPoints = 1500;
  const progress = (userPoints / nextRewardPoints) * 100;

  return (
    <main className="max-w-4xl mx-auto px-6 pt-8 pb-12 font-sans">
      
      {/* Título da Página */}
      <div className="flex items-center justify-center gap-3 mb-10 text-[#aa1f64]">
        <div className="text-[#d4af37] animate-pulse"><Icons.Star /></div>
        <h1 className="font-serif text-3xl font-bold tracking-tight">FideliVênus</h1>
        <div className="text-[#d4af37] animate-pulse"><Icons.Star /></div>
      </div>

      {/* Cartão de Pontos Estilo Wallet */}
      <div className="relative overflow-hidden rounded-[2.5rem] p-8 text-white shadow-2xl shadow-pink-200 mb-12 bg-linear-to-br from-[#9d1d5a] to-[#7a1645]">
        {/* Efeito de brilho no cartão */}
        <div className="absolute top-[-20%] right-[-10%] w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="flex justify-between items-start mb-12 relative z-10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-70 font-bold">Saldo de Pétalas</span>
            <h2 className="text-5xl font-black mt-2 flex items-center gap-3">
              {userPoints.toLocaleString()} 
              <span className="text-pink-300 text-3xl">✿</span>
            </h2>
          </div>
          <div className="bg-white/10 p-4 rounded-3xl backdrop-blur-md border border-white/10 text-center">
            <span className="text-[10px] font-bold uppercase tracking-widest block mb-1">Nível</span>
            <span className="text-xl font-serif font-bold text-pink-200">Orquídea</span>
          </div>
        </div>

        <div className="space-y-4 relative z-10">
          <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
            <span>Próximo Resgate: Bolo de Pote</span>
            <span>{Math.round(progress)}%</span>
          </div>
          
          {/* Barra de Progresso */}
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all duration-1000"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          <p className="text-[10px] opacity-60 italic text-right uppercase tracking-wider">
            Faltam {nextRewardPoints - userPoints} pétalas para a sua próxima doçura grátis!
          </p>
        </div>
      </div>

      {/* Opções de Troca */}
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-8">
          <h3 className="font-serif text-2xl text-gray-800">Trocar Pétalas</h3>
          <div className="h-px bg-pink-100 flex-1"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Recompensa 1 (Bloqueada) */}
          <div className="bg-white p-6 rounded-2rem shadow-sm border border-pink-50 flex items-center gap-4 group transition-all opacity-80">
            <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center text-[#9d1d5a]">
              <Icons.Ticket />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-800">10% de Desconto</h4>
              <span className="text-xs text-pink-400 font-bold uppercase tracking-tighter">500 Pétalas</span>
            </div>
            <button className="p-2 bg-pink-50 rounded-full text-[#9d1d5a] opacity-50 cursor-not-allowed">
              <Icons.Lock />
            </button>
          </div>

          {/* Recompensa 2 (Disponível) */}
          <div className="bg-white p-6 rounded-2rem shadow-sm border border-pink-50 flex items-center gap-4 group hover:shadow-lg hover:border-[#9d1d5a] transition-all cursor-pointer">
            <div className="w-16 h-16 bg-pink-50 rounded-2xl flex items-center justify-center text-[#9d1d5a] group-hover:bg-[#9d1d5a] group-hover:text-white transition-all">
              <Icons.Cake />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-800">Bolo de Pote</h4>
              <span className="text-xs text-[#9d1d5a] font-bold uppercase tracking-tighter">1.500 Pétalas</span>
            </div>
            <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center group-hover:bg-[#9d1d5a] group-hover:text-white transition-all">
              <Icons.ChevronRight />
            </div>
          </div>
        </div>
      </section>

      {/* Missões */}
      <section className="mb-12">
        <h3 className="font-serif text-2xl text-gray-800 mb-8">Missões de Doçura</h3>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-2rem flex items-center gap-6 border border-dashed border-pink-200 hover:bg-pink-50/30 transition-colors">
            <div className="p-4 bg-orange-50 text-orange-400 rounded-2xl">
              <Icons.Camera />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-800">Partilhe no Instagram</h4>
              <p className="text-xs text-gray-400">Identifique @VenusConfeitaria na sua story.</p>
            </div>
            <span className="text-[#9d1d5a] font-bold text-sm">+50 pts</span>
          </div>

          <div className="bg-white p-6 rounded-2rem flex items-center gap-6 border border-dashed border-pink-200 hover:bg-blue-50/30 transition-colors">
            <div className="p-4 bg-blue-50 text-blue-400 rounded-2xl">
              <Icons.Users />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-800">Indique um Amigo</h4>
              <p className="text-xs text-gray-400">Ganha quando ele fizer a primeira compra.</p>
            </div>
            <span className="text-[#9d1d5a] font-bold text-sm">+200 pts</span>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <div className="bg-[#d4af37]/10 p-8 rounded-[2.5rem] border border-[#d4af37]/20 relative overflow-hidden">
        <div className="absolute -right-4 -bottom-4 text-[#d4af37] opacity-10 rotate-12 scale-[4]">
          <Icons.Award />
        </div>
        <h3 className="font-serif text-xl text-[#926c15] mb-4 uppercase tracking-widest font-bold">Vantagens Membro Orquídea</h3>
        <ul className="space-y-4 relative z-10">
          {[
            "Entrega grátis em compras acima de R$ 50",
            "Acesso antecipado a coleções sazonais",
            "Brinde surpresa no mês do aniversário"
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-sm text-[#926c15] font-medium">
              <div className="text-[#d4af37]"><Icons.CheckCircle /></div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}