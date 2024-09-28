import './index.scss';

export default function Footer() {


    return (
        <footer className="footer">
            
        <div className="footer-content">

            <div className="logo">
                <img src="/assets/images/cabecalho/logo.png" alt="Gente&Gestão Logo" />
                <span>Gente&Gestão</span>
            </div>

            <div className="contact">
                <h3>Entre em contato</h3>
                <p>gente.gestao@gmail.com</p>
            </div>
        </div>

        <div className="footer-bottom">
            <p>Copyright © 2024 G&G - Todos os direitos reservados à Femme</p>
        </div>
    </footer>

    )

}