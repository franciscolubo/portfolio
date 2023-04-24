import { ContainerPrimary } from "./styles/Styled-About";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
export default function About() {
  function goToContact() {
    document.getElementById("seccion-contact").scrollIntoView();
  }

  return (
    <ContainerPrimary>
      <div className="title">
        <h1>Full Stack Developer</h1>
      </div>
      <div className="about">
        <p>
          Mi nombre es <strong className="strong-name">Francisco Lubo</strong> y
          tengo 22 años, soy un joven profesional entusiaste en el mundo de la
          programación, dedicado al area web mas exactamente al{" "}
          <strong className="strong-backend">backend</strong>
        </p>
      </div>
      <div className="socials">
        <div className="icon">
          <FaLinkedinIn />
        </div>
        <div className="icon">
          <FaGithub />
        </div>
        <div className="icon">
          <GrDocumentPdf />
        </div>
      </div>
      <div className="contact">
        <button onClick={goToContact}>¡Contactame!</button>
      </div>
    </ContainerPrimary>
  );
}
