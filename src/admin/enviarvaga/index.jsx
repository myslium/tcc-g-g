import './index.scss';
import Cabecalho from '../../componentes/cabeçalho';
import TituloMenor from '../../componentes/titulomenor';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast'; 
import axios from 'axios';

export default function EnviarVaga() {
    const [descricao, setDescricao] = useState('');
    const [emailEmpresa, setEmailEmpresa] = useState('');
    const [vaga, setVaga] = useState('');
    const [cpfCandidato, setCpfCandidato] = useState('');
    const [curriculo, setCurriculo] = useState(null);

    const [cv_Url, set_CVUrl] = useState(null);
    const [cv_Extensao, set_CVExtensao] = useState(null);

    const navigate = useNavigate();

    async function buscarCPF() {
        try {
            const url = `http://4.172.207.208:5017/candidatocurrc`;

            let dado ={
                'cpf':cpfCandidato,
                'contato_empresa': emailEmpresa,
                'cargo': vaga
            }
            const response = await axios.post(url, dado, { responseType: 'blob' });

            const extensao = response.headers['content-type'] === 'application/pdf' ? 'pdf' :
                response.headers['content-type'] === 'application/msword' ? 'doc' :
                response.headers['content-type'] === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ? 'docx' : '';

            if (!extensao) {
               
                toast.error("Formato de arquivo não suportado", {
                    style: {
                      borderRadius: '10px',
                     background: 'rgba(255, 0, 0, 0.1)',
                  color: '#a04dff'
                    }
                  });
                return;
            }

            const urlBlob = window.URL.createObjectURL(new Blob([response.data]));
            set_CVUrl(urlBlob);
            set_CVExtensao(extensao);
            toast.success('Verifique o currículo');

        } catch (error) {
            toast.error('Erro ao baixar o currículo:', {
                style: {
                  borderRadius: '10px',
                 background: 'rgba(255, 0, 0, 0.1)',
              color: '#a04dff'
                }
              });
            
            console.error("Erro ao baixar o currículo:", error);
        }
    }

    function baixarCV() {
        if (!cv_Url) {
           
            toast.error('Procure o candidato por CPF antes.', {
                style: {
                  borderRadius: '10px',
                 background: 'rgba(255, 0, 0, 0.1)',
              color: '#a04dff'
                }
              });
            return;
        }

        const link = document.createElement('a');
        link.href = cv_Url;
        link.setAttribute('download', `curriculo.${cv_Extensao}`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    async function adicionarCandidatoFinal() {
        const corpo = {
            emailEmpresa: emailEmpresa,
            cargo: vaga,
            descricao: descricao,
            cpf: cpfCandidato, 
            curriculo: curriculo 
        };

        const url = `http://4.172.207.208:5017/mandaremail`; 
        try {
            await axios.post(url, corpo);
           toast.success('E-mail enviado com sucesso!');
        } catch (error) {
          
               toast.error('Erro ao enviar o e-mail', {
                style: {
                  borderRadius: '10px',
                 background: 'rgba(255, 0, 0, 0.1)',
              color: '#a04dff'
                }
              });
            console.error("Erro ao enviar o e-mail:", error);
        }
    }

    function reset() {
        localStorage.removeItem('token');
        navigate('/');
    }

    return (
        <div className='pagina-enviarvaga'>
            <Cabecalho
                titulo01='Sair'
                onLogout={reset}
                titulo2='Vagas'
                link2='/admin/gerenciandovagas'
                titulo3='Notificações'
                link3='/admin/notificacoes'
                titulo4='Gerenciamento Vagas'
                link4='/admin/gerenciamento'
            />

            <TituloMenor titulo='Enviar Vaga' />

            <div className='centro'>
            <div className='formulario'>
                <div className='inputs'>
                    <label>Vaga:</label>
                    <input type="text" value={vaga} onChange={e => setVaga(e.target.value)} />
                    <label>E-mail comercial:</label>
                    <input type="text" value={emailEmpresa} onChange={e => setEmailEmpresa(e.target.value)} />
                    <label>Descrição:</label>
                    <input type="text" value={descricao} onChange={e => setDescricao(e.target.value)} />
                </div>

                <h1>Selecione os candidatos</h1>
                <div className='pesquisar'>
                    <button onClick={buscarCPF}><i id='icon' className='fa fa-search'></i></button>
                    <input id='pesquisa-cpf' type="text" placeholder='cpf' value={cpfCandidato} onChange={e => setCpfCandidato(e.target.value)} />
                </div>

                <div className='selecionados'>
                    <div className='candidatos'>
                        <button className='butt on' onClick={baixarCV}>Baixar Currículo</button>
                    </div>
                </div>
                <div className='botao'>
                <button onClick={adicionarCandidatoFinal}>Confirmar</button>
            </div>
            </div>

           
            </div>
            < Toaster />
     
        </div>
    );
}
