import { Container, Row, Button } from "react-bootstrap";
import CardNew from "./CardNew";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const ListNews = ({ data }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  //Pagination

  const handleNewMovie = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/news/new", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        shortDesc,
        image,
        description,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // console.log("res", res);
        // handleClose();
      });
    handleClose();
  };

  const [role, setRole] = useState(JSON.parse(localStorage.getItem("rol")));

  return (
    <>
      <Container className="my-4">
        <h3 className="letter-tittle">NOTICIAS</h3>
        <hr></hr>
        {role === "admin" ? (
          <Button className="button mb-3" onClick={handleShow}>
            Agregar Noticia
          </Button>
        ) : (
          <span></span>
        )}
        <Row xs={1} md={3} className="g-5">
          {data.map((d, i) => (
            <CardNew d={d} key={"New" + i} />
          ))}
        </Row>
        {/* <ReactPaginate
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        /> */}
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Agregar Noticia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                autoFocus
                name={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ingrese título de la noticia"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Descripción corta</Form.Label>
              <Form.Control
                as="textarea"
                name={shortDesc}
                onChange={(e) => setShortDesc(e.target.value)}
                rows={3}
                placeholder="Ingrese descripción corta"
              />
            </Form.Group>
          </Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Imagen</Form.Label>
            <Form.Control
              type="text"
              name={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Ingrese URL de la imagen"
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              name={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              placeholder="Ingrese descripción de la noticia"
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={(e) => handleNewMovie(e)}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ListNews;
