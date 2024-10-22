import { useState } from 'react'
import Cabecalho from '../../componentes/cabeçalho'
import Footer from '../../componentes/footer'
import Tituloelogo from '../../componentes/tituloelogo'
import './index.scss'

import axios from 'axios'


export default function Falecomconsultor() {

    const [empresa, setEmpresa] = useState('');
    const [contato, setContato] = useState('');
    const [cnpj, setCnpj] = useState(0);
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
        await axios.post(url, paramCorpo);
        setEmpresa('');
        setContato('');
        setCnpj(0);
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
        <div className='pagina-falecomconsultor'>
            <Cabecalho
                titulo1='Início'
                link1='/'
                titulo2='Sobre G&G'
                link2='/sobre'
                titulo3='Vagas'
                link3='/vagas'
                titulo4='Fale com consultor'
                link4='/falecomconsultor'
                tituloo5 = 'ROBOT'
                link5 = '/bot'
                aparecer={true}  

            />

            <section className='primeira-parte'>
                <img src="/assets/images/consultor/primeira.png" alt="" />
            </section>

            <Tituloelogo
                titulo='POR QUE TRABALHAR COM A G&G?' />


            <section className='segunda-parte'>

                <div className='primeira-div'>


                    <div className='texto'>
                        <p>A G&G tem trazido resultados significativos para seus clientes, reduzindo índices de turnover de novos colaboradores, tornando o processo seletivo mais justo e promovendo a <b>diversidade e inclusão de forma genuína, gerando valor para nossos clientes.</b></p>

                    </div>

                    <img className='geg-img' src="/assets/images/consultor/pessoasmesa.png" alt="Ambiente de trabalho Gente&Gestão" />
                </div>

                <div className='segunda-div'>

                    <div className='filhos'>

                        <img className='img-filho' src="/assets/images/consultor/docapertodemao1.png" alt="Aperto de mão Gente&Gestão" />
                        <h3>+de 80% dos nossos clientes estão satisfeitos</h3>
                    </div>

                    <div className='filhos'>

                        <img className='img-filho' src="/assets/images/consultor/apertodemao.png" alt="Aperto de mão Gente&Gestão" />


                        <h3>+de 1.500 contratados</h3>



                    </div>
                </div>
            </section>

            <Tituloelogo titulo='ENTRE EM CONTATO CONOSCO!' />

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

            <Footer />


        </div>
    )
}