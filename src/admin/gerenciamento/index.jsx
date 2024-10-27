import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Cabecalho from '../../componentes/cabeçalho';
import Tituloelogo from '../../componentes/tituloelogo';
import './index.scss';
import { useNavigate, useParams } from 'react-router-dom';

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
    const [error, setError] = useState(''); 

    const carregarVaga = useCallback(async () => {
        try {
            const response = await axios.get(`http://localhost:5010/vagas/${vagaId}`);
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
            setError(''); 
        } catch (error) {
            setError("Erro ao carregar vaga. Por favor, tente novamente.");
            console.error("Erro ao carregar vaga:", error);
        }
    }, [vagaId]);

    useEffect(() => {
        if (vagaId) {
            carregarVaga();
        }
    }, [vagaId, carregarVaga]);

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

        try {
            await axios.post('http://localhost:5010/vagas', paramCorpo);
            alert('Vaga adicionada com sucesso!');
            resetarCampos();
            setError(''); 
        } catch (error) {
            setError("Erro ao adicionar vaga. Por favor, verifique os dados e tente novamente.");
            console.error("Erro ao adicionar vaga:", error);
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

        try {
            await axios.put(`http://localhost:5010/vagas/${vagaId}`, paramCorpo);
            alert('Vaga editada com sucesso!');
            setError('');
        } catch (error) {
            setError("Erro ao editar vaga. Por favor, tente novamente.");
            console.error("Erro ao editar vaga:", error);
        }
    }

    async function deletarVaga() {
        try {
            await axios.delete(`http://localhost:5010/vagas/${vagaId}`);
            alert('Vaga deletada com sucesso!');
            resetarCampos();
            setError('');
        } catch (error) {
            setError("Erro ao deletar vaga. Por favor, tente novamente.");
            console.error("Erro ao deletar vaga:", error);
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

            <Tituloelogo titulo='Novas vagas' />

            {error && <div className="erro-mensagem">{error}</div>} 

            <section className='terceira-parte'>
                <h1>Empresa:</h1>

         

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
            </section>
        </div>
    );
}
