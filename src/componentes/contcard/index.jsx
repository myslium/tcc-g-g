import './index.scss'
import { Link } from 'react-router-dom'


export default function ContCard(props) {

    return (
        <div className='comp-card-admin'>
            <div className="contcard">
               
               <div className="textinho">
                     <h1 className='titulointeressado'>{props.titulo}</h1>
               <p className='textointeressado'>{props.texto}</p>
               </div>
               
               <Link to='/admin/gerenciamento'><p>Veja Mais</p></Link>
               
                  
              

           </div>
        </div>
    )
}