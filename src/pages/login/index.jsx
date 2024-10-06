import React from 'react';
import './index.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { useState } from 'react';

export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate(); 

    async function entrar(e) {
        e.preventDefault();
        
        
            let url = `http://localhost:5010/login/adm?usuario=${usuario}&senha=${senha}`;
            let resp = await axios.post(url);
    
            if (resp.data.token) {  
                navigate('/admin/notificacoes');
            } else {
                alert('Usuário ou senha incorretos');
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
                                <input type="text" id="username" placeholder="Usuário" value={usuario} onChange={(e) => setUsuario(e.target.value)} />
                                <i className="fas fa-user icon"></i>
                            </div>
                            <div className="input-group">
                                <input type="password" id="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
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
