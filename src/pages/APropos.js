import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import "../styles/pages/APropos.scss"
import propos from '../assets/propos.json'

function APropos() {
    return <div id="apropos">
        <Header />
        <div id="contenu">
            <div id="banner" />
            {
                propos.map((propo, index) => (
                    <Dropdown
                        title={propo.title}
                        text={propo.text}
                        key={"propo_"+index}
                    />
                ))
            }
        </div>
        <Footer />
    </div>
}

export default APropos;