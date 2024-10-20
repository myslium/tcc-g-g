import React, { useEffect, useState } from 'react';
import './index.scss';
import '@fortawesome/fontawesome-free/js/all.js';
import Cabecalho from '../../componentes/cabeçalho';
import Footer from '../../componentes/footer';
import TituloMenor from '../../componentes/titulomenor';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Vagas() {
    const [vagas, setVagas] = useState([]);

    useEffect(() => {
        async function fetchVagas() {
            try {
                const response = await axios.get('http://localhost:5010/vagas'); // Ajuste a URL da API conforme necessário
                setVagas(response.data);
            } catch (error) {
                console.error("Erro ao buscar vagas:", error);
            }
        }

        fetchVagas();
    }, []);

    return (
        <div className='pagina-vagas'>
            <Cabecalho
                titulo1='Início'
                link1='/'
                titulo2='Sobre G&G'
                link2='/sobre'
                titulo3='Vagas'
                link3='/vagas'
                titulo4='Fale com consultor'
                link4='/falecomconsultor'
            />

            <TituloMenor titulo='Vagas' />

            <div className="botooes1">
                <div className="botooes">
                    <div className="input-container">
                        <i className="fa-solid fa-location-dot oi"></i>
                        <input className='botaobb' type="text" placeholder="Cidade, Estado ou Região" />
                    </div>

                    <div className="input-container">
                        <i className="fa-solid fa-briefcase oi"></i>
                        <input className='botaobb' type="text" placeholder="Cargos" />
                    </div>

                    <div className="input-container">
                        <i className="fa-solid fa-building oi"></i>
                        <input className='botaobb' type="text" placeholder="Regime de Trabalho" />
                    </div>

                    <div className="input-container">
                        <i className="fa-solid fa-sack-dollar oi"></i>
                        <input className='botaobb' type="text" placeholder="Remuneração" />
                    </div>
                </div>

                <div className="vagas">
                    {vagas.map(vaga => (
                        <div key={vaga.id} className="cartavaga">
                            <div className="textovaga">
                                <div className="texy">
                                    <h1 className='profissaovaga'>{vaga.cargo}</h1>
                                    <h4>Requisitos</h4>
                                    <ul>
                                        {vaga.requisicoes.split(',').map((requisito, index) => (
                                            <li key={index}>{requisito}</li>
                                        ))}
                                    </ul> 
                                </div>

                                <div className='botoazinhos'>
                                    <div className='aff'>
                                        <i className="fa-solid fa-location-dot"></i>&nbsp;{vaga.localizacao}
                                    </div>
                                    <div className='aff'>
                                        <i className="fa-solid fa-briefcase"></i>&nbsp;{vaga.tipo_contrato}
                                    </div>
                                    <div className='aff'>
                                        <i className="fa-solid fa-building"></i>&nbsp;{vaga.modelo_trabalho}
                                    </div>
                                    <div className='aff'>
                                        <i className="fa-solid fa-sack-dollar"></i>&nbsp;R${vaga.salario.toFixed(2)}
                                    </div>
                                </div>
                            </div>

                            <div className="image">
                                <Link to={`/cadastro/${vaga.id}`} className='botaovagaa'>Candidatar-se</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
