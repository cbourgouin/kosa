import "../styles/Card.scss"

function Card(props) {
    return <article 
                style={{backgroundImage: "url(" + props["logement"]["pictures"]["0"] + ")"}}
            > 
        <a>{props["logement"]["title"]}</a> 
    </article>
}

export default Card;