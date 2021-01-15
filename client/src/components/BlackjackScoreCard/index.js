import React from "react";
import "./style.css"
import { Card } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function BlackjackScoreCard() {
    return (
        <Card id="scoreCard" className="card mx-auto pt-3 pb-3">
            <p>This card will show at end of round.</p>
            {/* winner declaration */}
            {/* final points */}
            {/* restart game button - props */}
        </Card>
    );
}

export default BlackjackScoreCard;
