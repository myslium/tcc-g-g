import React, { useState } from 'react';
import './index.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const [ver, setVer] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    async function entrar(e) {
        e.preventDefault();
        if (!usuario || !senha) {
            setErrorMessage('Por favor, preencha todos os campos.');
            return;
        }

        setLoading(true);
        setErrorMessage('');

        try {
            const url = `http://4.172.207.208:5017/login/adm`;
            const resp = await axios.post(url, { usuario, senha });

            if (resp.data.token) {
                localStorage.setItem('token', resp.data.token);
                setUsuario('');
                setSenha('');
                navigate('/admin/notificacoes');
            } else {
                setErrorMessage('Você não tem permissão de acessar essa área.');
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setErrorMessage('Você não tem permissão de acessar essa área.');
            } else {
                setErrorMessage('Erro ao realizar o login. Tente novamente mais tarde.');
            }
        } finally {
            setLoading(false);
        }
    }


    


    

    return (
        <div className='pagina-login'>
            <div className="login-box1">
                <div className="login-box">
                    <div className="login-header">
                        <img src="/assets/images/cabecalho/logo.png" alt="G&G" />
                        <h2>Login</h2>
                    </div>
                    <form className="login-form" onSubmit={entrar}>
                        <div className='inputs'>
                            <div className="input-group">
                                <input
                                    type="text"
                                    id="username"
                                    placeholder="Usuário"
                                    value={usuario}
                                    onChange={(e) => setUsuario(e.target.value)}
                                />
                                <i className="fas fa-user icon"></i>
                            </div>
                            <div className="input-group">
                                <input
                                    type={ver ? "text" : "password"}
                                    id="password"
                                    placeholder="Senha"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                                <i className="fas fa-lock icon"></i>

                                <span onClick={() => setVer(!ver)} className="eye-icon">
                                <i className="fa fa-eye" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>
                        <button type="submit" className="login-btn" disabled={loading}>
                            {loading ? 'Entrando...' : 'Entrar'}
                        </button>
                    </form>
                    {errorMessage && (
                        <div className="error-message">
                            {errorMessage}
                        </div>
                    )}
                </div>
                <div className="spacer"></div>
            </div>
        </div>
    );
}
