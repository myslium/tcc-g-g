import Cabecalho from '../../componentes/cabeçalho';
import Footer from '../../componentes/footer';
import Tituloelogo from '../../componentes/tituloelogo';
import './index.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Falecomconsultor(){
    const [nomeemp, setnomeemp] = useState('');
    const [cnpj, setcnpj] = useState('');
    const navigation = useNavigate();

    async function verificacao() {
     
        const formattedCNPJ = cnpj.replace(/[^\d]+/g, '');
        const url = `https://api.cnpjs.dev/v1/${formattedCNPJ}`;

        try {
            let resp = await axios.get(url);
    
          
            if ( resp.status === 404) {
                alert('CNPJ inválido');
            } else {
                let url = 'http://localhost:5010/interesse';
                let empresa = {
                    'empresa': nomeemp,
                    'cnpj': formattedCNPJ
                };
                await axios.post(url, empresa); 
                alert('CNPJ válido!');
                navigation(`/cartaogg/${nomeemp}`);
            }
        } catch (error) {
          
            if (error.response && ( error.response.status === 404)) {
                alert('CNPJ inválido');
            } else {
                console.error('Erro na verificação:', error);
                alert('Ocorreu um erro ao verificar o CNPJ. Tente novamente mais tarde.');
            }
        }
    }

    return (
        <div className='pagina-falecomconsultor'>
            <Cabecalho
                titulo1 = 'Início'
                link1='/'
                titulo2 = 'Sobre G&G'
                link2 = '/sobre'
                titulo3 = 'Vagas'
                link3 = '/vagas'
                titulo4 = 'Fale com consultor'
                link4='/falecomconsultor'
                link5 = '/bot'
                titulo5 = 'fa-solid fa-robot'
                tituloo5= 'AJUDA'
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
                            <input className='oioio' type="text" value={nomeemp} onChange={e=> setnomeemp(e.target.value)} />
                            <p>CNPJ:</p>
                            <input className='oioio' type="text" value={cnpj} onChange={e=> setcnpj(e.target.value)} />
                        </div>
                        <div className="botao">
                            <button className='on' onClick={verificacao}>VERIFICAÇÃO</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
