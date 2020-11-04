import React from "react";

const AboutMe = () => {
  return (
    <div className="container">
      <h1 className="about-me">About</h1>
      <hr />
      <img
        className="my-picture"
        src="../assets/images/MyPicture.jpg"
        alt="my-img"
      />
      <p>
        I am a software engineering student in Georgia Tech’s coding bootcamp.
        The goal is to work for a meaningful company that does good for the
        community. The dream is to work for Amazon on there prime air project. I
        currently work as an AEMT for Grady EMS. I enjoy serving the community
        of Atlanta and am looking forward to a rewarding job in a field that can
        impact lives in a positive way.
      </p>
    </div>
  );
};

export default AboutMe;
