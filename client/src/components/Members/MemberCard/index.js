import React, { useState } from 'react';
import MemberItem from "../MemberItem/index";
import "./style.css";

import $ from "jquery";

function MemberCard() {
    const [username, setUsername] = useState(null);
    const [win, setWin] = useState();
    const [lose, setLose] = useState(); 

    function stats() {
        $.get("/api/UserStats").then((results) => {
            console.log(results)
            setUsername(results.username)
            setWin(results.blackjack_win)
            setLose(results.blackjack_lose)
        })
    }
    stats();

    
    return (
        <div className="cards">
            <h1>Welcome, {username}!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <div className="cards__items">
                        <MemberItem
                            username={username}
                            blackjackWin={win}
                            blackjackLosses={lose}
                            blackjackRatio={win + ":" + lose}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberCard