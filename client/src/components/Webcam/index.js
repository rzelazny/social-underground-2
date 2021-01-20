import Camera from "react-webcam";
import React, { useState, useEffect } from "react";
import "./style.css";

export function Webcam() {
    const webcamRef = React.useRef(null);

    return (<div>
        <Camera
            id="webcam"
            audio={false}
            mirrored={true}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            style={{ height: "360px", width: "360px", zIndex: "1000"}}
        />
    </div>)
}

// //Take a photo snapshot
// export const webcamSnap = React.useCallback(
//     () => {
//         const imageSrc = webcamRef.current.getScreenshot();
//     },
//     [webcamRef]
// );