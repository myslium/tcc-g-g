import './index.scss';
import Cabecalho from '../../componentes/cabeçalho';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import TituloMenor from '../../componentes/titulomenor';

export default function VagasAdmin() {
    const [vagas, setVagas] = useState([]);
    const [candidatos, setCandidatos] = useState([]);
    const [pesquisar, setPesquisar] = useState('');
    const navigate = useNavigate();

    function reset() {
        localStorage.removeItem('token');
        navigate('/');
    }

    function validarData(data) {
        const regexData = /^\d{4}-\d{2}-\d{2}$/;
        return regexData.test(data);
    }

    async function buscarVagasPorData() {
        if (!validarData(pesquisar)) {
            alert('Por favor, insira uma data válida no formato Ano-Mês-Dia');
            return;
        }

        try {
            const response = await axios.get(`http://localhost:5010/vagas/data/${pesquisar}`);
            setVagas(response.data);
        } catch (error) {
            console.error("Erro ao buscar vagas filtradas:", error);
            alert('Erro ao buscar vagas por data. Por favor, tente novamente mais tarde.');
        }
    }

    function aoMudarTermoDeBusca(event) {
        setPesquisar(event.target.value);
    }

    async function vagasCandidatos() {
        const url = `http://localhost:5010/vagasa`;
        try {
            const resp = await axios.get(url);
            const vagasComStatus = resp.data.map(vaga => {
                const partesData = vaga.data_vencimento.split('T')[0];
                const dataVencimento = new Date(partesData);
                const diasRestantes = Math.ceil((dataVencimento - new Date()) / (1000 * 60 * 60 * 24));
                const totalRestantes = vaga.qtd_vagas - vaga.total_aprovados;
                const status = dataVencimento < new Date() ? "Fechada" : totalRestantes > 0 ? `${diasRestantes} dias restantes` : "Fechada";
                const vagases = `${totalRestantes} vagas restantes`;
                return { ...vaga, status, diasRestantes, vagases, totalRestantes };
            });
    
          
            const vagasAbertas = vagasComStatus.filter(vaga => vaga.totalRestantes > 0 && vaga.status !== "Fechada");
            setVagas(vagasAbertas);
        } catch (error) {
            console.error("Erro ao buscar vagas e candidatos:", error);
            alert('Erro ao carregar vagas. Por favor, tente novamente mais tarde.');
        }
    }
    

    async function buscarCandidatos() {
        const url = `http://localhost:5010/candidatoNovo`;
        try {
            const resp = await axios.get(url);
            setCandidatos(resp.data);
        } catch (error) {
            console.error("Erro ao buscar candidatos:", error);
            alert('Erro ao carregar candidatos. Por favor, tente novamente mais tarde.');
        }
    }

    useEffect(() => {
        vagasCandidatos();
        buscarCandidatos();
    }, []);

    return (
        <div className='pagina-vagasadmin'>
            <Cabecalho
                titulo01='Sair'
                onLogout={reset}
                titulo2='Vagas'
                link2='/admin/gerenciandovagas'
                titulo3='Notificações'
                link3='/admin/notificacoes'
                titulo4='Gerenciamento Vagas'
                link4='/admin/gerenciamento'
            />

            <TituloMenor titulo='Gerenciamento de vagas' />

            <div className="botooes1">
                <div className="input-container">
                    <i className="fa-solid fa-magnifying-glass oi"></i>
                    <input
                        className='botaobb'
                        type="text"
                        placeholder="Buscar vagas por data"
                        value={pesquisar}
                        onChange={aoMudarTermoDeBusca}
                    />
                    <button className='on' onClick={buscarVagasPorData}>Buscar</button>
                </div>

                {vagas.map(item => {
                    const candidatoVaga = candidatos.filter(c => c.id_vaga === item.id && c.status  !== 'Aprovado' && c.status  !== 'Reprovado');

                    return (
                        <section className='vagas' key={item.id}>
                            <div className='titulo'>
                                <h1>{item.cargo}</h1>
                                <h1>{(new Date(item.data_vencimento).toLocaleDateString())}</h1>
                            </div>

                            <div className='curriculos'>
                                {candidatoVaga.length > 0  ? (
                                    candidatoVaga.map(item2 => (
                                        <Link to={`/admin/confirmacao/${item2.id}?id_vaga=${item.id}`} key={item2.id}>
                                        <button>Ver currículo</button>
                                    </Link>
                                    
                                    ))
                                ) : (
                                    <p>Sem currículos disponíveis</p>
                                )}
                            </div>

                            <div className='tempo'>
                                <h2>{item.status}</h2>
                                <h2>{item.vagases}</h2>
                            </div>
                        </section>
                    );
                })}

                <Link to='/admin/enviarvaga'>
                    <button>Adicionar</button>
                </Link>
                
            </div>
        </div>
    );
}
