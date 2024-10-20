import './index.scss'

export default function Intro (props){

    
    return(   
    <div className="lisa-secao">
     
     
      <div className="botons">
         <div className="lisa">
        <img src="/assets/images/consultor/lisinha.png" alt="" />
        ' </div>
        <div className="lalo">
    <button className='butao' ><p>Ola sou a Lisa assistente do G&G. Estou aqui para esclarecer suas dúvidas.</p></button>
    <button  className='butao'><p>Veja se algumas dessas corresponde a sua: </p></button>
    </div></div>
    <div className="perguntas">
    <button className='lala' onClick={props.cadastro}><p>Como cadastro minha vaga?</p></button>
    <button className='lala' onClick={props.disponiveis}><p>Como vejo as vagas disponíveis?</p></button>
    <button className='lala' onClick={props.empresa}><p>Como cadastro vaga na empresa?</p></button>
    </div>
   


  
  </div>
    )
}