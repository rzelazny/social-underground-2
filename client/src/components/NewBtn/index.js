import React from "react";
import "./NewBtn.css"

function NewBtn(props) {
    return (
        <div id="newTableSpan" onClick={props.onClick}>
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
