import React from "react";
import "./style.css"
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlackjackDirections from "../BlackjackDirections";
import BlackjackGame from "../BlackjackGame";
import BlackjackScoreCard from "../BlackjackScoreCard";

function BlackjackTable() {
    return (
        <Container id="blackjackTable">
            <h2>Single Player Blackjack</h2>
            <br />
            <BlackjackDirections />
            <BlackjackScoreCard />
            <BlackjackGame />
        </Container>
    );
}

export default BlackjackTable;
