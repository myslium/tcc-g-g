import './index.scss'
import { useState } from 'react'
import Intro from '../../componentes/intro'
import { useNavigate } from 'react-router-dom'
import Cabecalho from '../../componentes/cabeçalho'

export default function Robo(){
  const [resposta,setresposta] = useState('')
  const navigate = useNavigate()
  let oi = true

  
  function cadastro(){
    setTimeout(() => {
      let ola = ('Basta ir na opção vagas acima e selecionar a vaga desejada')

      setresposta(ola)
      
    },
  1*1000);
    

  }

  function disponiveis(){
    setTimeout(() => {
      let ola = ('Vá no link acima no site "vagas" acima e ter acesso a pagina')
      setresposta(ola)
      
    },
  1*1000);
    
  }
  function empresa(){
    setTimeout(() => {
      let ola = (' ir na opção "Acompanhe o processo"')
      setresposta(ola)
      
    },
  1*1000);
    
  }

  function sim(){
    oi = true
    setTimeout(() => {
      setresposta(<Intro
        cadastro = {cadastro}
        disponiveis = {disponiveis}
        empresa = {empresa}
      
      />)
      
      
    },
  1*1000);
    

   

  }
  function nao(){
    
    setTimeout(() => {
      let ola= ('Obrigada por confiar em nossos serviços, até a próxima!!')
      setresposta(ola)
      
    },
  1*1000);
    
    oi = false
    navigate('/')

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
            titulo4 = 'Acompanhe o processo'
            link4 = '/falecomconsultor'
            link5 = '/bot'
            titulo5 = 'ROBOZINHO'

            />

            <div className="cont-robo">

           


        <Intro
        cadastro = {cadastro}
        disponiveis = {disponiveis}
        empresa = {empresa}
        />

        

        <div className='resposta'>
          <button className='resp'><p>{resposta}</p></button>
        </div>

        <div className="msg">
          <button className='botaopergunta'>Mais uma dúvida?</button>
          <div className="botaoresposta">
          <button onClick={sim}>sim</button>
          <button on onClick={nao}>não</button>
</div>
        </div>
        <div className='resposta'>
      <button className='resp'><p>{resposta}</p></button>

       
        </div>
      

 </div>
   
    </div>

  )

}
 
}