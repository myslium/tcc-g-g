import './index.scss'
import Cabecalho from '../../componentes/cabeçalho'
import TituloMenor from '../../componentes/titulomenor'
import { useNavigate } from 'react-router-dom'


export default function EnviarVaga() {

    const navigate = useNavigate()

    function reset() {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <div className='pagina-enviarvaga'>
            <Cabecalho
              titulo1='Sair'
              onLogout={reset}
              titulo2='Vagas'
              link2='/admin/gerenciandovagas'
              titulo3='Notificações'
              link3='/admin/notificacoes'
              titulo4='Gerenciamento Vagas'
              link4='/admin/gerenciamento'
            />

            <TituloMenor titulo='Enviar Vaga'/>

            <section className='formulario'>

                <div className='inputs'>
                    
                    <label>Empresa:</label>
                    <input type="text"/>
                    <label>E-mail comercial:</label>
                    <input type="text"/>
                    <label>Vaga:</label>
                    <input type="text" />
                    
                    <h1>Selecione os candidatos</h1>

                    <div className='selecionados'>
                       <div className='pesquisar'>
                        <i id='icon'className='fa fa-search'></i>
                        <input id = 'cpf'type="text" placeholder='cpf'/>
                       </div>
                    </div>
                
                </div>
                <div className='botao'>
                    <button>Confirmar</button>
                </div>
            </section>
        </div>
    )
}