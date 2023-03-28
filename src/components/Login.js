import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const Submit = () => {
    const navigate = useNavigate();
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
      .then((res) => res.json())
      .then((res) => {
        console.log("res", res);
      });
  };

  return (
    <>
      <img src="./img/login.jpg"></img>
      <Container className="mt-4 mb-5">
        <h3 className="letter-tittle mt-5 mb-3">Iniciar Sesión</h3>
        <hr></hr>
        <Card className="p-0">
          <div className="form">
            <Form style={{ width: "20rem" }}>
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
                />
              </Form.Group>
              <Button className="button" onClick={(e) => Submit(e)}>
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
