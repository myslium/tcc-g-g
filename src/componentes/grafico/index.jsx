import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios'; 
import './index.scss'; // Importando o arquivo SCSS

export default function BarChartComponent() {
  const [dados, setDados] = useState([]);
  const [feedback, setFeedback] = useState('');

  async function fetchData() {
    try {
      const cor = ['#c014c0','#681268']
      const response = await axios.get('http://localhost:5010/formulario/s');
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="barchart-container">
      <ResponsiveContainer width="50%" height="100%">
        <BarChart data={dados}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="mes" fill='#77138b' radius={[10, 10, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
      {feedback && 
        <div className="resultado" style={{ marginTop: '10px' }}>
          <h1>Feedback</h1>
          <p>{feedback}</p>
        </div>
      }
    </div>
  );
}
