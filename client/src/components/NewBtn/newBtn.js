import React from "react";
import "./NewBtn.css"
import { Button } from "reactstrap";




function NewBtn() {
    return (
        // <Button color="new">New</Button>
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
