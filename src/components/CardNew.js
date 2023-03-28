import React from "react";
import { Card, Col, Button, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

const CardNew = ({ d }) => {
  return (
    <Col>
      <Card className="h-100">
        <Card.Img variant="top" src="../img/autismo1.jpg" />
        <Card.Body>
          <Card.Title>{d.name}</Card.Title>
          <Card.Text>{d.shortDesc}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className="d-flex justify-content-between">
            <Button className="button" href="/NewDetail">
              Leer más..
            </Button>
            <Nav.Link href="#link" className="text-muted">
              4 comentarios
            </Nav.Link>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardNew;
