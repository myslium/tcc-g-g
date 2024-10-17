import { useState } from 'react'
import Cabecalho from '../../componentes/cabeçalho'
import TituloMenor from '../../componentes/titulomenor';
import ContCard from '../../componentes/contcard';
import CardVisaoGeral from '../../componentes/cardvisao';
import CardNotas from '../../componentes/cardnotas';
import axios from 'axios'

import { useNavigate } from 'react-router-dom'; 
import './index.scss'




export default function Notificacoes(){
    const navigate = useNavigate(); 

    const [titulo,settitulo]= useState('')
    const [data,setdata]= useState('')
    const [conteudo,setconteudo] = useState('')
    const [cards,setcards] = useState([])

    





    

  async function adicionarnota(){

    const obj = {
        "titulo" : titulo,
        "corpo":conteudo,
        "data":data
    }
    const url = 'http://localhost:5010/inserirNota'
    let oi =  await axios.post(url,obj) 

}   

async function vernotas(){
    const url = 'http://localhost:5010/inserirNota'
    let oi =  await axios.get(url) 
    setcards(oi.data)

}

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


       <TituloMenor
        titulo = 'Interesses no seu serviço'
       />
    
    
    <div className="cards-interessados">

        
     <ContCard titulo = 'Cacau Show' texto = 'A Insight Recruiters precisa da sua expertise para otimizar o gerenciamento de currículos e vagas, melhorar nossas estratégias de recrutamento, e utilizar tecnologias avançadas. Seu atendimento personalizado pode ajudar a aumentar nossa eficiência e encontrar os melhores talentos.'/>


            <ContCard titulo = 'Nestle' texto = 'A Insight Recruiters precisa da sua expertise para otimizar o gerenciamento de currículos e vagas, melhorar nossas estratégias de recrutamento, e utilizar tecnologias avançadas. Seu atendimento personalizado pode ajudar a aumentar nossa eficiência e encontrar os melhores talentos.'/>

            <ContCard titulo = 'Nestle' texto = 'A Insight Recruiters precisa da sua expertise para otimizar o gerenciamento de currículos e vagas, melhorar nossas estratégias de recrutamento, e utilizar tecnologias avançadas. Seu atendimento personalizado pode ajudar a aumentar nossa eficiência e encontrar os melhores talentos.'/>
            <ContCard titulo = 'Nestle' texto = 'A Insight Recruiters precisa da sua expertise para otimizar o gerenciamento de currículos e vagas, melhorar nossas estratégias de recrutamento, e utilizar tecnologias avançadas. Seu atendimento personalizado pode ajudar a aumentar nossa eficiência e encontrar os melhores talentos.'/>
                

                
            
            
    </div>
         


            
        <TituloMenor titulo='Visão geral'/>

        <div className="visaogeral">

            <CardVisaoGeral titulo='Cacau Show' vaga='Analista' data='13/10/2024'/>

            <CardVisaoGeral titulo='Nestle' vaga ='Financeiro' data ='31/10/2024'/>
               
            <CardVisaoGeral titulo='Nestle' vaga ='Financeiro' data ='31/10/2024'/>
            <CardVisaoGeral titulo='Nestle' vaga ='Financeiro' data ='31/10/2024'/>
            <CardVisaoGeral titulo='Nestle' vaga ='Financeiro' data ='31/10/2024'/>
            <CardVisaoGeral titulo='Nestle' vaga ='Financeiro' data ='31/10/2024'/>
         </div>

         
       <TituloMenor
        titulo = 'Metas'
       />

       <div className='metas'>

         <img src="/assets/images/grafico.png" alt="" />

        <div className='resultado'>
            <h1>Feedback</h1>

            <p>
            Seu gráfico mostra que você teve um desempenho melhor em agosto em comparação a julho. O aumento de 12 para 18 vagas fechadas é um ótimo sinal. Esse aumento pode ser um reflexo de melhores técnicas de recrutamento ou um aumento na demanda. Continue a analisar o que funcionou bem e considere aplicar essas estratégias em futuros meses.
            </p>
        </div>
       </div>

       <TituloMenor titulo ='Notas fixadas'/>

       <section className='ultima-parte-notas'>

            <div className='nova-nota'>

                <div className='titulo-notas'>

                    <h1>Anote aqui...</h1>

                    <button onClick={vernotas}>Ver notas</button>
                    <button  onClick={adicionarnota} >Fixar</button>


                </div>

               
                
                <div className='inputs'>

                    <div>
                        <input type="text" placeholder='Titulo' value={titulo} onChange={e => settitulo(e.target.value)} />
                        <input type="date" value={data} onChange={e=> setdata(e.target.value)} />

                    </div>

                    <textarea placeholder='Conteúdo' value={conteudo} onChange={e=> setconteudo(e.target.value)} ></textarea>

                </div>
            </div>

            <div className='notas-adicionadas'>
            {cards.map((item,pos)=>
               <CardNotas
               titulo = {item.titulo}
               texto = {item.corpo}
               data = {item.data}
               pos = {pos}
               />


            )}

              
            </div>
       </section>
           
    </div>
       
       
    )
}