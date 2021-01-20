import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'reactstrap';
import { Webcam } from "../Webcam";

import "./style.css"

import 'bootstrap/dist/css/bootstrap.min.css';

function RPSTable() {

    const [camState, setCamState] = useState(false);

    // //Turn on the camera
    function enableWebcam(event) {
        //prompt user to start their camera
        setCamState(!camState);
    }

    // //Turn off the camera
    // function webcamOff(event) {
    //     webcam.stop();
    // }

    var curTable = document.defaultView.location.pathname.split("casino/").pop();

    //Play Rock Paper Scissors
    function playRPS(event) {
        //     let timer = 4
        //     let oppEmail = $("#select-RPS-opponent").val();

        //     //set the countdown
        //     let rpsTimer = setInterval(function () {
        //         timer--
        //         switch (timer) {
        //             case 3:
        //                 $("#rpsCountdown").text("Rock");
        //                 break;
        //             case 2:
        //                 $("#rpsCountdown").text("Paper");
        //                 break;
        //             case 1:
        //                 $("#rpsCountdown").text("Scissors");
        //                 break;
        //             case 0:
        //                 $("#rpsCountdown").text("Shoot!");
        //                 break;
        //         }

        //         console.log(timer);
        //         if (timer === 0) { //when the timer runs out...
        //             clearInterval(rpsTimer);
        //             //take the picture
        //             let sendPic = {
        //                 photo: webcam.snap(),
        //                 table: curTable
        //             }
        //             //and post it to the db
        //             console.log("Sending photo");
        //             myPhoto.src = sendPic.photo;
        //             myPhoto.style = "display: block;";
        //             $.post("/api/photo/", sendPic);

        //             //Then get the opponent's most most recent photo
        //             $.get("/api/photo/" + oppEmail + "/" + curTable).then(function (data) {
        //                 //unhide the photo element and set the source to the decoded image data
        //                 theirPhoto.style = "display: block;"
        //                 theirPhoto.src = "data:image/png;base64," + atob(data[0].photo);
        //             })
        //         }
        //     }, 1000);
    }

    return (
        <div id="RPSTable">
            <h2>Rock Paper Scissors Competition</h2>
            <br />
            {camState && <Webcam  />}
            <Row>
                <Col lg="4">
                    <Row>
                        <Col lg="4">
                            <button id="camBtnOn" className="btn btn-dark mb-1" onClick={enableWebcam}>Cam On</button>
                        </Col>
                        <Col lg="4">
                            <button id="camBtnOff" className="btn btn-dark mb-1" onClick={enableWebcam}>Cam Off</button>
                        </Col>
                        <Col lg="4">
                            <button id="camSnap" className="btn btn-dark mb-1">Snapshot</button>
                        </Col>
                    </Row>
                </Col>
                <Col lg="4">
                    <img id="my-photo" src="" />
                    <div id="rpsCountdown"></div>
                </Col>
                <Col lg="4">
                    <img id="their-photo" src="" />
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <form>
                        <label htmlFor="form-group row">Who do you challenge?</label>
                        <select className="col-sm-7" id="select-RPS-opponent">
                            <option>user1</option>
                            <option>user2</option>
                            <option>user3</option>
                            <option>user4</option>
                            <option>user5</option>
                        </select>
                    </form>
                </Col>
            </Row>
            <Row>
                <Col lg="4"></Col>
                <Col lg="4">
                    <button id="camBtnRPS" onClick={playRPS} className="btn btn-dark mb-2">Play Rock Paper Scissors</button>
                </Col>
                <Col lg="4"></Col>
            </Row>
        </div>
    );
}

export default RPSTable;
