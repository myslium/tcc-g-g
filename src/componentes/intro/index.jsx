import './index.scss'

export default function Intro (props){

    
    return(   
    <div className="lisa-secao">
     
     
      <div className="botons">

         <div className="lisa">
        <img src="/assets/images/consultor/lisinha.png" alt="" />
        ' </div>

        <div className="lisamsg">
    <button className='butao' ><p>{props.mensagem}</p></button>
    <button  className='butao'><p>Veja se algumas dessas corresponde a sua: </p></button>
    </div></div>
    <div className="perguntas">
      <div className="user">
      <img src="/assets/images/consultor/usergg.png" alt="" />
      </div>
      <div className="botoes">
    <button className='lala' onClick={props.cadastro}><p>Como cadastro minha vaga?</p></button> 
    <button className='lala' onClick={props.disponiveis}><p>Como vejo as vagas disponíveis?</p></button>
    <button className='lala' onClick={props.empresa}><p> Oque é necessário fazer para cadastrar vagas da minha empresa para o G&G?</p></button>
    <button className='lala' onClick={props.cargo}><p> Sou especializado em um cargo específico, como acho vagas para este cargo?</p></button>

    </div>
    </div>   


  
  </div>
    )
}