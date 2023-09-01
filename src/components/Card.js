import "../styles/components/Card.scss"

function Card(props) {

    const handleClick = (id) =>  {
        window.location.href = "/logement/" + id;
    }

    return <article
        style={{ backgroundImage: "url(" + props["logement"]["pictures"]["0"] + ")" }}
        onClick={() => handleClick(props["logement"]["id"])}
    >
        <a>{props["logement"]["title"]}</a>
    </article>
}

export default Card;