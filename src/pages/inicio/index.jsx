
import './index.scss'
import Cabecalho from '../../componentes/cabeçalho'
import Tituloelogo from '../../componentes/tituloelogo'
import Cards from '../../componentes/cards'
import { Link } from 'react-router-dom'
import Cardspilar from '../../componentes/cardpilar'

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

           <div className="cartaovaga">
            <div className="cartao">

            <Cards
            url = '/assets/images/inicio/tecnologia.png'
            titulo = 'TECNOLOGIA'
            topico = 'Ciência de dados'
           
            />
            <Cards
            url = '/assets/images/inicio/industrias.png'
            titulo = 'INDÚSTRIAS'
            topico = 'Engenharia'
           
            />
            <Cards
            url = '/assets/images/inicio/visuais.png'
            titulo = 'VISUAIS'
            topico = 'Design de interiores'
           
            />
            </div>
            <div className="mostrar">
            <Link>MOSTRAR MAIS <img src="/assets/images/inicio/arrow.png" alt="" /></Link>
            </div>
            </div>
         
            <div className="faixa2">
            <Tituloelogo titulo='4 PILARES DE G&G' />
           </div>
           <div className="pilares">
            <Cardspilar
            titulo= 'FOCO NO CLIENTE'
             topico = 'Foco no cliente'

            />
            <Cardspilar
            titulo= 'RESPONSABILIDADE'
             topico = 'responsabilidade'

            />
            <Cardspilar
            titulo= 'ESPÍRITO DE EQUIPE'
             topico = 'espírito de equipe'

            />
            <Cardspilar
            titulo= 'EMPREENDEDORISMO'
             topico = 'empreendedorismo'

            />

           </div>
           <div className="ultima">
            <h1 className='texto'><img src="/assets/images/cabecalho/logo.png" alt="" />Quer aumentar a produtividade da sua empresa e economizar?</h1>
            <button>Fale com o consultor</button>

           </div>
           <div className="rodape">
            <img src="/assets/images/inicio/rodapeprovisorio.png" alt="" />

           </div>

         
        </div>
    )
}