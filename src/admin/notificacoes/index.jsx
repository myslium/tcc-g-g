import { useState } from 'react'
import Cabecalho from '../../componentes/cabeçalho'
import Tituloelogo from '../../componentes/tituloelogo'
import { useNavigate } from 'react-router-dom'; 
import './index.scss'


export default function Notificacoes(){
    const navigate = useNavigate(); 

    

function reset() {
    localStorage.removeItem('token'); 
    navigate('/')
}



    return(
        <div className="pagina-interessados">
           
            <Cabecalho
                titulo1='Sair' 
                onLogout={reset} 
                titulo2='Vagas'
                link2='/admin/vagasadmin'
                titulo3='Notificações'
                link3='/admin/notificacoes'
                titulo4='Gerenciamento Vagas'
                link4='/admin/gerenciamento'
            />


        <div className="topo">
                <div className="conttopo">
                    <img className='geg' src="/assets/images/cabecalho/logo.png" alt="" />
                    <h1>INTERESSADOS NO SEU SERVIÇO</h1>
                </div>
            </div>
<div className="cards-interessados">

        
            <div className="contcard">
                <div className="textinho">
                      <h1 className='titulointeressado'>Cacau Show</h1>
                <p className='textointeressado'>A Insight Recruiters precisa da sua expertise para otimizar o gerenciamento de currículos e vagas, melhorar nossas estratégias de recrutamento, e utilizar tecnologias avançadas. Seu atendimento personalizado pode ajudar a aumentar nossa eficiência e encontrar os melhores talentos.</p>
                </div>
                <a className='vejamais' href="">VEJA MAIS</a>

                <div>
                    <button className="marcalida">
                        MARCAR COMO LIDA
                    </button>
                </div>

                </div>
          

           
            <div className="contcard">
                <div className="textinho">
                      <h1 className='titulointeressado'>Nestle</h1>
                <p className='textointeressado'>A Insight Recruiters precisa da sua expertise para otimizar o gerenciamento de currículos e vagas, melhorar nossas estratégias de recrutamento, e utilizar tecnologias avançadas. Seu atendimento personalizado pode ajudar a aumentar nossa eficiência e encontrar os melhores talentos.</p>
                </div>
              
                <a className='vejamais' href="">VEJA MAIS</a>

                <div>
                    <button className="marcalida">
                        MARCAR COMO LIDA
                    </button>
                </div>
    
            </div>

            
            </div>
         


            
        <div className="topo">
                <div className="conttopo">
                    <img className='geg' src="/assets/images/cabecalho/logo.png" alt="" />
                    <h1>VISÃO GERAL</h1>
                </div>
        </div>


        <div className="visaogeral">

               

                    <div className="card">
                        <h1>
                            CACAU SHOW
                        </h1>
                        <h2>
                            VAGAS ADM
                        </h2>
                        <h3>13/10/2024</h3>

                    </div>
                
            


                
            

                    <div className="card">
                        <h1>
                            Nestle
                        </h1>
                        <h2>
                            VAGAS ADM
                        </h2>
                        <h3>13/10/2024</h3>

        
                    </div>

               
                


            </div>
           
        </div>
       

       
       

        
       
    )
}