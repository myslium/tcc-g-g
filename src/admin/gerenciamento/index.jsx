import { useState, useEffect } from 'react';
import axios from 'axios';
import Cabecalho from '../../componentes/cabeçalho';
import Tituloelogo from '../../componentes/tituloelogo';
import './index.scss';
import { useNavigate, useParams } from 'react-router-dom';
import TituloMenor from '../../componentes/titulomenor';

export default function Gerenciamento() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [vagaId, setVagaId] = useState(id || '');
    const [empresa, setEmpresa] = useState('');
    const [contato, setContato] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [cargo, setCargo] = useState('');
    const [tipoContrato, setTipoContrato] = useState('');
    const [local, setLocal] = useState('');
    const [modelo, setModelo] = useState('');
    const [salario, setSalario] = useState('');
    const [beneficios, setBeneficios] = useState('');
    const [requisitos, setRequisitos] = useState('');
    const [descricao, setDescricao] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [vencimento, setVencimento] = useState('');
    const [aprovado, setAprovado] = useState('não'); 
   

    async function carregarVaga(vagaId) {
        try {
            const response = await axios.get(`http://4.172.207.208:5017/vagas/${vagaId}`);
            const vaga = response.data;
    
            setEmpresa(vaga.nome_empresa);
            setContato(vaga.contato_empresa);
            setCnpj(vaga.cnpj);
            setCargo(vaga.cargo);
            setTipoContrato(vaga.tipo_contrato);
            setLocal(vaga.localizacao);
            setModelo(vaga.modelo_trabalho);
            setSalario(vaga.salario);
            setBeneficios(vaga.beneficios);
            setRequisitos(vaga.requisicoes);
            setDescricao(vaga.descricao);
            setQuantidade(vaga.qtd_vagas);
            const dataVencimentoFormatada = vaga.data_vencimento ? vaga.data_vencimento.split('T')[0] : '';
            setVencimento(dataVencimentoFormatada);
            setAprovado(vaga.aprovado);
        } catch (error) {
            console.error("Erro ao carregar vaga:", error);
            alert("Falha ao carregar os dados da vaga. Tente novamente.");
        }
    }
  
    useEffect(() => {
        if (vagaId) {
            carregarVaga(vagaId);
        }
    }, [vagaId]);
    

    function reset() {
        localStorage.removeItem('token');
        navigate('/');
    }

    async function adicionarVaga() {
        const paramCorpo = {
            nome_empresa: empresa,
            contato_empresa: contato,
            cnpj,
            cargo,
            tipo_contrato: tipoContrato,
            localizacao: local,
            modelo_trabalho: modelo,
            salario: Number(salario),
            beneficios,
            requisicoes: requisitos,
            descricao,
            vencimento,
            quantidade,
            aprovado, 
        };

        const url = `http://4.172.207.208:5017/vagas`;
        
        try {
            await axios.post(url, paramCorpo);
            alert('Vaga adicionada com sucesso!');
            resetarCampos();
        } catch (error) {
            console.error("Erro ao adicionar vaga:", error);
            alert("Não foi possível adicionar a vaga. Tente novamente.");
        }
    }

    async function editarVaga() {
        const paramCorpo = {
            nome_empresa: empresa,
            contato_empresa: contato,
            cnpj,
            cargo,
            tipo_contrato: tipoContrato,
            localizacao: local,
            modelo_trabalho: modelo,
            salario: Number(salario),
            beneficios,
            requisicoes: requisitos,
            descricao,
            vencimento,
            quantidade,
            aprovado,
        };

        const url = `http://4.172.207.208:5017/vagas/${vagaId}`;
        
        try {
            await axios.put(url, paramCorpo);
            alert('Vaga editada com sucesso!');
            resetarCampos();
        } catch (error) {
            console.error("Erro ao editar vaga:", error);
            alert("Não foi possível editar a vaga. Tente novamente.");
        }
    }

    async function deletarVaga() {
        const url = `http://4.172.207.208:5017/vagas/del/${vagaId}`;
        
        try {
            await axios.delete(url);
            resetarCampos();
            alert('Vaga deletada com sucesso!');
        } catch (error) {
            console.error('Erro ao deletar a vaga:', error.response ? error.response.data : error.message);
            alert("Você não pode deletar vagas que os candidatos se candidataram.");
        }
    }

    function resetarCampos() {
        setVagaId('');
        setEmpresa('');
        setContato('');
        setCnpj('');
        setCargo('');
        setTipoContrato('');
        setLocal('');
        setModelo('');
        setSalario('');
        setBeneficios('');
        setRequisitos('');
        setDescricao('');
        setQuantidade('');
        setVencimento('');
        setAprovado('não');
    }

    return (
        <div className="pagina-confirmados">
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

            <TituloMenor  titulo='Novas vagas' />

            <section className='terceira-parte'>
                <h1>Empresa:</h1>

                <div className='vagas'>
                    <div className='div-grande'>
                        <label>Empresa:</label>
                        <input className='grande' type="text" value={empresa} onChange={e => setEmpresa(e.target.value)} />
                    </div>

                    <div className='div-grande'>
                        <label>E-mail comercial:</label>
                        <input className='grande' type="text" value={contato} onChange={e => setContato(e.target.value)} />
                    </div>

                    <div className='duo'>
                        <div>
                            <label>Vaga:</label>
                            <input className='pequeno' type="text" value={cargo} onChange={e => setCargo(e.target.value)} />
                        </div>

                        <div>
                            <label>CNPJ:</label>
                            <input className='pequeno' placeholder=' XX.XXX.XXX/XXXX-XX' type="text" value={cnpj} onChange={e => setCnpj(e.target.value)} />
                        </div>
                    </div>

                    <div className='duo'>
                        <div>
                            <label>Localização:</label>
                            <input className='pequeno' type="text" value={local} onChange={e => setLocal(e.target.value)} />
                        </div>

                        <div>
                            <label>Tipo de contrato:</label>
                            <input className='pequeno' type="text" value={tipoContrato} onChange={e => setTipoContrato(e.target.value)} />
                        </div>
                    </div>

                    <div className='duo'>
                        <div>
                            <label>Salário:</label>
                            <input className='pequeno' type="text" value={salario} onChange={e => setSalario(e.target.value)} />
                        </div>

                        <div>
                            <label>Modelo de atuação:</label>
                            <input className='pequeno' type="text" value={modelo} onChange={e => setModelo(e.target.value)} />
                        </div>
                    </div>

                    <div className='div-grande'>
                        <label>Requisitos:</label>
                        <textarea className='grandee' value={requisitos} onChange={e => setRequisitos(e.target.value)} />
                    </div>

                    <div className='div-grande'>
                        <label>Benefícios:</label>
                        <textarea className='grandee' value={beneficios} onChange={e => setBeneficios(e.target.value)} />
                    </div>

                    <div className='div-grande'>
                        <label>Por que quer trabalhar com a G&G?</label>
                        <textarea value={descricao} onChange={e => setDescricao(e.target.value)} />
                    </div>

                    <div className='duo'>
                        <div>
                            <label>Prazo:</label>
                            <input className='pequeno' type="date" value={vencimento} onChange={e => setVencimento(e.target.value)} />
                        </div>

                        <div>
                            <label>Quantidade de vagas:</label>
                            <input className='pequeno' type="text" value={quantidade} onChange={e => setQuantidade(e.target.value)} />
                        </div>
                    </div>

                    <div className='duo'>
                        <div>
                            <label>Aprovado:</label>
                            <select className='aprovado' value={aprovado} onChange={e => setAprovado(e.target.value)}>
                                <option value="sim">Sim</option>
                                <option value="não">Não</option>
                            </select>
                        </div>
                    </div>

                    <div className='botao'>
                        {vagaId ? (
                            <>
                                <button onClick={deletarVaga}>
                                    <i className="fa fa-trash" aria-hidden="true"></i>&nbsp;Deletar
                                </button>
                                <button onClick={editarVaga}>
                                    <i className="fa fa-edit" aria-hidden="true"></i>&nbsp;Editar
                                </button>
                            </>
                        ) : (
                            <button onClick={adicionarVaga}>
                                <i className="fa fa-heart" aria-hidden="true"></i>&nbsp;Adicionar
                            </button>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
