import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Card, Row } from "react-bootstrap";

function Github() {
  const colourTheme = {
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc",
    light: ["#cbcccd", "#cbe0f6", "#30bddd", "#30bddd", "#30bdde"],
  };
  return (
    <Row style={{ justifyContent: "center",marginTop:"100px", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
     <Card className="project-card-view" style={{ width:"80%"}}>
     <GitHubCalendar
        username="itiaditi"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
     </Card>
    </Row>
  );
}

export default Github;
