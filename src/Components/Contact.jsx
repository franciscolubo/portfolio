import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { CONTAINER_CONTACT, FormContact, TitleContact } from "./styles/Styled-Contact";

const validations = (form) => {
  let Vname = false,
    Vemail = false,
    Vmessage = false,
    errorName = document.getElementById("error-name").style,
    errorEmail = document.getElementById("error-email").style,
    errorMessage = document.getElementById("error-message").style;
  
  const errorBorder = '2px solid #FF0000'
  const validBorder = '1px solid #b2b2b2'
  if (form.name === "") errorName.setProperty('border', errorBorder)
  else {
    Vname = true;
    errorName.setProperty('border', validBorder)
  }
  if (form.email === "") errorEmail.setProperty('border', errorBorder)
  else {
    Vemail = true;
    errorEmail.setProperty('border', validBorder)
  }
  if (form.message === "") errorMessage.setProperty('border', errorBorder)
  else {
    Vmessage = true;
    errorMessage.setProperty('border', validBorder)
  }

  if (Vname === true && Vemail === true && Vmessage === true) return true;
  else {
    Swal.fire({
      icon: "error",
      title: "Faltan campos por rellenar"
    })
    return false
  }
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
            err()
          }
        );
    }
  };

  return (
    <>
      <TitleContact>
        <h2>Contacto</h2>
      </TitleContact>
    <CONTAINER_CONTACT>
        <p>
          Puedes contactarme enviando un mensaje por aqui o directamente en mi
          correo <a 
          target="_blank" rel="noreferrer"
          href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKkkNFmDzwjScnTDpRJwHDbHpDbDlBDqbVJwxqzLbgfjljskQXMfcQKsXxGWZPqkpDglSGf"
          >lupanchox@gmail.com
          </a>
        </p>
        <FormContact ref={form} onSubmit={(e) => sendEmail(e)}>
          <div>
            <div>
              <label>Nombre</label>
              <input type="text" name="name" id="error-name" onChange={(e) => handleChange(e)} placeholder="Escribe tu nombre"/>
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                onChange={(e) => handleChange(e)}
                placeholder="Escribe tu email"
                id="error-email"
              />
            </div>
          </div>
          
          <div>
            <div>
              <label>Mensaje</label>
              <textarea
                name="message"
                cols="10"
                rows="5"
                onChange={(e) => handleChange(e)}
                placeholder="Deja un mensaje"
                id="error-message"
                ></textarea>
            </div>
          </div>
          <div>
          <motion.button 

// whileTap={{ scale: 0.9}}
type="submit">
            ¡Enviar!
          </motion.button>
          </div>
        </FormContact>
    </CONTAINER_CONTACT>
  </>
  );
}
