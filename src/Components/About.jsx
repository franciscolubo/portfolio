import React from "react";
import { motion } from "framer-motion";
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
          Soy un joven estudiando y amante de todos los aspectos de la
          tecnologia, recientemente finalize el bootcamp de Henry, en el cual
          aprendi a trabajar con diversas tecnologias y sobre todo, trabajar
          bajo presion. Por esto siento que estoy preparado para aportar mis
          conocimientos en alguna empresa, ademas de seguir aprendiendo y
          desarrollarme como profesional
        </p>
      </TEXT_ABOUT>
    </CONTAINER_ABOUT>
  );
}
