import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../services/firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export default function NovoCadastro() {
  const navigate = useNavigate();
  
  // Campos oficiais do seu Trello
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');
  const [carregando, setCarregando] = useState(false);

  const handleCadastro = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');
    setSucesso('');

    // Validações do MVP
    if (senha !== confirmarSenha) {
      setErro('As senhas não coincidem!');
      return;
    }

    if (senha.length < 6) {
      setErro('A senha deve ter no mínimo 6 caracteres.');
      return;
    }

    setCarregando(true);

    try {
      // 1. Cria credencial no Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      // 2. Vincula o nome completo ao perfil
      await updateProfile(user, { displayName: nome });

      // 3. Salva os metadados na coleção "usuarios" do Firestore
      await setDoc(doc(db, "usuarios", user.uid), {
        nome,
        cpf,
        dataNascimento,
        telefone,
        email,
        criadoEm: new Date().toISOString()
      });

      setSucesso('Cadastro realizado com luxo! Redirecionando para o Login...');
      setTimeout(() => {
        navigate('/Login');
      }, 2000);

    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/email-already-in-use') {
        setErro('Este e-mail já está em uso por outro cliente.');
      } else if (err.code === 'auth/invalid-email') {
        setErro('O formato do e-mail digitado é inválido.');
      } else {
        setErro('Erro ao registrar no banco. Verifique as regras do Firestore.');
      }
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF0FA] flex items-center justify-center p-4 font-['Montserrat']">
      <div className="bg-white/90 backdrop-blur-md border border-pink-100 rounded-[2.5rem] p-8 w-full max-w-md shadow-xl border-t-4 border-t-[#AA1F64]">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-black font-['Playfair_Display'] italic text-[#AA1F64]">Ateliê Vênus</h2>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1 font-bold">Criação de Conta Elegante</p>
        </div>

        {erro && <div className="bg-red-50 text-red-600 text-xs p-3 rounded-xl mb-4 text-center font-semibold border border-red-100">{erro}</div>}
        {sucesso && <div className="bg-emerald-50 text-emerald-600 text-xs p-3 rounded-xl mb-4 text-center font-semibold border border-emerald-100">{sucesso}</div>}

        <form onSubmit={handleCadastro} className="flex flex-col gap-3">
          <div>
            <label className="text-[10px] font-bold text-gray-500 uppercase block mb-1">Nome Completo</label>
            <input type="text" required value={nome} onChange={e => setNome(e.target.value)} className="w-full px-4 py-2 rounded-xl border border-pink-100 focus:outline-none focus:border-[#AA1F64] text-sm bg-[#FFF0FA]/40" placeholder="Ex: Ana Maria" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] font-bold text-gray-500 uppercase block mb-1">CPF</label>
              <input type="text" required placeholder="000.000.000-00" value={cpf} onChange={e => setCpf(e.target.value)} className="w-full px-4 py-2 rounded-xl border border-pink-100 focus:outline-none focus:border-[#AA1F64] text-sm bg-[#FFF0FA]/40" />
            </div>
            <div>
              <label className="text-[10px] font-bold text-gray-500 uppercase block mb-1">Data Nascimento</label>
              <input type="date" required value={dataNascimento} onChange={e => setDataNascimento(e.target.value)} className="w-full px-4 py-2 rounded-xl border border-pink-100 focus:outline-none focus:border-[#AA1F64] text-sm bg-[#FFF0FA]/40 text-gray-600" />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-bold text-gray-500 uppercase block mb-1">Telefone</label>
            <input type="tel" required placeholder="(19) 99999-9999" value={telefone} onChange={e => setTelefone(e.target.value)} className="w-full px-4 py-2 rounded-xl border border-pink-100 focus:outline-none focus:border-[#AA1F64] text-sm bg-[#FFF0FA]/40" />
          </div>

          <div>
            <label className="text-[10px] font-bold text-gray-500 uppercase block mb-1">E-mail</label>
            <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-2 rounded-xl border border-pink-100 focus:outline-none focus:border-[#AA1F64] text-sm bg-[#FFF0FA]/40" placeholder="seuemail@exemplo.com" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] font-bold text-gray-500 uppercase block mb-1">Senha</label>
              <input type="password" required value={senha} onChange={e => setSenha(e.target.value)} className="w-full px-4 py-2 rounded-xl border border-pink-100 focus:outline-none focus:border-[#AA1F64] text-sm bg-[#FFF0FA]/40" placeholder="••••••" />
            </div>
            <div>
              <label className="text-[10px] font-bold text-gray-500 uppercase block mb-1">Confirmar</label>
              <input type="password" required value={confirmarSenha} onChange={e => setConfirmarSenha(e.target.value)} className="w-full px-4 py-2 rounded-xl border border-pink-100 focus:outline-none focus:border-[#AA1F64] text-sm bg-[#FFF0FA]/40" placeholder="••••••" />
            </div>
          </div>

          <button type="submit" disabled={carregando} className="w-full bg-[#AA1F64] text-white text-xs font-bold uppercase tracking-widest py-3 rounded-xl mt-3 hover:bg-pink-800 transition-all active:scale-95 shadow-md disabled:opacity-50">
            {carregando ? 'Processando Inscrição...' : 'Cadastrar Conta Luxo'}
          </button>
        </form>

        <div className="text-center mt-4 pt-4 border-t border-pink-50">
          <button onClick={() => navigate('/Login')} className="text-[11px] text-[#AA1F64] font-bold hover:underline tracking-wide">
            Já possui login? Acesse o Ateliê
          </button>
        </div>
      </div>
    </div>
  );
}