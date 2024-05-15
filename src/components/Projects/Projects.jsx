import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";
import Github from "../About/Github";

import reliance from "../../Assets/Projects/reliance.jpeg";
import toppers from "../../Assets/Projects/toppers.jpeg";
import sb from "../../Assets/Projects/snapbasket.jpeg";

function Projects(props) {
  return (
    <Container fluid className="project-section" ref={props.link}>
      <Particle />
      <Container>
        <h1 style={{ fontSize: "2.6em", fontWeight: "600", color: "white" }}>
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={sb}
              isBlog={false}
              title="Zepto Clone"
              description="SnapBasket, is your one-stop online destination for all your grocery needs."
              link="https://debug-adept-0123.vercel.app/snapBasket/index.html"
              github="https://github.com/itiaditi/debug-adept-0123"
              tech="HTML, CSS, JAVASCRIPT"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={reliance}
              isBlog={false}
              title="Reliance Digital Clone"
              description="Reliance World focuses on offering a wide range of electronic products and gadgets."
              link="https://65ade3de9fb39fdcb10c705e--stirring-starlight-16f55e.netlify.app/"
              github="https://github.com/itiaditi/javascript-jadoo-8901.git"
              tech="HTML, CSS, BOOTSTRAP"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center" }}>
          <Col md={12} className="project-card">
            <ProjectCard
              imgPath={toppers}
              isBlog={false}
              title="Khan Academy Clone"
              description="Toppers Academy is a free website where you can learn about many different things."
              github="https://github.com/itiaditi/toppers-academy.git"
              link="https://toppers-academy-henna.vercel.app/"
              tech="ReactJs, Typescript, JSON server"
            />
          </Col>
        </Row>
      </Container>
      <Github />
    </Container>
  );
}

export default Projects;
