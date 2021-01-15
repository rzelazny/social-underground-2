import React, { useEffect, useState } from "react";
import "./style.css"
import { Container, Card, CardTitle, CardImg, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlackjackButtons from "../BlackjackButtons";
import BlackjackScoreCard from "../BlackjackScoreCard";
import API from "../../utils/API";

var houseScore = 0;
console.log(houseScore);
var player1Score = 0;
console.log(player1Score);

function BlackjackGame() {

    const [displayScoreCard, setDisplayScoreCard] = useState(false);
    const [house, setHouse] = useState({});
    const [player1, setPlayer1] = useState({});

    const [houseHand, setHouseHand] = useState([
        {
            code: "",
            suit: "",
            value: "",
            imgUrl: ""
        }, 
        {
            code: "",
            suit: "",
            value: "",
            imgUrl: ""
        }
    ]);
    const [player1Hand, setPlayer1Hand] = useState([
        {
            code: "",
            suit: "",
            value: "",
            imgUrl: ""
        }, 
        {
            code: "",
            suit: "",
            value: "",
            imgUrl: ""
        }
    ]);

    useEffect(() => {
        if (!houseHand) {
            return;
        }
        API.drawHouse(houseHand)
            .then(data => {
                // console.log(data);
                let card1Val;
                // sets value of face card //
                if (data.data.cards[0].value === "JACK" || data.data.cards[0].value === "QUEEN" || data.data.cards[0].value === "KING") {
                    card1Val = 10;
                }
                // sets value for ace  //
                else if (data.data.cards[0].value === "ACE") {
                    card1Val = 11;
                } 
                else{
                    card1Val = parseInt(data.data.cards[0].value);
                }

                let card2Val;
                // sets value of face card //
                if (data.data.cards[1].value === "JACK" || data.data.cards[1].value === "QUEEN" || data.data.cards[1].value === "KING") {
                    card2Val = 10;
                }
                // sets value for ace  //
                else if (card1Val < 11 && data.data.cards[1].value === "ACE") {
                    card2Val = 11;
                } 
                else if (card1Val > 10 && data.data.cards[1].value === "ACE") {
                    card2Val = 1;
                } 
                else{
                    card2Val = parseInt(data.data.cards[1].value);
                }
                setHouseHand(
                    [
                        {
                            code: data.data.cards[0].code,
                            suit: data.data.cards[0].suit,
                            value: card1Val,
                            imgUrl: data.data.cards[0].image
                        }, 
                        {
                            code: data.data.cards[1].code,
                            suit: data.data.cards[1].suit,
                            value: card2Val,
                            imgUrl: data.data.cards[1].image
                        }
                    ]
                )
            })
    }, []);

    useEffect(() => {
        if (!player1Hand) {
            return;
        }
        API.drawPlayer1(player1Hand)
                .then(data => {
                    // console.log(data)
                    let card1Val;
                // sets value of face card //
                if (data.data.cards[0].value === "JACK" || data.data.cards[0].value === "QUEEN" || data.data.cards[0].value === "KING") {
                    card1Val = 10;
                }
                // sets value for ace  //
                else if (data.data.cards[0].value === "ACE") {
                    card1Val = 11;
                } 
                else{
                    card1Val = parseInt(data.data.cards[0].value);
                }
                let card2Val;
                // sets value of face card //
                if (data.data.cards[1].value === "JACK" || data.data.cards[1].value === "QUEEN" || data.data.cards[1].value === "KING") {
                    card2Val = 10;
                }
                // sets value for ace  //
                else if (card1Val < 11 && data.data.cards[1].value === "ACE") {
                    card2Val = 11;
                } 
                else if (card1Val > 10 && data.data.cards[1].value === "ACE") {
                    card2Val = 1;
                } 
                else{
                    card2Val = parseInt(data.data.cards[1].value);
                }
                    setPlayer1Hand(
                    [
                        {
                            code: data.data.cards[0].code,
                            suit: data.data.cards[0].suit,
                            value: card1Val,
                            imgUrl: data.data.cards[0].image
                        }, 
                        {
                            code: data.data.cards[1].code,
                            suit: data.data.cards[1].suit,
                            value: card2Val,
                            imgUrl: data.data.cards[1].image
                        }
                    ]
                    )
                })
    }, []);

    function addPlayers() {
        setHouse({
            Name: 'House', 
            ID: 0, 
            Score: houseScore, 
            Points: houseHand[0].value + houseHand[1].value, 
            Bust: false, 
            Hand: houseHand, 
            Stand: false
        });
        setPlayer1({
            Name: 'Player1', 
            ID: 1, 
            Score: player1Score, 
            Points: player1Hand[0].value + player1Hand[1].value, 
            Bust: false, 
            Hand: player1Hand,
            Stand: false
        });
    }

    function restart() {
        console.log("restart triggered");
        // var gameBody = document.getElementById("gameBody");
        // gameBody.innerHTML = "";
        // BlackjackGame()
        window.location.reload(false); //ok, so this reload back to directions
        // figure out better way to do this without reloading the entire page
    }

    function hit() {
        console.log("hit triggered")
        player1Hit();
        //check for bust
    }

    function player1Hit() {
            API.drawHitPlayer1(player1Hand)
                .then(data => {
                    console.log(data);
                    let hitCardVal;
                    // sets value of face card //
                    if (data.data.cards[0].value === "JACK" || data.data.cards[0].value === "QUEEN" || data.data.cards[0].value === "KING") {
                        hitCardVal = 10;
                    }
                    // sets value for ace  //
                    else if (data.data.cards[0].value === "ACE") {
                        hitCardVal = 11;
                    } 
                    else{
                        hitCardVal = parseInt(data.data.cards[0].value);
                    }
                    setPlayer1Hand(
                    [
                        ...player1Hand,
                        {
                            code: data.data.cards[0].code,
                            suit: data.data.cards[0].suit,
                            value: hitCardVal,
                            imgUrl: data.data.cards[0].image
                        }
                    ]
                    )
                })
        }
        // - call api, generate card, add to hand, recalculate point value

    // check for bust
        // - see if points are >22... if so end round ... if not run hit house logic

    //house hit logic
        //if house has 17+ points it will stand 
        //if it has < 17 points it will hit
            //if hit run house bust check function

    //house bust check
        // if bust end round

    function stand() {
        console.log("stand triggered");
        // on stand logic
        //player 1 now stands
        // check to see if house stands, has 17+ points, or has > points - if does end round
        // if not standing run house hit again
        // if house didnt bust resend to on stand logic
        endRound();
    }


    function endRound() {
        console.log("end of round triggered");
        setDisplayScoreCard(true);
        //end round logic
        // if ended bc of bust... whoever didnt bust wins & show score      
        //who wins logic:
            // if tie
            // if house wins
                // houseScore ++;
                // console.log(houseScore);
                    //this will work however will be lost if the page reloads how it has been on restart
            // if player one wins
        //remove buttons
    }

    function consolePlayers() {
        console.log(player1Hand);
        console.log(player1);
    }

    return (
        <Container id="gameBody" >
            {displayScoreCard
            && <BlackjackScoreCard 
            // add function for play again button
            /> 
            }
            <Container id="players">
                <div>
                    <button onClick={addPlayers} >add players</button>
                    <button onClick={consolePlayers} >see console log</button>
                </div>
                <Card id="house">
                    <CardTitle tag="h5">{house.Name}</CardTitle>
                    <CardText>Points: {house.Points}</CardText>
                    <div id="houseHand">
                        <CardImg id="cardOneHouse" src={houseHand[0].imgUrl} alt="{houseHand[0].code}" />
                        <CardImg id="cardTwoHouse" src={houseHand[1].imgUrl} alt="{houseHand[1].code}" />
                    </div>
                </Card>
                <Card id="player1">
                    <CardTitle tag="h5">{player1.Name}</CardTitle>
                    <CardText>Points: {player1.Points}</CardText>
                    <div id="player1Hand">
                        <CardImg id="cardOnePlayer1" src={player1Hand[0].imgUrl} alt="{player1Hand[0].code}" />
                        <CardImg id="cardTwoPlayer1" src={player1Hand[1].imgUrl} alt="{player1Hand[1].code}" />
                    </div>
                </Card>
            </Container>
            <BlackjackButtons
            restart={restart}
            hit={hit}
            stand={stand}
            />
        </Container>
    );
}

export default BlackjackGame;
