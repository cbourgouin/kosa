import "../styles/components/Dropdown.scss"
import { useState } from "react";

function Dropdown({title, text}) {
    const [isActive, setIsActive] = useState(false);

    const onClick = () => setIsActive(!isActive);

    return <div className={isActive ? "dropdown active" : "dropdown inactive"} onClick={onClick}>
        <div className="title"><a>{title}</a><i class="fa-solid fa-angle-down"></i></div>
        <div className="text"><p>{text}</p></div>
    </div>
}



export default Dropdown;