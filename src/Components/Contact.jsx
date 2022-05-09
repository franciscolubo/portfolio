import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { CONTACT, CONTACT_FORM, CONTAINER_CONTACT } from "./Styled-Contact";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const validations = (form) => {
  let Vname = false,
    Vemail = false,
    Vmessage = false,
    errorName = document.getElementById("error-name"),
    errorEmail = document.getElementById("error-email"),
    errorMessage = document.getElementById("error-message");
  if (form.name === "") errorName.hidden = false;
  else {
    Vname = true;
    errorName.hidden = Vname;
  }
  if (form.email === "") errorEmail.hidden = false;
  else {
    Vemail = true;
    errorEmail.hidden = Vemail;
  }
  if (form.message === "") errorMessage.hidden = false;
  else {
    Vmessage = true;
    errorMessage.hidden = Vmessage;
  }

  if (Vname === true && Vemail === true && Vmessage === true) return true;
  else return false;
};

export default function Contact() {
  const form = useRef();
  const [newForm, setNewForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setNewForm({
      ...newForm,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (validations(newForm)) {
      emailjs
        .sendForm(
          "service_s2j1noc",
          "template_sv9d9bv",
          form.current,
          "teVfzv56EIizRrm32"
        )
        .then(
          (result) => {
            Swal.fire({
              icon: "success",
              title: "¡Email enviado!",
              text: "Gracias por contactarme",
            });
          },
          (err) => {
            Swal.fire({
              icon: "error",
              title: "Algo ha ido mal",
            });
          }
        );
    }
  };

  return (
    <CONTAINER_CONTACT>
      <h3>Contacto</h3>
      <CONTACT>
        <p>
          Puedes contactarme enviando un mensaje por aqui o directamente en mi
          correo <strong>lupanchox@gmail.com</strong>
        </p>
        <CONTACT_FORM ref={form} onSubmit={(e) => sendEmail(e)}>
          <div>
            <label>Nombre</label>
            <input type="text" name="name" onChange={(e) => handleChange(e)} />
            <small id="error-name" hidden>
              Pon algun nombre
            </small>
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) => handleChange(e)}
            />
            <small id="error-email" hidden>
              Debes colocar un email
            </small>
          </div>
          <div>
            <label>Mensaje</label>
            <textarea
              name="message"
              id=""
              cols="10"
              rows="5"
              onChange={(e) => handleChange(e)}
            ></textarea>
            <small id="error-message" hidden>
              Pon algo de contenido en tu mensaje
            </small>
          </div>

          <motion.button whileTap={{ scale: 1.2 }} type="submit">
            ¡Enviar!
          </motion.button>
        </CONTACT_FORM>
      </CONTACT>
    </CONTAINER_CONTACT>
  );
}
