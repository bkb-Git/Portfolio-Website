import { useState, useContext } from "react";
import "../app.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleDown,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleDoubleUp,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function SNSNavBar(props) {
  const { buttons = [], page } = props;

  const history = useHistory();
  const appContext = useContext(AppContext);

  const NavBarOptions = buttons.map((elem, index) => {
    return elem.name === "Home" || elem.name === "About" ? (
      <i className={`button-icons fa-4x icon${index}`} data={elem.name} onClick={() => elem.onClick(history, appContext)}
      >
        <FontAwesomeIcon icon={elem.icon} />
      </i>
    ) : (
      <i className={`button-icons fa-4x icon${index}`} data={elem.name}
      >
        <FontAwesomeIcon icon={elem.icon} />
      </i>
    );
  });

  return <div className={`side-navbar${page}`}>{NavBarOptions}</div>;
}

function ArrowIcon(props) {
  const { page, backToHome } = props;

  const home = {
    NavPageTag: ["Projects"],
    color: "rgb(255, 255, 255)",
    icon: [faAngleDoubleRight, "fa-6x"],
    styleNames: ["arrowButton", "next-page-tag"],
  };
  const projects = {
    NavPageTag: ["About"],
    color: "#696867",
    icon: [faAngleDoubleDown, "fa-6x"],
    styleNames: ["arrowButton-1", "next-page-tag-1"],
  };
  const about = [
    {
      NavPageTag: ["Back Home"],
      color: "rgb(255,255,255)",
      icon: [faAngleDoubleLeft, "fa-4x"],
      styleNames: ["arrowButton-2-Home", "next-pageTag-2-Home"],
    },
    {
      NavPageTag: ["Projects"],
      color: "rgb(255,255,255)",
      icon: [faAngleDoubleUp, "fa-4x"],
      styleNames: ["arrowButton-3", "next-page-tag-3"],
    },
  ];

  const currentPage =
    page === 1 ? home : page === 2
               ? projects : backToHome
               ? about[0] : about[1];

  return (
    <div
      className={currentPage.styleNames[0]}
      style={{ color: currentPage.color }}
    >
      <i className={currentPage.icon[1]} data={currentPage.NavPageTag[0]} >
        <FontAwesomeIcon icon={currentPage.icon[0]} />
      </i>
    </div>
  );
}

export { ArrowIcon };
export default SNSNavBar;
