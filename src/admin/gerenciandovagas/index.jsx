import { useState } from 'react';
import axios from 'axios'; // Certifique-se de importar o axios
import Cabecalho from '../../componentes/cabeçalho';
import Tituloelogo from '../../componentes/tituloelogo';
import Footer from '../../componentes/footer'; // Certifique-se de importar o Footer
import './index.scss';

import { useNavigate } from 'react-router-dom'; 



export default function Vagasadmin(){
    const navigate = useNavigate(); 

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

    function reset() {
        localStorage.removeItem('token'); 
        navigate('/')
    }




    async function novaVaga() {
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
        };

        const url = 'http://localhost:5010/vagas';
        await axios.put(url, paramCorpo);
        
       
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
    }

    return (
        <div className="pagina-confirmados">
             <Cabecalho
                titulo1='Sair' 
                onLogout={reset} 
                titulo2='Vagas'
                link2='/admin/vagasadmin'
                titulo3='Notificações'
                link3='/admin/notificacoes'
                titulo4='Gerenciamento Vagas'
                link4='/admin/gerenciamento'
            />



            <Tituloelogo titulo='' />

            <section className='terceira-parte'>
                <p>Preencha as informações abaixo com os requisitos da sua vaga</p>

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
                            <input className='pequeno' type="text" value={cnpj} onChange={e => setCnpj(e.target.value)} />
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
                        <input className='grande' type="text" value={requisitos} onChange={e => setRequisitos(e.target.value)} />
                    </div>

                    <div className='div-grande'>
                        <label>Benefícios:</label>
                        <input className='grande' type="text" value={beneficios} onChange={e => setBeneficios(e.target.value)} />
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

                    <div className='botao'>
                        <button onClick={novaVaga}>Enviar</button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
