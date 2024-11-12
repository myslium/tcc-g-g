import React, { useEffect, useState } from 'react';
import Cabecalho from '../../componentes/cabeçalho';
import TituloMenor from '../../componentes/titulomenor';
import './index.scss';
import { useNavigate, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'; 

import axios from 'axios';


export default function ConfirmarCandidato() {
    const [nome, setNome] = useState('');
    const [emailCandidato, setEmailCandidato] = useState('');
    const [cpfCandidato, setCpfCandidato] = useState('');
    const [status, setStatus] = useState('');
    const navigate = useNavigate();
    const { id } = useParams(); 
    const id_vaga = new URLSearchParams(window.location.search).get('id_vaga'); 

    useEffect(() => {
        async function buscar() {
            const url = `http://4.172.207.208:5017/candidato/${id}`;
            const resp = await axios.get(url);

            setNome(resp.data.nome);
            setEmailCandidato(resp.data.email);
            setCpfCandidato(resp.data.cpf);
            setStatus(resp.data.status); 
        }
        
        buscar();
    }, [id]); 


    async function adicionar() {
        const url = `http://4.172.207.208:5017/candidato/${id}`;
        try {
            let dados = {
                nome,
                email: emailCandidato,
                cpf: cpfCandidato,
                status,
                id_vaga 
            };
            await axios.put(url, dados);
            navigate('/admin/gerenciandovagas');
            toast.success('Candidato Confirmado!');
        } catch (error) {
            console.error("Erro ao adicionar candidato:", error);
        
            toast.error('Erro ao confirmar candidato.', {
                style: {
                  borderRadius: '10px',
                 background: 'rgba(255, 0, 0, 0.1)',
              color: '#a04dff'
                }
              });
        }
    }

    async function baixarCurriculo() {
        const url = `http://4.172.207.208:5017/candidatocurr/${id}`;
        try {
            const response = await axios.get(url, {
                responseType: 'blob'
            });

            const extensao = response.headers['content-type'] === 'application/pdf' ? 'pdf' :
                             response.headers['content-type'] === 'application/msword' ? 'doc' :
                             response.headers['content-type'] === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ? 'docx' : '';

            if (!extensao) {
            
                toast.error("Formato de arquivo não suportado", {
                    style: {
                      borderRadius: '10px',
                     background: 'rgba(255, 0, 0, 0.1)',
                  color: '#a04dff'
                    }
                  });
                return;
            }

            const urlBlob = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = urlBlob;
            link.setAttribute('download', `curriculo.${extensao}`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
       
            toast.error('Erro ao baixar o currículo:', {
                style: {
                  borderRadius: '10px',
                 background: 'rgba(255, 0, 0, 0.1)',
              color: '#a04dff'
                }
              });
        }
    }
    
    function reset() {
        localStorage.removeItem('token');
        navigate('/');
    }

    return (
        <div className='pagina-confirmar'>
            <Cabecalho
                titulo01='Sair'
                onLogout={reset}
                titulo2='Vagas'
                link2='/admin/gerenciandovagas'
                titulo3='Notificações'
                link3='/admin/notificacoes'
                titulo4='Gerenciamento Vagas'
                link4='/admin/gerenciamento'
            />

            <TituloMenor titulo='Confirmação de candidato' />

            <section className='formulario'>
                <div className='inputs'>
                    <label>Candidato:</label>
                    <input 
                        type="text" 
                        placeholder='Nome do candidato' 
                        value={nome} 
                        onChange={e => setNome(e.target.value)} 
                    />
                    <label>CPF:</label>
                    <input 
                        type="text" 
                        value={cpfCandidato} 
                        onChange={e => setCpfCandidato(e.target.value)} 
                    />
                    <label>Email:</label>
                    <input 
                        type="text" 
                        value={emailCandidato} 
                        onChange={e => setEmailCandidato(e.target.value)} 
                    />
                    <label>Status:</label>
                    <input 
                        type="text" 
                        placeholder='Aprovado ou Reprovado?' 
                        value={status} 
                        onChange={e => setStatus(e.target.value)} 
                    />
                    
                    <div>
                        <button onClick={baixarCurriculo}>Baixar Currículo</button>
                    </div>
                </div>
                <div className='botao'>
                    <button onClick={adicionar}>Confirmar</button>
                </div>
            </section>
            <Toaster/>
        </div>
    );
}

