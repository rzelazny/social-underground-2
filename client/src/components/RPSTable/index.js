import React, { useState } from "react";
import { Container, Row } from 'reactstrap';
import $ from 'jquery';
import "./style.css"

import 'bootstrap/dist/css/bootstrap.min.css';

function RPSTable() {
    const [displayDirections, setDisplayDirections] = useState(true);
    const [startGame, setStartGame] = useState(false);

   //webcam stuff, user is user facing camera mode, not userID
    const webcamElement = document.getElementById('webcam');
    const canvasElement = document.getElementById('snapShot');
    const webcam = new Webcam(webcamElement, 'user', canvasElement);

    function onStart() {
        console.log("clicking start btn");
        setStartGame(true);
        setDisplayDirections(false);
    }

    //Turn on the camera
    function webcamOn(event) {
        //prompt user to start their camera
        webcam.start();
    }

    //Turn off the camera
    function webcamOff(event) {
        webcam.stop();
    }

    //Take a photo snapshot
    function webcamSnap(event) {
        let picture = {
            photo: webcam.snap(),
            table: curTable
        }
        console.log("Sending photo");
        //unhide element and set the source to the new image
        myPhoto.style = "display: block;";
        myPhoto.src = picture.photo;
        //store the photo in the db so others can access it
        $.post("/api/photo/", picture);
    }

    //Play Rock Paper Scissors
    $("#camBtnRPS").on("click", function(event) {
        let timer = 4
        oppEmail = $("#select-RPS-opponent").val();

        //set the countdown
        let rpsTimer = setInterval(function() {
            timer--
            switch(timer){
                case 3:
                    $("#rpsCountdown").text("Rock");
                break;
                case 2:
                    $("#rpsCountdown").text("Paper");
                break;
                case 1:
                    $("#rpsCountdown").text("Scissors");
                break;
                case 0:
                    $("#rpsCountdown").text("Shoot!");
                break;
            }
            
            console.log(timer);
            if(timer === 0){ //when the timer runs out...
                clearInterval(rpsTimer);
                //take the picture
                let sendPic = {
                    photo: webcam.snap(),
                    table: curTable
                }
                //and post it to the db
                console.log("Sending photo");
                myPhoto.src = sendPic.photo;
                myPhoto.style="display: block;";
                $.post("/api/photo/", sendPic);

                //Then get the opponent's most most recent photo
                $.get("/api/photo/" + oppEmail + "/" + curTable).then(function(data){
                    //unhide the photo element and set the source to the decoded image data
                    theirPhoto.style="display: block;"
                    theirPhoto.src = "data:image/png;base64," + atob(data[0].photo);
                })
            }
        }, 1000);
    })
    return (
        <Container id="RPSTable">
            <h2>Rock Paper Scissors Competition</h2>
            <br />
            <Row>
                <div className="col-lg-4">
                    <video id="webcam" autoPlay playsInline width="320" height="240"></video>
                    <canvas id="snapShot" className="d-none"></canvas>
                    <div className="row">
                        <div className="col-lg-4">
                            <button id="camBtnOn" className="btn btn-dark mb-1" onclick={webcamOn}>Cam On</button>
                        </div>
                        <div className="col-lg-4">
                            <button id="camBtnOff" className="btn btn-dark mb-1" onclick={webcamOff}>Cam Off</button>
                        </div>
                        <div className="col-lg-4">
                            <button id="camSnap" className="btn btn-dark mb-1" onclick={webcamSnap}>Snapshot</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <img id="my-photo" src="" />
                    <div id="rpsCountdown"></div>
                </div>
                <div className="col-lg-4">
                    <img id="their-photo" src="" />
                </div>
            </Row>
            <Row>
                <div className="col-md-12">
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
                </div>
            </Row>
            <Row>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <button id="camBtnRPS" className="btn btn-dark mb-2">Play Rock Paper Scissors</button>
                </div>
                <div className="col-md-4"></div>
            </Row>
        </Container>
    );
}

export default RPSTable;
