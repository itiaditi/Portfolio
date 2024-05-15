/** @format */

// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Button, Alert, Form } from "react-bootstrap";
// import myImg from "../../Assets/img-logo.png";
// import Tilt from "react-parallax-tilt";
import emailjs from "emailjs-com";
import {
  AiFillGithub,
  AiOutlineTwitter,
  // AiFillInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Contact(props) {
  const [validated, setValidated] = useState(false);
  const formRef = useRef(null);
  let [submit, setsubmit] = useState(false);
useEffect(()=>emailjs.init("V2-98SY8q_1anY9WW"),[])
  const getData = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      emailjs
        .sendForm(
          "service_rwqg9te",
          "template_y5af4u3",
          formRef.current,
        "V2-98SY8q_1anY9WW"
        )
        .then(
          (result) => {
            console.log(result.text);
            formRef.current.reset();
            setValidated(false);
            setsubmit(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    setValidated(true);
    submit ? setsubmit(false) : (submit = true);
  };

  return (
    // eslint-disable-next-line react/prop-types
    <Container fluid className="home-about-section" id="about" ref={props.link}>
      <Container id="about">
        <Row>
          <Col md={12} sm={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", fontWeight: "600" }}>
              Get in <span className="purple"> touch </span>
            </h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Col md={12} className="home-about-social">
              <h6 className="purple">EMAIL</h6>
              <h5>aditi.tlgt244@gmail.com</h5>
            </Col>
            <Col md={12} className="home-about-social">
              <h6 className="purple">CALL</h6>
              <h5>+918580906277</h5>
            </Col>
            <Col md={12} className="home-about-social">
              <h6 className="purple">LOCATION</h6>
              <h5>Palampur, Himachal Pradesh</h5>
            </Col>
          </Col>
          <Col md={6}>
            {submit ? (
              <Alert variant="success">
                Thank you for getting in touch. I will respond to you very soon.{" "}
              </Alert>
            ) : (
              ""
            )}
            <Form
              noValidate
              validated={validated}
              onSubmit={getData}
              ref={formRef}
            >
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Enter full name"
                  size="lg"
                  name="fname"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid name.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  size="lg"
                  name="email"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Email.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  cols={40}
                  placeholder="Your Message"
                  size="lg"
                  name="message"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid message.
                </Form.Control.Feedback>
              </Form.Group>
              <Button
                className="btn btn-lg btn-outline-warning px-5"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:aditi.tlgt244@gmail.com"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/itiaditi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/itiaditi008"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aditi-dhiman008/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Contact;
