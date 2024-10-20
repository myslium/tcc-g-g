import Cabecalho from '../../componentes/cabeçalho';
import TituloMenor from '../../componentes/titulomenor';
import './index.scss';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ConfirmarCandidato() {
    const [nome, setNome] = useState('');
    const [emailCandidato, setEmailCandidato] = useState('');
    const [cpfCandidato, setCpfCandidato] = useState('');
    const [status, setStatus] = useState('');
    const [idCandidato, setIdCandidato] = useState(0);
    const navigate = useNavigate();

    const { id } = useParams();

    async function alterarCandidato() {
        const url = `http://localhost:5010/candidato/${id}`;
        const resp = await axios.put(url);
        setNome(resp.data.nome);
        setEmailCandidato(resp.data.email);
        setCpfCandidato(resp.data.cpf);
        setIdCandidato(id);
        setStatus(resp.data.status); }

    async function adicionar() {
      
        const url = `http://localhost:5010/candidato/${id}`;
        await axios.put(url, { status }); 
        navigate('/admin/gerenciandovagas'); 
    }

    function reset() {
        localStorage.removeItem('token');
        navigate('/');
    }

    useEffect(() => { 
        alterarCandidato();
    }, []);
 
    return (
        <div className='pagina-confirmar'>
            <Cabecalho
                titulo1='Sair' 
                onLogout={reset} 
                titulo2='Vagas'
                link2='/admin/gerenciandovagas'
                titulo3='Notificações'
                link3='/admin/notificacoes'
                titulo4='Gerenciamento Vagas'
                link4='/admin/gerenciamento'
            />

            <TituloMenor titulo='Confirmação de candidato'/>

            <section className='formulario'>
                <div className='inputs'>
                    <label>Candidato:</label>
                    <input type="text" placeholder='Nome do candidato' value={nome} onChange={e => setNome(e.target.value)} />
                    <label>CPF:</label>
                    <input type="text" value={cpfCandidato} onChange={e => setCpfCandidato(e.target.value)} />
                    <label>Email:</label>
                    <input type="text" value={emailCandidato} onChange={e => setEmailCandidato(e.target.value)} />
                    <label>Status:</label>
                    <input type="text" placeholder='Aprovado ou em andamento?' value={status} onChange={e => setStatus(e.target.value)} />
                    
                    <div>
                        <button>Currículo</button>
                    </div>
                </div>
                <div className='botao'>
                    <button onClick={adicionar}>Confirmar</button>
                </div>
            </section>
        </div>
    );
}
