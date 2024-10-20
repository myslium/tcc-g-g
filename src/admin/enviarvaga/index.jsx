import './index.scss'
import Cabecalho from '../../componentes/cabeçalho'
import TituloMenor from '../../componentes/titulomenor'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


export default function EnviarVaga() {

    const [empresa, setEmpresa] = useState('')
    const [emailEmpresa, setEmailEmpresa] = useState('')
    const [vaga, setVaga] = useState('')


    const navigate = useNavigate()

    function sendEmail(e) {
        e.preventDefault()
        
        
    }

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
            <form className='formulario' onSubmit={sendEmail}>

                <div className='inputs'>
                        
                        <label>Empresa:</label>
                        <input type="text" value={empresa} onChange={e => setEmpresa(e.target.value)}/>
                        <label>E-mail comercial:</label>
                        <input type="text" value={emailEmpresa} onChange={e => setEmailEmpresa(e.target.value)}/>
                        <label>Vaga:</label>
                        <input type="text" value={vaga} onChange={e => setVaga(e.target.value)}/>
                        
                        <h1>Selecione os candidatos</h1>
                            <div className='pesquisar'>
                            <i id='icon'className='fa fa-search'></i>
                            <input id ='pesquisa-cpf'type="text" placeholder='cpf'/>
                        </div>

                        <div className='selecionados'>
                        
                        <div className='candidatos'>
                                <div className='card'>
                                    <h2>Mariana</h2>
                                    <input type="file" />
                                </div>
                                <div className='card'>
                                    <h2>Mariana</h2>
                                    <input type="file" />
                                </div>
                                <div className='card'>
                                    <h2>Mariana</h2>
                                    <input type="file" />
                                </div>
                                <div className='card'>
                                    <h2>Mariana</h2>
                                    <input type="file" />
                                </div>
                        </div>
                        </div>
                    
                    </div>

            </form>

               
            <div className='botao'>
                    <button>Confirmar</button>
            </div>
        </div>
    )
}