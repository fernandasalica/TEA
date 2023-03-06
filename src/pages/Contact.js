import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Contact = () => {
  return (
    <>
      <img src="./img/contact.jpg"></img>
      <Container className="mb-5">
        <h3 className="letter-tittle mt-5 mb-3">Formulario de Contacto</h3>
        <hr></hr>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Card className="border-0">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingrese Nombre"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingrese Email"
                    required
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    placeholder="Mensaje"
                    required
                  />
                </Form.Group>
                <Button className="button" type="submit">
                  Enviar
                </Button>
              </Form>
            </Card>
          </Col>
          <Col>
            <Card className="border-0">
              <Card.Body>
                <Card.Title className="letter-tittle">Información</Card.Title>
                <Card.Text>
                  <ul className="list-contact">
                    <li>
                      <b>Teléfono:</b> 381-5074271
                    </li>
                    <li>
                      <b>Email:</b> info@tea.com
                    </li>
                    <li>
                      <b>Horario de atención:</b>
                    </li>
                    <li>Lunes a Viernes de 17:00 hs a 21 hs.</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
