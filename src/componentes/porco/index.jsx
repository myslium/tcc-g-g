import { useState } from 'react';
import './index.scss';
export default function Porco(props) {

   

    return (
        <div className="porco-comp">
            <div className="porquinho">
                <button className='b1' onClick={props.function1}>{props.p1}</button>
                <button className='b2' onClick={props.function2}>{props.p2}</button>
            </div>

        </div>
    )
}