import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

const Information = () => {
  return (
    <Container className="my-4">
      <h3 className="letter-tittle">MAS INFORMACION...</h3>
      <hr></hr>
      <CardGroup>
        <Card className="p-4 border-0">
          <Card.Img variant="top" src="./img/children.jpg" />
          <Card.Body>
            <Card.Title>Persona con autismo</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="p-4 border-0">
          <Card.Img variant="top" src="./img/parent.jpg" />
          <Card.Body>
            <Card.Title>Padres</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="p-4 border-0">
          <Card.Img variant="top" src="./img/educator.jpg" />
          <Card.Body>
            <Card.Title>Educador</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
};

export default Information;
