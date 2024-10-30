import './index.scss'
import { useState } from 'react'

export default function Intro (props){
  
  const [cpf, setcpf] = useState('')
  const [julia, setjulia] = useState([])



  async function cpfla() {
    const url = `http://localhost:5010/candidatoCPF/${cpf}`
    let resp = await axios.get(url);
    setjulia(resp.data)

  }



    
    return(   
    <div className="lisa-secao">
     
     
      <div className="botons">

         <div>
        <img className='lisa' src="/assets/images/consultor/lisinha.png" alt="" />
        ' </div>

        <div className="lisamsg">
      <button className='butao' ><p>{props.mensagem}</p></button>
      <button  className='butao'><p>Veja se algumas dessas corresponde a sua: </p></button>
      <button>Digite seu cpf:</button>
          <input type="text" className='cpfinput' value={cpf} onChange={e => setcpf(e.target.value)} />
          <button onClick={cpfla}>enviar cpf</button>
        </div>
    </div>
    <div className="perguntas">
      <div >
      <img className='user' src="/assets/images/consultor/usergg.png" alt="" />
      </div>
      <div className="botoes">
    <button className='lala' onClick={props.cadastro}><p>Como cadastro minha vaga?</p></button> 
    <button className='lala' onClick={props.disponiveis}><p>Como vejo as vagas disponíveis?</p></button>
    <button className='lala' onClick={props.empresa}><p> Oque é necessário fazer para cadastrar vagas da minha empresa para o G&G?</p></button>
    <button className='lala' onClick={props.cargo}><p> Sou especializado em um cargo específico, como acho vagas para este cargo?</p></button>
    <button className='lala' onClick={props.cpf}><p>Como sei se minha vaga foi aprovada?</p></button>


    </div>
    </div>   


  
  </div>
    )
}