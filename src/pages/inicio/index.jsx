import './index.scss'
import Cabecalho from '../../componentes/cabeçalho'
import Tituloelogo from '../../componentes/tituloelogo'
import Cards from '../../componentes/cards'
import { Link } from 'react-router-dom'
import Cardspilar from '../../componentes/cardpilar'
import Footer from '../../componentes/footer'

export default function Inicio() {
    return (
        <div className='pagina-inicio'>
         <Cabecalho
             titulo1 = 'Início'
            link1='/'
            titulo2 = 'Sobre G&G'
            link2 = '/sobre'
            titulo3 = 'Vagas'
            link3 = '/vagas'
            titulo4 = 'Fale com consultor'
            link4 = '/cartaogg'
            link5 = '/bot'
            titulo5 = 'fa-solid fa-robot'
            tituloo5= 'ROBOT'
            aparecer={true}  

            />

            <div className="faixa" style={{ backgroundImage: `url('/assets/images/inicio/image.png')` }} >


                <div className='texto-faixa'>
                    <h2>SEJA <br />G&G</h2>
                    <h2>VOCÊ <br />TAMBÉM!</h2>

                </div>

            </div>

            <div className="faixa2">
                <Tituloelogo titulo='GENTE & GESTÃO' />
            </div>

            <div className="recrutando">

                <div className="conteudo">
                    <div className="imseg">
                        <img src="/assets/images/inicio/segunda.jpg" alt="" />
                    </div>
                  
                    <div className="text">
                        <h1>RECRUTANDO PESSOAS E DESTACANDO TALENTOS!</h1>
                        <p>GENTE&GESTÃO tem foco onde pode causar impacto e como pode acelerar planos, pois acredita que apoiar empresas gera oportunidade e emprego</p>
                        <Link to='/sobre'>
                            <div className='link'>
                                <p> saiba mais</p>
                                <i class="fa-solid fa-arrow-right img"></i>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="faixa2">
                <Tituloelogo titulo='VAGAS PARA VOCÊ' />
            </div>

            <div className="cartaovaga">
                <div className="cartao">
                    <Cards
                        url='/assets/images/inicio/tecnologia.png'
                        titulo='TECNOLOGIA'
                        topicos={['Ciência de dados', 'Engenharia', 'Arquitetura', 'Design de interiores']}
                    />
                    <Cards
                        url='/assets/images/inicio/industrias.png'
                        titulo='INDÚSTRIAS'
                        topicos={[
                            "Mecânico de Manutenção em Automação Industrial",
                            "Assistente de Logística",
                            "Operador de Máquina",
                            "Gerente de Produção",
                            "Diretor Industrial"
                        ]}
                    />
                    <Cards
                        url='/assets/images/inicio/visuais.png'
                        titulo='VISUAIS'
                        topicos={[
                            "Ilustrador",
                            "Desenhista",
                            "Crítico de Arte",
                            "Gestor Cultural"
                        ]}
                    />
                </div>
                <div className="mostrar">
                    <Link to='/vagas'>

                        <h3>MAIS OPÇÕES </h3>

                        <img src="/assets/images/inicio/arrow.png" alt="" />
                    </Link>
                </div>
            </div>


            <div className="faixa2">
                <Tituloelogo titulo='4 PILARES DE G&G' />
            </div>

            <div className="pilares">
                <Cardspilar titulo='FOCO NO CLIENTE' topico={` Compromisso
 Agilidade
 Assertividade
 Parceria`} />
                <Cardspilar titulo='RESPONSABILIDADE' topico={`Integridade
Justiça
Ética
Honestidade`} />
                <Cardspilar titulo='ESPÍRITO DE EQUIPE' topico={`Respeito
Cooperação
Reconhecimento
Confiança`} />
                <Cardspilar titulo='EMPREENDEDORISMO' topico={`Paixão
iniciatividade
Criatividade
Resultados`} />
            </div>

            <div className="ultima" style={{ backgroundImage: `url('/assets/images/inicio/grafico.png')` }}>
                <div className='consultor '>
                    <div className='frase'>
                        <img src="/assets/images/cabecalho/logo.png" alt="Logo" />
                        <h1>Quer aumentar a produtividade da sua empresa e economizar?</h1>
                    </div>
                    <Link to='/pagamento'>
                        <button className='botao'>Fale com o consultor</button>
                    </Link>
                </div>
                <img className='ultima-imagem' src="/assets/images/inicio/ultima.png" alt="imagem Gente&Gestão" />
            </div>

            <Footer />
        </div >
    )
}
