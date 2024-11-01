import { useState, useEffect } from 'react'
import Cabecalho from '../../componentes/cabeçalho'
import TituloMenor from '../../componentes/titulomenor';
import ContCard from '../../componentes/contcard';
import CarrosselVagas from '../../componentes/cardvisao';
import axios from 'axios'
import moment from 'moment';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


import { useNavigate } from 'react-router-dom';
import './index.scss'


export default function Notificacoes() {
    const navigate = useNavigate();

    const [titulo, settitulo] = useState('');
    const [data, setdata] = useState('');
    const [conteudo, setconteudo] = useState('');
    const [cards, setcards] = useState([]);
    const [alterando, setAlterando] = useState(-1);
    const [dados, setDados] = useState([]);
    const [feedback, setFeedback] = useState('');
  
    async function fetchData() {
      try {
        const cor = ['#c014c0','#681268']
        const response = await axios.get(`http://4.172.207.208:5017/formulario/s`);
        const dadosTratados = response.data.map((item, pos) => ({
          name: `Mês ${item.mes}`,
          mes: item.quantidade,
          fill: cor[pos % cor.length]
        }));
        setDados(dadosTratados);
  
        if (dadosTratados.length >= 2) {
          const mesPassado = dadosTratados[dadosTratados.length - 2];
          const mesAtual = dadosTratados[dadosTratados.length - 1];
  
          const mesPassadoNome = `Mês ${mesPassado.name.split(' ')[1]}`;
          const mesAtualNome = `Mês ${mesAtual.name.split(' ')[1]}`;
          
          if (mesAtual.mes > mesPassado.mes) {
            setFeedback(`Seu gráfico mostra que você teve um desempenho melhor em ${mesAtualNome} em comparação a ${mesPassadoNome}. O aumento de ${mesPassado.mes} para ${mesAtual.mes} vagas fechadas é um ótimo sinal. Esse aumento pode ser um reflexo de melhores técnicas de recrutamento ou um aumento na demanda. Continue a analisar o que funcionou bem e considere aplicar essas estratégias em futuros meses.`);
          } else if (mesAtual.mes < mesPassado.mes) {
            setFeedback(`Seu gráfico mostra que você teve um desempenho pior em ${mesAtualNome} em comparação a ${mesPassadoNome}. O número de vagas fechadas caiu de ${mesPassado.mes} para ${mesAtual.mes}. É importante revisar as estratégias de recrutamento e identificar possíveis áreas de melhoria para aumentar as vagas fechadas no próximo mês.`);
          } else {
            setFeedback(`Seu gráfico mostra que o desempenho se manteve estável entre ${mesAtualNome} e ${mesPassadoNome}. A quantidade de vagas fechadas permaneceu em ${mesAtual.mes}. Considere novas abordagens para impulsionar o fechamento de vagas.`);
          }
        }
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    }
  

    async function vernotas() {
        const url = `http://4.172.207.208:5017/inserirNota`;
        let resp = await axios.get(url);
        setcards(resp.data);
       
        
    }

    useEffect(() => {
    
        vernotas()
        fetchData()
    }, []);


    async function adicionarnota() {

        if (titulo === '' && data === '' && conteudo === '') {
            alert('Preencha todos os campos!')
        }
        else {

            const obj = {
                "titulo": titulo,
                "corpo": conteudo,
                "data": data
            }

            if (alterando === -1) {

                const url = `http://4.172.207.208:5017/inserirNota`
                await axios.post(url, obj)

                settitulo('')
                setconteudo('')
                setdata('')
                alert('notas adicionadas com sucesso')
                window.location.reload();

            }

            else {

                const url = `http://4.172.207.208:5017/inserirNota/${alterando}`
                await axios.put(url, obj)
                alert('Nota alterada!')
                settitulo('')
                setconteudo('')
                setdata('')

                setAlterando(-1)

                await vernotas()
            }

        }



    }



    function reset() {
        localStorage.removeItem('token');
        navigate('/')
    }

    async function excluir(id) {
        const url = `http://4.172.207.208:5017/inserirNota/${id}`
        await axios.delete(url)

        await vernotas()

    }

    async function alterar(pos, id) {
        settitulo(cards[pos].titulo)
        setconteudo(cards[pos].corpo)
        setdata(moment(cards[pos].data).format('YYYY-MM-DD'))
        setAlterando(id)
    }

    return (
        <div className="pagina-interessados">

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


            <TituloMenor
                titulo='Interesses no seu serviço'
            />


            <div className="cards-interessados">

                <ContCard />



            </div>




            <TituloMenor titulo='Visão geral' />

            <div className="visaogeral">



                <CarrosselVagas />
            </div>


            <TituloMenor
                titulo='Metas'
            />

            <div className='metas'>

            <div className="barchart-container">
      <ResponsiveContainer  width="60%" height="100%">
        <BarChart data={dados}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="mes" fill='#77138b' radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      {feedback && 
        <div className="resultado" style={{ marginTop: '10px' }}>
          <h1>Feedback</h1>
          <p>{feedback}</p>
        </div>
      }
    </div>

            </div>

            <TituloMenor titulo='Notas fixadas' />

            <section className='ultima-parte-notas'>

                <div className='nova-nota'>

                    <div className='titulo-notas'>

                        <h1 className='anotaaqui'>Anote aqui...</h1>


                        <button onClick={adicionarnota} >Fixar</button>


                    </div>



                    <div className='inputs'>

                        <div>
                            <input type="text" placeholder='Titulo' value={titulo} onChange={e => settitulo(e.target.value)} />
                            <input type="date" value={data} onChange={e => setdata(e.target.value)} />

                        </div>

                        <textarea placeholder='Conteúdo' value={conteudo} onChange={e => setconteudo(e.target.value)} ></textarea>

                    </div>
                </div>

                <div className='notas-adicionadas'>
                    {cards.map((item, pos) =>

                        <div key={pos} className='card-nota'>

                            <div className='titulo'>
                                <img src="/assets/images/notaspincel.png" alt="" />
                                <h1>{item.titulo}</h1>
                                <i id='check' className='fa fa-check icon'></i>


                            </div>
                            <p>{item.corpo}</p>

                            <div className='icones'>
                                <button onClick={() => excluir(item.id)}><i id='icon' className='fa fa-trash'></i></button>
                                <button onClick={() => alterar(pos, item.id)}><i id='icon' className='fa fa-pencil'></i></button>


                                <h3>{(new Date(item.data_publicacao).toLocaleDateString())}</h3>
                            </div>
                        </div>


                    )}


                </div>
            </section>

        </div>


    )
}