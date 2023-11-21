import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiHtml5,
  DiGit,
  DiJsBadge,
  DiPostgresql,
  DiBootstrap,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <DiHtml5 />
        <p>HTML5</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <p>CSS3</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiJsBadge />
        <p>JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p>React Js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p>Node Js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiPostgresql />
        <p>PostgreSQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiBootstrap />
        <p>Bootstrap</p>
      </Col>
    </Row>
  );
}

export default Techstack;
