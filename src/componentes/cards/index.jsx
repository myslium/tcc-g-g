import './index.scss';

export default function Cards(props) {
    return (
        <div className="cards">
            <div className="card1"> 
                <img src={props.url} alt="" />
                <div className='texto'>
                    <h1>{props.titulo}</h1>
                    <ul>
                        {props.topicos.map((topico, index) => (
                            <li key={index}>{topico}</li>
                        ))}
                    </ul>    
                </div>
            </div>
        </div>
    );
}
