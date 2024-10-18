import React from 'react'
import './index.scss'
import '@fortawesome/fontawesome-free/js/all.js';
import Tituloelogo from '../../componentes/tituloelogo'
import Cabecalho from '../../componentes/cabeçalho'
import Footer from '../../componentes/footer';
import TituloMenor from '../../componentes/titulomenor';

export default function Vagas() {
    return (
        <div className='pagina-vagas'>

            <Cabecalho
            titulo1 = 'Início'
            link1='/'
            titulo2 = 'Sobre G&G'
            link2 = '/sobre'
            titulo3 = 'Vagas'
            link3 = '/vagas'
            titulo4 = 'Acompanhe o processo'
            link4 = '/falecomconsultor'

            />
            
            <TituloMenor titulo='Vagas'/>
             

            <div className="botooes">

            <div className='bb'>
                   
                   <a className='botaobb' href=""> <i className="fa-solid fa-location-dot"></i>&nbsp;Cidade, Estado ou Região</a>
               </div>

                <div className='bb'>
                   
                    <a className='botaobb' href=""> <i className="fa-solid fa-briefcase"></i>&nbsp;Cargos</a>
                </div>
                
                <div className='bb'>
                   
                   <a className='botaobb' href=""> <i class="fa-solid fa-building"></i>&nbsp;Regime de Trabalho</a>
               </div>

                <div className='bb'>
                   
                   <a className='botaobb' href=""> <i class="fa-solid fa-sack-dollar"></i>&nbsp;Remuneração</a>
               </div>

            </div>

            <div className="vagas">

                <div className="cartavaga">
                    <div className="textovaga">
                        <h1 className='profissaovaga'>Analista de Suporte em TI</h1>
                        <h4>Requisitos</h4>
                        <ul>
                            <li>Formação em Administração, Logística ou áreas relacionadas.</li>
                            <li>Experiência prévia em controle de estoque.</li>
                            <li>Experiência prévia em controle de estoque.</li>
                        </ul>
    
                        <div className='botoazinhos'>

                            <div className='aff'>
                                <i className="fa-solid fa-location-dot"></i>
                                &nbsp;São Paulo, SP
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
                        <a className='botaovagaa' href="">Candidatar-se</a>
                    </div>
                </div>

            </div>

            <Footer/>

        </div>
    )
}