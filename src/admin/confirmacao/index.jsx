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
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        async function buscar() {
            const url = `http://localhost:5010/candidato/${id}`;
            const resp = await axios.get(url);
            setNome(resp.data.nome);
            setEmailCandidato(resp.data.email);
            setCpfCandidato(resp.data.cpf);
            setStatus(resp.data.status); 
        }
        
        buscar();
    }, [id]); 

    async function adicionar() {
        const url = `http://localhost:5010/candidato/${id}`;
        try {
            let dados = {
                nome,
                email: emailCandidato,
                cpf: cpfCandidato,
                status
            };
            await axios.put(url, dados);
            navigate('/admin/gerenciandovagas');
            alert('Candidato Confirmado!');
        } catch (error) {
            console.error("Erro ao adicionar candidato:", error);
        }
    }

    async function baixarCurriculo() {
        const url = `http://localhost:5010/candidatocurr/${id}`;
        try {
            const response = await axios.get(url, {
                responseType: 'blob'
            });
            const urlBlob = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = urlBlob;
            link.setAttribute('download', 'curriculo.pdf'); 
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error("Erro ao baixar o currículo:", error);
        }
    }
    
    function reset() {
        localStorage.removeItem('token');
        navigate('/');
    }

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
                        <button onClick={baixarCurriculo}>Baixar Currículo</button>
                    </div>
                </div>
                <div className='botao'>
                    <button onClick={adicionar}>Confirmar</button>
                </div>
            </section>
        </div>
    );
}
