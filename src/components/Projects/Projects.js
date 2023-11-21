import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import buscaminas from "../../Assets/Projects/buscaminas.jpeg";
import organizerapp from "../../Assets/Projects/organizerapp.jpeg";
import sushizen from "../../Assets/Projects/sushizen.jpeg";
import visioncritica from "../../Assets/Projects/visioncritica.jpeg";
import oldportfolio from "../../Assets/Projects/oldportfolio.jpeg";
import portfolio from "../../Assets/Projects/portfolio.jpeg";
import firstportfolio from "../../Assets/Projects/firstportfolio.jpeg";
import voytur from "../../Assets/Projects/voytur.jpeg";
import justbeauty from "../../Assets/Projects/justbeauty.jpeg";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
        {t("Mis")} {t("recientes")} <strong className="blue">{t("Proyectos")} </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={visioncritica}
              title="Vision Critica"
              description={t("visioncriticadesc")}
              ghLink="https://github.com/juanpablobais/VisionCritica"
              demoLink="https://vision-critica.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              title="Portfolio"
              description={t("portfoliodesc")}
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sushizen}
              title="SushiZen"
              description={t("sushizendesc")}
              ghLink="https://github.com/juanpablobais/sushizen"
              demoLink="https://juanpablobais.github.io/sushizen/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oldportfolio}
              title="Portfolio 2022"
              description={t("portfolio2022desc")}
              ghLink="https://github.com/juanpablobais/portfolioreactjs"
              demoLink="https://portfolioreactjs.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voytur}
              title="VoyTur"
              description={t("voyturdesc")}
              ghLink="https://github.com/juanpablobais/voytur"
              demoLink="https://voytur.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buscaminas}
              title= {t("buscaminas")}
              description={t("buscaminasdesc")}
              ghLink="https://github.com/juanpablobais/challenge-TAP"
              demoLink="https://juanpablobais.github.io/challenge-TAP/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={organizerapp}
              title="Organizer App"
              description={t("organizerappdesc")}
              ghLink="https://github.com/juanpablobais/organizerapp"
              demoLink="https://juanpablobais.github.io/organizerapp/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={firstportfolio}
              title="Portfolio 2021"
              description={t("portfolio2021desc")}
              ghLink="https://github.com/juanpablobais/organizerapp"
              demoLink="https://juanpablobais.github.io/organizerapp/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={justbeauty}
              title="Just Beauty 2021"
              description={t("justbeauty2021desc")}
              ghLink="https://github.com/juanpablobais/htmlycssbasico"
              demoLink="https://juanpablobais.github.io/htmlycssbasico/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
