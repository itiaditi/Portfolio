import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaElementor,
} from "react-icons/fa";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiHeroku,
  DiWordpress,
} from "react-icons/di";
import { SiPytorch, SiTensorflow, SiFirebase } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} sm={6} className="tech-icons">
        <FaHtml5 />
        <h5>HTML</h5>
      </Col>
      <Col xs={4} md={2} sm={6} className="tech-icons">
        <FaCss3Alt />
        <h5>CSS</h5>
      </Col>

      <Col xs={4} md={2} sm={6} className="tech-icons">
        <DiJavascript1 />
        <h5>JAVASCRIPT</h5>
      </Col>
      <Col xs={4} md={2} sm={6} className="tech-icons">
        <FaBootstrap />
        <h5>BOOTSTRAP</h5>
      </Col>
      <Col xs={4} md={2} sm={6} className="tech-icons">
        <DiReact />
        <h5>REACT</h5>
      </Col>

      <Col xs={4} md={2} sm={6} className="tech-icons">
        <DiNodejs />
        <h5>NODEJS</h5>
      </Col>

      <Col xs={4} md={2} sm={6} className="tech-icons">
        <DiMongodb />
        <h5>MONGODB</h5>
      </Col>
      {/* <Col xs={4} md={2} sm={6} className="tech-icons">
        <FaElementor />
        <h5>CHAKRA</h5>
      </Col>
      <Col xs={4} md={2} sm={6} className="tech-icons">
        <DiWordpress />
        <h5>WORDPRESS</h5>
      </Col> */}
    </Row>
  );
}

export default Techstack;
