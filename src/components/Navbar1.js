import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navbar1 = () => {
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
              <Nav.Link href="/Login" className="menu">
                Cuenta
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbar1;
