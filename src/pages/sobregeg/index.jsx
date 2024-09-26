
import './index.scss'

import Cabecalho from '../../componentes/cabeçalho'
import Tituloelogo from '../../componentes/tituloelogo'

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
                <p>Fundada em 07/09/2014, a <strong>G&G</strong> se destaca por oferecer um serviço personalizado, garantindo maior disponibilidade e flexibilidade para os clientes, com direção e solidez. O crescimento da G&G é resultado de um trabalho comprometido, focado em desenvolver soluções inovadoras e prestar serviços de alta qualidade que superam as expectativas. <strong>Há um investimento contínuo na contratação dos melhores profissionais, sempre em conformidade com as leis trabalhistas.</strong></p>
                </div>
            </div>

            <div className="text">
                <p>Profissional com mais de 10 anos de experiência nas áreas de Recursos Humanos e Administrativa, com carreira desenvolvida em empresas de pequeno e grande porte.</p>
            </div>
            <div className="textlupa">
                <img src="/assets/images/sobre/lupa.png" alt="" /> <h1>Há 10 anos movimentando o mercado de trabalho</h1>
            </div>

            <Tituloelogo  titulo = 'SERVIÇOS G&G'/>
            <div className="cartaotexto2">

                <div className="conteudo">
                <div className="texto">
                    <h1>Os serviços da G&G tem como foco a otimização de tarefas das áreas de negócio. O objetivo  da G&G está em facilitar o processo de contratação 
                    tanto para os recrutadores quanto para os candidatos das vagas. Tudo isso resulta em uma maior produtividade e economia.</h1>
                </div>
                
                    <img className='imagem' src="/assets/images/sobre/servico.png" alt="" />
          
                </div>
                
            </div>



            <div className="rodape">
            <img src="/assets/images/inicio/rodapeprovisorio.png" alt="" />

           </div>




            
           
        </div>
    )
}