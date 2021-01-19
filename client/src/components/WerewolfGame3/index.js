import React, { useState } from "react";
import "./style.css"
import { Container, Button, CarouselControl } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//hard coded players from now but pull from db//
var player1Name = "Player 1";
var player2Name = "Player 2";
var player3Name = "Player 3";

function WerewolfGame3() {
    //character options //
    var threeOptions = ["townsfolk", "townsfolk", "beast" ];
    // console.log(threeOptions);

    //shuffle the array here //
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    shuffleArray(threeOptions);
    // console.log(threeOptions);

    var player1Character = threeOptions[0];
    var player2Character = threeOptions[1];
    var player3Character = threeOptions[2];

    return(
        <Container>
            <p>3 player game goes here</p>
            {/* <Button>set characters</Button> */}
            {/* // 3 cards (one for each player -- will only display to that player)
            // username
            // character assigned
            // instructions -- players can chat 
            // vote to kill buttons */}
        </Container>
    )
}

export default WerewolfGame3;
