import './index.scss';
import { useState } from 'react';
import Intro from '../../componentes/intro';
import { useNavigate } from 'react-router-dom';
import Cabecalho from '../../componentes/cabeçalho';
import Duvida from '../../componentes/duvida';
import TituloMenor from '../../componentes/titulomenor';
import axios from 'axios';

export default function Robo() {
  const [resposta, setResposta] = useState('');
  const [respondendo, setRespondendo] = useState('');
  const [julia, setJulia] = useState([]);
  const [cpf, setCpf] = useState('');
  const [mostrarTabela, setMostrarTabela] = useState(false);
  const [mostrarInputCpf, setMostrarInputCpf] = useState(false);
  const [mostrarResposta, setMostrarResposta] = useState(false); // Novo estado
  const navigate = useNavigate();

  function resetarEstados() {
    setResposta('');
    setRespondendo('');
    setMostrarTabela(false);
    setMostrarInputCpf(false);
    setCpf('');
    setMostrarResposta(false); // Reseta a visibilidade da resposta
  }

  function cadastro() {
    resetarEstados();
    setTimeout(() => {
      setResposta('Para se cadastrar na vaga desejada basta apenas ir no link do Cabeçalho chamado "VAGAS"...');
      setMostrarResposta(true); // Mostra a resposta
    }, 1000);
    setTimeout(() => {
      setRespondendo(<Duvida sim={sim} nao={nao} />);
    }, 1500);
  }

  function disponiveis() {
    resetarEstados();
    setTimeout(() => {
      setResposta('Em nossa plataforma para ter acesso as vagas disponíveis basta ir no link "VAGAS"...');
      setMostrarResposta(true); // Mostra a resposta
    }, 1000);
    setTimeout(() => {
      setRespondendo(<Duvida sim={sim} nao={nao} />);
    }, 1500);
  }

  function empresa() {
    resetarEstados();
    setTimeout(() => {
      setResposta('Para uma empresa cadastrar uma vaga ou ter interesse em nossos serviços basta ir em "FALE COM O CONSULTOR"...');
      setMostrarResposta(true); // Mostra a resposta
    }, 1000);
    setTimeout(() => {
      setRespondendo(<Duvida sim={sim} nao={nao} />);
    }, 1500);
  }

  function sim() {
    resetarEstados(); 
    setTimeout(() => {
      setRespondendo(
        <Intro
          mensagem="Aqui estão as perguntas:"
          cadastro={cadastro}
          disponiveis={disponiveis}
          empresa={empresa}
          cargo={cargo}
          mostrarCampoCpf={mostrarCampoCpf}
          outro={outro}
        />
      );
    }, 1500);
  }

  function nao() {
    setTimeout(() => {
      alert('Em caso de outra dúvida não esclarecida, fale conosco pelo nosso Email, obrigada!!');
    }, 500);
    navigate('/');
  }

  function cargo() {
    resetarEstados();
    setTimeout(() => {
      setResposta('Em nossa página "VAGAS" lá nós temos vagas com acesso filtrado...');
      setMostrarResposta(true); // Mostra a resposta
    }, 1000);
    setTimeout(() => {
      setRespondendo(<Duvida sim={sim} nao={nao} />);
    }, 1500);
  }

  function mostrarCampoCpf() {
    setMostrarInputCpf(true);
    setResposta('');
    setRespondendo('');
    setMostrarResposta(false); // Reseta a visibilidade
  }

  async function cpfla() {
    const url = `http://localhost:5010/candidatojoinCPF/${cpf}`;
    try {
      const resp = await axios.get(url);
      setJulia(resp.data);
      setMostrarTabela(true);
      setMostrarInputCpf(false); 
      setTimeout(() => {
        setRespondendo(<Duvida sim={sim} nao={nao} />);
      }, 1500);
    } catch (error) {
      console.error("Erro ao buscar CPF:", error);
    }
  }

  function outro() {
    alert('Você será encaminhado para o contato do autonomo!')
  }

  return (
    <div className="robo-secao">
      <Cabecalho
        titulo1="Início"
        link1="/"
        titulo2="Sobre G&G"
        link2="/sobre"
        titulo3="Vagas"
        link3="/vagas"
        titulo4="Fale com consultor"
        link4="/falecomconsultor"
        link5="/bot"
        titulo5="fa-solid fa-robot"
        tituloo5="AJUDA"
        aparecer={true}
      />
      <TituloMenor titulo="Lisa assistente" />
      <div className="cont-robo">
        <Intro
          mensagem="Olá, sou a Lisa assistente do G&G. Estou aqui para esclarecer suas dúvidas. As dúvidas abaixo são as mais frequentes pelo nosso público, caso nenhuma delas seja a sua, tudo certo! Fale conosco através do nosso Email e faremos o possível para esclarecer."
          cadastro={cadastro}
          disponiveis={disponiveis}
          empresa={empresa}
          cargo={cargo}
          mostrarCampoCpf={mostrarCampoCpf}
          outro={outro}
        />
        {mostrarResposta && ( // Condicional para mostrar a resposta
          <div className="resposta">
            <div>
              <img className="lisaimg" src="/assets/images/consultor/lisinha.png" alt="" />
            </div>
            <div className="resppergunta">
              <button className="respbotao">
                <p className="resp">
                  {resposta || (mostrarInputCpf && (
                    <div className="cpf-section">
                      <label>Digite seu CPF:</label>
                      <input
                        type="text"
                        className="cpfinput"
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                      />
                      <button onClick={cpfla}>Enviar CPF</button>
                    </div>
                  ))}
                </p>
              </button>
              
              {mostrarTabela && (
                <div className="table-container">
                  <table>
                    <thead>
                      <tr>
                        <th>Nome</th>
                        <th>Cargo</th>
                        <th>CPF</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {julia.map((item) => (
                        <tr key={item.id}>
                          <td>{item.nome}</td>
                          <td>{item.cargo}</td>
                          <td>{item.cpf}</td>
                          <td>{item.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <p className="respondendo">{respondendo}</p>
    </div>
  );
}
