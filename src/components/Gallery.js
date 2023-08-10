import logements from '../assets/logements.json'
import Card from '../components/Card';
import "../styles/components/Gallery.scss"

function Gallery() {

    if (logements === null) {
        return <div>Chargement...</div>;
    }

    return (
        <section id="gallery">
            {
                logements.map((logement) => (
                    <Card logement={logement} key={logement["id"]}/>
                ))
            }
        </section>
    )
}

export default Gallery;