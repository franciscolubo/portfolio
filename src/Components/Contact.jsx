import { ContainerContact } from "./styles/Styled-Contact";export default function Contact() {
  return (
    <ContainerContact id="seccion-contact">
      <div className="title-contact">
        <h2>Contactame</h2>
      </div>
      <div className="text-information">
        <p>
          Si tienes algun proyecto y te gustaria contratarme o algo en lo que
          podamos trabajar juntos, no dudes en contactarme.
        </p>
        {/* <img /> */}
      </div>
      <div className="inputs">
        <label className="name-completly">
          <p>
            Nombre completo <strong>*</strong>
          </p>
          <div>
            <div>
              <input />
              <span>Nombre</span>
            </div>
            <div className="apellido">
              <input />
              <span>Apellido</span>
            </div>
          </div>
        </label>
        <label>
          <p>
            Correo electronico <strong>*</strong>
          </p>
          <input />
        </label>

        <label>
          <p>
            Asunto <strong>*</strong>
          </p>
          <input />
        </label>
        <label>
          <p>
            Mensaje <strong>*</strong>
          </p>
          <textarea />
        </label>
      </div>
      <div className="button">
        <button>ENVIAR</button>
      </div>
    </ContainerContact>
  );
}
