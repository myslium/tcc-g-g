import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.scss';
import { Link } from 'react-router-dom';



export default function CarrosselVagas() {
    const [vagas, setVagas] = useState([]);
    const [carros, setCarros] = useState(0);

    function navegarCarrossel(direcao) {
        if (direcao === 'proximo') {

            if (carros < vagas.length - 3) {
                setCarros(carros + 3);
            } else {
                setCarros(0);
            }
        } else if (direcao === 'anterior') {

            if (carros >= 3) {
                setCarros(carros - 3);
            } else {
                setCarros(0);
            }
        }
    }

    async function buscarVagas() {
        const response = await axios.get(`http://4.172.207.208:5017/vagas`);
        setVagas(response.data);
    }

    useEffect(() => {

        buscarVagas();
    }, []);


    function aparecerVagas() {
        const elementos = [];
        for (let i = 0; i < 3; i++) {
            const item = carros + i;
            if (item < vagas.length) {
                const vaga = vagas[item];
                elementos.push(
                    <div key={item} className="card">
                        <h1>{vaga.nome_empresa}</h1>
                        <h2>{vaga.cargo}</h2>
                        <h3>{new Date(vaga.data_criacao).toLocaleDateString()}</h3>
                        <Link to={`/admin/gerenciamento/${vaga.id}`} className="link-btn">
                            <button><i className="fa-solid fa-ellipsis"></i></button>
                        </Link>
                    </div>
                );
            }
        }
        return elementos;
    }

    return (
        <div className="carrossel">
            <button onClick={() => navegarCarrossel('anterior')}>
                <i className="fa fa-angle-left" aria-hidden="true" style={{ fontSize: '5vw' }}></i></button>
            <div className='comp-visao-geral '>
                <div className="cards-container">
                    {vagas.length > 0 && aparecerVagas()}
                </div>
            </div>

            <button onClick={() => navegarCarrossel('proximo')}>   <i className="fa fa-angle-right" aria-hidden="true" style={{ fontSize: '5vw' }} ></i></button>
        </div>
    );
}
