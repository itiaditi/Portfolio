/** @format */

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
// import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function Skills(props) {
  return (
    <Container fluid className="about-section" ref={props.link}>
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <br />

        <Techstack />
        <br />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <br />
        <Toolstack />
      </Container>
    </Container>
  );
}

export default Skills;
