import { useEffect, useState } from 'react';
import { db } from '../services/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';
import Carrossel from '../components/Carrossel'; // 1. IMPORTA O SEU NOVO CARROSSEL AQUI!

// Tipagem para o TypeScript não reclamar
interface Produto {
  id: string;
  nome: string;
  preco: number;
  imagemUrl: string;
  promocao: boolean;
}

interface Categoria {
  id: string;
  nome: string;
}

interface Banner {
  id: string;
  imagemUrl: string;
}

export default function Home() {
  const [promocoes, setPromocoes] = useState<Produto[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      // 1. Busca Banners do Carrossel (caso use os dados do Firebase futuramente)
      const carrosselSnap = await getDocs(collection(db, "carrossel"));
      setBanners(carrosselSnap.docs.map(doc => ({ id: doc.id, ...doc.data() } as Banner)));

      // 2. Busca Promoções (onde promocao == true)
      const promoQuery = query(collection(db, "produtos"), where("promocao", "==", true));
      const promoSnap = await getDocs(promoQuery);
      setPromocoes(promoSnap.docs.map(doc => ({ id: doc.id, ...doc.data() } as Produto)));

      // 3. Busca Categorias
      const catSnap = await getDocs(collection(db, "categorias"));
      setCategorias(catSnap.docs.map(doc => ({ id: doc.id, ...doc.data() } as Categoria)));
    };

    fetchData();
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-4 mt-8">
      
      {/* SEÇÃO CARROSSEL ATUALIZADA COM O COMPONENTE NOVO */}
      <section className="mb-12">
        <Carrossel />
      </section>

      {/* SEÇÃO PROMOÇÕES */}
      <section className="bg-[#f2d5da] rounded-[3rem] p-8 border border-white shadow-sm mb-12">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-700 mb-8 border-b border-white/50 pb-2">Promoções</h2>
        <div className="flex overflow-x-auto pb-4 gap-6 md:grid md:grid-cols-4 scrollbar-hide">
          {promocoes.map((produto) => (
            <div key={produto.id} className="flex flex-col items-center min-w-[140px] group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg bg-white mb-3 group-hover:scale-105 transition-transform overflow-hidden">
                <img src={produto.imagemUrl} alt={produto.nome} className="w-full h-full object-cover" />
              </div>
              <p className="text-[10px] font-bold uppercase text-center">{produto.nome}</p>
              <p className="text-[#AA1F64] font-bold">
                {produto.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO CATEGORIAS */}
      <section className="bg-[#f2d5da] rounded-[3rem] p-8 border border-white shadow-sm">
        <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-700 mb-10">Categorias</h2>
        <div className="flex overflow-x-auto pb-4 gap-8 md:flex-wrap md:justify-center scrollbar-hide">
          {categorias.map((cat) => (
            <div key={cat.id} className="flex flex-col items-center gap-3">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#AA1F64] bg-white shadow-md">
                {/* Aqui você pode colocar um ícone ou imagem da categoria futuramente */}
              </div>
              <span className="text-[9px] font-bold uppercase text-[#AA1F64]">{cat.nome}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}