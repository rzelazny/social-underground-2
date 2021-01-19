import React, { useState } from "react";
import "./style.css"
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var player1 = "Player 1";
var player2 = "Player 2";
var player3 = "Player 3";

//character options //
var threeOptions = ["townsfolk", "townsfolk", "beast" ];

function WerewolfGame3() {
    return(
        <Container>
            <p>3 player game goes here</p>
        </Container>
    )
}

export default WerewolfGame3;




        //randomly assign characters here //
        // generate cards for each player

        // 3 cards (one for each player -- will only display to that player)
                // username
                // character assigned
                // instructions -- players can chat 
                // vote to kill buttons

                //hard coded players from now but pull from db//