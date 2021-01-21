import React from "react";
import PhotoUpload from "../PhotoUpload/index"
import { CardBody, Card, CardTitle, CardSubtitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

function MemberItem(props) {
    return (

        <li className="cards__item">
            <PhotoUpload />
            <Card className="cards__item__link">
                <CardBody>
                    <CardTitle tag="h2">Welcome, {props.username}!</CardTitle>
                    <hr />
                    <CardSubtitle tag="h4">Blackjack Stats:</CardSubtitle>
                    <br />
                        <p className="data" tag="h6">Lifetime Blackjack Winnings: {props.blackjackWin}</p>
                        <p className="data" tag="h6">Lifetime Blackjack Losses: {props.blackjackLosses}</p>
                        <p className="data" tag="h6">Blackjack Ratio: {props.blackjackRatio}</p>
                </CardBody>
            </Card>
        </li>

    )
}
export default MemberItem;