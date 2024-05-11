/** @format */

import React, { useState, useEffect, useRef } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Skills from "./components/About/Skills";
// import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";


function App() {
  const [load, upadateLoad] = useState(true);
  const about = useRef();
  const skills = useRef();
  const projects = useRef();
  const home = useRef();
  const contact = useRef();
const handleClick=()=>{
  console.log("resume")
}
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (<>
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar
          about={about}
          skills={skills}
          projects={projects}
          home={home}
          contact={contact}
        />
        <ScrollToTop />
        <Home
          about={about}
          skills={skills}
          projects={projects}
          home={home}
          contact={contact}
        />
        {/* <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={Projects} />
          <Route path="/skills" component={Skills} />
        </Switch> */}
        <Footer />
      </div>
    </Router>
    </>
   
  );
}

export default App;
