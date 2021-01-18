import React, { useState } from "react";
import "./style.css"
import { Container, Row } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function RPSTable() {
    const [displayDirections, setDisplayDirections] = useState(true);
    const [startGame, setStartGame] = useState(false);

    function onStart() {
        console.log("clicking start btn");
        setStartGame(true);
        setDisplayDirections(false);
    }

    return (
        <Container id="RPSTable">
            <h2>Rock Paper Scissors Competition</h2>
            <br />
            <Row>
                <div class="col-lg-4">
                    <video id="webcam" autoplay playsinline width="320" height="240"></video>
                    <canvas id="snapShot" class="d-none"></canvas>
                    <div class="row">
                        <div class="col-lg-4">
                            <button id="camBtnOn" class="btn btn-dark mb-1">Cam On</button>
                        </div>
                        <div class="col-lg-4">
                            <button id="camBtnOff" class="btn btn-dark mb-1">Cam Off</button>
                        </div>
                        <div class="col-lg-4">
                            <button id="camSnap" class="btn btn-dark mb-1">Snapshot</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <img id="my-photo" style={{visibility: "hidden", height:"240px", width:"100%"}} src="" />
                    <div id="rpsCountdown"></div>
                </div>
                <div class="col-lg-4">
                    <img id="their-photo" style="display: none;" src="" />
                </div>
            </Row>
            <Row>
                <div class="col-md-12">
                    <form>
                        <label for="form-group row">Who do you challenge?</label>
                        <select class="col-sm-7" id="select-RPS-opponent">
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
                <div class="col-md-4"></div>
                <div class="col-md-4">
                    <button id="camBtnRPS" class="btn btn-dark mb-2">Play Rock Paper Scissors</button>
                </div>
                <div class="col-md-4"></div>
            </Row>
        </Container>
    );
}

export default RPSTable;
