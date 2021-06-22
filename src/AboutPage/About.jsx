import React, { useContext, useState } from "react";
import AboutMe from "./AboutMe";
import ContactMe from "./ContactMe";
import Footer from "./Footer";
import { ArrowIcon } from "../HomePage/SNSNavBar";
import { useHistory } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const DISPLAY_STATE = {
  ABOUT: "about",
  CONTACT: "contact",
};

function About() {
  const [displayState, setDisplayState] = useState("");
  const history = useHistory();
  const appContext = useContext(AppContext);

  function handleLeave() {
    setDisplayState("");
  }

  function handleRoute1(e) {
    appContext.updateNextRoute("/");
    history.push("/");
  }

  function handleRoute2(e) {
    appContext.updateNextRoute("/projects");
    history.push("/projects");
  }

  return (
    <div className="about-background">
      <div className="container-flex">
        <div
          className="aboutMe"
          onMouseOver={() => setDisplayState(DISPLAY_STATE.ABOUT)}
          onMouseLeave={handleLeave}
        >
          <AboutMe display={displayState} />
        </div>
        <div
          className="contactMe"
          onMouseOver={() => setDisplayState(DISPLAY_STATE.CONTACT)}
          onMouseLeave={handleLeave}
        >
          <ContactMe display={displayState} />
        </div>
      </div>
      <Footer />
      <div className="div-2" onClick={handleRoute1}>
        <ArrowIcon backToHome={true} />
        <div className="transition-icon-2"></div>
      </div>
      <div className="div-3" onClick={handleRoute2}>
        <ArrowIcon />
        <div className="transition-icon-3"></div>
      </div>

    </div>
  );
}

export default About;
