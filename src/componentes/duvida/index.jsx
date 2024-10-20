import './index.scss'

export default function Duvida (props){


    return(
        <div className="duvida">
        <button className='botaopergunta'>Mais alguma dúvida?</button>
        <div className="botaoresposta">
        <button onClick={props.sim}>Sim</button>
        <button onClick={props.nao}>Não</button>
        </div>
        </div>

    )
}