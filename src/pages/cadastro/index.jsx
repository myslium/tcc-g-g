import React, { useState } from 'react';
import Cabecalho from '../../componentes/cabeçalho';
import TituloMenor from '../../componentes/titulomenor';
import Footer from '../../componentes/footer';
import './index.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [emailCandidato, setEmailCandidato] = useState('');
    const [cpfCandidato, setCpfCandidato] = useState('');
    const [curriculo, setCurriculo] = useState(null);
    const { id } = useParams();

    function validar() {
        if (!nome || !emailCandidato || !cpfCandidato || !curriculo) {
            alert('Todos os campos são obrigatórios!');
            return false;
        }
       
        return true;
    }

    async function adicionar() {
        if (!validar()) return;

        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('email', emailCandidato);
        formData.append('cpf', cpfCandidato);
        formData.append('curriculo', curriculo);
        formData.append('id_vaga', id); 

        const url = `http://localhost:5010/candidatoNovo`;

        try {
            await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Candidato Confirmado!');
            setNome('');
            setEmailCandidato('');
            setCpfCandidato('');
            setCurriculo(null);
        } catch (error) {
            console.error("Erro ao adicionar candidato:", error);
            alert('Erro ao confirmar candidato.');
        }
    }

    return (
        <div className='pagina-cadastro'>
           <Cabecalho
                titulo1='Início'
                link1='/'
                titulo2='Sobre G&G'
                link2='/sobre'
                titulo3='Vagas'
                link3='/vagas'
                titulo4='Fale com consultor'
                link4='/falecomconsultor'
                link5='/bot'
                titulo5='fa-solid fa-robot'
                tituloo5='AJUDA'
                aparecer={true}  
            />

            <TituloMenor titulo='Candidatar-se' />
            <div className="centro">
                <section className='formulario'>
                    <div className='inputs'>
                        <label>Nome:</label>
                        <input
                            className='input'
                            type="text"
                            placeholder='Campo obrigatório'
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                        />

                        <label>CPF:</label>
                        <input
                            className='input'
                            type="text"
                            placeholder='Campo obrigatório'
                            value={cpfCandidato}
                            onChange={e => setCpfCandidato(e.target.value)}
                        />

                        <label>Email:</label>
                        <input
                            className='input'
                            type="text"
                            placeholder='Campo obrigatório'
                            value={emailCandidato}
                            onChange={e => setEmailCandidato(e.target.value)}
                        />

                        <label className='curriculo-label'>
                            <input
                                type="file"
                                onChange={e => setCurriculo(e.target.files[0])}
                                style={{ display: 'none' }}
                            />
                            <span className='curriculo on'>Anexar Arquivo</span>
                        </label>
                    </div>

                    <div className='botao'>
                        <button onClick={adicionar}>Confirmar</button>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}
