import React, { useState } from "react";
import "./style.css"
import { Container, Card, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function WerewolfGame() {

    // [players, setPlayers] = setState();

    return(
        <Container>
            <Card id="directions">
                <h2>Werewolf</h2>
                <p>some basic instructions will go here</p>
                <Button>Start</Button>
            </Card>
        </Container>
    )
}

export default WerewolfGame;