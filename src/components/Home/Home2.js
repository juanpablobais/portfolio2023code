import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Home2() {
  const { t } = useTranslation();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               <span className="blue"> {t("UN POCO")} </span> {t("SOBRE MI")}
            </h1>
            <p className="home-about-body">
            {t("Tengo fluidez en lenguajes clásicos como")} <b className="blue">HTML, CSS y Javascript</b>, {t("así como en frameworks modernos como")} <b className="blue">React.js.</b> {t("Además, manejo herramientas de control de versiones como")} <b className="blue">Git</b> {t("y plataformas de colaboración como")} <b className="blue">GitHub</b>. 
              <br />
              <br />
            {t("En este momento, estoy ampliando mis conocimientos a través de un curso en línea sobre")} <b className="blue">SQL</b>{t("y estoy a punto de iniciar mis estudios en la ")} <b className="blue">{t("Tecnicatura Universitaria en Programación.")} </b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONTÁCTAME</h1>
            <p>
              {t("No dudes en")} <span className="blue"> {t("escribirme")} </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/juanpablobais?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/baisjuanpablo/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/j.uanpablo/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
