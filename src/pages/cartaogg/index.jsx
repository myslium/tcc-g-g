import Cabecalho from '../../componentes/cabeçalho';
import Footer from '../../componentes/footer';

import './index.scss';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import TituloMenor from '../../componentes/titulomenor';

export default function Cartaogg() {
    const { id } = useParams();

    const [salario, setSalario] = useState(0);
    const [qtd_vagas, setQtd_vagas] = useState(0);
    const [tpp, setTpp] = useState(0);
    const [vaga, setVaga] = useState('');
    const [addVaga, setAddVaga] = useState(false);
   const [receita, setReceita] = useState([]);

   async function Tpp() {
    const sal = Number(salario);
    const qtd = Number(qtd_vagas);
     
    if (isNaN(sal) || isNaN(qtd)) {
        alert("Por favor, insira valores numéricos válidos para salário e quantidade de vagas.");
        return;
    } else {
        let sa = ((sal * 0.85) * qtd).toFixed(2);
        setTpp(sa);
      
        if (sa !== "0.00") {
            const url = `http://localhost:5010/receita`;
            let dados = {
                salario: salario,
                qtd_vagas: qtd_vagas,
                vaga: vaga,
                id_interesse: id
            };
            let resp = await axios.post(url, dados);
            alert(`Valor calculado e adicionado ao seu cartão! ID: ${resp.data.id}`);
        }
    }
}


    useEffect(() => {
        if (addVaga) resetar();
    }, [addVaga]);

    async function pagar() {
        const url = `http://localhost:5010/receita/${id}`;
        let resposta = await axios.get(url);
        setReceita(resposta.data);
    }

 

    function resetar() {
        setSalario(0);
        setQtd_vagas(0);
        setTpp(0);
        setVaga('');
        setAddVaga(false);
    }

    function total (item) {
        let soma  =0

        for( let i = 0; i < item.length; i++){
            soma += item[i].s;
    
        }
        return soma;

    }

    return (
        <div className="cartao-gg">
            <Cabecalho
                titulo1='Início'
                link1='/'
                titulo2='Sobre G&G'
                link2='/sobre'
                titulo3='Vagas'
                link3='/vagas'
                titulo4='Fale com consultor'
                link4='/falecomconsultor'
                tituloo5='ROBOT'
                link5='/bot'
                aparecer={true}
            />

            <TituloMenor titulo='Valores' />

            <div className="tudo">
                <div className="ultimo" style={{ backgroundImage: `url('/assets/images/consultor/oioi.png')` }}>
                    <div className='conteudo'>
                        <div className="choquei">
                            <div className='inputs'>
                                <div className="quadrado">
                                    <p>VAGA:</p>
                                    <input className='oioio' type="text" value={vaga} onChange={e => setVaga(e.target.value)} />
                                </div>

                                <div className="quadrado">
                                    <p>SALÁRIO:</p>
                                    <input className='oioio' type="text" value={salario} onChange={e => setSalario(e.target.value)} />
                                </div>

                                <div className="quadrado">
                                    <p>QTD VAGAS:</p>
                                    <input className='oioio' type="text" value={qtd_vagas} onChange={e => setQtd_vagas(e.target.value)} />
                                </div>
                            </div>

                            <div className="botao">
                                <button onClick={Tpp}>VALOR</button>
                            </div>

                            <div className='final-cartao'>
                                <div className='estimado'>
                                    <h3>Valor estimado:</h3>
                                    <p>R$: {tpp}</p>
                                </div>

                                <div className='opcao'>
                                    <h3>Outra vaga?</h3>
                                    <input
                                        type="checkbox"
                                        checked={addVaga}
                                        onChange={e => setAddVaga(e.target.checked)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
               
                    <button className="butt on" onClick={pagar}>Ver Receita</button>
               

                {receita.map(item => (
                    <div key={item.id} className="receita">
                        <div className="separacao1">
                            <h1>RECEITA</h1>
                            <p>Nome da empresa: {item.empresa}</p>
                            <p>Vaga: {item.vaga}</p>
                            <p>Subtotal: R$ {item.salario }</p>
                        </div>

                        <div className="separacao2">
                            <img src="/assets/images/cabecalho/logo.png" alt="" />
                            <h1>valor final : R${total(item)}</h1>
                        </div>
                    </div>
                ))}

                <div className='line'></div>

                <div className="pagamentos">
                    <button className="porco">
                        <img className="porcoimg" src="/assets/images/consultor/porco.png" alt="porco" />
                        Forma de pagamento
                    </button>


                </div>
            </div>

            <Footer />
        </div>
    );
}
