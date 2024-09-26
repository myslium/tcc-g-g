
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
            </div>

           
        </div>
    )
}