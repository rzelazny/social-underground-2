import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'reactstrap';
import { socket } from "../Socket/Socket";
import Webcam from "react-webcam";
import useSound from 'use-sound';
import beepSfx from "../sounds/beep.wav";
import boopSfx from "../sounds/boop.wav";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

function RPSTable({ room }) {

    //set up a socket connection when the page is loaded for sending photos
    useEffect(() => {
        socket.on("send-photo", photo => {
            console.log("got opponent's photo");
            setTheirPhoto(photo.photo);
        });

        //disconnect when we leave to prevent memory leaks
        return () => socket.disconnect();
    }, []);


    const [camState, setCamState] = useState(false);
    const [myPhoto, setMyPhoto] = useState();
    const [theirPhoto, setTheirPhoto] = useState();
    const [countdown, setCountdown] = useState("");
    const webcamRef = React.useRef(null);

    // Toggle the webcam
    function enableWebcam(event) {
        setCamState(!camState);
    }

    //Take a photo snapshot
    const screenshot = React.useCallback(
        () => {
            setMyPhoto(webcamRef.current.getScreenshot());
        },
        [webcamRef]
    );

    //sound effects for the RPS countdown
    const [playBoop] = useSound(boopSfx, { volume: 0.5 });
    const [playBeep] = useSound(beepSfx, { volume: 0.5 });

    //Play Rock Paper Scissors
    function playRPS(event) {
        let timer = 4

        //set the countdown
        let rpsTimer = setInterval(function () {
            timer--
            switch (timer) {
                case 3:
                    setCountdown("Rock");
                    playBeep();
                    break;
                case 2:
                    setCountdown("Paper");
                    playBeep();
                    break;
                case 1:
                    setCountdown("Scissors");
                    playBeep();
                    break;
                case 0:
                    setCountdown("Shoot!");
                    playBoop();
                    break;
            }

            if (timer === 0) { //when the timer runs out...
                clearInterval(rpsTimer);
                //take the picture
                setMyPhoto(webcamRef.current.getScreenshot());
                let sendPhoto = {
                    photo: webcamRef.current.getScreenshot(),
                    room: room
                }
                //and send it to the server
                socket.emit("send-photo", sendPhoto);
            }
        }, 1000);
    }

    return (
        <Container id="RPSTable">
            <h2>Rock Paper Scissors Competition</h2>
            <br />
            <Row>
                <Col lg="4">
                    {camState && <Webcam
                        id="webcam"
                        audio={false}
                        mirrored={true}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        style={{ height: "360px", width: "360px", zIndex: "1000" }}
                    />}
                    <Row>
                        <Col lg="6">
                            <button id="camBtnOff" className="btn btn-dark mb-1" onClick={enableWebcam}>Cam {camState ? "Off" : "On"} </button>
                        </Col>
                        <Col lg="6">
                            <button id="camSnap" className="btn btn-dark mb-1" onClick={screenshot}>Snapshot</button>
                        </Col>
                    </Row>
                </Col>
                <Col lg="4">
                    <img id="my-photo" className="photo" src={myPhoto} />
                    <div id="rpsCountdown">{countdown}</div>
                </Col>
                <Col lg="4">
                    <img id="their-photo" className="photo" src={theirPhoto} />
                </Col>
            </Row>
            {/* // User can select which opponent to play RPS against
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
            </Row> */}
            <br />
            <Row>
                <Col lg="4"></Col>
                <Col lg="4">
                    <button id="camBtnRPS" onClick={playRPS} className="btn btn-dark mb-2">Play Rock Paper Scissors</button>
                </Col>
                <Col lg="4"></Col>
            </Row>
        </Container>
    );
}

export default RPSTable;
