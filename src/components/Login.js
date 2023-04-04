import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: user,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        setData(response);
        if (response.errors) {
          alert("Error al iniciar sesión. Inténtelo de nuevo...");
          localStorage.removeItem("rol");
        } else {
          console.log("Datos", data);
          console.log(response.message);
          localStorage.setItem("rol", JSON.stringify(data.role));
        }
      });
    // .then((json) => console.log(json));

    // navigate("/News");
  };

  return (
    <>
      <img src="./img/login.jpg"></img>
      <Container className="mt-4 mb-5">
        <h3 className="letter-tittle mt-5 mb-3">Iniciar Sesión</h3>
        <hr></hr>
        <Card className="p-0">
          <div className="form">
            <Form style={{ width: "20rem" }} onSubmit={handleSubmit}>
              <Form.Group className="mb-3 mt-3" controlId="formBasicUser">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese nombre de usuario"
                  required
                  onChange={(e) => setUser(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingrese contraseña"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button className="button" type="submit">
                Ingresar
              </Button>
            </Form>
            <p className="mt-3">
              Todavía no tienes una Cuenta? <a href="./Register">Registrate!</a>
            </p>
          </div>
        </Card>
      </Container>
    </>
  );
};

export default Login;
