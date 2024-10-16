import './index.scss'


export default function CardNotas(props) {

    return (
        <div className='comp-cardnotas'>
            
            <div className='card-nota'>
                   
                    <div className='titulo'>
                        <img src="/assets/images/notaspincel.png" alt="" />
                        <h1>{props.titulo}</h1>
                        <i id='check' className='fa fa-check icon'></i>

                        
                    </div>
                        <p>{props.texto}</p>

                        <div className='icones'>
                            <i id='icon' className='fa fa-trash'></i>
                            <i id='icon' className='fa fa-pencil'></i>

                            <h3>{props.data}</h3>
                        </div>
                </div>

        </div>
    )
}