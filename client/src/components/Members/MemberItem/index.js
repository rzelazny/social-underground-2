import React from "react";
import PhotoUpload from "../PhotoUpload/index"
import { CardBody, Card, CardTitle, CardSubtitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

function MemberItem(props) {
    return (

        <div className="cards__item">
            <PhotoUpload />
            <Card className="cards__item__link">
                <CardBody>
                    <CardTitle id="card-title" tag="h2">Welcome, {props.username}!</CardTitle>
                    <hr />
                    <CardSubtitle tag="h4">Blackjack Stats:</CardSubtitle>
                    <br />
                        <p className="data" tag="h6">&bull; Lifetime Blackjack Winnings: {props.blackjackWin}</p>
                        <p className="data" tag="h6">&bull; Lifetime Blackjack Losses: {props.blackjackLosses}</p>
                        <p className="data" tag="h6">&bull; Blackjack Ratio: {props.blackjackRatio}</p>
                </CardBody>
            </Card>
        </div>

    )
}
export default MemberItem;