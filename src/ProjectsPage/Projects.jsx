import React from "react";
import SNSNavBar from "../HomePage/SNSNavBar";
import sns from "../sns.js";
import Container from "./container";
import Header from "./Header";

function Projects() {

  return (
    <div className="projects-p-background">
      <Header />
      <SNSNavBar buttons={sns} page={2} />
      <Container />
    </div>
  );
}

export default Projects;
