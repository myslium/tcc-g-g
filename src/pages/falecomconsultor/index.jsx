
import Cabecalho from '../../componentes/cabeçalho'
import Footer from '../../componentes/footer'
import Tituloelogo from '../../componentes/tituloelogo'
import './index.scss'


export default function Falecomconsultor(){



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

            <Footer />


        </div>
    )
}