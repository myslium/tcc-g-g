
import './index.scss'
import Tituloelogo from '../../componentes/tituloelogo'
import Cabecalho from '../../componentes/cabeçalho'

export default function Vagas() {
    return (
        <div className='pagina-vagas'>
            <Cabecalho/>
            <Tituloelogo titulo = 'VAGAS'/>

            <div className="botoes">

            <a href="">Filtros</a>
            <a href="">Cargos</a>
            <a href="">Local</a>
            </div>

           
        </div>
    )
}