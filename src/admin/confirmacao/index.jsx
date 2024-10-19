import Cabecalho from '../../componentes/cabeçalho'
import TituloMenor from '../../componentes/titulomenor';
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

            <TituloMenor titulo='Confirmação de candidato'/>

            <section className='formulario'>
                <div className='inputs'>
                    <label>Candidato:</label>
                    <input type="text" />
                    <label>CPF:</label>
                    <input type="text" />
                    <label>Email:</label>
                    <input type="text" />
                    <label>Status:</label>
                    <input type="text" />

                    <div>
                         <button>Currículo</button>
                    </div>
                   
                </div>
            </section>
            <div className='botao'>
                <button>Confirmar</button>
            </div>
        </div>
    )
}