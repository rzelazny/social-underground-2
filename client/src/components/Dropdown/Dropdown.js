import React, {useState} from "react";
import {DropItem} from "./DropItem"
import {Link} from "react-router-dom"
import "./Dropdown.css"

function Dropdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div>
            <ul onClick={handleClick}
            className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
            {DropItem.map((item, index) => {
                return (
                    <li key={index}>
                        <Link className= {item.cName} to={item.path} onClick={() => setClick(false)}>{item.title}</Link>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default Dropdown