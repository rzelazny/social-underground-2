import React from "react";
import "./style.css"

function BlackjackButtons(props) {
    return (
        <div className= "gameOptions">
            <div>
            {/* <p>The start button will be the only button to appear along with the directions before the game starts. Once the game starts, stop will be hidden and the game buttons will appear.</p> */}
                <ul>
                    <li 
                    id="restart"
                    onClick={props.restart}
                    >
                        <a href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>New Round</span>
                        </a>
                    </li>
                    <li 
                    id="hit"
                    onClick={props.hit}
                    >
                        <a href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>Hit</span>
                        </a>
                    </li>
                    <li 
                    id="stand"
                    onClick={props.stand}
                    >
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
    );
}

export default BlackjackButtons;