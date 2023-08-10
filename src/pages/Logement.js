import Header from "../components/Header"
import Dropdown from "../components/Dropdown"
import logements from '../assets/logements.json'
import { useParams } from "react-router-dom";
import { useState } from "react";
import "../styles/pages/Logement.scss";

function Logement() {
    const { id } = useParams();
    const data = logements.filter((logement) => logement["id"] === id);
    const [imgActive, setImageActive] = useState(0);

    const previousImage = (nbImg) => {
        if (imgActive === 0) {
            setImageActive(nbImg - 1);
        } else {
            setImageActive(imgActive - 1);
        }
        console.log(imgActive);
    }

    const nextImage = (nbImg) => {
        if (imgActive === nbImg - 1) {
            setImageActive(0);
        } else {
            setImageActive(imgActive + 1);
        }
        console.log(imgActive);
    }

    //Penser a renvoyer a la page 404 quand la données n'est pas trouver 

    return <div id="logement">
        <Header />
        <section id="carousel">
            <button className="previous" onClick={() => previousImage(data[0]["pictures"].length)}><i class="fa-solid fa-chevron-left"></i></button>
            {
                data[0]["pictures"].map((picture, index) => (
                    <img src={picture} alt={"image"} key={index} style={imgActive === index ? { display: "block" } : { display: "none" }} />
                ))
            }
            <button className="next" onClick={() => nextImage(data[0]["pictures"].length)}><i class="fa-solid fa-chevron-right"></i></button>
        </section>
        <div id="ttrh">
            <div id="titleAndTags">
                <titles>
                    <a id="primary">{data[0]["title"]}</a>
                    <a id="secondary">{data[0]["location"]}</a>
                </titles>
                <section id="tags">
                    {
                        data[0]["tags"].map((tag, index) => (
                            <div className="tag" key={"tag_" + index}>
                                <a>{tag}</a>
                            </div>
                        ))
                    }
                </section>
            </div>
            <div id="ratingAndHost">
                <section id="rating">
                    <i className={"fa-solid fa-star " + (parseInt(data[0]["rating"]) > 0 ? "active" : "inactive")}></i>
                    <i className={"fa-solid fa-star " + (parseInt(data[0]["rating"]) > 1 ? "active" : "inactive")}></i>
                    <i className={"fa-solid fa-star " + (parseInt(data[0]["rating"]) > 2 ? "active" : "inactive")}></i>
                    <i className={"fa-solid fa-star " + (parseInt(data[0]["rating"]) > 3 ? "active" : "inactive")}></i>
                    <i className={"fa-solid fa-star " + (parseInt(data[0]["rating"]) > 4 ? "active" : "inactive")}></i>
                </section>
                <section id="host">
                    <a>{data[0]["host"]["name"]}</a>
                    <img src={data[0]["host"]["picture"]}></img>
                </section>
            </div>
        </div>
        <div id="descriptionAndEquipment">
            <Dropdown title="Description" text={data[0]["description"]} />
            <Dropdown title="Équipements" text=
                {
                    data[0]["equipments"].map((equipment) => (
                        <a>{equipment}</a>
                    ))
                } />
        </div>
    </div>
}

export default Logement;