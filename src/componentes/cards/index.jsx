import './index.scss';
export default function Cards(props) {


    return (
        <div className="cards">
            <div className="card"> 
            <img src={props.url} alt="" />
            <h1>{props.titulo}</h1>
            <ul>
               <li>{props.topico}</li> 
            </ul>
           </div>

            
           
            
        </div>
    )
}