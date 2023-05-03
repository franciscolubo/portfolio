import { ContainerContact } from "./styles/Styled-Contact";
import astronaut from "../img/astronauta-saludando.png";
import { Text, Title } from "./styles/Styled-General";
import { useState } from "react";
import checkData from "../helpers/checkData";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const [contact, setContact] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    asunto: "",
    mensaje: "",
  });

  function handleInputs(e) {
    e.preventDefault();
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  }

  function sendMail() {
    if (checkData(contact)) {
      setContact({
        ...contact,
        nombre: "",
        apellido: "",
        correo: "",
        asunto: "",
        mensaje: "",
      });
      const obj = {
        name: `${contact.nombre} ${contact.apellido}`,
        email: contact.correo,
        message: contact.mensaje,
        subject: contact.asunto,
      };

      emailjs
        .send("service_s2j1noc", "template_sv9d9bv", obj, "teVfzv56EIizRrm32")
        .then(
          (result) => {
            console.log(result);
          },
          (err) => {
            console.log(err);
          }
        );
      Swal.fire({
        icon: "success",
        title: "Gracias por hacer contacto",
        text: "Respondere tu mensaje en la brevedad",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "No se ha podido enviar el mensaje",
      });
    }
  }

  return (
    <ContainerContact id="seccion-contact">
      <div className="text">
        <div className="title-contact">
          <Title>CONTACTAME</Title>
        </div>
        <div className="text-information">
          <Text>
            Si tienes algun proyecto y te gustaria contratarme o algo en lo que
            podamos trabajar juntos, no dudes en contactarme.
          </Text>
          <img src={astronaut} alt="astronaut_image not found" />
        </div>
      </div>
      <div className="inputs">
        <label className="name-completly">
          <p>
            Nombre completo <strong>*</strong>
          </p>
          <div>
            <div>
              <input
                onChange={(e) => {
                  handleInputs(e);
                }}
                name="nombre"
                value={contact.nombre}
              />
              <span className="help">Nombre</span>
              <span id="nombre" className="error-span"></span>
            </div>
            <div className="apellido">
              <input
                onChange={(e) => {
                  handleInputs(e);
                }}
                name="apellido"
                value={contact.apellido}
              />
              <span className="help">Apellido</span>
              <span id="apellido" className="error-span"></span>
            </div>
          </div>
        </label>
        <label>
          <p>
            Correo electronico <strong>*</strong>
          </p>
          <input
            onChange={(e) => {
              handleInputs(e);
            }}
            type="email"
            name="correo"
            value={contact.correo}
          />
          <span id="email" className="error-span"></span>
        </label>
        <label>
          <p>
            Asunto <strong>*</strong>
          </p>
          <input
            onChange={(e) => {
              handleInputs(e);
            }}
            name="asunto"
            value={contact.asunto}
          />
          <span id="asunto" className="error-span"></span>
        </label>
        <label>
          <p>
            Mensaje <strong>*</strong>
          </p>
          <textarea
            onChange={(e) => {
              handleInputs(e);
            }}
            name="mensaje"
            value={contact.mensaje}
          />
          <span id="mensaje" className="error-span"></span>
        </label>
        <div className="button">
          <button onClick={sendMail}>ENVIAR</button>
        </div>
      </div>
    </ContainerContact>
  );
}
