import Cabecalho from '../../componentes/cabeçalho'
import TituloMenor from '../../componentes/titulomenor';
import './index.scss'
import { useNavigate} from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';



export default function Cadastro() {
    const [nome, setNome] = useState('')
    const [emailCandidato, setEmailCandidato] = useState('')
    const [cpfCandidato, setCpfCandidato] = useState('')
    const navigate = useNavigate()




    async function adicionar() {

        const confirmarCandidato = {
            "nome": nome,
            "email": emailCandidato,
            "cpf": cpfCandidato

        }

        const url = `http://localhost:5010/candidatoNovo`
        await axios.post(url, confirmarCandidato)
        alert('Candidato Confirmado!')
    }


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
             link2='/admin/gerenciandovagas'
             titulo3='Notificações'
             link3='/admin/notificacoes'
             titulo4='Gerenciamento Vagas'
             link4='/admin/gerenciamento'
            />

            <TituloMenor titulo='Candidatar-se'/>

                <section className='formulario'>

                    <div className='inputs'>
                        
                        <label>Nome:</label>
                        <input type="text"  placeholder='Campo obrigatório' value={nome} onChange={e => setNome(e.target.value)}/>
                        <label>CPF:</label>
                        <input type="text" placeholder='Campo obrigatório' value={cpfCandidato} onChange={e => setCpfCandidato(e.target.value)} />
                        <label>Email:</label>
                        <input type="text"  placeholder='Campo obrigatório' value={emailCandidato} onChange={e => setEmailCandidato(e.target.value)}/>
                       
                        <div>
                            <button>Currículo</button>
                        </div>
                       
                    
                    </div>
                    <div className='botao'>
                        <button onClick={adicionar}>Confirmar</button>
                    </div>
                </section>
          
            
           
        </div>
    )
}