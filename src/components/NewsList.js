import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Pagination from "react-bootstrap/Pagination";

const NewsList = () => {
  return (
    <Container className="my-4">
      <h3 className="my-3 letter-tittle">NOTICIAS</h3>
      <hr></hr>
      <p className="mb-5">
        Browse our blog to discover a wealth of information about autism. It’s
        no secret that managing autism comes with challenges, but many of them
        can be overcome with some basic knowledge and ideas. Our blog is a
        valuable resource for new and experienced parents and teachers alike.
        Discover tips for having fun, methods for encouraging healthy
        development, insight into the science, and so much more! Be sure to
        check back often for the latest posts from fellow parents and experts in
        the field.
      </p>
      <Row xs={1} md={3} className="g-5">
        <Col>
          <Card>
            <Card.Img variant="top" src="../img/autismo1.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
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
        <Col>
          <Card>
            <Card.Img variant="top" src="../img/autismo1.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
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
        <Col>
          <Card>
            <Card.Img variant="top" src="../img/autismo1.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="d-flex justify-content-between">
                <Button className="button">Leer más..</Button>
                <Nav.Link href="#link" className="text-muted">
                  4 comentarios
                </Nav.Link>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="mb-5">
            <Card.Img variant="top" src="../img/autismo1.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="d-flex justify-content-between">
                <Button className="button">Leer más..</Button>
                <Nav.Link href="#link" className="text-muted">
                  4 comentarios
                </Nav.Link>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="mb-5">
            <Card.Img variant="top" src="../img/autismo1.jpg" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <div className="d-flex justify-content-between">
                <Button className="button">Leer mas..</Button>
                <Nav.Link href="#link" className="text-muted">
                  4 comentarios
                </Nav.Link>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      <Pagination className="d-flex justify-content-center">
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </Container>
  );
};

export default NewsList;
