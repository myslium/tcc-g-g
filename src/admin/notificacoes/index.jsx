import { useState, useEffect } from 'react'
import Cabecalho from '../../componentes/cabeçalho'
import TituloMenor from '../../componentes/titulomenor';
import ContCard from '../../componentes/contcard';
import CarrosselVagas from '../../componentes/cardvisao';
import BarChartComponent from '../../componentes/grafico';
import axios from 'axios'

import { useNavigate } from 'react-router-dom'; 
import './index.scss'


export default function Notificacoes(){
    const navigate = useNavigate(); 

    const [titulo, settitulo] = useState('');
    const [data, setdata] = useState('');
    const [conteudo, setconteudo] = useState('');
    const [cards, setcards] = useState([]);
    const [alterando, setAlterando] = useState(-1);

    async function vernotas() {
        const url = 'http://localhost:5010/inserirNota';
        let resp = await axios.get(url);
        setcards(resp.data);
        
    }

    useEffect(() => {
        vernotas();
    }, []);

    
  async function adicionarnota(){

    if(titulo ==='' && data === '' && conteudo === '') {
        alert('Preencha todos os campos!')
    }
    else {

        const obj = {
            "titulo": titulo,
            "corpo":conteudo,
            "data":data
        }

        if (alterando === -1 ) {
           
            const url = 'http://localhost:5010/inserirNota'
            await axios.post(url,obj) 

            settitulo('')
            setconteudo('')
            setdata('')


        }

        else {
            
            const url = `http://localhost:5010/inserirNota/${alterando}`
            await axios.put(url, obj )
            alert('Nota alterada!')
            settitulo('')
            setconteudo('')
            setdata('')

            setAlterando(-1)

            await vernotas()
        }
        
    }

  

}   



function reset() {
    localStorage.removeItem('token'); 
    navigate('/')
}

async function excluir(id) {
    const url = `http://localhost:5010/inserirNota/${id}`
    await axios.delete(url)

    await vernotas()
    
}

async function alterar(pos, id) {
    settitulo(cards[pos].titulo)
    setconteudo(cards[pos].corpo)
    setdata(new Date(cards[pos].data).toLocaleDateString())
    setAlterando(id)
}

    return(
        <div className="pagina-interessados">
           
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

         
         
         <CarrosselVagas/>
         </div>

         
       <TituloMenor
        titulo = 'Metas'
       />

       <div className='metas'>

        <BarChartComponent/>
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

                    
                    <button onClick={adicionarnota} >Fixar</button>


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
              
              <div key={pos} className='card-nota'>
                   
              <div className='titulo'>
                  <img src="/assets/images/notaspincel.png" alt="" />
                  <h1>{item.titulo}</h1>
                  <i id='check' className='fa fa-check icon'></i>

                  
              </div>
                  <p>{item.corpo}</p>

                  <div className='icones'>
                    <button onClick={() => excluir(item.id)}><i id='icon' className='fa fa-trash'></i></button>
                    <button onClick={() => alterar(pos,item.id)}><i id='icon' className='fa fa-pencil'></i></button>
                      

                      <h3>{(new Date(item.data_publicacao).toLocaleDateString())}</h3>
                  </div>
               </div>


            )}

              
            </div>
       </section>
           
    </div>
       
       
    )
}