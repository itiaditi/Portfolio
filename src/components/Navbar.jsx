/** @format */

// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";


function NavBar(props) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  const closeMenu = () => {
    updateExpanded(false); 
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="xl"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/">
          {/* <img src={logo} className="img-fluid logo" alt="brand" /> */}
          <h2 className="purple" style={{ lineHeight: "0" }}>
            <i>
              Aditi[<span style={{ color: "white" }}>&quot;Dev&quot;</span>]
            </i>
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{marginLeft:"32%"}} className="ml-auto"  defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  // eslint-disable-next-line react/prop-types
                  props.home.current.scrollIntoView({ behavior: "smooth" });
                  closeMenu();
                }}
              >
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  // eslint-disable-next-line react/prop-types
                  props.about.current.scrollIntoView({ behavior: "smooth" });
                  closeMenu();
                }}
              >
                About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  // eslint-disable-next-line react/prop-types
                  props.skills.current.scrollIntoView({ behavior: "smooth" });
                  closeMenu();
                }}
              >
                Skills
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  // eslint-disable-next-line react/prop-types
                  props.projects.current.scrollIntoView({
                    behavior: "smooth",
                  });
                  closeMenu();
                }}
              >
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  // eslint-disable-next-line react/prop-types
                  props.contact.current.scrollIntoView({
                    behavior: "smooth",
                  });
                  closeMenu();
                }}
              >
                Contact
              </Nav.Link>
            </Nav.Item>

            {/* 
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
