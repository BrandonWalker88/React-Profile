import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h1 className="navbar-brand border bg-info text-white">Branon Walker</h1>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <Link className="nav-link" to="/Contact">
            Contact
          </Link>
          <Link className="nav-link" to="/Portfolio">
            Portfolio
          </Link>
          <Link className="nav-link active" to="/AboutMe">
            About<span className="sr-only">(current)</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
