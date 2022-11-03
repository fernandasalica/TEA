import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

const Footer = () => {
  return (
    <>
    <div className="secondary-color">
      <Container>
        <Row className="d-flex justify-content-between">
          <Col>
            <Nav defaultActiveKey="/home" className="flex-column py-3">
              <Nav.Link href="/home">Inicio</Nav.Link>
              <Nav.Link eventKey="link-1">Nosotros</Nav.Link>
              <Nav.Link eventKey="link-2">Contacto</Nav.Link>
              <Nav.Link eventKey="link-2">Mi Cuenta</Nav.Link>
            </Nav>
          </Col>
          <Col className="text-center py-5 icons">
            <img alt="" src="/logo.png"/>
          </Col>
          <Col className="text-end py-5 icons">
              <i class="fa-brands fa-facebook p-2"></i>
              <i class="fa-brands fa-instagram p-2"></i>
          </Col>
        </Row>
        </Container>
      </div>
      <div className='mt-auto text-white py-4 primary-color'>
        <h5 className='text-center'>Copyright 2022 - TEA Trastorno del Espectro Autista</h5>
      </div>  
    </>
  )
}

export default Footer