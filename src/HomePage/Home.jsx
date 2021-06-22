import { useContext } from "react";


import sns from "../sns.js";
import SNSNavBar from "./SNSNavBar";
import { ArrowIcon } from "./SNSNavBar";
import { useHistory } from "react-router-dom";
import Intro from "./Intro";

import { AppContext } from "../context/AppContext";

function Home() {
  

  const history = useHistory();
  const appContext = useContext(AppContext)

  function handleClick(e) {
    appContext.updateNextRoute('/projects');
    history.push('/projects');
  }

  return (
    <div className="home-container">
      <SNSNavBar buttons={sns} page={1} />
      <div className="right-side-background">
        <div className="div" onClick={handleClick}>
          <ArrowIcon page={1} />
          <div className="transition-icon"></div>
        </div>
      </div>
      <div className="left-side-background"></div>
      <Intro />
    </div>
  );
}

export default Home;
