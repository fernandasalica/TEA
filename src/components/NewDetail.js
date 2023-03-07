import { Container, Button } from "react-bootstrap";

const NewDetail = () => {
  return (
    <>
      <img src="./img/login.jpg"></img>
      <Container>
        <h2 className="letter-tittle mt-4">Nombre Noticia</h2>
        <p className="mt-3">
          Antes de comenzar, es necesario explicar que el autismo es un
          trastorno del neurodesarrollo de origen complejo. Hay un factor de
          heredabilidad genética del 80%, lo que indica que los genes (el
          genotipo) tienen una gran influencia en que el autismo se manifieste
          en una persona (fenotipo). Se entiende por fenotipo las
          características físicas, bioquímicas y del comportamiento que se
          pueden observar en un individuo. Algunos rasgos del fenotipo de una
          persona son la estatura, el color de los ojos, el color del pelo, el
          tipo de sangre, el comportamiento y determinadas enfermedades. En este
          gráfico se entiende con el ejemplo del color de ojos, que con dos
          fenotipos: ojos verdes y ojos azules.
        </p>
        <p className="mt-4">
          Antes de comenzar, es necesario explicar que el autismo es un
          trastorno del neurodesarrollo de origen complejo. Hay un factor de
          heredabilidad genética del 80%, lo que indica que los genes (el
          genotipo) tienen una gran influencia en que el autismo se manifieste
          en una persona (fenotipo). Se entiende por fenotipo las
          características físicas, bioquímicas y del comportamiento que se
          pueden observar en un individuo. Algunos rasgos del fenotipo de una
          persona son la estatura, el color de los ojos, el color del pelo, el
          tipo de sangre, el comportamiento y determinadas enfermedades. En este
          gráfico se entiende con el ejemplo del color de ojos, que con dos
          fenotipos: ojos verdes y ojos azules.
        </p>
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
