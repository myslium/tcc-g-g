import { useState } from 'react';
import './index.scss';
export default function Pix() {

   

    return (
        <div className="pix-comp">
            <div className="pixinho">
                <div className="tituloo">
                <a className='back' href="/"><img src="/assets/images/consultor/back.png" alt="" /></a>
                <h1 className='titu'>Escaneie o QRCODE para ser direcionado até a página de pagamento. <br /> Obrigada por confiar em nossos serviços!</h1>
               </div> 
               <div className="imagens">
                <img className='paga' src="/assets/images/consultor/paga.jpg" alt="" />
                <img className='qrcode' src="/assets/images/consultor/qrcode.png" alt="" />
            </div>
            </div>

        </div>
    )
}