import React from "react";
import "./style.css"
import { Card, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function BlackjackScoreCard(props) {
    return (
        <Card id="scoreCard" className="card mx-auto pt-3 pb-3">
            <CardTitle>
            {props.winner} wins this round.
            </CardTitle>
            <CardSubtitle>
                Scores:
            </CardSubtitle>
            <CardText>
                House: {props.houseScore}
            </CardText>
            <CardText>
                {props.player1Name}: {props.player1Score}
            </CardText>
            <button 
            className="btn"
            id="playAgain"
            onClick={props.playAgain}
            >Play Again</button>
        </Card>
    );
}

export default BlackjackScoreCard;
