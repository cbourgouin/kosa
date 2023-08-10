import "../styles/components/Header.scss";
import logoKosa from "../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
    return <header>
        <img src={logoKosa} alt="Kosa" id="logo"/>
        <div id="navbar"> 
            <Link to="/" className="liens">Accueil</Link>
            <Link to="/apropos" className="liens">A Propos</Link>
        </div>
    </header>
}

export default Header;