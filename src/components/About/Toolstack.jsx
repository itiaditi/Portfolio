import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { DiGit } from "react-icons/di";
import {
  SiLinux,
  SiVisualstudiocode,
  SiJupyter,
  SiPostman,
  SiHeroku,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h5>VS CODE</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h5>POSTMAN</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <h5>HEROKU</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h5>GIT</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
        <h5>GITHUB</h5>
      </Col>
    </Row>
  );
}

export default Toolstack;
