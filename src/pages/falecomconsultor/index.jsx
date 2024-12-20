import Cabecalho from '../../componentes/cabeçalho';
import Footer from '../../componentes/footer';
import Tituloelogo from '../../componentes/tituloelogo';
import './index.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast'; 

export default function Falecomconsultor() {
    const [nomeemp, setnomeemp] = useState('');
    const [cnpj, setcnpj] = useState('');
    const [verificado, setVerificado] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigate();

    async function verificacao() {
        const formattedCNPJ = cnpj.replace(/[^\d]+/g, '');
        const verificationUrl = `https://api.cnpjs.dev/v1/${formattedCNPJ}`;

        setLoading(true);
        try {
            const resp = await axios.get(verificationUrl);
            if (resp.status === 404) {
                toast.error('CNPJ inválido', {
                    style: {
                      borderRadius: '10px',
                     background: 'rgba(255, 0, 0, 0.1)',
                  color: '#a04dff'
                    }
                  });
                  
            } else {
                const postUrl = `http://4.172.207.208:5017/interesse`;
                const empresa = {
                    'empresa': nomeemp,
                    'cnpj': formattedCNPJ
                };
                const postResp = await axios.post(postUrl, empresa);
                setVerificado(true);
                toast.success('CNPJ válido!'); 
                setTimeout(() => {
                    navigation(`/cartaogg/${postResp.data.id}`);
                }, 1500);
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
              toast.error('CNPJ inválido');
            } else {
              toast.error('Ocorreu um erro ao verificar o CNPJ. Tente novamente mais tarde.', {
                style: {
                  borderRadius: '10px',
                  background: 'rgba(255, 0, 0, 0.1)',
                  color: '#a04dff'
                }
              });
            }
          } finally {
            setLoading(false);
          }
          
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
                link5='/bot'
                titulo5='fa-solid fa-robot'
                tituloo5='AJUDA'
                aparecer={true}
            />
            <section className='primeira-parte'>
                <img src="/assets/images/consultor/primeira.png" alt="" />
            </section>

            <Tituloelogo titulo='POR QUE TRABALHAR COM A G&G?' />

            <section className='segunda-parte'>
                <div className='primeira-div'>
                    <div className='texto'>
                        <p>A G&G tem trazido resultados significativos para seus clientes, reduzindo índices de turnover de novos colaboradores, tornando o processo seletivo mais justo e promovendo a <b>diversidade e inclusão de forma genuína, gerando valor para nossos clientes.</b></p>
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

            <Tituloelogo titulo='INTERESSE NO NOSSO SERVIÇO' />
            
            <div className="ultimo" style={{ backgroundImage: `url('/assets/images/consultor/ultimo.png')` }}>
                <p className='preencha'>Preencha os campos:</p>
                <div className='conteudo'>
                    <div className="choquei">
                        <div className='inputs'>
                            <p>NOME DA EMPRESA:</p>
                            <input className='oioio' type="text" value={nomeemp} onChange={e => setnomeemp(e.target.value)} />
                            <p>CNPJ:</p>
                            <input className='oioio' type="text" value={cnpj} onChange={e => setcnpj(e.target.value)} />
                        </div>
                       
                        <div className="botao">
                            <button className='on' onClick={verificacao} disabled={loading || verificado}>
                                {loading ? 'Verificando...' : verificado ? `Válido!` : `VERIFICAÇÃO`}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
            <Toaster /> 
        </div>
    );
}
