import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.png";
import Home2 from "./Home2";
import Type from "./Type";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "400px" }}
              />
              <Type />
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
