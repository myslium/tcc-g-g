import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios'; 

export default function BarChartComponent() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
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
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <ResponsiveContainer width="50%" height={450}>
      <BarChart data={dados}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="mes" fill='#77138b' radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
  
}
