import './index.scss'


export default function TituloMenor(props) {

    return (
        <div className='comp-titulo'>
             <div className='topo'>
                <div>
                    <img src="/assets/images/cabecalho/logo.png" alt="" />
                    <h1>{props.titulo}</h1>
                </div>
             </div>
        </div>
    )
}