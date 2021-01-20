import React, { useState, useEffect } from "react";
import $ from "jquery";
import "./style.css"
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Webcam from "react-webcam";
import { socket } from "../Socket/Socket";
import WerewolfGame3 from "../WerewolfGame3";
import WerewolfGame4 from "../WerewolfGame4";
import WerewolfGame5 from "../WerewolfGame5";
import WerewolfGame6 from "../WerewolfGame6";
import WerewolfGame7 from "../WerewolfGame7";

var players = 0;

function WerewolfTable({ room, curTable }) {

    //set up a socket connection when the page is loaded for sending photos
    useEffect(() => {
        socket.on("send-frame-1", frame => {
            console.log("got opponent's photo");
            setP1Cam(frame.frame);
        });
        socket.on("send-frame-2", frame => {
            console.log("got opponent's photo");
            setP2Cam(frame.frame);
        });
        socket.on("send-frame-3", frame => {
            console.log("got opponent's photo");
            setP3Cam(frame.frame);
        });

        $.get("/api/myseat/" + curTable)
            .then((seat) => {
                console.log("got my seat:", seat);
                setMySeat(seat);
            })

        //disconnect when we leave to prevent memory leaks
        return () => socket.disconnect();
    }, []);

    //send a frame from the wecam to the server
    const FPS = 10;
    setInterval(() => {
        let sendFrame = {
            frame: webcamRef.current.getScreenshot(),
            room: room,
            seat: mySeat
        }
        //and send it to the server
        socket.emit("send-frame-" + mySeat, sendFrame);
    }, 1000 / FPS);

    const webcamRef = React.useRef(null);
    const [player1Cam, setP1Cam] = useState();
    const [player2Cam, setP2Cam] = useState();
    const [player3Cam, setP3Cam] = useState();
    const [mySeat, setMySeat] = useState();
    const [displayDirections, setDisplayDirections] = useState(true);
    const [startGame, setStartGame] = useState();

    function three() {
        players = 3;
    }

    function four() {
        players = 4;
        console.log(players);
    }

    function five() {
        players = 5;
        console.log(players);
    }

    function six() {
        players = 6;
        console.log(players);
    }

    function seven() {
        players = 7;
        console.log(players);
    }

    function onStart() {
        console.log("clicking start btn");
        setStartGame(players);
        setDisplayDirections(false);
        console.log("Players: ", players);
    }

    return (
        <Container id="werewolfTable">
            <h2>Beast</h2>
            <br />
            <Webcam
                id="webcam"
                audio={true}
                mirrored={true}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                style={{ height: "360px", width: "360px", zIndex: "1000" }}
            />
            {mySeat != 1 && <img id="player1Cam" className="photo" src={player1Cam} />}
            {mySeat != 2 && <img id="player2Cam" className="photo" src={player2Cam} />}
            {mySeat != 3 && <img id="player3Cam" className="photo" src={player3Cam} />}
            {displayDirections
                &&
                <div id="directions">
                    <p>some basic instructions will go here - our spin on werewolf</p>
                    <Form>
                        <h4>How many players?</h4>
                        <FormGroup tag="fieldset">
                            <FormGroup check className="form-check-inline" check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        name="radio1"
                                        value="3"
                                        onClick={three}
                                    />{' '}
                                            3
                                        </Label>
                            </FormGroup>
                            <FormGroup check className="form-check-inline" check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        name="radio1"
                                        value="4"
                                        onClick={four}
                                        disabled
                                    />{' '}
                                            4
                                        </Label>
                            </FormGroup >
                            <FormGroup check className="form-check-inline" check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        name="radio1"
                                        value="5"
                                        onClick={five}
                                        disabled
                                    />{' '}
                                            5
                                        </Label>
                            </FormGroup>
                            <FormGroup check className="form-check-inline" check>
                                <Label check >
                                    <Input
                                        type="radio"
                                        name="radio1"
                                        value="6"
                                        onClick={six}
                                        disabled
                                    />{' '}
                                            6
                                        </Label>
                            </FormGroup>
                            <FormGroup check className="form-check-inline" check>
                                <Label check>
                                    <Input
                                        type="radio"
                                        name="radio1"
                                        value="7"
                                        onClick={seven}
                                        disabled
                                    />{' '}
                                            7
                                        </Label>
                            </FormGroup>
                        </FormGroup>
                    </Form>
                    <Button color="danger" onClick={onStart}>Start</Button>
                </div>
            }
            {startGame === 3
                &&
                <WerewolfGame3 />
            }
            {startGame === 4
                &&
                <WerewolfGame4 />
            }
            {startGame === 5
                &&
                <WerewolfGame5 />
            }
            {startGame === 6
                &&
                <WerewolfGame6 />
            }
            {startGame === 7
                &&
                <WerewolfGame7 />
            }
        </Container>
    )
}

export default WerewolfTable;