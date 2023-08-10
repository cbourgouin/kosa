import logoKosaWhite from "../assets/logo_white.png";
import "../styles/components/Footer.scss";

function Footer() {
    return <footer>
        <img src={logoKosaWhite} ></img>
        <a>© 2020 Kasa. All rights reserved</a>
    </footer>
}

export default Footer;