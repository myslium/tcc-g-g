
import './index.scss'
import Tituloelogo from '../../componentes/tituloelogo'
import Cabecalho from '../../componentes/cabeçalho'

export default function Vagas() {
    return (
        <div className='pagina-vagas'>
           
            <Cabecalho/>
            <div className="topo">
                <div className="conttopo">
                <img className='geg' src="/assets/images/cabecalho/logo.png" alt="" />
                <h1>VAGAS</h1>
                </div>
            </div>

            <div className="botoes">
                <div className='bb'>
                    <img className='botaoimg' src="/assets/images/vagas/seta.png" alt="" />
                    <a className='botaob' href="">Filtros</a>
                </div>

                <div className='bb'>
                    <img className='botaoimg' src="/assets/images/vagas/pasta.png" alt="" />
                    <a className='botaob' href="">Cargos</a>
                </div>

                <div className='bb'>
                    <img className='botaoimg' src="/assets/images/vagas/localiza.png" alt="" />
                    <a className='botaob' href="">Cidade, Estado ou Região</a>
                </div>

            </div>

            <div className="vagas">

                <div className="cartavaga">
                    <div className="textovaga">
                        <h1>Analista de Suporte em TI</h1>
                        <p>Sobre a vaga: - Estamos procurando por uma pessoa alinhada com nossos valores para atuar como Técnico de Informática, em um contexto dinâmico de uma empresa em ascensão no mercado…</p>
                        <a href="">Mais sobre</a>
                    </div>
                    <div className="image">
                        <img className='vagaimg' src="/assets/images/vagas/TI.png" alt="" />
                        <a className='botaovaga' href="">Candidatar-se</a>
                    </div>
                    
                </div>


                <div className="cartavaga">
                    <div className="textovaga">
                        <h1>Enfermeiro(a)</h1>
                        <p>O profissional de enfermagem atua na promoção, prevenção, recuperação e reabilitação da saúde, com autonomia e em consonância com os preceitos éticos e legais.</p>
                        <a href="">Mais sobre</a>
                    </div>
                    <div className="image">
                        <img className='vagaimg' src="/assets/images/vagas/enfermeira (1).png" alt="" />
                        <a className='botaovaga' href="">Candidatar-se</a>
                    </div>
                    
                </div>


                <div className="cartavaga">
                    <div className="textovaga">
                        <h1>Auxiliar de escritório</h1>
                        <p>O Auxiliar de Escritório é o responsável por produzir e organizar documentos, preparar relatórios e planilhas, controlar o estoque, materiais e afins. Além disso, ele pode realizar rotinas bancárias, atendimento pessoal e telefônico.</p>
                        <a href="">Mais sobre</a>
                    </div>
                    <div className="image">
                        <img className='vagaimg' src="/assets/images/vagas/auxiliar.png" alt="" />
                        <a className='botaovaga' href="">Candidatar-se</a>
                    </div>
                    
                </div>


                <div className="cartavaga">
                    <div className="textovaga">
                        <h1>Analista de Laboratório</h1>
                        <p>O papel principal de um Analista de Laboratório envolve a realização de testes e análises em amostras biológicas, químicas ou físicas. Contudo, são responsáveis por garantir a precisão e a confiabilidade dos resultados, o que é crucial para a tomada de decisões baseada em dados em muitas indústrias.</p>
                        <a href="">Mais sobre</a>
                    </div>
                    <div className="image">
                        <img className='vagaimg' src="/assets/images/vagas/laboratorio.png" alt="" />
                        <a className='botaovaga' href="">Candidatar-se</a>
                    </div>
                    
                </div>



                <div className="cartavaga">
                    <div className="textovaga">
                        <h1>Analista de Estoque</h1>
                        <p>Um Analista de Estoque controla o estoque de matérias-primas e materiais em uma empresa, verificando as quantidades necessárias, recebendo e registrando suas entradas e saídas, para atender ao abastecimento das áreas de produção.</p>
                        <a href="">Mais sobre</a>
                    </div>
                    <div className='image'>
                        <img className='vagaimg' src='assets/images/vagas/estoque (1).png'/>
                        <a className='botaovaga' href=""> Candidatar-se</a>

                    </div>

                </div>


            </div>

           
        </div>
    )
}