import Cabecalho from '../../componentes/cabeçalho';
import Footer from '../../componentes/footer';
import Porco from '../../componentes/porco';
import './index.scss';
import { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TituloMenor from '../../componentes/titulomenor';
import toast, { Toaster } from 'react-hot-toast';

const url = 'http://4.172.207.208:5017';

export default function Cartaogg() {
    const { id } = useParams();
    const [salario, setSalario] = useState(0);
    const [qtd_vagas, setQtd_vagas] = useState(0);
    const [tpp, setTpp] = useState(0);
    const [vaga, setVaga] = useState('');
    const [addVaga, setAddVaga] = useState(false);
    const [receita, setReceita] = useState([]);
    const [pixx, setpixx] = useState('');
    const navigate = useNavigate();
    const [oiporco, setoiporco] = useState('');

    const Tpp = useCallback(async () => {
        const sal = Number(salario);
        const qtd = Number(qtd_vagas);

        if (isNaN(sal) || isNaN(qtd)) {
            toast.error("Por favor, insira valores numéricos válidos para salário e quantidade de vagas.", {
                style: {
                    borderRadius: '10px',
                    background: 'rgba(255, 0, 0, 0.1)',
                    color: '#a04dff'
                }
            });
            return;
        }

        let r = sal * 0.85;
    
        let sa = r * qtd;
        setTpp(sa.toFixed(2));

        if (sa !== "0.00") {
            try {
                let dados = { salario: r, qtd_vagas, vaga, id_interesse: id };
                await axios.post(`${url}/receita`, dados);
                toast.success("Valor calculado e adicionado ao seu cartão!");
            } catch (error) {
                toast.error("Erro ao conectar-se com a API.");
            }
        }
    }, [salario, qtd_vagas, vaga, id]);

    useEffect(() => {
        if (addVaga) resetar();
    }, [addVaga]);

    const pagar = useCallback(async () => {
        try {
            const resposta = await axios.get(`${url}/receita/${id}`);
            setReceita(agruparReceitas(resposta.data));
        } catch (error) {
            toast.error("Erro ao buscar dados de receita.");
        }
    }, [id]);

    function agruparReceitas(receitas) {
        const grupos = {};
        const resultado = [];

        for (let i = 0; i < receitas.length; i++) {
            const receita = receitas[i];
            const { idInteresse, empresa, vaga, salario, qtd_vagas } = receita;

            if (!grupos[idInteresse]) {
                grupos[idInteresse] = {
                    idInteresse,
                    empresa,
                    vaga: [vaga],
                    salarios: [salario],
                    qtd_vagas: [qtd_vagas]
                };
                resultado.push(grupos[idInteresse]);
            } else {
                grupos[idInteresse].vaga.push(vaga);
                grupos[idInteresse].salarios.push(salario);
                grupos[idInteresse].qtd_vagas.push(qtd_vagas);
            }
        }

        return resultado;
    }

    function resetar() {
        setSalario(0);
        setQtd_vagas(0);
        setVaga('');
        setTpp(0);
        setAddVaga(false);
    }

    function total(salarios, qtd_vagas) {
        let soma = 0;
        for(let i = 0;  i < salarios.length; i++) {
            soma += (salarios[i] * qtd_vagas[i]);

        }
        return 'R$ ' + soma.toFixed(2);
    }

    function porco() {
        setoiporco(
            <Porco
                p1='Pix'
                function1={pix}
                p2='Outro'
                function2={outro}
            />
        );
    }

    function pix() {
        navigate('/pix');
    }

    function outro() {
        navigate('/whats');
    }

    return (
        <div className="pagina cartao-gg">
            <Cabecalho
                titulo1='Início'
                link1='/'
                titulo2='Sobre G&G'
                link2='/sobre'
                titulo3='Vagas'
                link3='/vagas'
                titulo4='Fale com consultor'
                link4='/falecomconsultor'
                link5='/bot'
                titulo5='fa-solid fa-robot'
                tituloo5='AJUDA'
                aparecer={true}
            />

            <TituloMenor titulo='Valores' />

            <div className="tudo">
                <div className="ultimo" style={{ backgroundImage: `url('/assets/images/consultor/oioi.png')` }}>
                    <div className='conteudo'>
                        <div className="choquei">
                            <div className='inputs'>
                                <div className="quadrado">
                                    <p className='p'>VAGA:</p>
                                    <input className='oioio' type="text" value={vaga} onChange={e => setVaga(e.target.value)} />
                                </div>

                                <div className="quadrado">
                                    <p className='p'>SALÁRIO:</p>
                                    <input className='oioio' type="number" value={salario} onChange={e => setSalario(e.target.value)} />
                                </div>

                                <div className="quadrado">
                                    <p className='p'>QTD VAGAS:</p>
                                    <input className='oioio' type="number" value={qtd_vagas} onChange={e => setQtd_vagas(e.target.value)} />
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
                    <div key={item.idInteresse} className="receita">
                        <div className="separacao1">
                            <h1>RECEITA</h1>
                            <p className='n'>Nome da empresa:</p>
                            <p>{item.empresa}</p>

                            <div>
                                {item.salarios.map((salario, index) => (
                                    <div key={index}>
                                        <p>Vaga: {item.vaga[index]}</p>
                                        <p>Quantidade de vagas: {item.qtd_vagas[index]}</p>
                                        <p>R$ {salario.toFixed(2)}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="separacao2">
                            <img src="/assets/images/cabecalho/logo.png" alt="Logo" />
                            <h1>Valor final: {total(item.salarios, item.qtd_vagas)}</h1>
                        </div>
                    </div>
                ))}

                <div className='line'></div>

                <div className="pagamentos">
                    <button onClick={porco} className="porco">
                        <img className="porcoimg" src="/assets/images/consultor/porco.png" alt="porco" />
                        Forma de pagamento
                    </button>
                    {oiporco}
                    <h1 className='pix'>{pixx}</h1>
                </div>
            </div>

            <Footer />
            <Toaster />
        </div>
    );
}
