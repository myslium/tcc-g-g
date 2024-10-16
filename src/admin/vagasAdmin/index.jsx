import './index.scss'
import Cabecalho from '../../componentes/cabeçalho'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import TituloMenor from '../../componentes/titulomenor';

export default function VagasAdmin() {
    const [vagas, setVagas] = useState([])
    const [candidato, setCandidato] =useState([])

    const navigate = useNavigate()


    function reset() {
        localStorage.removeItem('token'); 
        navigate('/')
    }

    async function vagasCandidatos() {
        const url = `http://localhost:5010/vagas`;
        const resp = await axios.get(url);

     
        setVagas(resp.data)
    }

    

   

    useEffect(() => {
        vagasCandidatos()
        
    }, [])

    return (
        <div className='pagina-vagasadmin'>
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

            <TituloMenor titulo = 'Gerenciamento de vagas'/>

            <section className='filtros'>
                <button> Data vencimento</button>
                <button><i className="fa-solid fa-briefcase"></i>&nbsp;&nbsp;Cargos</button>
                <button> <i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;Cidade, estado ou região</button>
            </section>



            {vagas.map((item, pos) =>
                <section key={pos} className='vagas'>
               
                    <div className='titulo'>
                        <h1>{item.cargo}</h1>
                        <h1>{(new Date(item.data_vencimento).toLocaleDateString())}</h1>
                    </div>
                    <div className='curriculos'>
                        
                        <Link to='/admin/confirmacao'> <button>Ver curriculo</button></Link>
                    
                    </div>
                    <div className='tempo'>
                        <h2>Fechada</h2>
                    </div>

                </section>
            )}
        </div>
    )
}