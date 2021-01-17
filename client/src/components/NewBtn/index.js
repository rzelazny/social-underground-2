import React from "react";
import "./NewBtn.css"

function NewBtn(props) {
    return (
        <div id="newTableSpan" onClick={props.onClick} style={{ position: "relative; left:40" }}>
            <ul className="homeList">
                <li className="buttonList fancyBtn">
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
