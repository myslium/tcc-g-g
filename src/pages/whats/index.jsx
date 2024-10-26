import { useState } from 'react';
import './index.scss';
export default function Whats() {

   

    return (
        <div className="whats-comp">
            <div className="whats">
                <h1 className='titu'>Você está sendo direcionado ao contato do autonomo, deseja prosseguir?</h1>
                <div className="simnao">
                    <a className='sim' href="https://wa.me/5511986007559">sim</a>
                <a className='nao' href="/cartaogg">não</a>
                </div>
                
                <img src="/assets/images/consultor/whats.jpg" alt="" />
            </div>

        </div>
    )
}