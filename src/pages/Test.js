import React from "react";

import Lottie from "react-lottie";
import animationData from "../lotties/birds.json";

const Test = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <div className="container-fluid h-100 bg-image">
        <Lottie options={defaultOptions} height={100} width={100} />
        <Lottie options={defaultOptions} height={100} width={100} />
      </div>
    </>
  );
};

export default Test;
