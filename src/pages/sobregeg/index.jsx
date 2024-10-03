
import './index.scss'

import Cabecalho from '../../componentes/cabeçalho'
import Tituloelogo from '../../componentes/tituloelogo'
import Footer from '../../componentes/footer'

export default function SobreGeG() {
    return (
        <div className='pagina-sobre'>

            <Cabecalho/>

            <div className="faixa">
            <img className='fundo' src="/assets/images/sobre/primeira.jpg" alt="" />
            </div>
            <Tituloelogo titulo = 'SOBRE G&G'/>

            <div className="cartaotexto">
                <div className="cardizinho">
                <h1>Quem é G&G?</h1>
                <p>Fundada em 07/09/2014, a <b>G&G</b> se destaca por oferecer um serviço personalizado, garantindo maior disponibilidade e flexibilidade para os clientes, com direção e solidez. O crescimento da G&G é resultado de um trabalho comprometido, focado em desenvolver soluções inovadoras e prestar serviços de alta qualidade que superam as expectativas. <b>Há um investimento contínuo na contratação dos melhores profissionais, sempre em conformidade com as leis trabalhistas.</b></p>
                </div>
            </div>

            <hr />

            <div className="texto3">
                <p>Profissional com mais de 10 anos de experiência nas áreas de Recursos Humanos e Administrativa, com carreira desenvolvida em empresas de pequeno e grande porte.</p>
            </div>
            <div className="textlupa">
                <img className='imglupa' src="/assets/images/sobre/lupa.png" alt="" /> <h1 className='h1'>Há 10 anos movimentando o mercado de trabalho</h1>
            </div>

            <Tituloelogo  titulo = 'SERVIÇOS G&G'/>
            <div className="cartaotexto2">

                <div className="conteudo">
                <div className="texto">
                    <p>Os serviços da <b>G&G </b> tem como foco a <b>otimização de tarefas das áreas de negócio.</b> O objetivo  da G&G está em facilitar o processo de contratação 
                    tanto para os recrutadores quanto para os candidatos das vagas. Tudo isso resulta em uma maior <b>produtividade e economia.</b> </p>
                </div>
                
                    <img className='imagem' src="/assets/images/sobre/servico.png" alt="" />
          
                </div>
            </div>

            <Tituloelogo  titulo = 'SOBRE NOSSO AUTÔNOMO'/>
            <div className="cartaoautonomo">

            <div className="cont">
            <div className="textautonomo">
                <h1 className='titulogis'>GISLAINE</h1>
                <h1 className='textogislaine'>Meu nome é <strong>Gislaine</strong>, sou casada e mãe de quatro filhos além de ter uma carreira de <strong>dez anos na área de recursos humanos.</strong>  Atualmente coordeno uma equipe se seleção, trabalhando com vagas administrativa e operacionais. Basicamente <strong>a área de R&S é a área responsável pela captação, divulgação de vagas, triagem de currículos e alinhamento de perfil junto ao requisitante,</strong> realizo entrevista por competência e aplico testes e encaminho o candidato para vaga. Sou apaixonada pelo que faço o que tora meu trabalho fácil de ser administrado. Não recruto currículos e sim pessoas com vontade e motivação. O currículos nos mostra a experiência necessária pra desempenhar a função.</h1>


            </div>

                <img className='gislaine' src="/assets/images/sobre/autonomo.png" alt="" />
               
            </div>
         
            </div>

   <Footer/>
      
        </div>
    )
}