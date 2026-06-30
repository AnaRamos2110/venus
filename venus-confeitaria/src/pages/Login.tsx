import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../services/firebaseConfig';
import { signInWithEmailAndPassword, sendPasswordResetEmail} from 'firebase/auth';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');
  const [carregando, setCarregando] = useState(false);

  // Estados da recuperação (Não MVP do Trello)
  const [telaRecuperar, setTelaRecuperar] = useState(false);
  const [metodoRecuperar, setMetodoRecuperar] = useState('email'); // email, sms, whatsapp
  const [inputRecuperar, setInputRecuperar] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');
    setSucesso('');
    setCarregando(true);

    try {
      await signInWithEmailAndPassword(auth, email, senha);
      setSucesso('Acesso autorizado! Seja bem-vinda...');
      setTimeout(() => {
        navigate('/'); 
      }, 1500);
    } catch (err: any) {
      console.error(err);
      setErro('E-mail ou credenciais incorretas.');
    } finally {
      setCarregando(false);
    }
  };

  const handleRecuperarSenha = async (e: React.FormEvent) => {
  e.preventDefault();
  setErro('');
  setSucesso('');

  try {
    // 1. SE FOR E-MAIL: Dispara o fluxo REAL de luxo do Firebase
    if (metodoRecuperar === 'email') {
      await sendPasswordResetEmail(auth, inputRecuperar);
      setSucesso("E-mail de redefinição enviado com sucesso! Confira sua caixa de entrada.");
    } 
    // 2. SE FOR SMS OU WHATSAPP: Mantém a simulação do Trello
    else {
      setSucesso(`Código de verificação enviado via ${metodoRecuperar.toUpperCase()} para: ${inputRecuperar}`);
    }

    // Conforme o Trello: Após alterada, voltar para o Login sozinho
    setTimeout(() => {
      setSucesso('');
      setTelaRecuperar(false);
      setInputRecuperar('');
    }, 4000);

  } catch (err: any) {
    console.error(err);
    // Trata erros comuns (ex: e-mail digitado errado ou que não existe no banco)
    if (err.code === 'auth/invalid-email') {
      setErro('O formato do e-mail digitado é inválido.');
    } else if (err.code === 'auth/user-not-found') {
      setErro('Este e-mail não está cadastrado no Ateliê.');
    } else {
      setErro('Erro ao enviar redefinição. Tente novamente.');
    }
  }
};

  return (
    <div className="min-h-screen bg-[#FFF0FA] flex items-center justify-center p-4 font-['Montserrat']">
      <div className="bg-white/90 backdrop-blur-md border border-pink-100 rounded-[2.5rem] p-8 w-full max-w-sm shadow-xl border-t-4 border-t-[#AA1F64]">
        
        {!telaRecuperar ? (
          <>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-black font-['Playfair_Display'] italic text-[#AA1F64]">Vênus Confeitaria</h2>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1 font-bold">Área Restrita do Cliente</p>
            </div>

            {erro && <div className="bg-red-50 text-red-600 text-xs p-3 rounded-xl mb-4 text-center font-semibold border border-red-100">{erro}</div>}
            {sucesso && <div className="bg-emerald-50 text-emerald-600 text-xs p-3 rounded-xl mb-4 text-center font-semibold border border-emerald-100">{sucesso}</div>}

            <form onSubmit={handleLogin} className="flex flex-col gap-4">
              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase block mb-1">E-mail corporativo ou pessoal</label>
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-pink-100 focus:outline-none focus:border-[#AA1F64] text-sm bg-[#FFF0FA]/40" placeholder="exemplo@vênus.com" />
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase block mb-1">Senha Secreta</label>
                <input type="password" required value={senha} onChange={e => setSenha(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-pink-100 focus:outline-none focus:border-[#AA1F64] text-sm bg-[#FFF0FA]/40" placeholder="••••••••" />
              </div>

              <div className="text-right">
                <button type="button" onClick={() => setTelaRecuperar(true)} className="text-[10px] font-bold text-gray-400 hover:text-[#AA1F64] transition-colors">
                  Esqueceu a senha?
                </button>
              </div>

              <button type="submit" disabled={carregando} className="w-full bg-[#AA1F64] text-white text-xs font-bold uppercase tracking-widest py-3 rounded-xl hover:bg-pink-800 transition-all active:scale-95 shadow-md disabled:opacity-50">
                {carregando ? 'Autenticando...' : 'Entrar no Sistema'}
              </button>
            </form>

            <div className="text-center mt-6 border-t border-pink-50 pt-4">
              <button onClick={() => navigate('/NovoCadastro')} className="text-[11px] text-[#AA1F64] font-bold hover:underline tracking-wide">
                Não possui credenciais? Cadastre-se
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="text-center mb-6">
              <h2 className="text-xl font-black font-['Playfair_Display'] italic text-[#AA1F64]">Recuperar Chave</h2>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1 font-bold">Verificação Multifator</p>
            </div>

            {sucesso && <div className="bg-emerald-50 text-emerald-600 text-xs p-3 rounded-xl mb-4 text-center font-semibold border border-emerald-100">{sucesso}</div>}

            <form onSubmit={handleRecuperarSenha} className="flex flex-col gap-4">
              <div className="grid grid-cols-3 gap-2 bg-[#FFF0FA] p-1 rounded-xl border border-pink-100">
                {['email', 'sms', 'whatsapp'].map((m) => (
                  <button key={m} type="button" onClick={() => setMetodoRecuperar(m)} className={`py-1.5 rounded-lg text-[9px] font-bold uppercase transition-all ${metodoRecuperar === m ? 'bg-[#AA1F64] text-white shadow-sm' : 'text-gray-500 hover:bg-pink-100/50'}`}>
                    {m === 'whatsapp' ? 'Zap' : m}
                  </button>
                ))}
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase block mb-1">
                  {metodoRecuperar === 'email' ? 'Endereço de E-mail' : 'Número do celular associado'}
                </label>
                <input type={metodoRecuperar === 'email' ? 'email' : 'text'} required value={inputRecuperar} onChange={e => setInputRecuperar(e.target.value)} className="w-full px-4 py-2.5 rounded-xl border border-pink-100 focus:outline-none focus:border-[#AA1F64] text-sm bg-[#FFF0FA]/40" placeholder={metodoRecuperar === 'email' ? 'seuemail@link.com' : '(19) 99999-0000'} />
              </div>

              <button type="submit" className="w-full bg-[#AA1F64] text-white text-xs font-bold uppercase tracking-widest py-3 rounded-xl shadow-md hover:bg-pink-800 transition-all">
                Disparar Código de Acesso
              </button>

              <button type="button" onClick={() => setTelaRecuperar(false)} className="w-full bg-gray-100 text-gray-500 text-xs font-bold uppercase tracking-widest py-2.5 rounded-xl hover:bg-gray-200 transition-all">
                Voltar
              </button>
            </form>
          </>
        )}

      </div>
    </div>
  );
}