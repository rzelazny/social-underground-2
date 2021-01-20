import React from "react";
import { Link } from "react-router-dom"
import PhotoUpload from "./PhotoUpload"

function MemberItem(props) {
    return (

        <li className="cards__item">
            <PhotoUpload />
            <Link className="cards__item__link" to={props.path}>
                <div className="cards__item__info">
                    <h6 className="cards__item__text">Welcome {props.text}!</h6>
                    <br />
                    <h4 className="cards__item__text">Lifetime blackjack winnings: {props.text2} !</h4>
                    <br />
                    <h4 className="cards__item__text">Lifetime house winnings: {props.text3} !</h4>
                </div>
            </Link>
        </li>

    )
}
export default MemberItem;