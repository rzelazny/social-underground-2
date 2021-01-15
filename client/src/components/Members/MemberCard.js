import React from 'react'
import MemberItem from "./MemberItem"
import "./MemberCard.css"

function MemberCard() {
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