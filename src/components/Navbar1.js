import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar1 = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState(JSON.parse(localStorage.getItem("rol")));

  const logout = () => {
    localStorage.removeItem("rol");
    navigate("/");
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        sticky="top"
        className="nav-bar"
      >
        <Container>
          <Navbar.Brand>
            <a href="/">
              <img src="/img/logo.png" width={80} alt="logo"></img>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/Autism" className="menu">
                Autismo
              </Nav.Link>
              <Nav.Link href="/News" className="menu">
                Noticias
              </Nav.Link>
              <Nav.Link href="/AboutUs" className="menu">
                Quiénes somos
              </Nav.Link>
              <Nav.Link href="/Contact" className="menu">
                Contacto
              </Nav.Link>
              {role === "user" || role === "admin" ? (
                <Nav.Link href="" className="menu" onClick={logout}>
                  Cerrar Sesión
                </Nav.Link>
              ) : (
                <Nav.Link href="/Login" className="menu">
                  Cuenta
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbar1;
