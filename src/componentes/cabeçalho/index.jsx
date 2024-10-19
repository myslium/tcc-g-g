import './index.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Cabecalho(props) {
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

    const atualizarTitulo = () => {
        if (larguraTela <= 768 || menuAberto) {
            setTitulo('GENTE & GESTÃO');
        } else {
            setTitulo('G&G');
        }
    };

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
                        {props.onLogout ? (
                            <li className='oi' onClick={props.onLogout}>{props.titulo1}</li> 
                        ) : (
                            <li>
                                <Link to={props.link1}>{props.titulo1}</Link> 
                            </li>
                        )}
                        <li><Link to={props.link2}>{props.titulo2}</Link></li>
                        <li><Link to={props.link3}>{props.titulo3}</Link></li>
                        <li><Link to={props.link4}>{props.titulo4}</Link></li>
                        <li><Link  className="robot-link" to={props.link5}><i className={props.titulo5} ></i>
                        <span>{props.tituloo5}</span></Link></li>

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
