import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/pages/Error.scss";

function Error() {
    return <div id="error">
        <Header />
        <div id="contenu">
            <h1>404</h1>
            <div>
                <a>Oups! La page que </a>
                <a> vous demandez n'existe pas.</a>
            </div>
            
            <Link className="liens" to="/">Retourner sur la page d’accueil</Link>
        </div>
        <Footer />
    </div>
    
}

export default Error;