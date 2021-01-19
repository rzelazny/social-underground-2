import React, { useState } from "react";
import "./style.css"
import { Container, Button, Card, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//hard coded players from now but pull from db//
var player1Name = "Player 1";
var player2Name = "Player 2";
var player3Name = "Player 3";

function WerewolfGame3() {
    //character options //
    var threeOptions = ["townsfolk", "townsfolk", "beast" ];

    //shuffle the array here //
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    shuffleArray(threeOptions);

    var player1Character = threeOptions[0];
    var player2Character = threeOptions[1];
    var player3Character = threeOptions[2];

    var townsfolkInstructions = "put townsfolk instructions here";
    var beastInstructions = "put beast instructions here";

    return(
        <Container className="werewolfGame3">

            <Card id="play1" className="werewolfGame3">
                <CardSubtitle tag="h6" className="mb-2 text-muted">{player1Name}</CardSubtitle>
                <CardTitle tag="h2" >{player1Character}</CardTitle>
                <CardText>
                    {
                    player1Character === "townsfolk"
                    &&
                    townsfolkInstructions
                    }
                    {
                    player1Character === "beast"
                    &&
                    beastInstructions
                    }
                </CardText>
                <div>
                    <Button color="danger">Vote to kill {player2Name}</Button>{' '}
                    <Button color="danger">Vote to kill {player3Name}</Button>{' '}
                </div>
            </Card>

            <Card id="play2" className="werewolfGame3">
                <CardSubtitle tag="h6" className="mb-2 text-muted">{player2Name}</CardSubtitle>
                <CardTitle tag="h2" >{player2Character}</CardTitle>
                <CardText>
                    {
                    player2Character === "townsfolk"
                    &&
                    townsfolkInstructions
                    }
                    {
                    player2Character === "beast"
                    &&
                    beastInstructions
                    }
                </CardText>
                <div>
                    <Button color="danger">Vote to kill {player1Name}</Button>{' '}
                    <Button color="danger">Vote to kill {player3Name}</Button>{' '}
                </div>
            </Card>

            <Card id="play3" className="werewolfGame3">
                <CardSubtitle tag="h6" className="mb-2 text-muted">{player3Name}</CardSubtitle>
                <CardTitle tag="h2" >{player3Character}</CardTitle>
                <CardText>
                    {
                    player3Character === "townsfolk"
                    &&
                    townsfolkInstructions
                    }
                    {
                    player3Character === "beast"
                    &&
                    beastInstructions
                    }
                </CardText>
                <div>
                    <Button color="danger">Vote to kill {player1Name}</Button>{' '}
                    <Button color="danger">Vote to kill {player2Name}</Button>{' '}
                </div>
            </Card>
        </Container>
    )
}

export default WerewolfGame3;
