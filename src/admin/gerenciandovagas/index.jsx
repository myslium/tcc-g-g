import { useState } from 'react'
import Cabecalho from '../../componentes/cabeçalho'
import Tituloelogo from '../../componentes/tituloelogo'
import './index.scss'


export default function Vagasadmin(){
    return(
        <div className="pagina-vagasadmin">
          
                  <Cabecalho
                  titulo1='Sair'
                  onLogout={reset}
                  titulo2='Vagas'
                  link2='/admin/gerenciamentovagas'
                  titulo3='Notificações'
                  link3='/admin/notificacoes'
                  titulo4='Gerenciamento Vagas'
                  link4='/admin/gerenciamento'
              />     
            
          
        </div>
    )
}