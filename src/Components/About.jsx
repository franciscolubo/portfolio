import { ContainerPrimary } from "./styles/Styled-About";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GrDocumentPdf } from "react-icons/gr";
import { Text } from "./styles/Styled-General";
import CV from "../download/CV-Francisco_Lubo.pdf";
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
        <Text>
          Mi nombre es <strong className="strong-name">Francisco Lubo</strong> y
          tengo 22 años, soy un joven profesional entusiaste en el mundo de la
          programación, dedicado al area web mas exactamente al{" "}
          <strong className="strong-backend">backend</strong>
        </Text>
      </div>
      <div className="socials">
        <div className="icon">
          <div>
            <FaLinkedinIn />
          </div>
        </div>
        <div className="icon">
          <div>
            <FaGithub />
          </div>
        </div>
        <div className="icon">
          <div>
            <a href={CV} download="CV - Francisco Lubo">
              <GrDocumentPdf />
            </a>
          </div>
        </div>
      </div>
      <div className="contact">
        <button onClick={goToContact}>¡Contactame!</button>
      </div>
    </ContainerPrimary>
  );
}
