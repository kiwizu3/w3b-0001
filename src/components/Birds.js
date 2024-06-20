import React from "react";
import Bird from "../assets/gifs/bird.gif";

const Birds = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="position-relative">
        <div className="bird">
          <img className="position-absolute bird-1" src={Bird} />
          <img className="position-absolute bird-2" src={Bird} />
          <img className="position-absolute bird-3" src={Bird} />
          <img className="position-absolute bird-4" src={Bird} />
        </div>
      </div>
    </div>
  );
};
export default Birds;
