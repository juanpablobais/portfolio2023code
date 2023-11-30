import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import { LuBarChartBig } from "react-icons/lu";

import {
  AiOutlineUser,
} from "react-icons/ai";
import LanguageSelector from "../components/LanguageSelector"
import { useTranslation } from "react-i18next";
import { BiCameraMovie } from "react-icons/bi";
import { FaDollarSign } from "react-icons/fa6";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { GrHomeRounded } from "react-icons/gr";



function NavBar() {
  const { t } = useTranslation();
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
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
          <Nav className="ms-auto navbar-nav" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <GrHomeRounded style={{ marginBottom: "2px" }} /> {t("Inicio")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <LuBarChartBig style={{ marginBottom: "2px" }} /> Skills
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <HiOutlineDesktopComputer
                  style={{ marginBottom: "2px" }}
                />{" "}
                {t("Proyectos")}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="https://es.fiverr.com/juanpablobais?public_mode=true"
                target="_blank"
                onClick={() => updateExpanded(false)}
              >
                <FaDollarSign
                  style={{ marginBottom: "2px" }}
                />{" "}
                Fiverr
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="https://vision-critica.vercel.app/"
                target="_blank"
                onClick={() => updateExpanded(false)}
              >
                <BiCameraMovie 
                  style={{ marginBottom: "2px" }}
                  />{" "}
                VisionCritica
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <LanguageSelector />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
