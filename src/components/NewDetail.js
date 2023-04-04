import { Container, Button } from "react-bootstrap";

const NewDetail = ({ data }) => {
  return (
    <>
      <img src={data.image}></img>
      <Container>
        <h2 className="letter-tittle mt-4">{data.name}</h2>
        <p className="mt-3">{data.description}</p>
        <h5 className="mt-5">Enviar comentario</h5>
        <p>
          Tu dirección de correo electrónico no será publicada. Los campos
          obligatorios están marcados con *
        </p>
        <div className="form-comments">
          <textarea
            placeholder="Comentario *"
            className="mb-3 comments"
            p-2
          ></textarea>
          <input placeholder="Nombre *" className="mb-3 input-comments"></input>
          <input placeholder="Email *" className="mb-3 input-comments"></input>
          <Button className="button input-comments mb-5">
            Enviar comentario
          </Button>
        </div>
      </Container>
    </>
  );
};

export default NewDetail;
