import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

const OurObjetive = () => {
  return (
    <Container className="my-4">
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card className="border-0">
            <Card.Body>
              <Card.Title className="mb-4">
                <h3 className="letter-tittle">NUESTRO OBJETIVO</h3>
                <hr></hr>
              </Card.Title>
              <Card.Text>
                <ul className="item-objetive">
                  <li>
                    Mejorar la calidad de vida y fomentar el apoyo social.
                  </li>
                  <li>
                    Servir de apoyo y asesoramiento a las personas con autismo y
                    a sus familias
                  </li>
                  <li>
                    Fomentar la formación y aprendizaje de las personas con
                    autismo.
                  </li>
                  <li>Representación de afectados y familias</li>
                  <li>
                    Conectar a las personas con autismo con la sociedad. En
                    definitiva, estar juntos en el autismo.
                  </li>
                </ul>
                <Button className="button mx-3">CONTACTANOS</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="../img/autismo3.jpg" />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OurObjetive;
