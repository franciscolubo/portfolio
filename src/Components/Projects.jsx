import projects from "../json/projects.json";import { Title } from "./styles/Styled-General";
import { ContainerProjects } from "./styles/Styled-Projects";
import { FaGithub } from "react-icons/fa";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
export default function Projects() {
  return (
    <ContainerProjects>
      <Title>TRABAJOS Y PROYECTOS</Title>
      {projects.projects.map((project, i) => {
        return (
          <div key={i} className={i % 2 === 0 ? "par" : "impar"}>
            <img src={project.image} alt={project.altImage} />
            <div>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div>
                {project.github && (
                  <div className="icon">
                    <div>
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                )}
                {project.deploy && (
                  <div className="icon">
                    <div>
                      <a href={project.deploy} target="_blank" rel="noreferrer">
                        <HiOutlineComputerDesktop />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </ContainerProjects>
  );
}
