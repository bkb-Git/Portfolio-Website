import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { ArrowIcon } from "../HomePage/SNSNavBar";
import Tile from "./Tiles";

export default function Container() {
  const history = useHistory();
  const appContext = useContext(AppContext)

  function handleClick(e) {
    appContext.updateNextRoute('/about');
    history.push('/about');
  }

  return (
    <div>
      <div className="Container-1">
        <Tile />
      </div>

      <div className="div-1" onClick={handleClick}>
        <ArrowIcon page={2} />
        <div className="transition-icon-1"></div>
      </div>
    </div>
  );
}
