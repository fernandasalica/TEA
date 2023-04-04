import { Card, Col, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const CardNew = ({ d }) => {
  const navigate = useNavigate();

  const [EditShow, setEditShow] = useState(false);

  const handleEditClose = () => setEditShow(false);
  // const handleEditShow = () => setEditShow(true);

  const [DeleteShow, setDeleteShow] = useState(false);
  const handleDeleteClose = () => setDeleteShow(false);

  const [newSelect, setNewSelect] = useState({
    _id: "",
    name: "",
    shortDesc: "",
    image: "",
    description: "",
  });

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const SelectNew = (element, type) => {
    setNewSelect(element);
    setId(element._id);
    type === "Editar" && setEditShow(true);
    type === "Borrar" && setDeleteShow(true);
  };

  // Asigno al estado los valores ingresados por el usuario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSelect((prevState) => ({ ...prevState, [name]: value }));
    setName(newSelect.name);
    setShortDesc(newSelect.shortDesc);
    setImage(newSelect.image);
    setDescription(newSelect.description);
  };

  const handleEditNew = (e, id) => {
    e.preventDefault();
    fetch(`http://localhost:3001/news/editOneNew/${id}`, {
      method: "PUT",
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
      .then(() => navigate("/"));
    handleEditClose();
  };

  const handleDeleteNew = (e, id) => {
    e.preventDefault();
    fetch(`http://localhost:3001/news/deleteOneNew/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => navigate("/"));
    handleDeleteClose();
  };

  const [role, setRole] = useState(JSON.parse(localStorage.getItem("rol")));

  return (
    <Col>
      <Card className="h-100">
        <Card.Img variant="top" src={d.image} />
        <Card.Body>
          <Link to={`/NewDetailApi/${d._id}`} className="text-decoration-none">
            <Card.Title>{d.name}</Card.Title>
          </Link>
          <Card.Text>{d.shortDesc}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className="d-flex justify-content-between">
            {console.log("rol", role)}
            {role === "admin" ? (
              <Button className="button" onClick={() => SelectNew(d, "Editar")}>
                Modificar
              </Button>
            ) : (
              <Link to={`/NewDetailApi/${d._id}`}>
                <Button className="button">Leer más..</Button>
              </Link>
            )}

            <Modal show={EditShow} onHide={handleEditClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modificar Datos</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Título</Form.Label>
                    <Form.Control
                      type="text"
                      autoFocus
                      name="name"
                      value={newSelect && newSelect.name}
                      onChange={handleChange}
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
                      value={newSelect && newSelect.shortDesc}
                      name="shortDesc"
                      onChange={handleChange}
                      rows={3}
                      placeholder="Ingrese descripción corta"
                    />
                  </Form.Group>
                </Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Imagen</Form.Label>
                  <Form.Control
                    type="text"
                    value={newSelect && newSelect.image}
                    onChange={handleChange}
                    name="image"
                    placeholder="Ingrese URL de la imagen"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={newSelect && newSelect.description}
                    onChange={handleChange}
                    name="description"
                    rows={3}
                    placeholder="Ingrese descripción de la noticia"
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleEditClose}>
                  Cerrar
                </Button>
                <Button variant="primary" onClick={(e) => handleEditNew(e, id)}>
                  Guardar
                </Button>
              </Modal.Footer>
            </Modal>
            {role === "admin" ? (
              <Button
                className="button"
                onClick={(e) => SelectNew(d, "Borrar")}
              >
                Eliminar
              </Button>
            ) : (
              <Nav.Link href="#link" className="text-muted">
                4 comentarios
              </Nav.Link>
            )}

            <Modal show={DeleteShow} onHide={handleDeleteClose}>
              <Modal.Header closeButton>
                <Modal.Title>Borrar Película</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Está seguro de borrar la película: {newSelect.name}?
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={(e) => handleDeleteNew(e, id)}
                >
                  SI
                </Button>
                <Button variant="primary" onClick={handleDeleteClose}>
                  NO
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardNew;
