import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { CONTACT, CONTACT_FORM, CONTAINER_CONTACT } from "./Styled-Contact";
import emailjs from "@emailjs/browser";

const validations = (form) => {
  let name = false, email = false, message = false
  if (typeof form.name === Number || form.name === "") {
  } else name = true
}

export default function Contact() {
  const form = useRef()
  const [newForm, setNewForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    e.preventDefault()
    setNewForm({
      ...newForm,
      [e.target.name]: e.target.value
    })
  }

  const sendEmail = (e) => {
    e.preventDefault()
    if (validations(newForm)) {

      emailjs.sendForm('service_s2j1noc', 'template_sv9d9bv', form.current, 'teVfzv56EIizRrm32')
      .then((result) => {
        console.log(result)
      }, (err) => {
        console.log(err)
      })
    }
    }

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
            <input type="text" name="name" onChange={(e) => handleChange(e)}/>
            <small></small>
          </div>
          <div>
            <label>Email</label>
            <input type="email" name="email" onChange={(e) => handleChange(e)}/>
          </div>
          <div>
            <label>Mensaje</label>
            <textarea name="message" id="" cols="10" rows="5" onChange={(e) => handleChange(e)}></textarea>
          </div>

          <motion.button whileTap={{ scale: 1.2 }} type="submit">
            ¡Enviar!
          </motion.button>
        </CONTACT_FORM>
      </CONTACT>
    </CONTAINER_CONTACT>
  );
}
