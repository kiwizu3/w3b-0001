import React from "react";
import BalloonImage from "../assets/images/balloon-1.svg";

const Balloon = () => {
    return (
        <img className="balloon position-absolute" src={BalloonImage} />
    )
}

export default Balloon;