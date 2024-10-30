import './index.scss'
import { useState } from 'react'
import Intro from '../../componentes/intro'
import { useNavigate } from 'react-router-dom'
import Cabecalho from '../../componentes/cabeçalho'
import Duvida from '../../componentes/duvida'
import TituloMenor from '../../componentes/titulomenor'
import axios from 'axios'

export default function Robo(){
  const [resposta,setresposta] = useState('')
  const [respondendo,setrespondendo] = useState('')
  
  const navigate = useNavigate()
  let oi = true

  
  function cadastro(){
    setTimeout(() => {
      let ola = ('Para se cadastrar na vaga desejada basta apenas ir no link do Cabeçalho chamado "VAGAS" ele te direcionará a uma página com as vagas disponiveis em nossa plataforma, ao clicar na desejada tem a opção de se cadastrar e ali você será direcionado para um formulario')
      setresposta(ola)
    },
    1*1000);
    setTimeout(() => {
    setrespondendo(
      <Duvida
      sim = {sim}
      nao = {nao}
      />
    )

    
  },
  1.5*1000);

  }

  function disponiveis(){
    setresposta('')
    setrespondendo('')

    setTimeout(() => {
      let ola = (`Em nossa plataforma para ter acesso as vagas disponíveis basta ir no link "VAGAS" e lá estará disponível todas as vagas disponiveis ou terá enderessado o status dela como aberta, fechada, etc.`)
      setresposta(ola)
    },
  1*1000);

  
  setTimeout(() => {
    setrespondendo(
      <Duvida
      sim = {sim}
      nao = {nao}
      />
    )

    
  },
1.5*1000);

  



    
  }
  function empresa(){
    setTimeout(() => {
      let ola = ('Para uma empresa cadastrar uma vaga ou ter interesse em nossos serviços basta ir em "FALE COM O CONSULTOR"  lá você preencherá um formulário para preencher detalhadamente a vaga' 

      )
      setresposta(ola)

      
    },
  1*1000);


  setTimeout(() => {
    setrespondendo(
      <Duvida
      sim = {sim}
      nao = {nao}
      />
    )

    
  },
1.5*1000);

  }

  function sim(){
    oi = true
    setTimeout(() => {
      setrespondendo(

        <Intro
        mensagem = 'Aqui estão as perguntas:'
        cadastro = {cadastro}
        disponiveis = {disponiveis}
        empresa = {empresa}
        cargo = {cargo}
        cpf = {cpf}

        />
      )
      
      
    },
  1.5*1000);
    

   

  }
  function nao(){
    
    setTimeout(() => {
    alert('Em caso de outra dúvida não esclarecida, fale conosco pelo nosso Email, obrigada!!')
      
    },
  0.5*1000);
    
    oi = false
    navigate('/')

  }

  function cargo(){
    setTimeout(() => {
      let ola = ('Em nossa página "VAGAS" lá nós temos vagas com acesso filtrado, ou seja, você pode preencher de acordo com suas preferências e as melhores vagas surgirão para você! ' 

      )
      setresposta(ola)

      
    },
  1*1000);


  setTimeout(() => {
    setrespondendo(
      <Duvida
      sim = {sim}
      nao = {nao}
      />
    )

    
  },
1.5*1000);

  }


 async function cpf(){
  const url = `http://localhost:5010/candidatoCPF/:cpf`
    setTimeout(() => {
      let ola = ''
      setresposta(ola)

      
    },
  1*1000);


  setTimeout(() => {
    setrespondendo(
      <Duvida
      sim = {sim}
      nao = {nao}
      />
    )

    
  },
1.5*1000);

  

  }
  

  
  
  
while (oi === true){
  return(
    <div className="robo-secao">
            <Cabecalho
                titulo1 = 'Início'
                link1='/'
                titulo2 = 'Sobre G&G'
                link2 = '/sobre'
                titulo3 = 'Vagas'
                link3 = '/vagas'
                titulo4 = 'Fale com consultor'
                link4='/falecomconsultor'
                link5 = '/bot'
                titulo5 = 'fa-solid fa-robot'
                tituloo5= 'AJUDA'
                aparecer={true}  
            />
            <TituloMenor titulo = 'Lisa assistente'/>

        <div className="cont-robo">

        <Intro
        mensagem = 'Ola sou a Lisa assistente do G&G. Estou aqui para esclarecer suas dúvidas.As dúvidas abaixo são as mais frequentes pelo nosso público, caso nenhuma delas seja a sua, tudo certo! Fale conosco através do nosso Email e faremos o possível para esclarecer.'
        cadastro = {cadastro}
        disponiveis = {disponiveis}
        empresa = {empresa}
        cargo = {cargo}
        />

        <div className='resposta'>
          <div><img className="lisaimg" src="/assets/images/consultor/lisinha.png" alt="" /></div>
          
          <div className="resppergunta">
          <button className='respbotao' ><p className='resp'>{resposta}</p></button>
          <p className='respondendo'> {respondendo}</p>
        </div>
        </div>

       
        </div>
        
      

 </div>
   

  )

}
 
}