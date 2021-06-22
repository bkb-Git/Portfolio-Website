import React from "react";

export default function AboutMe({ display }) {
  const toggleDisplay = display === "about" ? "none" : "block";

  return (
    <div className="container">
      <h1 className="header" style={{ display: toggleDisplay }}>
        About <span>Me</span>
      </h1>
      <div className="about-grid-display">
        <div className="profile-pic"></div>
        <p>
          {" "}
          <span id="bio-text1">
            Hi, I am a self-taught junior software developer currently based in
            Nairobi. My journey has taken about a year and has been so far a
            great career path for me.
            <br />
          </span>
          <span id="bio-text3">
            I have a good handle on some Front and Back-end Development using
            frameworks and tools such as React , Redux , Express and MongoDB.
            <br />
          </span>
          <span id="bio-text4">
            It would be a great opportunity to work on a variety of projects
            delivering excellent services on your behalf.
            <br />
          </span>
          <span id="bio-text5">Reach out to me.</span>
        </p>
        <div className="personal-details">
          <div className="detail1" data="\f3c5">
            Nairobi,Kenya
          </div>
          <div className="detail2" data="\f1fa">
            {" "}
            billykbett@gmail.com
          </div>
          <div className="detail3" data="\f095">
            +254-746735731
          </div>
        </div>
      </div>
    </div>
  );
}
