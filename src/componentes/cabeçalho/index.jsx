import './index.scss';
import { Link } from 'react-router-dom';
export default function Cabecalho() {


    return (
        <header className="cabeçalho">
            <div className="imh1">
                <img className="geg" src="/assets/images/cabecalho/logo.png" alt="G&G" />
                <h1>G&G</h1>
            </div>

            <nav>
                <ul>
                    <li><Link to= '/'>Inicio</Link></li>
                    <li><Link to='/sobre' >Sobre G&G</Link></li>
                    <li><Link to='/vagas' >Vagas</Link></li>
                    <li><Link to='/acompanheoprocesso' >Acompanhe o processo</Link></li>
                </ul>
            </nav>
            <div className="imh1">
            <img className="login" src="/assets/images/cabecalho/perfil.png" alt="G&G" />
                
            </div>

        </header>
    )
}