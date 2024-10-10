import './index.scss'

export default function Requisitos(props){
    return(
        <div className="comp-requisitos">
            <h1 className='titopico'>{props.titulorequi}</h1>
            <ul>
                        {props.requisitos.map((topico, index) => (
                            <li className='tetopico' key={index}>{topico}</li>
                        ))}
                    </ul>    
        </div>
    )
}