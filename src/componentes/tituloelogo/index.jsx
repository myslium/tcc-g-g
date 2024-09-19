import './index.scss';
export default function Tituloelogo(props) {


    return (
        <div className="tituloelogo">
            <div className="imh1">
                <img className="geg" src="/assets/images/cabecalho/logo.png" alt="G&G" />
                <h1>{props.titulo}</h1>
            </div>

        </div>
    )
}