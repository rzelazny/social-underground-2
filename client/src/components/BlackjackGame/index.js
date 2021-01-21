import React, { useEffect, useState } from "react";
import "./style.css"
import { Container, Card, CardTitle, CardImg, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BlackjackButtons from "../BlackjackButtons";
import BlackjackScoreCard from "../BlackjackScoreCard";
import API from "../../utils/API";
import $ from "jquery";

///////////////////////////////////////////////////////////////////////////////////////////

// to do :
    //connect the score with the users membership page
    //currently hard coded... change the players name from player 1 to the players username


///////////////////////////////////////////////////////////////////////////////////////////

// temporarily hard coded -- pull from db //
var player1Name = "";

// to be saved in the players db //
var houseScore = 0; // set equal to db (saved as players losses)
var player1Score = 0; // set equal to db (saved as players wins)

function stats() {
    $.get("/api/UserStats").then((results) => {
        console.log(results)
        player1Score = (results.blackjack_win)
        houseScore = (results.blackjack_lose)
        player1Name = (results.username)
    })
}
stats();

// to keep track of the winner for the scorecard //
var winner = "";

var houseHandVal = 0;
var p1HandVal = 0;

function BlackjackGame() {
    // set states //
    const [displayButtons, setDisplayButtons] = useState(true);
    const [displayScoreCard, setDisplayScoreCard] = useState(false);
    const [housePoints, setHousePoints] = useState(0);
    const [player1Points, setPlayer1Points] = useState(0);
    const [houseBust, setHouseBust] = useState(false);
    const [player1Bust, setPlayer1Bust] = useState(false);
    const [houseStand, setHouseStand] = useState(false);
    const [player1Stand, setPlayer1Stand] = useState(false);
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
        houseApi();
    }, []);
    function houseApi() {
        API.drawHouse(houseHand, housePoints)
            .then(data => {
                // console.log(data);
                let card1Val;
                let card2Val;
                // let houseHandVal;
                // sets value of face card //
                if (data.data.cards[0].value === "JACK" || data.data.cards[0].value === "QUEEN" || data.data.cards[0].value === "KING") {
                    card1Val = 10;
                }
                // sets value for ace  //
                else if (data.data.cards[0].value === "ACE") {
                    card1Val = 11;
                }
                else {
                    card1Val = parseInt(data.data.cards[0].value);
                }

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
                else {
                    card2Val = parseInt(data.data.cards[1].value);
                }

                houseHandVal = card1Val + card2Val;

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
                setHousePoints(
                    houseHandVal
                )
            })
    }

    useEffect(() => {
        if (!player1Hand) {
            return;
        }
        player1Api();
    }, []);
    function player1Api() {
        API.drawPlayer1(player1Hand, player1Points)
            .then(data => {
                // console.log(data)
                let card1Val;
                let card2Val;
                // let p1HandVal;
                // sets value of face card //
                if (data.data.cards[0].value === "JACK" || data.data.cards[0].value === "QUEEN" || data.data.cards[0].value === "KING") {
                    card1Val = 10;
                }
                // sets value for ace  //
                else if (data.data.cards[0].value === "ACE") {
                    card1Val = 11;
                }
                else {
                    card1Val = parseInt(data.data.cards[0].value);
                }
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
                else {
                    card2Val = parseInt(data.data.cards[1].value);
                }
                p1HandVal = card1Val + card2Val;
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
                setPlayer1Points(
                    p1HandVal
                )
            })
    }

    function restart() {
        console.log("restart function entered");

        // will reset the states to original values //
        setDisplayButtons(true);
        setDisplayScoreCard(false);
        setHousePoints(0);
        setPlayer1Points(0);
        setHouseStand(false);
        setPlayer1Stand(false);
        setHouseBust(false);
        setPlayer1Bust(false);
        setHouseHand([{
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
        }])
        setPlayer1Hand([{
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
        }])

        // will re-deal the cards //
        houseApi();
        player1Api();
    }

    function player1Hit() {
        console.log("hit function entered")
        API.drawHitPlayer1(player1Hand)
            .then(data => {
                let hitCardVal;
                // let p1HandVal;

                // sets value of face card //
                if (data.data.cards[0].value === "JACK" || data.data.cards[0].value === "QUEEN" || data.data.cards[0].value === "KING") {
                    hitCardVal = 10;
                }
                // sets value for ace  //
                else if (data.data.cards[0].value === "ACE") {
                    hitCardVal = 11;
                }
                else {
                    hitCardVal = parseInt(data.data.cards[0].value);
                }

                // add current hand value and new card value //
                p1HandVal = hitCardVal + player1Points;

                // add the card to the hand array //
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

                // recalculate players points and update the point state //
                setPlayer1Points(
                    p1HandVal
                )

                // check to see if player busts with new card //
                if (p1HandVal > 21) {
                    console.log("busted, will end round");
                    setPlayer1Bust(true);
                    endRound("player1 busted");
                }
                else {
                    console.log("will run hit house logic");
                    houseHitLogic();
                }
            })
    }

    function houseHitLogic(check) {
        console.log("house hit logic function entered");
        if (housePoints >= 17) {
            console.log("the house will stand")
            setHouseStand(true);
        }
        else {
            console.log("the house will hit")
            API.drawHitHouse(houseHand)
                .then(data => {
                    let hitCardVal;
                    // let houseHandVal;

                    // sets value of face card //
                    if (data.data.cards[0].value === "JACK" || data.data.cards[0].value === "QUEEN" || data.data.cards[0].value === "KING") {
                        hitCardVal = 10;
                    }
                    // sets value for ace  //
                    else if (data.data.cards[0].value === "ACE") {
                        hitCardVal = 11;
                    }
                    else {
                        hitCardVal = parseInt(data.data.cards[0].value);
                    }

                    // add current hand value and new card value //
                    houseHandVal = hitCardVal + housePoints;

                    // add the card to the hand array //
                    setHouseHand(
                        [
                            ...houseHand,
                            {
                                code: data.data.cards[0].code,
                                suit: data.data.cards[0].suit,
                                value: hitCardVal,
                                imgUrl: data.data.cards[0].image
                            }
                        ]
                    )

                    // recalculate players points and update the point state //
                    setHousePoints(
                        houseHandVal
                    )

                    // check to see if player busts with new card //
                    if (houseHandVal > 21) {
                        console.log("busted, will end round");
                        setHouseBust(true);
                        endRound("house busted");
                    }
                    else {
                        console.log("house did not bust on hit")
                        if (player1Stand === true || check === "is standing" ) {
                            console.log("house didnt bust and player one is standing")
                            if (houseStand === true || houseHandVal >= 17 || houseHandVal > player1Points) {
                                setHouseStand(true);
                                console.log("both players stand, ending round triggered")
                                endRound("both stand");
                            }
                            else{
                                console.log("player 1 is standing, house didnt bust but isnt standing -- will hit again")
                                houseHitLogic(check);
                            }
                        }
                        else {
                            console.log("house didnt bust, player 1 is not standing .... waiting")
                            }
                        }
                })
        }
    }

    function stand() {
        console.log("stand function entered");
        setPlayer1Stand(true);
        if (houseStand === true || housePoints >= 17 || housePoints > player1Points) {
            console.log("both players stand, end round");
            setHouseStand(true);
            endRound("both stand");
        }
        else {
            console.log("player one stands, house will hit");
            houseHitLogic("is standing");
        }
        // endRound();
    }

    function endRound(isBusted) {
        console.log("end of round function entered");

        if (isBusted === "player1 busted") {
            console.log("player1 bust, house wins");
            winner = "House";
            houseScore++
            $.post("/api/UserLose", {houseScore: houseScore}) 
            console.log("house score: ", houseScore)
            console.log("player1 score: ", player1Score)
            // return (
            //     <Alert color="primary">
            //     {player1Name} Busted!
            //     </Alert>
            // )
        }
        else if (isBusted === "house busted") {
            console.log("house bust, player1 wins");
            winner = player1Name;
            player1Score++
            $.post("/api/UserStats", {player1Score: player1Score})
            console.log("house score: ", houseScore)
            console.log("player1 score: ", player1Score)
            // return (
            //     <Alert color="primary">
            //     The House Busted!
            //     </Alert>
            // )
        }
        else if (isBusted === "both stand") {
            // if players tie //
            if (housePoints === player1Points) {
                console.log("both players tie, no ones scores increased")
                winner = "Players tie, no one";
                console.log("house score: ", houseScore)
                console.log("player1 score: ", player1Score)
            }
            // if house wins //
            else if (houseHandVal < 22 && houseHandVal > p1HandVal) {
                console.log("house wins");
                console.log("house points ", houseHandVal);
                console.log("player1points ", p1HandVal);
                winner = "House";
                houseScore++
                $.post("/api/UserLose", {houseScore: houseScore}) 
                console.log("house score: ", houseScore)
                console.log("player1 score: ", player1Score)
            }
            // if player1 wins //
            else if (p1HandVal < 22 && houseHandVal < p1HandVal) {
                console.log("player1 wins");
                console.log("house points ", houseHandVal);
                console.log("player1points ", p1HandVal);
                winner = player1Name;
                player1Score++
                $.post("/api/UserStats", {player1Score: player1Score}) 
                console.log("house score: ", houseScore)
                console.log("player1 score: ", player1Score)
            }
            else {
                console.log("error");
            }
        }
        else{
            console.log("error");
        }

        setDisplayScoreCard(true);
        setDisplayButtons(false);
    }

    // function consolePlayers() {
    //     console.log("----House------")
    //     console.log("Hand ", houseHand);
    //     console.log("Points ", housePoints);
    //     console.log("Bust ", houseBust);
    //     console.log("Stand ", houseStand);
    //     console.log("----Player 1------")
    //     console.log("Hand ", player1Hand);
    //     console.log("Points ", player1Points);
    //     console.log("Bust ", player1Bust);
    //     console.log("Stand ", player1Stand);
    // }

    return (
        <Container id="gameBody" >
            {displayScoreCard
                && <BlackjackScoreCard
                    winner={winner}
                    player1Name={player1Name}
                    houseScore={houseScore}
                    player1Score={player1Score}
                    playAgain={restart}
                />
            }
            <Container id="players">
                {/* <div>
                    <button onClick={consolePlayers} >see console log</button>
                </div> */}
                <Card id="house">
                    <CardTitle tag="h5">House</CardTitle>
                    <CardText>Points: {housePoints}</CardText>
                    <div id="houseHand">
                        <CardImg id="cardOneHouse" src={houseHand[0].imgUrl} alt="{houseHand[0].code}" />
                        <CardImg id="cardTwoHouse" src={houseHand[1].imgUrl} alt="{houseHand[1].code}" />
                        {houseHand.length >= 3
                            && <CardImg className="hitCardHouse" src={houseHand[2].imgUrl} alt="{houseHand[2].code}" />}
                        {houseHand.length >= 4
                            && <CardImg className="hitCardHouse" src={houseHand[3].imgUrl} alt="{houseHand[3].code}" />}
                        {houseHand.length >= 5
                            && <CardImg className="hitCardHouse" src={houseHand[4].imgUrl} alt="{houseHand[4].code}" />}
                        {houseHand.length >= 6
                            && <CardImg className="hitCardHouse" src={houseHand[5].imgUrl} alt="{houseHand[5].code}" />}
                        {houseHand.length >= 7
                            && <CardImg className="hitCardHouse" src={houseHand[6].imgUrl} alt="{houseHand[6].code}" />}
                    </div>
                </Card>
                <Card id="player1">
                    <CardTitle tag="h5">{player1Name}</CardTitle>
                    <CardText>Points: {player1Points}</CardText>
                    <div id="player1Hand">
                        <CardImg id="cardOnePlayer1" src={player1Hand[0].imgUrl} alt="{player1Hand[0].code}" />
                        <CardImg id="cardTwoPlayer1" src={player1Hand[1].imgUrl} alt="{player1Hand[1].code}" />
                        {player1Hand.length >= 3
                            && <CardImg className="hitCardPlayer1" src={player1Hand[2].imgUrl} alt="{player1Hand[2].code}" />}
                        {player1Hand.length >= 4
                            && <CardImg className="hitCardPlayer1" src={player1Hand[3].imgUrl} alt="{player1Hand[3].code}" />}
                        {player1Hand.length >= 5
                            && <CardImg className="hitCardPlayer1" src={player1Hand[4].imgUrl} alt="{player1Hand[4].code}" />}
                        {player1Hand.length >= 6
                            && <CardImg className="hitCardPlayer1" src={player1Hand[5].imgUrl} alt="{player1Hand[5].code}" />}
                        {player1Hand.length >= 7
                            && <CardImg className="hitCardPlayer1" src={player1Hand[6].imgUrl} alt="{player1Hand[6].code}" />}
                    </div>
                </Card>
            </Container>
            {displayButtons
                && <BlackjackButtons
                    restart={restart}
                    hit={player1Hit}
                    stand={stand}
                />}
        </Container>
    );
}

export default BlackjackGame;
