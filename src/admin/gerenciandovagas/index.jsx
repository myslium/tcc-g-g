import { useState } from 'react'
import Cabecalho from '../../componentes/cabeçalho'
import Tituloelogo from '../../componentes/tituloelogo'
import { useNavigate } from 'react-router-dom';
import './index.scss'


export default function Vagasadmin(){
    const navigate = useNavigate();

    function reset() {
        localStorage.removeItem('token');
        navigate('/');
    }
    return(
        <div className="pagina-vagasadmin">
          
                  <Cabecalho
                  titulo1='Sair'
                  onLogout={reset}
                  titulo2='Vagas'
                  link2='/admin/gerenciandovagas'
                  titulo3='Notificações'
                  link3='/admin/notificacoes'
                  titulo4='Gerenciamento Vagas'
                  link4='/admin/gerenciamento'
              />     
            
          
        </div>
    )
}