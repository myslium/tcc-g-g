
import './index.scss'
import Cabecalho from '../../componentes/cabeçalho'
import Faixa from '../../componentes/cards'
import Tituloelogo from '../../componentes/tituloelogo'
import Cards from '../../componentes/cards'

export default function Inicio() {
    return (
        <div className='pagina-inicio'>
           <Cabecalho/>

           <div className="faixa">
            <img className='fundo' src="/assets/images/inicio/image.png" alt="" />
           </div>

           <div className="faixa2">
            <Tituloelogo titulo = 'GENTE & GESTÃO'/>
           </div>

           <div className="recrutando">
            <div className="conteudo">
            <img src="/assets/images/inicio/segunda.png" alt="" />

            <div className="text">
                <h1>RECRUTANDO PESSOAS E DESTACANDO TALENTOS!</h1>
                <p>GENTE&GESTÃO tem foco onde pode causar impacto e como pode acelerar planos, pois acretida que apoiar empresas gera oportunidade e emprego </p>

                <a href="">saiba mais <img src="/assets/images/inicio/arrow.png" alt="" /></a>
            </div>

           </div>
           </div>

           <div className="faixa2">
           <Tituloelogo titulo='VAGAS PARA VOCÊ' />
           </div>

           <div className="cardsvaga">
            <Cards
            url = '/assets/images/inicio/tecnologia.png'
            titulo = 'TECNOLOGIA'
            topico = 'Ciência de dados'
           
            />
           </div>
         
        </div>
    )
}