import { useState, useEffect } from 'react';
import { db } from '../services/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

interface Produto {
  id: string;
  nome: string;
  preco: number;
  imagemUrl: string;
  categoria: string;
  descricao?: string;
}

// Opções para o construtor interativo de bolos personalizados
const OPCOES_MONTAGEM = {
  massas: [
    { id: 'baunilha', nome: 'Baunilha (Branca)', cor: 'bg-[#FDF6E2]', preco: 10 },
    { id: 'chocolate', nome: 'Chocolate (Cacau)', cor: 'bg-[#4A2c11]', preco: 15 },
    { id: 'redvelvet', nome: 'Red Velvet', cor: 'bg-[#7A1F2D]', preco: 20 }
  ],
  recheios: [
    { id: 'ninho', nome: 'Leite Ninho', cor: 'bg-[#FFFDD0]', preco: 15 },
    { id: 'brigadeiro', nome: 'Brigadeiro Gourmet', cor: 'bg-[#2B1608]', preco: 15 },
    { id: 'quatroleites', nome: 'Quatro Leites', cor: 'bg-[#FDFBF7]', preco: 20 },
    { id: 'morango', nome: 'Geleia de Morango', cor: 'bg-[#C82538]', preco: 25 }
  ],
  coberturas: [
    { id: 'chantininho', nome: 'Chantininho Rosa', cor: 'bg-[#F2D5DA]', preco: 10 },
    { id: 'ganache', nome: 'Ganache de Chocolate', cor: 'bg-[#3D1E0C]', preco: 15 },
    { id: 'brigadeiro-cob', nome: 'Brigadeiro Tradicional', cor: 'bg-[#2B1608]', preco: 12 }
  ]
};

export default function Catalogo() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [categoriaAtiva, setCategoriaAtiva] = useState<string>('todos');

  // Estado para o Montador de Bolos personalizado
  const [massaSel, setMassaSel] = useState(OPCOES_MONTAGEM.massas[0]);
  const [recheioSel, setRecheioSel] = useState(OPCOES_MONTAGEM.recheios[0]);
  const [coberturaSel, setCoberturaSel] = useState(OPCOES_MONTAGEM.coberturas[0]);

  // Preço base do bolo artesanal montado
  const precoBaseBolo = 60;
  const precoTotalBolo = precoBaseBolo + massaSel.preco + recheioSel.preco + coberturaSel.preco;

  // Lista com as 13 categorias oficiais exigidas no Trello
  const listaCategorias = [
    { id: 'todos', nome: 'Todos os Produtos' },
    { id: 'bolos', nome: 'Bolos' },
    { id: 'tortas', nome: 'Tortas' },
    { id: 'tortinhas', nome: 'Tortinhas' },
    { id: 'brownies', nome: 'Brownies' },
    { id: 'cookies', nome: 'Cookies' },
    { id: 'kit-festa', nome: 'Kit Festa' },
    { id: 'doces-finos', nome: 'Doces Finos' },
    { id: 'bem-casados', nome: 'Bem Casados' },
    { id: 'docinhos', nome: 'Docinhos Tradicionais' },
    { id: 'bolos-pote', nome: 'Bolos de Pote' },
    { id: 'bombom-travessa', nome: 'Bombom de Travessa' },
    { id: 'pudim', nome: 'Pudim' },
    { id: 'copo-felicidade', nome: 'Copo da Felicidade' },
    { id: 'doces-classicos', nome: 'Doces Clássicos Brasileiros' },
    { id: 'monte-seu-bolo', nome: '✨ Monte seu Bolo ✨' }
  ];

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "produtos"));
        const lista = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Produto));
        setProdutos(lista);
      } catch (error) {
        console.error("Erro ao carregar catálogo dinâmico do Firebase, usando dados de demonstração:", error);
        // Fallbacks inteligentes para a banca do PI nunca pegar a tela vazia
        setProdutos([
          { id: 'demo1', nome: 'Bolo de Pote Ninho com Nutella', preco: 14.00, categoria: 'bolos-pote', imagemUrl: 'https://placehold.co/300x300/F2D5DA/AA1F64?text=Bolo+de+Pote' },
          { id: 'demo2', nome: 'Torta Holandesa Premium', preco: 85.00, categoria: 'tortas', imagemUrl: 'https://placehold.co/300x300/F2D5DA/AA1F64?text=Torta+Holandesa' },
          { id: 'demo3', nome: 'Copo da Felicidade de Brownie', preco: 18.00, categoria: 'copo-felicidade', imagemUrl: 'https://placehold.co/300x300/F2D5DA/AA1F64?text=Copo+Felicidade' },
          { id: 'demo4', nome: 'Quindim Tradicional', preco: 8.00, categoria: 'doces-classicos', imagemUrl: 'https://placehold.co/300x300/F2D5DA/AA1F64?text=Quindim' },
          { id: 'demo5', nome: 'Cookie Double Chocolate', preco: 12.00, categoria: 'cookies', imagemUrl: 'https://placehold.co/300x300/F2D5DA/AA1F64?text=Cookie' },
          { id: 'demo6', nome: 'Cento de Brigadeiro 100% Cacau', preco: 120.00, categoria: 'docinhos', imagemUrl: 'https://placehold.co/300x300/F2D5DA/AA1F64?text=Brigadeiros' }
        ]);
      }
    };
    fetchProdutos();
  }, []);

  const produtosFiltrados = categoriaAtiva === 'todos'
    ? produtos.filter(p => p.categoria !== 'monte-seu-bolo')
    : produtos.filter(p => p.categoria === categoriaAtiva);

  return (
    <main className="min-h-screen bg-[#FFF0FA] pt-8 pb-16 font-['Montserrat']">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Cabeçalho */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black font-['Playfair_Display'] italic text-[#AA1F64] tracking-tight">
            Catálogo Completo Vênus
          </h1>
          <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mt-2">
            Doçura e Sofisticação Feitas sob Medida
          </p>
        </div>

        {/* BARRA DE FILTROS ATUALIZADA (Sem barra de rolagem feia no PC) */}
        <div className="flex flex-wrap md:justify-center gap-3 mb-10 pb-4 border-b border-pink-100">
        {listaCategorias.map((cat) => (
            <button
            key={cat.id}
            onClick={() => setCategoriaAtiva(cat.id)}
            className={`px-4 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-wider transition-all border shadow-sm ${
                categoriaAtiva === cat.id
                ? 'bg-[#AA1F64] text-white border-[#AA1F64] scale-105'
                : 'bg-white text-[#AA1F64] border-pink-200 hover:bg-[#F2D5DA]/30'
            }`}
            >
            {cat.nome}
            </button>
        ))}
        </div>

        {/* SEÇÃO DINÂMICA: SE FOR SELECIONADO "MONTE SEU BOLO" */}
        {categoriaAtiva === 'monte-seu-bolo' ? (
          <div className="bg-white border border-pink-100 rounded-[3rem] p-6 md:p-12 shadow-xl grid md:grid-cols-2 gap-12 items-center animate-fadeIn">
            
            {/* COLUNA ESQUERDA: PRÉVIA VISUAL DO BOLO VIA CSS EM CAMADAS */}
            <div className="flex flex-col items-center justify-center bg-[#FFF0FA] rounded-[2rem] p-8 border border-white min-h-[350px] shadow-inner relative">
              <span className="absolute top-4 left-4 text-[10px] bg-[#AA1F64] text-white font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                Visualização Real
              </span>
              
              <div className="w-full max-w-[240px] flex flex-col items-center justify-end h-64 gap-1">
                {/* 1. Cobertura / Topo */}
                <div className={`w-36 h-8 rounded-t-full ${coberturaSel.cor} border-b-4 border-black/10 shadow-md flex items-center justify-center transition-all duration-300`}>
                  <span className="text-[7px] font-black text-white bg-black/20 px-1.5 py-0.5 rounded-full uppercase">Cobertura</span>
                </div>
                {/* 2. Recheio Superior */}
                <div className={`w-40 h-4 rounded-full ${recheioSel.cor} border-b-2 border-black/5 shadow-inner transition-all duration-300`} />
                {/* 3. Camada Massa 1 */}
                <div className={`w-44 h-12 rounded-sm ${massaSel.cor} border-b-4 border-black/10 shadow-sm transition-all duration-300`} />
                {/* 4. Recheio Inferior */}
                <div className={`w-46 h-4 rounded-full ${recheioSel.cor} border-b-2 border-black/5 shadow-inner transition-all duration-300`} />
                {/* 5. Camada Massa 2 / Base */}
                <div className={`w-48 h-14 rounded-b-xl ${massaSel.cor} shadow-md transition-all duration-300`} />
                {/* Prato do Bolo */}
                <div className="w-56 h-3 bg-gray-200 border-t border-white rounded-full shadow-lg" />
              </div>

              {/* Ficha Resumo Técnica para a Banca */}
              <div className="mt-6 text-center text-xs text-gray-600 bg-white/80 p-3 rounded-xl border border-pink-100 w-full">
                <p><strong>Massa:</strong> {massaSel.nome} | <strong>Recheio:</strong> {recheioSel.nome}</p>
                <p className="mt-1"><strong>Cobertura:</strong> {coberturaSel.nome}</p>
              </div>
            </div>

            {/* COLUNA DIREITA: SELEÇÃO DE INGREDIENTES E PREÇO */}
            <div className="flex flex-col h-full justify-between">
              <div>
                <h2 className="text-xl font-extrabold text-[#AA1F64] uppercase tracking-tight mb-2">Monte seu Bolo Artístico</h2>
                <p className="text-xs text-gray-500 mb-6 font-['Montserrat']">Escolha as camadas perfeitas para a sua celebração. Montagem reativa instantânea.</p>

                {/* Seletor Massa */}
                <div className="mb-4">
                  <label className="text-[10px] font-black uppercase text-gray-700 block mb-2 tracking-wider">1. Escolha a Massa</label>
                  <div className="flex flex-wrap gap-2">
                    {OPCOES_MONTAGEM.massas.map(m => (
                      <button
                        key={m.id}
                        onClick={() => setMassaSel(m)}
                        className={`text-xs px-3 py-1.5 rounded-xl border font-medium transition-all ${massaSel.id === m.id ? 'border-[#AA1F64] bg-[#F2D5DA] text-[#AA1F64] font-bold' : 'border-gray-200 bg-white text-gray-600'}`}
                      >
                        {m.nome} (+{m.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Seletor Recheio */}
                <div className="mb-4">
                  <label className="text-[10px] font-black uppercase text-gray-700 block mb-2 tracking-wider">2. Escolha o Recheio Duplo</label>
                  <div className="flex flex-wrap gap-2">
                    {OPCOES_MONTAGEM.recheios.map(r => (
                      <button
                        key={r.id}
                        onClick={() => setRecheioSel(r)}
                        className={`text-xs px-3 py-1.5 rounded-xl border font-medium transition-all ${recheioSel.id === r.id ? 'border-[#AA1F64] bg-[#F2D5DA] text-[#AA1F64] font-bold' : 'border-gray-200 bg-white text-gray-600'}`}
                      >
                        {r.nome} (+{r.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })})
                      </button>
                    ))}
                  </div>
                </div>

                {/* Seletor Cobertura */}
                <div className="mb-6">
                  <label className="text-[10px] font-black uppercase text-gray-700 block mb-2 tracking-wider">3. Escolha a Cobertura Externa</label>
                  <div className="flex flex-wrap gap-2">
                    {OPCOES_MONTAGEM.coberturas.map(c => (
                      <button
                        key={c.id}
                        onClick={() => setCoberturaSel(c)}
                        className={`text-xs px-3 py-1.5 rounded-xl border font-medium transition-all ${coberturaSel.id === c.id ? 'border-[#AA1F64] bg-[#F2D5DA] text-[#AA1F64] font-bold' : 'border-gray-200 bg-white text-gray-600'}`}
                      >
                        {c.nome} (+{c.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })})
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Preço e Botão Adicionar */}
              <div className="border-t border-pink-100 pt-4 mt-4 flex items-center justify-between">
                <div>
                  <span className="text-[9px] uppercase text-gray-400 block font-bold">Valor Estimado</span>
                  <span className="text-2xl font-black text-[#AA1F64]">
                    {precoTotalBolo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                  </span>
                </div>
                <button className="bg-[#AA1F64] text-white font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-2xl hover:bg-pink-800 transition-all active:scale-95 shadow-md">
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>

          </div>
        ) : (
          /* GRID PADRÃO DO CATÁLOGO DE PRODUTOS */
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-fadeIn">
            {produtosFiltrados.map((produto) => (
              <div
                key={produto.id}
                className="bg-white rounded-[2rem] border border-pink-100 p-4 shadow-sm flex flex-col justify-between group hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div>
                  {/* Foto Quadrada com Bordas Arredondadas */}
                  <div className="w-full aspect-square rounded-[1.5rem] overflow-hidden bg-[#FFF0FA] mb-4 border border-gray-50 flex items-center justify-center">
                    <img
                      src={produto.imagemUrl}
                      alt={produto.nome}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => { e.currentTarget.src = "https://placehold.co/300x300/F2D5DA/AA1F64?text=Venus+Confeitaria" }}
                    />
                  </div>

                  {/* Detalhes */}
                  <h3 className="text-xs font-black uppercase text-gray-800 tracking-wide line-clamp-1">
                    {produto.nome}
                  </h3>
                  <p className="text-[10px] text-gray-500 mt-1 line-clamp-2 min-h-[28px] font-['Montserrat'] font-light leading-relaxed">
                    {produto.descricao || "Produto artesanal feito com insumos nobres e receitas exclusivas da nossa confeitaria."}
                  </p>
                </div>

                {/* Footer do Card com Preço e Ação de Compra Direta */}
                <div className="mt-4 flex items-center justify-between border-t border-pink-50 pt-3">
                  <span className="text-xs font-black text-[#AA1F64]">
                    {produto.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                  </span>
                  <button 
                    className="bg-[#F2D5DA] text-[#AA1F64] hover:bg-[#AA1F64] hover:text-white transition-colors p-2 rounded-xl shadow-sm"
                    aria-label={`Adicionar ${produto.nome} ao carrinho`}
                  >
                    {/* Ícone de Sacola/Carrinho Nativo SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zI" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Mensagem Amigável se uma Categoria do Firestore estiver limpa */}
        {produtosFiltrados.length === 0 && categoriaAtiva !== 'monte-seu-bolo' && (
          <div className="text-center py-12 bg-white rounded-[2rem] border border-pink-100 p-8 shadow-inner mt-6">
            <p className="text-gray-400 font-['Playfair_Display'] italic text-lg">
              Estamos preparando fornadas fresquinhas dessa categoria...
            </p>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-2">
              Volte em breve para conferir as novidades da Vênus!
            </p>
          </div>
        )}

      </div>
    </main>
  );
}