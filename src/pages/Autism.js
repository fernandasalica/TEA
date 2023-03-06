import React from "react";
import { Container } from "react-bootstrap";

export const Autism = () => {
  return (
    <>
      <img src="./img/autism.jpg"></img>
      <Container className="mb-5">
        <h3 className="letter-tittle mt-5 mb-3">¿Qué es TEA?</h3>
        <p>
          El TEA (Trastorno del Espectro del Autismo) es un trastorno
          neurobiológico complejo de origen genético y ambiental que dura toda
          la vida, y altera la capacidad de una persona para comunicarse y
          relacionarse con otros, además de aparecer dificultades de
          procesamiento sensorial e intereses restringidos. Los síntomas pueden
          oscilar desde leves hasta muy severos, dependiendo de cada persona,
          por lo que no se puede extrapolar ni generalizar la sintomatología ni
          las características de una persona autista a otra.
        </p>
        <p>
          Un diagnóstico rápido y una intervención temprana en un entorno
          educativo adecuado pueden lograr mejoras significativas en muchos
          niños/as. Para más información sobre TEA ver el siguiente video:
          “Primeros signos del Autismo”, de la Fundación ConecTEA.
        </p>
        <h3 className="letter-tittle mt-5 mb-3">Diagnóstico del autismo</h3>
        <p>
          El proceso de diagnóstico es por lo general algo que preocupa a los
          padres y familiares de las personas con TEA y ante lo que se
          encuentran perdidos ya que es difícil de abordar. En principio,
          debería ser el pediatra de familia quien plantee de manera inicial la
          probabilidad de hacer una evaluación diagnóstica de TEA, ante
          sospechas que o bien, traslade la familia, o bien detecte en consulta
          motivadas con que el desarrollo del niño/a no esté cumpliendo los
          parámetros esperados para su edad cronológica.{" "}
        </p>
      </Container>
    </>
  );
};
