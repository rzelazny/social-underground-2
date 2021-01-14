import React from "react";
import "./NewBtn.css"

function NewBtn() {
    return (
        <div id="newTableSpan" style={{ position: "relative; left:40" }}>
            <ul className="homeList">
                <li className="buttonList">
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span>New</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default NewBtn;
