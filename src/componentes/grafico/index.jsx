import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios'; 

export default function BarChartComponent() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:5010/vagas/s');
        const dadosTratados = response.data.map(item => ({
          name: `Mês ${item.mes}`,
          mes: item.quantidade 
        }));
        setDados(dadosTratados);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <ResponsiveContainer width="60%" height={400}>
      <BarChart data={dados}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="mes" fill="#8884d8" />
    
      </BarChart>
    </ResponsiveContainer>
  );
}
