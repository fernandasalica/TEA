import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { json, useNavigate } from "react-router-dom";
import ModalMsg from "./ModalMsg";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("Usuario duplicado");

  const handleLogin = () => {
    try {
      setMsg("Usuario creado");
      console.log("datos ingresados", user, email, password);
      fetch("http://localhost:3001/user/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: user,
          mail: email,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (!res.ok) {
            toast.success("hay un error " + res);
            // alert("Usuario duplicado");
            // setMsg("Usuario cambiado");
            console.log("mensaje", msg);
          } else {
            console.log("no hay error");
          }
        });
      toast.success("BIENVENIDO");
      navigate("/login");
    } catch (error) {
      console.log("hay un error", error);
    }
  };

  return (
    <>
      <ToastContainer />
      <img src="./img/login.jpg" alt="Imagen login"></img>
      <Container className="mt-4 mb-5">
        <h3 className="letter-tittle mt-5 mb-3">Registro</h3>
        <hr></hr>
        <Card className="p-0">
          <div className="form">
            <Form style={{ width: "20rem" }}>
              <Form.Group className="mb-3 mt-3" controlId="formBasicUser">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  name="user"
                  type="text"
                  placeholder="Ingrese nombre de usuario"
                  required
                  onChange={(e) => setUser(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingrese contraseña"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button
                className="button"
                type="submit"
                onClick={(e) => handleLogin(e)}
              >
                Registrarse
              </Button>
            </Form>
          </div>
        </Card>
      </Container>
    </>
  );
};

export default Register;
