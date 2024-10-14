import React, { useState } from 'react';
import './index.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate(); 

    
    async function entrar(e) {
        e.preventDefault(); 
        
        try {
            const url = 'http://localhost:5010/login/adm';
            const resp = await axios.post(url, { usuario, senha });

            if (resp.data.token) {
                localStorage.setItem('token', resp.data.token);
                navigate('/admin/notificacoes');
            } else {
                alert('Usuário ou senha incorretos');
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                alert('Usuário ou senha incorretos');
            } else {
                alert('Erro ao realizar o login. Tente novamente mais tarde.');
            }
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
                                    type="password" 
                                    id="password" 
                                    placeholder="Senha" 
                                    value={senha} 
                                    onChange={(e) => setSenha(e.target.value)} 
                                />
                                <i className="fas fa-lock icon"></i>
                            </div>
                        </div>
                        <button type="submit" className="login-btn">Entrar</button>
                    </form>
                </div>
                <div className="spacer"></div>
            </div>
            <Link to='/admin/notificacoes'>d</Link>
        </div>
    );
}
