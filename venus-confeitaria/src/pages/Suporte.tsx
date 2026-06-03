import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faTimes, faPaperPlane, faCommentDots } from '@fortawesome/free-solid-svg-icons';

interface Mensagem {
  id: number;
  texto: string;
  isBot: boolean;
  opcoes?: string[];
}

export default function SuporteFlutuante() {
  const [isOpen, setIsOpen] = useState(false);
  const [mensagens, setMensagens] = useState<Mensagem[]>([
    {
      id: 1,
      texto: "Olá! Seja bem-vinda ao suporte da Vênus Confeitaria. 🍰 Como posso adoçar o seu dia hoje?",
      isBot: true,
      opcoes: ["Formas de Entrega", "Prazo dos Pedidos", "Meios de Pagamento", "Falar com Humano"]
    }
  ]);
  
  const [inputMessage, setInputMessage] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Scroll automático para a última mensagem que surgir
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [mensagens, isOpen]);

  // Respostas automáticas baseadas no clique das opções
  const handleOpcaoClick = (opcao: string) => {
    // 1. Adiciona a escolha do usuário na tela
    const novaMensagemUsuario: Mensagem = {
      id: Date.now(),
      texto: opcao,
      isBot: false
    };

    setMensagens(prev => [...prev, novaMensagemUsuario]);

    // 2. Processa a resposta automática do Bot após um mini delay "pensando"
    setTimeout(() => {
      let respostaBot = "";
      let proximasOpcoes: string[] = ["Voltar ao Menu Principal"];

      if (opcao === "Formas de Entrega") {
        respostaBot = "Fazemos entregas agendadas em toda a região de Campinas através de nossos carros climatizados, garantindo que seu bolo chegue impecável! Também aceitamos retirada em nosso ateliê.";
      } else if (opcao === "Prazo dos Pedidos") {
        respostaBot = "Para bolos artísticos e personalizados, pedimos o prazo mínimo de 3 a 5 dias de antecedência. Docinhos tradicionais podem ser encomendados com até 48 horas de antecedência!";
      } else if (opcao === "Meios de Pagamento") {
        respostaBot = "Aceitamos PIX (com aprovação automática imediata), cartões de crédito em até 3x sem juros e o nosso saldo do Clube Fidelivênus!";
      } else if (opcao === "Falar com Humano") {
        respostaBot = "Sem problemas! Vou te redirecionar agora mesmo para nossa equipe de atendimento humano no WhatsApp.";
        // Abre o whats real na raça
        window.open("https://wa.me/5519993643988", "_blank");
      } else {
        // Voltar ao menu
        respostaBot = "Certinho! Como posso te ajudar agora?";
        proximasOpcoes = ["Formas de Entrega", "Prazo dos Pedidos", "Meios de Pagamento", "Falar com Humano"];
      }

      setMensagens(prev => [...prev, {
        id: Date.now() + 1,
        texto: respostaBot,
        isBot: true,
        opcoes: proximasOpcoes
      }]);
    }, 600);
  };

  // Envio de mensagem por texto digitado
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const textoDigitado = inputMessage;
    setMensagens(prev => [...prev, { id: Date.now(), texto: textoDigitado, isBot: false }]);
    setInputMessage('');

    setTimeout(() => {
      setMensagens(prev => [...prev, {
        id: Date.now() + 1,
        texto: "Poxa, ainda sou um bot em treinamento e não entendi muito bem essa dúvida por texto. 🥺 Tente usar as nossas opções rápidas clicando nos botões!",
        isBot: true,
        opcoes: ["Voltar ao Menu Principal"]
      }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-['Montserrat'] select-none">
      
      {/* BOTÃO FLUTUANTE (Ícone igual ao print Captura de tela 2026-06-03 194851.png) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-[#AA1F64] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all animate-pulinho-alegre"
          aria-label="Abrir chat de suporte e ouvidoria"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="lg" />
        </button>
      )}

      {/* JANELINHA DO CHAT (Igual ao print Captura de tela 2026-06-03 194841.png) */}
      {isOpen && (
        <div className="w-[360px] h-[500px] bg-[#FFF0FA] rounded-2xl shadow-2xl border border-pink-100 flex flex-col overflow-hidden transition-all duration-300 transform scale-100 origin-bottom-right">
          
          {/* Header do Chat */}
          <div className="bg-[#AA1F64] text-white p-4 flex justify-between items-center shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#AA1F64]">
                <FontAwesomeIcon icon={faCommentDots} size="lg" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Suporte Vênus</h3>
                <p className="text-[10px] text-pink-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block animate-pulse"></span>
                  Online agora
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-pink-200 transition-colors p-1"
              aria-label="Fechar chat de suporte"
            >
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
          </div>

          {/* Área das Mensagens (Scroll) */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#FFF6FC]">
            {mensagens.map((msg) => (
              <div key={msg.id} className="flex flex-col">
                {/* Balão da Mensagem */}
                <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-xs shadow-sm leading-relaxed
                  ${msg.isBot 
                    ? 'bg-white text-gray-800 rounded-tl-none self-start border border-pink-50' 
                    : 'bg-[#AA1F64] text-white rounded-tr-none self-end'
                  }`}
                >
                  {msg.texto}
                </div>

                {/* Opções Interativas em formato de botões de clique (estilo Descomplica) */}
                {msg.isBot && msg.opcoes && (
                  <div className="flex flex-wrap gap-2 mt-3 max-w-[90%] self-start">
                    {msg.opcoes.map((opcao, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleOpcaoClick(opcao)}
                        className="bg-white text-[#AA1F64] border border-pink-200 rounded-full px-3 py-1.5 text-[11px] font-medium hover:bg-pink-50 hover:border-[#AA1F64] transition-all active:scale-95 shadow-sm"
                      >
                        {opcao}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input de Digitação inferior */}
          <form onSubmit={handleSendMessage} className="bg-white p-3 border-t border-pink-100 flex items-center gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Escreva sua dúvida aqui..."
              className="flex-1 bg-gray-50 text-xs text-gray-800 px-4 py-2.5 rounded-full outline-none focus:ring-1 focus:ring-[#AA1F64]"
            />
            <button 
              type="submit" 
              className="text-[#AA1F64] hover:opacity-80 transition-opacity p-2"
              aria-label="Enviar mensagem"
            >
              <FontAwesomeIcon icon={faPaperPlane} size="sm" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
}