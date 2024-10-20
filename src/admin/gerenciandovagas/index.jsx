import './index.scss';
import Cabecalho from '../../componentes/cabeçalho';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import TituloMenor from '../../componentes/titulomenor';

export default function VagasAdmin() {
    const [vagas, setVagas] = useState([]);
    const [candidatos, setCandidatos] = useState([]);
    const navigate = useNavigate();

    function reset() {
        localStorage.removeItem('token');
        navigate('/');
    }

    async function vagasCandidatos() {
        const url = `http://localhost:5010/vagas`;
        const resp = await axios.get(url);

        
        const vagasComStatus = resp.data.map(vaga => {
            const partesData = vaga.data_vencimento.split('T')[0];
            const dataVencimento = new Date(partesData);
            const status = dataVencimento < new Date() ? "Fechada" : "Em andamento";
            return { ...vaga, status };
        });

        setVagas(vagasComStatus);
    }

    async function buscarCandidatos() {
        const url = `http://localhost:5010/candidatoNovo`;
        const resp = await axios.get(url);
        setCandidatos(resp.data);
    }

    useEffect(() => {
        vagasCandidatos();
        buscarCandidatos();
    }, []);

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

            <TituloMenor titulo='Gerenciamento de vagas' />

            <section className='filtros'>
                <button>Data vencimento</button>
                <button><i className="fa-solid fa-briefcase"></i>&nbsp;&nbsp;Cargos</button>
                <button><i className="fa-solid fa-location-dot"></i>&nbsp;&nbsp;Cidade, estado ou região</button>
            </section>

            {vagas.map(item => {
      
                const candidatoVaga = candidatos.filter(c => c.id_vaga === item.id);
                
                return (
                    <section className='vagas' key={item.id}>
                        <div className='titulo'>
                            <h1>{item.cargo}</h1>
                            <h1>{(new Date(item.data_vencimento).toLocaleDateString())}</h1>
                        </div>
                        
                        <div className='curriculos'>
                            {candidatoVaga.length > 0 ? (
                                candidatoVaga.map(item2 => (
                                    <Link to={`/admin/confirmacao/${item2.id}`} key={item2.id}>
                                        <button>Ver currículo</button>
                                    </Link>
                                ))
                            ) : (
                                <p>Sem currículos disponíveis</p>
                            )}
                        </div>
                        
                        <div className='tempo'>
                            <h2>{item.status}</h2>
                        </div>
                    </section>
                );
            })}

            <div className='botaoadicionar'>
                <Link to='/admin/enviarvaga'>
                    <button>Adicionar</button>
                </Link>
            </div>
        </div>
    );
}
