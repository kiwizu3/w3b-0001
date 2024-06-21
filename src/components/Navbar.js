import React, { useState } from "react";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedNav, setSelectedNav] = useState('home');

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleNav = (item) => {
    console.log("what", item)
    setSelectedNav(item)
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top p-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="fw-semibold"><span className="text-white">Explore</span>Solo</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
            aria-controls="navbarNav"
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${
              !isCollapsed ? "show full-page" : ""
            }`}
            id="navbarNav"
          >
            <ul
              className={`navbar-nav ${
                isCollapsed ? "justify-content-center ms-auto" : ""
              }`}
            >
              <li className="nav-item" onClick={() => handleNav("home")}>
                <a className={`nav-link ${selectedNav === "home" && "nav-active"}`} href="#">
                  Home
                </a>
              </li>
              <li className="nav-item" onClick={() => handleNav("about")}>
                <a className={`nav-link ${selectedNav === "about" && "nav-active"}`} href="#">
                  About
                </a>
              </li>
              <li className="nav-item" onClick={() => handleNav("community")}>
                <a className={`nav-link ${selectedNav === "community" && "nav-active"}`} href="#">
                  Community
                </a>
              </li>
              <li className="nav-item" onClick={() => handleNav("blog")}>
                <a className={`nav-link ${selectedNav === "blog" && "nav-active"}`} href="#">
                  Blog
                </a>
              </li>
            </ul>
            <div className={ isCollapsed ?"ms-auto" : "" }>
              <button className="btn btn-outline-dark rounded-pill btn-sm py-2 px-3">Explore Now</button>
            </div>
            {!isCollapsed && (
              <button
                className="btn-close position-absolute top-0 right-1 m-3"
                onClick={handleToggle}
                aria-label="Close"
              ></button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
