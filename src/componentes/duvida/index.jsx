import './index.scss'

export default function Duvida (props){


    return(
        <div className="duvida">
        <button className='botaopergunta'><p className='pergunta'>Mais alguma dúvida?</p></button>
        <div className="botaoresposta">
        <button className='simnao' onClick={props.sim}>Sim</button>
        <button className='simnao' onClick={props.nao}>Não</button>
        </div>
        </div>

    )
}