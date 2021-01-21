import React from "react";
import PhotoUpload from "../PhotoUpload/index"
import { CardBody, Form, Card, CardTitle, CardSubtitle, FormGroup, Label, Input, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

function MemberItem(props) {

    function updateUsername() {
        console.log("will update username")
    }



    return (
        <div className="cards__item">
            <PhotoUpload />
            <Card className="cards__item__link">
                <CardBody>
                    <Form inline className="d-flex justify-content-center">
                        <FormGroup>
                            <Label className="data username" for="username">Display Name: </Label>
                            <Input className="username"type="username" name="username" id="username" placeholder={props.username} />
                            <Button className="username"for="username" onClick={updateUsername}>Save</Button>
                        </FormGroup>
                    </Form>
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