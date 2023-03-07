import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Hero = () => {
  return (
    <>
      <Card
        className="border-0 rounded-0 py-5 bg-image-hero"
        style={{ height: "35rem" }}
      >
        <Card.Body>
          <Card.Title as="h1" className="text-white text-end px-5">
            BIENVENIDOS
          </Card.Title>
          <Card.Text className="text-white text-end px-5">
            Tu puedes ayudar a crear un mundo inclusivo!
          </Card.Text>
          <div className="d-flex justify-content-end align-items-end pt-3 px-5">
            <Button size="lg" variant="outline-light">
              CONOZCA MÁS
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Hero;
