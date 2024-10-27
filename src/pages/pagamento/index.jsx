import { useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Tituloelogo from '../../componentes/tituloelogo'


export default function Pagamento() {

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
    const [quantidade, setQuantidade,] = useState('');
    const [vencimento, setVencimento] = useState('');

    async function novaVaga() {
        const paramCorpo = {
            "nome_empresa": empresa,
            "contato_empresa": contato,
            "cnpj": cnpj,
            "cargo": cargo,
            "tipo_contrato": tipoContrato,
            "localizacao": local,
            "modelo_trabalho": modelo,
            "salario": Number(salario),
            "beneficios": beneficios,
            "requisicoes": requisitos,
            "descricao": descricao,
            "vencimento": vencimento,
            "quantidade": quantidade
        };
    
        const url = 'http://localhost:5010/vagas';
    
        try {
            await axios.post(url, paramCorpo);
            alert('Vaga cadastrada com sucesso!');
    
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
    
        } catch (error) {
            console.error("Erro ao cadastrar vaga:", error);
            alert('Erro ao cadastrar vaga. Verifique os dados e tente novamente.');
        }
    }
    
    return(
         
       
        <div className='pagina-pagamento'>
             <Tituloelogo titulo = 'Informações sobre a vaga'/>

             <div className='texto-pagamento'>
                <Link to = '/'>
                    <i class="fa-solid fa-arrow-left"></i>
                </Link>
                
                <p>Preencha as informações abaixo com os requisitos da sua vaga</p>
             </div>

           
                <section className='terceira-parte'>
                

              

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
                            <input className='pequeno' placeholder= 'XX.XXX.XXX/XXXX-XX' type="text" value={cnpj} onChange={e => setCnpj(e.target.value)} />
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
                        <textarea
                        className='grandee'
                            value={requisitos}
                            onChange={e => setRequisitos(e.target.value)}
                            placeholder="Ex: Experiência mínima de 2 anos, Conhecimento em React, etc."
                        />
                    </div>
                    <div className='div-grande'>
                        <label>Beneficios:</label>
                        <textarea
                        className='grandee'
                        value={beneficios} onChange={e => setBeneficios(e.target.value)} 
                            placeholder="Ex: Vale refeicão, Vale transporte, etc."
                        />
                    </div>


                    <div className='div-grande'>
                        <label>Por que quer trabalhar com a G&G?</label>
                        <textarea value={descricao} onChange={e => setDescricao(e.target.value)}>

                        </textarea>

                    </div>

                    <div className='duo'>

                        <div>
                            <label>Prazo:</label>
                            <input className='pequeno' type="date" value={vencimento} onChange={e => setVencimento(e.target.value)} />

                        </div>

                        <div>
                            <label>Quantidade vagas</label>
                            <input className='pequeno' type="text" value={quantidade} onChange={e => setQuantidade(e.target.value)} />
                        </div>

                    </div>


                    <div className='botao'>
                        <button onClick={novaVaga}>Enviar</button>
                    </div>



                </div>
                </section>
        </div>


    )
}