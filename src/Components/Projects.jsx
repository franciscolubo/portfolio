import projects from "../json/projects.json";
import { ContainerProjects } from "./styles/Styled-Projects";
import { FaGithub } from "react-icons/fa";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
export default function Projects() {
  return (
    <ContainerProjects>
      <h2>Trabajos y proyectos</h2>
      {projects.projects.map((project, i) => {
        return (
          <div key={i}>
            <img src={project.image} alt={project.altImage} />
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <div>
              {project.github && (
                <div className="icon">
                  <FaGithub />
                </div>
              )}
              {project.deploy && (
                <div className="icon">
                  <HiOutlineComputerDesktop />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </ContainerProjects>
  );
}
