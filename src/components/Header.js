import React from "react";
import Navbar from "./Navbar";
import Birds from "./Birds";
import Balloon from "../assets/images/balloon-1.svg";
import Bike from "../assets/images/bike-1.svg";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="row h-100 header-body position-relative">
        
        <img className="bike position-absolute" src={Bike} />
        <img className="balloon position-absolute" src={Balloon} />
        <div className="col text-center">
          <Birds />
          <h1 className="display-3 px-md-5 px-0">
            <span className="fw-semibold">Discover</span> the Allure
            <br />
            of Sri Lanka's
            <span className="fw-semibold"> Paradise</span>
          </h1>
          <button className="btn btn-dark rounded-pill btn-sm px-4 py-3">
            Explore Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
