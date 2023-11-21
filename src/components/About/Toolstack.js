import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGithub,
  SiSlack,
  SiVercel,
  SiWindows10,
  SiGit,
  SiFedora,
  SiAdobephotoshop,
  SiMicrosoftoffice,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <SiWindows10 />
      <p>Windows</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiFedora />
        <p>Linux Fedora</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <p>Visual Studio Code</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <p>Slack</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <p>Vercel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <p>GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
        <p>Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiAdobephotoshop />
        <p>Adobe Photoshop</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiMicrosoftoffice />
        <p>Paquete Office</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
