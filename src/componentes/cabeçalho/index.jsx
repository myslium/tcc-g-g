import './index.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Cabecalho() {
    const [menuAberto, setMenuAberto] = useState(false);
    const [titulo, setTitulo] = useState('G&G'); 
    const [larguraTela, setLarguraTela] = useState(window.innerWidth); 

    useEffect(() => {
        
        window.addEventListener('resize', atualizarLarguraTela);

        
        return () => {
            window.removeEventListener('resize', atualizarLarguraTela);
        };
    }, []);

    useEffect(() => {
        atualizarTitulo();
    }, [menuAberto, larguraTela]); 

    const atualizarLarguraTela = () => {
        setLarguraTela(window.innerWidth);
    };

    function atualizarTitulo() {
        if (larguraTela <= 768 || menuAberto) {
            setTitulo('GENTE & GESTÃO');
        } else {
            setTitulo('G&G');
        }
    }

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    return (
        <header className="cabeçalho">
            <div className="container">
                <div className="imh1">
                    <img className="geg" src="/assets/images/cabecalho/logo.png" alt="G&G" />
                    <h1 className="h1">{titulo}</h1>
                </div>
                <div className={`menu-toggle ${menuAberto ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <nav className={menuAberto ? 'aberto' : ''}>
                    <ul>
                        <li><Link to='/'>Início</Link></li>
                        <li><Link to='/sobre'>Sobre G&G</Link></li>
                        <li><Link to='/vagas'>Vagas</Link></li>
                        <li><Link to='/falecomconsultor'>Acompanhe o processo</Link></li>
                        <li>
                            <Link to='/login'>
                                
                                    <img className="login" src="/assets/images/cabecalho/perfil.png" alt="Perfil" /> 
                             
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
