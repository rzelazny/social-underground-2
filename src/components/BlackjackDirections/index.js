import React from "react";
import "./style.css"
import $ from 'jquery';
import { Container } from 'reactstrap';

function onStart() {
    // will call the displayBtns function //
    displayBtns();
    // will add the players hard coded in the allPlayers function to the session //
    // addPlayers();
    // will draw cards for all players using the drawCards function //
    // drawCards();
}

// this function is called at the start of the game //
function displayBtns() {
    var startBtn = $('#start');
    if (startBtn.style.display === 'block') {
        startBtn.style.display = 'none'
    }
}

function BlackjackDirections() {
    return (
        <Container id="cont-blackjack-single">
            <h2>Single Player Blackjack</h2>
            <br />
            <div id="directions" style={{display:"block"}}>
                {/* <p>This will show before game start</p> */}
                <p>Try to get as close to 21 without busting. If you want another card press 'hit' and you will be dealt another card. If you want to stay with your hand and end the game press 'stand'. You can hit as many times as you want but beware, if you bust you lose. To keep playing press 'play another round'. Each round you play, your score will be displayed and will increment as you win. If you tie with the House you will not be awarded any points. If you win you will be awarded 1 point and if the House wins it will be awarded 1 point.</p>
            </div>
            <div id="endRoundDiv" className="card mx-auto pt-3 pb-3" style={{display:"none"}}>
                {/* <p>This card will show at end of round.</p> */}
            </div>
            <br />
            <div id="gameBody">
            <div className="players" id="players"></div>
            <div className= "gameOptions" id="gameOptions" style={{display:"block"}}>
                <div>
                {/* <p>The start button will be the only button to appear along with the directions before the game starts. Once the game starts, stop will be hidden and the game buttons will appear.</p> */}
                    <ul>
                        <li 
                        id="start" 
                        style={{display:"block"}}
                        onClick={onStart}
                        >
                            <a href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span>Start</span>
                            </a>
                        </li>
                        <li id="restart" style={{display:"none"}}>
                            <a href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span>New Round</span>
                            </a>
                        </li>
                        <li id="hit" style={{display:"none"}}>
                            <a href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span>Hit</span>
                            </a>
                        </li>
                        <li id="stand" style={{display:"none"}}>
                            <a href="#">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span>Stand</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        </Container>
    );
}

export default BlackjackDirections;