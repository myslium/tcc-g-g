import Cabecalho from '../../componentes/cabeçalho';
import Footer from '../../componentes/footer';
import Porco from '../../componentes/porco';
import './index.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TituloMenor from '../../componentes/titulomenor';
import toast, { Toaster } from 'react-hot-toast'; 



export default function Cartaogg() {
    const { id } = useParams();
    const [salario, setSalario] = useState(0);
    const [qtd_vagas, setQtd_vagas] = useState(0);
    const [tpp, setTpp] = useState(0);
    const [vaga, setVaga] = useState('');
    const [addVaga, setAddVaga] = useState(false);
    const [receita, setReceita] = useState([]);
    const [pixx, setpixx] = useState('');
    const navigatee = useNavigate();

    async function Tpp() {
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
        } else {
            let sa = ((sal * 0.85) * qtd).toFixed(2);
            setTpp(sa);

            if (sa !== "0.00") {
                const url = `http://4.172.207.208:5017/receita`;
                let dados = {
                    salario: salario,
                    qtd_vagas: qtd_vagas,
                    vaga: vaga,
                    id_interesse: id
                };
               await axios.post(url, dados);
            
                toast.success(`Valor calculado e adicionado ao seu cartão!`);
            }
        }
    }

    useEffect(() => {
        if (addVaga) resetar();
    }, [addVaga]);

    async function pagar() {
        const url = `http://4.172.207.208:5017/receita/${id}`;
        let resposta = await axios.get(url);
        console.log(resposta.data); 
        setReceita(agruparReceitas(resposta.data));
    }

    function agruparReceitas(receitas) {
        const receitasAgrupadas = [];

        for (let i = 0; i < receitas.length; i++) {
            const receita = receitas[i];
            let existeIndice = -1;

            for (let j = 0; j < receitasAgrupadas.length; j++) {
                if (receitasAgrupadas[j].idInteresse === receita.idInteresse) {
                    existeIndice = j;
                }
            }

            if (existeIndice !== -1) {
                receitasAgrupadas[existeIndice].salarios.push(receita.salario);
            } else {
                receitasAgrupadas.push({
                    idInteresse: receita.idInteresse,
                    empresa: receita.empresa,
                    vaga: receita.vaga,
                    salarios: [receita.salario],
                    qtd_vagas: receita.qtd_vagas 
                });
            }
        }

        return receitasAgrupadas;
    }

    function resetar() {
        setSalario(0);
        setQtd_vagas(0);
        setVaga('');
        setTpp(0);
        setAddVaga(false);
    }
    function total(salarios, qtd_vagas) {
        const qtd = Number(qtd_vagas);
        let soma = 0;
    
        if (qtd > 0) {
        
            for (let i = 0; i < salarios.length; i++) {
                soma += (salarios[i] * 0.85) * qtd;
            }
        } else {
          
            for (let i = 0; i < salarios.length; i++) {
                soma += salarios[i] * 0.85;
            }
        }
    
        return 'R$ ' + soma.toFixed(2);
    }
    

    const [oiporco, setoiporco] = useState('');

    function porco() {
        let porcooo = <Porco
            p1='Pix'
            function1={pix}
            p2='Outro'
            function2={outro}
        />;
        setoiporco(porcooo);
    }

    function pix() {
        navigatee('/pix');
    }

    function outro() {
        navigatee('/whats');
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
                                    <input className='oioio' type="text" value={salario} onChange={e => setSalario(e.target.value)} />
                                </div>

                                <div className="quadrado">
                                    <p className='p'>QTD VAGAS:</p>
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
    <div key={item.idInteresse} className="receita">
        <div className="separacao1">
            <h1>RECEITA</h1>
            <p className='n'>Nome da empresa:</p>
            <p>{item.empresa}</p>
         

            <div>
                {item.salarios.map((salario, index) => (
                    <div key={index}>
                        <p>R$ {salario.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className="separacao2">
            <img src="/assets/images/cabecalho/logo.png" alt="" />
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
