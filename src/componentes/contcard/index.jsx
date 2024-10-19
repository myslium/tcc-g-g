import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.scss';
import { Link } from 'react-router-dom';

export default function ContCard() {
    const [vagas, setVagas] = useState([]);
    const [carros, setCarros] = useState(0);



    async function buscarVagas() {
        const response = await axios.get('http://localhost:5010/vagas');
        setVagas(response.data);
    }

    useEffect(() => {
        buscarVagas();
    }, []);

    function navegarCarrossel() {
       
            if (carros < vagas.length - 3) {
                setCarros(carros + 3);
            } else {
                setCarros(0);
            }
        
    }

    useEffect(() => {
        const interval = setInterval(() => {
            navegarCarrossel();
        }, 4000); 

        return () => clearInterval(interval); 
    }, [carros, vagas.length]);

    function aparecerVagas() {
        const elementos = [];
        for (let i = 0; i < 3; i++) {
            const item = carros + i;
            if (item < vagas.length) {
                const vaga = vagas[item];
                elementos.push(
                    <div key={vaga.id} className="contcard">
                        <div className="textinho">
                            <h1 className='titulointeressado'>{vaga.nome_empresa}</h1>
                            <div className="oi">
                                <p className='textointeressado'>{vaga.descricao}</p>
                            </div>
                        </div>
                        <Link to={`/admin/gerenciamento/${vaga.id}`}><p>Veja Mais</p></Link>
                    </div>
                );
            }
        }
        return elementos;
    }

    return (
        <div className="carrossel">
          
            <div className='comp-card-admin'>
                {vagas.length > 0 && aparecerVagas()}
            </div>
          
        </div>
    );
}
