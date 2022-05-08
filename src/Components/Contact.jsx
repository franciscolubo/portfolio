import React from "react";
import { motion } from "framer-motion";
import { CONTACT, CONTACT_FORM, CONTAINER_CONTACT } from "./Styled-Contact";

export default function Contact() {
  return (
    <CONTAINER_CONTACT>
      <h3>Contacto</h3>
      <CONTACT>
        <p>
          Puedes contactarme enviando un mensaje por aqui o directamente en mi
          correo <strong>lupanchox@gmail.com</strong>
        </p>
        <CONTACT_FORM>
          <div>
            <label>Tu nombre</label>
            <input type="text" />
          </div>
          <div>
            <label>Email</label>
            <input type="text" />
          </div>
          <div>
            <label>Mensaje</label>
            <textarea name="" id="" cols="10" rows="5"></textarea>
          </div>

          <motion.button whileTap={{ scale: 1.2 }} type="submit">
            ¡Enviar!
          </motion.button>
        </CONTACT_FORM>
      </CONTACT>
    </CONTAINER_CONTACT>
  );
}
