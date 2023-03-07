import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const Register = () => {
  return (
    <>
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
                  type="text"
                  placeholder="Ingrese nombre de usuario"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese Email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingrese contraseña"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Repetir Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirmar contraseña"
                  required
                />
              </Form.Group>
              <Button className="button" type="submit">
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
