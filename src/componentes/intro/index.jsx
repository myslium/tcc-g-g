import './index.scss';

export default function Intro(props) {
  return (
    <div className="lisa-secao">
      <div className="botons">
        <div>
          <img className='lisa' src="/assets/images/consultor/lisinha.jpg" alt="" />
        </div>

        <div className="lisamsg">
          <button className='butao'><p>{props.mensagem}</p></button>
          <button className='butao'><p>Veja se algumas dessas corresponde a sua: </p></button>
        </div>
      </div>
      <div className="perguntas">
        <div>
          <img className='user' src="/assets/images/consultor/usergg.png" alt="" />
        </div>
        <div className="botoes">
          <button className='lala' onClick={props.cadastro}><p>Como cadastro minha vaga?</p></button>
          <button className='lala' onClick={props.disponiveis}><p>Como vejo as vagas disponíveis?</p></button>
          <button className='lala' onClick={props.empresa}><p>O que é necessário fazer para cadastrar vagas da minha empresa para o G&G?</p></button>
          <button className='lala' onClick={props.cargo}><p>Sou especializado em um cargo específico, como acho vagas para este cargo?</p></button>
          <button className='lala' onClick={props.mostrarCampoCpf}><p>Como sei se minha vaga foi aprovada?</p></button> 
          <a href="https://wa.me/5511986007559"><button className='outro' onClick={props.outro} ><a className='a' href="https://wa.me/5511986007559">Outro</a></button> </a>

        </div>
      </div>
    </div>
  );
}
