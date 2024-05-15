// eslint-disable-next-line no-unused-vars
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// import gif from "../../Assets/about-gif.gif";


function Home2(props) {
  return (
    // eslint-disable-next-line react/prop-types
    <Container className="home-about-section" id="about" ref={props.link}>
      <Container id="about">
        <Row className="flex-column-reverse flex-lg-row">
          <Col
            xs={12} // Full width on mobile and tablet
            lg={5} // Half width on larger screens
            className="home-about-description "
            id="home-about-description"
          >
            <img
              src="https://camo.githubusercontent.com/1bccf360b3176699c2311bb48cc462b14bd872cdbc12775a68a2d18c823be833/68747470733a2f2f6d656469612e6c6963646e2e636f6d2f646d732f696d6167652f443536323241514866706a4c32333445436c772f6665656473686172652d736872696e6b5f323034385f313533362f302f313639333931313736373132383f653d3231343734383336343726763d6265746126743d4a325a476f6d66565f4f457a434b35374d48486f475741593863386b6d7a616c7076513635744e38623430"
              className="img-fluid"
              style={{
                borderRadius: "20px",
                boxShadow: "4px 5px 4px 3px #30bddd",
              }}
            />
          </Col>
          <Col
            xs={12} // Full width on mobile and tablet
            lg={7} // Half width on larger screens
            className="home-about-description pl-5"
            id="home-about-description2"
          >
            <h1 style={{ fontSize: "2.6em", fontWeight: "600" }}>
              About<span className="purple"> Me </span>
            </h1>
            <p className="home-about-body" style={{ textAlign: "justify" }}>
              An Aspiring Full Stack Web Developer with a passion for
              <i>
                <b className="purple"> developing web applications.</b>
              </i>
              <br />
              <br />
              Worked in
              <i>
                <b className="purple"> 700+ hours </b>
              </i>
              of bootcamp, learning
              <i>
                <b className="purple"> JavaScript, and MERN stack. </b>
              </i>
              Enthusiastic to handle web development challenges to create
              enduring impacts on user experience.
              <br />
              <br />
              Looking forward to applying and enhancing my skills and knowledge
              as a developer.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
