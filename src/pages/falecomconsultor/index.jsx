import Cabecalho from '../../componentes/cabeçalho'
import Tituloelogo from '../../componentes/tituloelogo'
import './index.scss'

export default function Falecomconsultor() {
    return (
        <div className='pagina-falecomconsultor'>
           <Cabecalho/>

            <section className='primeira-parte'>
                <img src="/assets/images/consultor/primeiraimg.png" alt="" />
            </section>

            <Tituloelogo 
            titulo = 'POR QUE TRABALHAR COM A G&G?'/>


            <section className='segunda-parte'>

                <div className='primeira-div'>


                    <div className='texto'>
                    <p>A G&G tem trazido resultados significativos para seus clientes, reduzindo índices de turnover de novos colaboradores, tornando o processo seletivo mais justo e promovendo a <b>diversidade e inclusão de forma genuína, gerando valor para nossos clientes.</b></p>

                    </div>
                  
                    <img className='geg-img' src="/assets/images/consultor/pessoasmesa.png" alt="Ambiente de trabalho Gente&Gestão" />
                </div>

                <div className='segunda-div'>

                    <div className='filhos'>

                        <img className='img-filho'  src="/assets/images/consultor/docapertodemao1.png" alt="Aperto de mão Gente&Gestão" />
                        <h3>+de 80% dos nossos clientes estão satisfeitos</h3>
                    </div>

                    <div className='filhos'>

                        <img className='img-filho'   src="/assets/images/consultor/apertodemao.png" alt="Aperto de mão Gente&Gestão" />

                        <h3>+de 1.500 contratados</h3>
                        
                     
                    </div>
                </div>
            </section>
        </div>
    )
}