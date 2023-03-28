import { Container, Row } from "react-bootstrap";
import CardNew from "./CardNew";

const ListNews = ({ data }) => {
  return (
    <Container className="my-4">
      <h3 className="letter-tittle">NOTICIAS</h3>
      <hr></hr>
      <Row xs={1} md={3} className="g-5">
        {data.map((d, i) => (
          <CardNew d={d} key={"New" + i} />
        ))}
      </Row>
    </Container>
  );
};

export default ListNews;
