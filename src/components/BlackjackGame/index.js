import React from "react";
import "./style.css"
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function BlackjackGame() {
    return (
        <Container id="blackjackDirections">
            <p>The blackjack game will go here.</p>
        <div id="gameBody">
        <div className="players" id="players"></div>
        <div className= "gameOptions" id="gameOptions" style={{display:"block"}}>
            <div>
            {/* <p>The start button will be the only button to appear along with the directions before the game starts. Once the game starts, stop will be hidden and the game buttons will appear.</p> */}
                <ul>
                    <li 
                    id="start" 
                    style={{display:"block"}}
                    
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

export default BlackjackGame;
