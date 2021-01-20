import React from "react";
import { Link } from "react-router-dom"
import PhotoUpload from "./PhotoUpload"

function MemberItem(props) {
    return (

        <li className="cards__item">
            <PhotoUpload />
            <Link className="cards__item__link" to={props.path}>
                <div className="cards__item__info">
                    <h5 className="cards__item__text">Welcome {props.text}!</h5>
                </div>
            </Link>
        </li>

    )
}
export default MemberItem;