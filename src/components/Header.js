import "../styles/Header.scss";
import logoKosa from "../assets/logo.png";

function Header() {
    return <header>
        <img src={logoKosa} alt="Kosa" id="logo"/>
        <div id="navbar"> 
            <a href="/" className="liens">Accueil</a>
            <a href="apropos" className="liens">A Propos</a>
        </div>
    </header>
}

export default Header;