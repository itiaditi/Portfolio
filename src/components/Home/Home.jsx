import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import profile from "../../Assets/profile.png";
import pdf from "../../Assets/AditiDhimanResume.pdf";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Skills from "../About/Skills";
import Projects from "../Projects/Projects";
import Contact from "./Contact";

import Button from "react-bootstrap/Button";
function Home(props) {

  return (
    <section>
    <Container fluid  id="home" ref={props.home}>
    <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> ADITI DHIMAN</strong>
              </h1>

              <div
                style={{
                  paddingLeft: 50,
                  paddingRight: 50,
                  paddingTop: 20,
                  textAlign: "left",
                }}
              >
                <Type />
                
                <a href={pdf} target="_blank">
                  <button onClick={()=>{
                    window.open("https://drive.google.com/file/d/1rzs_-Fv2ihj1NNg-OQmjfe09uWessHnt/view?usp=drive_link")
                  }} className="btn btn-lg btn-outline-info mt-5 px-5">
                    RESUME
                  </button>
                </a>
               </div>
            </Col>

            <Col md={4} style={{ paddingBottom: 20, paddingTop: 20 }}>
              <img src={profile} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 link={props.about} />
      <Skills link={props.skills} />
      <Projects link={props.projects} />
      <Contact link={props.contact} />
   
  </section>
  );
}

export default Home;
