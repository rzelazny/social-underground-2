import React from "react";
import "./style.css"
import { Container, Card } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function BlackjackScoreCard(props) {
    return (
        <Container>
        <Card id="scoreCard" className="card mx-auto pt-3 pb-3">
            <p>This card will show at end of round.</p>
            {/* winner declaration */}
            {/* final points */}
            {/* restart game button - props */}
        </Card>
        <button 
        id="playAgain"
        onClick={props.playAgain}
        >Play Again</button>
        </Container>
    );
}

export default BlackjackScoreCard;
