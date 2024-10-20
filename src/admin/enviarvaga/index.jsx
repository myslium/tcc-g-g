import './index.scss'
import Cabecalho from '../../componentes/cabeçalho'
import TituloMenor from '../../componentes/titulomenor'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export default function EnviarVaga() {

    const [descricao, setDescricao] = useState('')
    const [emailEmpresa, setEmailEmpresa] = useState('')
    const [vaga, setVaga] = useState('')
    const [cpfCandidato, setCpfCandidato] = useState('')
    const [curriculo, setCurriculo] = useState(null)

    const navigate = useNavigate()

    async function buscarCPF() {
        const url = await axios.get(`http://localhost:5010/conferirCandidato/${cpfCandidato}`, {
            responseType: 'blob'  
        }) 
        const resp = window.URL.createObjectURL(new Blob([url.data]))
        setCurriculo(resp) 
       
    }

    async function adicionarCandidatoFinal() {

        const corpo = {
            "vaga": vaga,
            "email_empresa": emailEmpresa,
            "descricao": descricao
        }
        const url = `http://localhost:5010/candidatofinal`
        await axios.post(url, corpo)
        alert('Candidato final!')
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
            <form className='formulario'>

                <div className='inputs'>
                        
                        <label>Vaga:</label>
                        <input type="text" value={vaga} onChange={e => setVaga(e.target.value)}/>
                        <label>E-mail comercial:</label>
                        <input type="text" value={emailEmpresa} onChange={e => setEmailEmpresa(e.target.value)}/>
                        <label>Descrição:</label>
                        <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)}/>
                        
                </div>

                        <h1>Selecione os candidatos</h1>
                            <div className='pesquisar'>
                            <i id='icon' className='fa fa-search' onClick={buscarCPF}></i>
                            <input id ='pesquisa-cpf'type="text" placeholder='cpf' value={cpfCandidato} onChange={e => setCpfCandidato(e.target.value)}/>
                        </div>

                        <div className='selecionados'>
                       
                             <div className='candidatos'>
                                    <label className='curriculo-label'>
                                    {curriculo && (
                                  
                                    <a href={curriculo} download="curriculo.pdf">Baixar Curriculo</a>
                                )}
                                            <span className='curriculo'>Currículo</span>
                                        </label>
                            </div>
                       
                           
                        </div>
                    
                   
            </form>

               
            <div className='botao'>
                    <button onClick={adicionarCandidatoFinal}>Confirmar</button>
            </div>
        </div>
    )
}