import Header from "../components/Header"
import Dropdown from "../components/Dropdown"
import Footer from "../components/Footer"
import logements from '../assets/logements.json'
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/pages/Logement.scss";

function Logement() {
    const { id } = useParams();
    const data = logements.find((logement) => logement["id"] === id);
    const [imgActive, setImageActive] = useState(0);
    const navigate = useNavigate();

    const previousImage = (nbImg) => {
        if (imgActive === 0) {
            setImageActive(nbImg - 1);
        } else {
            setImageActive(imgActive - 1);
        }
    }

    const nextImage = (nbImg) => {
        if (imgActive === nbImg - 1) {
            setImageActive(0);
        } else {
            setImageActive(imgActive + 1);
        }
    }

    //Penser a renvoyer a la page 404 quand la données n'est pas trouver 
    if (data === undefined) {
        // document.location.href = "/404";
        navigate("/404");
    }

    return <div id="logement">
        <Header />
        <section id="carousel">
            <button className="previous" onClick={() => data.pictures !== null ? previousImage(data.pictures.length) : false}><i className="fa-solid fa-chevron-left"></i></button>
            {
                data.pictures.map((picture, index) => (
                    <img src={picture} alt={"image"} key={index} style={imgActive === index ? { display: "block" } : { display: "none" }} />
                ))
            }
            <a className="count">{ (imgActive + 1).toString() + "/" + data.pictures.length.toString()}</a>
            <button className="next" onClick={() => data.pictures !== null ? nextImage(data.pictures.length) : false}><i className="fa-solid fa-chevron-right"></i></button>
        </section>
        <div id="ttrh">
            <div id="titleAndTags">
                <title>
                    <a id="primary">{data.title}</a>
                    <a id="secondary">{data.location}</a>
                </title>
                <section id="tags">
                    {
                        data.tags.map((tag, index) => (
                            <div className="tag" key={"tag_" + index}>
                                <a>{tag}</a>
                            </div>
                        ))
                    }
                </section>
            </div>
            <div id="ratingAndHost">
                <section id="rating">
                    <i className={"fa-solid fa-star " + (parseInt(data["rating"]) > 0 ? "active" : "inactive")}></i>
                    <i className={"fa-solid fa-star " + (parseInt(data["rating"]) > 1 ? "active" : "inactive")}></i>
                    <i className={"fa-solid fa-star " + (parseInt(data["rating"]) > 2 ? "active" : "inactive")}></i>
                    <i className={"fa-solid fa-star " + (parseInt(data["rating"]) > 3 ? "active" : "inactive")}></i>
                    <i className={"fa-solid fa-star " + (parseInt(data["rating"]) > 4 ? "active" : "inactive")}></i>
                </section>
                <section id="host">
                    <a>{data.name}</a>
                    <img src={data.host.picture}></img>
                </section>
            </div>
        </div>
        <div id="descriptionAndEquipment">
            <Dropdown title="Description" text={data.description} />
            <Dropdown title="Équipements" text=
                {
                    data.equipments.map((equipment, index) => (
                        <a key={ "equipment_" + index }>{equipment}</a>
                    ))
                } />
        </div>
        <Footer />
    </div>
}

export default Logement;