import React from "react";
import "./style.css"
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlackjackButtons from "../BlackjackButtons";
import BlackjackPlayers from "../BlackjackPlayers"

function BlackjackGame() {

    function restart() {
        console.log("restart triggered");
        // var gameBody = document.getElementById("gameBody");
        // gameBody.innerHTML = "";
        // BlackjackGame()
        window.location.reload(false); //ok, so this reload back to directions
    }

    function hit() {
        console.log("hit triggered")
        //player one hit - call api, generate card, add to hand, recalculate point value
        //check for bust- see if points are >22... if so end round ... if not run hit house logic
    }

    //player one hit

    // check for bust

    //house hit logic
        //if house has 17+ points it will stand 
        //if it has < 17 points it will hit
            //if hit run house bust check function

    //house bust check
        // if bust end round

    function stand() {
        console.log("stand triggered")
    }

    // on stand logic
        //player 1 now stands
        // check to see if house stands, has 17+ points, or has > points - if does end round
        // if not standing run house hit again
        // if house didnt bust resend to on stand logic

     //end round logic
        // if ended bc of bust... whoever didnt bust wins & show score      
        //who wins logic:
            // if tie
            // if house wins
            // if player one wins
        //remove hit & stand buttons

    return (
        <Container id="gameBody" >
            <BlackjackPlayers />
            <BlackjackButtons
            restart={restart}
            hit={hit}
            stand={stand}
            />
        </Container>
    );
}

export default BlackjackGame;
