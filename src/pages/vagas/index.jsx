
import React from 'react';
import './index.scss';
import '@fortawesome/fontawesome-free/js/all.js';
import Cabecalho from '../../componentes/cabeçalho';
import Footer from '../../componentes/footer';
import TituloMenor from '../../componentes/titulomenor';
import { Link } from 'react-router-dom';

export default function Vagas() {
    return (
        <div className='pagina-vagas'>
            <Cabecalho
                titulo1='Início'
                link1='/'
                titulo2='Sobre G&G'
                link2='/sobre'
                titulo3='Vagas'
                link3='/vagas'
                titulo4 = 'Fale com consultor'
                link4='/falecomconsultor'
            />

            <TituloMenor titulo='Vagas' />

            <div className="botooes1">
                <div className="botooes">
                    <div className="input-container">
                        <i  className="fa-solid fa-location-dot oi"></i>
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
                    <div className="cartavaga">
                        <div className="textovaga">
                            <div className="texy">
                                <h1 className='profissaovaga'>Analista de Suporte em TI</h1>
                            <h4>Requisitos</h4>
                            <ul>
                                <li>Formação em Administração, Logística ou áreas relacionadas.</li>
                                <li>Experiência prévia em controle de estoque.</li>
                                <li>Experiência prévia em controle de estoque.</li>
                            </ul> 
                            </div>
                           

                            <div className='botoazinhos'>
                                <div className='aff'>
                                    <i className="fa-solid fa-location-dot"></i>&nbsp;São Paulo, SP
                                </div>
                                <div className='aff'>
                                    <i className="fa-solid fa-briefcase"></i>&nbsp;CLT
                                </div>
                                <div className='aff'>
                                    <i class="fa-solid fa-building"></i>&nbsp;Presencial
                                </div>
                                <div className='aff'>
                                    <i class="fa-solid fa-sack-dollar"></i>&nbsp;R$3.500,00
                                </div>
                            </div>
                        </div>

                        <div className="image">
                            <Link to ='/cadastro'className='botaovagaa'>Candidatar-se </Link>
                         
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
