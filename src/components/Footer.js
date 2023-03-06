import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
  return (
    <>
      <div className="bg-footer">
        <Container>
          <Row className="d-flex justify-content-between">
            <Col>
              <Nav defaultActiveKey="/home" className="flex-column py-3">
                <Nav.Link href="/Autism" className="menu">
                  Autismo
                </Nav.Link>
                <Nav.Link className="menu" href="/News">
                  Noticias
                </Nav.Link>
                <Nav.Link className="menu" href="/AboutUs">
                  Quiénes somos
                </Nav.Link>
                <Nav.Link className="menu" href="/Contact">
                  Contacto
                </Nav.Link>
                <Nav.Link className="menu">Cuenta</Nav.Link>
              </Nav>
            </Col>
            <Col className="text-center py-5 icons">
              <img alt="" src="./img/logo.png" />
            </Col>
            <Col className="text-end py-5">
              <p className="">Redes Sociales</p>
              <i class="fa-brands fa-facebook p-2 icons"></i>
              <i class="fa-brands fa-instagram p-2 icons"></i>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="mt-auto text-white py-4 bg-footer-bottom">
        <p className="text-center">
          Copyright 2023 - TEA Trastorno del Espectro Autista
        </p>
      </div>
    </>
  );
};

export default Footer;
