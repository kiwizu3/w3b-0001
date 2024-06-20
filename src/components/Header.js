import React from "react";
import Navbar from "./Navbar";
import Birds from "./Birds";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="row h-100 header-body">
        <div className="col text-center">
          <Birds />
          <h1 className="display-3">
            <span className="fw-semibold">Discover</span> title <br /> goes here{" "}
            <span className="fw-semibold">like this</span>
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
