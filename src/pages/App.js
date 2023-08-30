import Header from '../components/Header'
import Footer from '../components/Footer'
import logements from '../assets/logements.json'
import Card from '../components/Card';
import '../styles/pages/App.scss'

function App() {

    if (logements === null) {
        return <div>Chargement...</div>;
    }

    return (<div id="app">
        <Header />
        <div id="banner">
            <div>
                <a>Chez vous,</a>
                <a> partout et ailleurs</a>
            </div>
        </div>
        <section id="gallery">
            {
                logements.map((logement) => (
                    <Card logement={logement} key={logement["id"]}/>
                ))
            }
        </section>
        <Footer />
    </div>)
}

export default App
