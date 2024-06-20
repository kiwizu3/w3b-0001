import React from "react";
import Navbar from "./Navbar";
import Birds from "./Birds";

import Bike from "./Bike";
import Balloon from "./Balloon";
import Title from "./Title";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="row h-100 header-body position-relative">
        <Bike />
        <Balloon />
        <div className="col text-center">
          <Birds />
          <Title />
          <button className="btn btn-dark rounded-pill btn-sm px-4 py-3">
            Explore Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
