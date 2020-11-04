import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="about-me">Contact Me</h1>
          <hr />
          <form>
            <div className="form-group">
              <label for="exampleFormControlInput1">Name</label>
              <input
                type="Name"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="form-group">
              <label for="exampleFormControlInput1">Message</label>
              <input
                type="Message"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Write me a message here!"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <button type="button" className="btn btn-info">
            Submit
          </button>
        </div>
        <div className="col-md-2">
          <Link href="https://www.linkedin.com/in/brandon-walker-026b5399">
            <img
              className="icon"
              src="../assets/images/linkin.png"
              alt="linked-in"
            />
          </Link>
        </div>
        <div className="col-md-2">
          <Link href="https://github.com/BrandonWalker88">
            <img
              className="icon"
              src="../assets/images/Git_hub_logo.jpg"
              alt="Github"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
