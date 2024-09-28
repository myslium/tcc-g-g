import React from 'react';
import './index.scss';

export default function Login() {
    return (
        <div className='pagina-login'>
            <div className="login-box1">
                <div className="login-box">
                    <div className="login-header">
                        <img src="/assets/images/cabecalho/logo.png" alt="G&G" />
                        <h2>Login</h2>
                    </div>
                    <form className="login-form">
                    <div className='inputs'>
                            <div className="input-group">
                                <input type="text" id="username" placeholder="Usuário" />
                                <i className="fas fa-user icon"></i>
                            </div>
                            <div className="input-group">
                                <input type="password" id="password" placeholder="Senha" />
                                <i className="fas fa-lock icon"></i>
                            </div>
                        </div>

                        <button type="submit" className="login-btn">Entrar</button>
                    </form>
                </div>
                <div class="spacer"></div>
            </div>
        </div>
    );
}

