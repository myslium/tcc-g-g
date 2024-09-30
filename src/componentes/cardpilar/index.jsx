import './index.scss';
export default function Cardspilar(props) {


    return (
        <div className="cardspilar">
            <div className="cardpilar"> 
            <h1>{props.titulo}</h1>
            <pre>{props.topico}</pre>
           </div>

            
           
            
        </div>
    )
}