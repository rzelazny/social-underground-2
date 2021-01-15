import React from 'react';
import MemberItem from "./MemberItem";
import "./MemberCard.css";
import $ from "jquery";

function MemberCard() {
    function stats () {
        $.get("/api/UserStats").then((results)=> console.log(results.email))
    } 
    stats();

    return (
        <div className="cards">
            <h1>Your Stats</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <MemberItem
                            src="images/avatar.webp"
                            text="
                            Name: exmaple name
                            Wins/ losess: 
                            
                            
                            "
                            label="Stats"
                            path="/portfolio"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MemberCard