import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Row>
        <Col md={6}>
          <Card.Img
            variant="top"
            src={props.imgPath}
            alt="card-img"
            style={{ objectFit: "cover" }}
          />
        </Col>
        <Col md={6}>
          <Card.Body>
            <Card.Title className="purple">
              <b style={{ textTransform: "uppercase" }}>{props.title}</b>
            </Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              {props.description}
            </Card.Text>
            <h6 className="purple">
              TECH STACK:&nbsp;<span className="text-light">{props.tech}</span>{" "}
            </h6>
            <br />
            <Button
              variant="info"
              className="mr-4"
              href={props.github}
              target="_blank"
            >
              <FaGithub /> &nbsp; Github
            </Button>
            <Button variant="info" href={props.link} target="_blank">
              <BiLinkExternal /> &nbsp;
              {props.isBlog ? "View Blog" : "View Project"}
            </Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
export default ProjectCards;
