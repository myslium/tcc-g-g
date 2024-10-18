import Cabecalho from '../../componentes/cabeçalho'
import './index.scss'
import { useNavigate } from 'react-router-dom';



export default function ConfirmarCandidato() {

    const navigate = useNavigate()

    function reset() {
        localStorage.removeItem('token'); 
        navigate('/')
    }

    return (
        <div className='pagina-confirmar'>
            <Cabecalho
             titulo1='Sair' 
             onLogout={reset} 
             titulo2='Vagas'
             link2='/admin/vagasAdmin'
             titulo3='Notificações'
             link3='/admin/notificacoes'
             titulo4='Gerenciamento Vagas'
             link4='/admin/gerenciamento'
            />
        </div>
    )
}