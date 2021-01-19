import React, { useState } from "react";
import "./style.css"
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var player1 = "Player 1";
var player2 = "Player 2";
var player3 = "Player 3";
// var player4 = "Player 4";
// var player5 = "Player 5";
// var player6 = "Player 6";
// var player7 = "Player 7";

//character options //
var threeOptions = ["townsfolk", "townsfolk", "beast" ];
// var fourOptions = ["townsfolk", "townsfolk", "townsfolk", "beast" ];
// var fiveOptions = ["townsfolk", "townsfolk", "townsfolk", "townsfolk", "beast" ];
// var sixOptions = ["townsfolk", "townsfolk", "townsfolk", "townsfolk", "beast", "beast" ];
// var sevenOptions = ["townsfolk", "townsfolk", "townsfolk", "townsfolk", "townsfolk", "beast", "beast" ];

function WerewolfGame3() {
    return(
        <Container>
            <p>Three player game goes here</p>
        </Container>
    )
}




        //randomly assign characters here //
        // generate cards for each player

        // 3 cards (one for each player -- will only display to that player)
                // username
                // character assigned
                // instructions -- players can chat 
                // vote to kill buttons

                //hard coded players from now but pull from db//