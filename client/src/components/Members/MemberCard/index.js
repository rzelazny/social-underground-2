import React, { useState } from 'react';
import MemberItem from "../MemberItem/index";
import "./style.css";

import $ from "jquery";

function MemberCard() {
    const [email, setEmail] = useState(null);
    const [win, setWin] = useState();
    const [lose, setLose] = useState(); 

    function stats() {
        $.get("/api/UserStats").then((results) => {
            console.log(results)
            setEmail(results.email)
            setWin(results.blackjack_win)
            setLose(results.blackjack_lose)
        })
    }
    stats();

    
    return (
        <div className="cards">
            <h1>Your Stats</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <div className="cards__items">
                        <MemberItem
                            username={email}
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