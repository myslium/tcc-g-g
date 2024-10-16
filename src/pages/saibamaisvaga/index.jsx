import React from 'react'
import './index.scss'
import '@fortawesome/fontawesome-free/js/all.js';
import Requisitos from '../../componentes/requisitos';





export default function Saibamais(){
    return(

        <div className="saibamais">

            <div className="textos-saibamais">

                <div className="profissao">
                    <div className="profitexto">
                    <h1>ANALISTA DE ESTOQUE</h1>
                    <p>Um Analista de Estoque controla o estoque de matérias-primas e materiais em uma empresa, verificando as quantidades necessárias, recebendo e registrando suas entradas e saídas, para atender ao abastecimento das áreas de produção.</p>
                    </div>
                    <div className="profibotao">
                    <button>Candidatar-se</button>
                    </div>


                </div>

                <div className="textotopico">
                    <Requisitos
                    titulorequi = 'Requisitos'
                    requisitos = {[
                        'Formação em Administração, Logística ou áreas relacionadas.','Experiência prévia em controle de estoque.','Experiência prévia em controle de estoque.'
                    ]}
                    />

                </div>

                <div className="textotopico">
                    <Requisitos
                    titulorequi = 'Salário'
                    requisitos = {[
                        'R$ 3.000 a R$ 6.000 por mês.'
                    ]}
                    
                    />
                </div>

                <div className="textotopico">
                    <Requisitos
                    titulorequi = 'Localização'
                    requisitos = {['Campo Grande - SP 4080-23']}
                    />
                </div>
                
                <div className="textotopico">
                    <Requisitos
                    titulorequi = 'Benefícios Comuns'
                    requisitos = {['Vale-alimentação/refeição, plano de saúde, seguro de vida e participações nos lucros.']}
                    
                    />
                </div>


            </div>

        </div>
    )
}