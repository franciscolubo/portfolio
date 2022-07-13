import React from "react";
import { CONTAINER_ABOUT, TEXT_ABOUT } from "./Styled-About";

export default function About() {
  return (
    <CONTAINER_ABOUT>
      <TEXT_ABOUT animate={{ scale: [0, 1], duration: 5 }}>
        <p>Hola, soy Francisco Lubo</p>
        <h1>
          <strong>Full-Stack</strong> Web Developer
        </h1>
        <p>
          Soy un joven estudiante y amante de la
          tecnología, recientemente finalice el bootcamp de Henry, en el cual
          aprendí a trabajar con diversas tecnologías y sobre todo, trabajar
          bajo presión. Por esto siento que estoy preparado para aportar mis
          conocimientos en alguna empresa, además de seguir aprendiendo y
          desarrollarme como profesional.
        </p>
      </TEXT_ABOUT>
    </CONTAINER_ABOUT>
  );
}
