import './index.scss'



export default function CardVisaoGeral(props) {

    return (
        <div className='comp-visao-geral'>
            <div className="card">
                        <h1>
                            {props.titulo}
                        </h1>
                        <h2>
                            {props.vaga}
                        </h2>
                        <h3>{props.data}</h3>

                    </div>
                
        </div>
    )
}