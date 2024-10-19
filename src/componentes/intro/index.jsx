export default function Intro (props){

    
    return(   
    <div className="lisa-secao">
      <div className="lisa">

      </div>

      <div className="botons">
    <button className="botons"><p>Ola sou a Lisa assistente do G&G. Estou aqui para esclarecer suas dúvidas.</p></button>
    <button className="botons"><p>Veja se algumas dessas corresponde a sua: </p></button>
    </div>

    <div className="perguntas">
    <button onClick={props.cadastro}>Como cadastro minha vaga?</button>
    <button onClick={props.disponiveis}>Como vejo as vagas disponíveis?</button>
    <button onClick={props.empresa}>Como cadastro vaga na empresa?</button>
    </div>
   


  
  </div>
    )
}