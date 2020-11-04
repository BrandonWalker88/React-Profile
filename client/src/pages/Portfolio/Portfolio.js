import React from "react";
import { Link } from "react-router-dom";

const portfolio = () => {
  return (
    <div className="portfolio-container">
      <h1 className="about-me">Portfolio</h1>
      <hr />
      <div className="row">
        <div className="col-md-4">
          <Link
            className="Eat"
            to="https://github.com/BrandonWalker88/Eat-Da-Burger.git"
          >
            <img
              src="../assets/images/Eat-Da-Burger-App.png"
              height="150px"
              alt="Burger"
            />
          </Link>
        </div>
        <div className="col-md-4">
          <Link
            className="Eat"
            to="https://github.com/BrandonWalker88/employee-tracker.git"
          >
            <img src="./assets/images/SE.jpeg" height="150px" alt="Employee" />
          </Link>
        </div>
        <div className="col-md-4">
          <Link className="Eat" to="https://github.com/cddeal12/Project-1.git">
            <img
              src="./assets/images/Play't_Safe.png"
              height="150px"
              alt="Project-1"
            />
          </Link>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4">
          <Link
            className="Eat"
            to="https://github.com/BrandonWalker88/Note-taker.git"
          >
            <img
              src="../assets/images/note_img.jpg"
              height="150px"
              alt="Note"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default portfolio;
