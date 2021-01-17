import React from "react";
import "./style.css"
import { Button, CardBody, Container, Card, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function BlackjackScoreCard(props) {
    return (
        <Container className="text-center">
            <Card id="scoreCard" className="text-center mx-auto">
            <CardBody>
                <CardTitle tag="h3">
                {props.winner} wins this round
                </CardTitle>
                <br />
                <CardSubtitle tag="h5">
                    Scores:
                </CardSubtitle>
                <hr />
                <CardText>
                    House: {props.houseScore}
                </CardText>
                <CardText>
                    {props.player1Name}: {props.player1Score}
                </CardText>
                </CardBody>
            </Card>
            <Button 
                color="danger" 
                id="playAgain"
                onClick={props.playAgain}>Play Again</Button>
        </Container>
    );
}

export default BlackjackScoreCard;
