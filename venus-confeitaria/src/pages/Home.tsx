import { useEffect, useState } from 'react';
import { db } from '../services/firebaseConfig';
import { collection, getDocs, query, where } from 'firebase/firestore';

import Carrossel from '../components/Carrossel';
import Promocoes from '../components/Promocoes'; // 1. Importando o componente do Carrossel de Promoções
import Categorias from '../components/Categorias';

interface Produto {
  id: string;
  nome: string;
  preco: number;
  imagemUrl: string;
  promocao: boolean;
  categoria: string;
  descricao?: string;
}

export default function Home() {
  const [promocoes, setPromocoes] = useState<Produto[]>([]);

  const promoFallbacks: Produto[] = [
    {
      id: "fallback-p1",
      nome: "Bolo Trufado Red Velvet",
      preco: 95.00,
      imagemUrl: "/carrossel/img1.png",
      promocao: true,
      categoria: "bolos",
      descricao: "Massa aveludada de cacau com recheio cremoso à base de cream cheese e frutas vermelhas."
    },
    {
      id: "fallback-p2",
      nome: "Cento de Brigadeiro Belga",
      preco: 140.00,
      imagemUrl: "/carrossel/img5.png",
      promocao: true,
      categoria: "docinhos",
      descricao: "Cento de doces finos enrolados em confeito belga callebaut 100% puro."
    }
  ];

  useEffect(() => {
    const fetchPromocoes = async () => {
      try {
        const promoQuery = query(collection(db, "produtos"), where("promocao", "==", true));
        const promoSnap = await getDocs(promoQuery);
        if (!promoSnap.empty) {
          setPromocoes(promoSnap.docs.map(doc => ({ id: doc.id, ...doc.data() } as Produto)));
        } else {
          setPromocoes(promoFallbacks);
        }
      } catch (error) {
        console.warn("Utilizando promoções estáticas no PI devido a restrições do Firebase:", error);
        setPromocoes(promoFallbacks);
      }
    };

    fetchPromocoes();
  }, []);

  return (
    <main className="max-w-6xl mx-auto px-4 mt-8 pb-16 font-['Montserrat'] bg-[#FFF0FA] flex flex-col gap-12">
      
      {/* 1. SEÇÃO DO CARROSSEL DE SLIDES DO TOPO */}
      <section>
        <Carrossel />
      </section>

      {/* 2. SEÇÃO PROMOÇÕES INTEGRADA (Chamando seu componente dinâmico de carrossel) */}
      <section>
        <Promocoes />
      </section>

      {/* 3. CHAMADA LIMPA DO COMPONENTE DE CATEGORIAS */}
      <Categorias />

    </main>
  );
}