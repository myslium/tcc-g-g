import Cabecalho from '../../componentes/cabeçalho'
import Footer from '../../componentes/footer'
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

            <Tituloelogo titulo = 'ENTRE EM CONTATO CONOSCO!'/>

            <section className='terceira-parte'>

                <p>Preencha as informações abaixo com os requisitos da sua vaga</p>

                <div className='vagas'>

                    <div className='div-grande'>
                        
                    <label>Empresa:</label>
                    <input className='grande' type="text" />
                    </div>


                    <div className='div-grande'>
                    <label>E-mail comercial:</label>
                    <input className='grande' type="text" />
                    </div>
                   
                    <div className='duo'>

                        <div>
                            <label>Vaga:</label>
                            <input className = 'pequeno'type="text" />

                        </div>
                    
                         <div>
                            <label>CNPJ:</label>
                            <input className = 'pequeno'type="text" />
                        </div>
                    
                    </div>


                    <div className='duo'>

                        <div>
                            <label>Localização:</label>
                            <input className = 'pequeno'type="text" />

                        </div>
                    
                    <div>
                            <label>Tipo de contrato:</label>
                            <input className = 'pequeno'type="text" />
                    </div>
                    
                    </div>

                    <div className='duo'>

                        <div>
                            <label>Salário:</label>
                            <input className = 'pequeno'type="text" />

                        </div>
                    
                    <div>
                            <label>Modelo de atuação:</label>
                            <input className = 'pequeno'type="text" />
                    </div>
                    
                    </div>

                    <div className='div-grande'>

                    <label>Requisitos:</label>
                    <input className='grande' type="text" />


                    </div>

                    <div className='div-grande'>

                        
                    <label>Beneficios:</label>
                    <input className='grande' type="text" />
                    </div>

                    <div className='div-grande'>
                    <label>Por que quer trabalhar com a G&G?</label>
                    <textarea>

                    </textarea>
                        
                    </div>


                   

                    <div className='botao'>
                        <button>Enviar</button>
                    </div>

                

                </div>
            </section>

            <Footer/>


        </div>
    )
}