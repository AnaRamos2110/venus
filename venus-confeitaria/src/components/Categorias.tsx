import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../services/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

interface Categoria {
  id: string;
  nome: string;
  slug: string;
}

export default function Categorias() {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  // Fallbacks locais para as categorias idênticas ao print do Trello caso o Firebase oscile
  const categoriasIniciais: Categoria[] = [
    { id: "cat1", nome: "COOKIES", slug: "cookies" },
    { id: "cat2", nome: "BOLOS", slug: "bolos" },
    { id: "cat3", nome: "CHOCOLATERIA", slug: "doces finos" },
    { id: "cat4", nome: "BROWNIES", slug: "brownies" }
  ];

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const catSnap = await getDocs(collection(db, "categorias"));
        if (!catSnap.empty) {
          setCategorias(catSnap.docs.map(doc => ({ id: doc.id, ...doc.data() } as Categoria)));
        } else {
          setCategorias(categoriasIniciais);
        }
      } catch (error) {
        console.warn("Utilizando categorias locais do PI devido a restrições de rede:", error);
        setCategorias(categoriasIniciais);
      }
    };

    fetchCategorias();
  }, []);

  return (
    <section className="bg-[#F2D5DA] rounded-[3.5rem] p-8 border border-white shadow-sm font-['Montserrat']">
      <h2 className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#AA1F64] mb-10 border-b border-white/40 pb-2">
        Categorias
      </h2>

      {/* Grid horizontal flexível com scroll para mobile e centralizado no desktop */}
      <div className="flex overflow-x-auto pb-4 gap-8 justify-start md:justify-center scrollbar-hide items-start">
        {categorias.slice(0, 4).map((cat) => (
          <button 
            key={cat.id} 
            onClick={() => navigate(`/Catalogo?categoria=${cat.slug}`)}
            className="flex flex-col items-center gap-3 shrink-0 group focus:outline-none"
            aria-label={`Ver doces de ${cat.nome}`}
          >
            {/* Círculo branco idêntico ao mockup do Figma/Trello */}
            <div className="w-24 h-24 rounded-full border-2 border-[#AA1F64] bg-white shadow-md flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg">
              <span className="text-xs uppercase font-extrabold text-[#AA1F64]/30 font-['Playfair_Display']">
                {cat.nome.slice(0, 3)}
              </span>
            </div>
            
            <span className="text-[9px] font-black uppercase tracking-wider text-[#AA1F64] group-hover:opacity-80 transition-opacity">
              {cat.nome}
            </span>
          </button>
        ))}

        {/* ÚLTIMO BOTÃO DA FILA: VER TUDO / CATALOGO COMPLETO (Pedido no Trello!) */}
        <button 
          onClick={() => navigate('/Catalogo')}
          className="flex flex-col items-center gap-3 shrink-0 group focus:outline-none"
          aria-label="Acessar o catálogo completo de doces"
        >
          <div className="w-24 h-24 rounded-full border-2 border-dashed border-[#AA1F64] bg-[#FFF0FA] shadow-md flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#AA1F64] group-hover:text-white text-[#AA1F64]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
          
          <span className="text-[9px] font-black uppercase tracking-wider text-[#AA1F64] group-hover:opacity-80 transition-opacity">
            VER TUDO
          </span>
        </button>
      </div>
    </section>
  );
}