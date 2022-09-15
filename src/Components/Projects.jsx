import { CONTAINER_PROJECTS, PROJECT, ProjectImage } from "./styles/Styled-Projects";
import { motion } from "framer-motion";
import projects from "./json/projects.json"

export default function Projects() {

  console.log(projects)
  return (
    <CONTAINER_PROJECTS>
      <h2>Proyectos</h2>
      {projects.projects.map((project, i) => {
        return (
          <PROJECT key={i}>
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              { project.hasOwnProperty("video") && (
                <a className="a-img" href={project.video} target="_blank" rel="noreferrer">
                  <motion.img
                    whileHover={{scale: 1.2}}
                    transition={{ duration: 0.3 }}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAABD0lEQVRoge2ZOw6CQBCGP42POxgTr2Jj4m1sLT2Lpa2FpQV6Aq08htEaGzAbAkjiLLs7mS8hwED+4Wef2QXDMLpwBfJEjwxgUBjJJf9KAAajasC5zmtiscW/BTBECWqMqGkjakqkrbGngDX2aDEjsWFGYsOHkRNwA1YetH9STokltXLgCCyEdNtyNQcExF/OeQtMhPTrcjUHBMRnwN65fwBroRzVXM0BQfElcMdPdevVCMAY2ADP4tkb2AFT6Vy+jZTMgYPzzkUql5pxpMSqVgfx5Bu7mu5XzYCY/BTlTH+TRq9G+kTfOGJGYsOMxIYaI9W13xS7YEBxidjWW2jUGFG39fbvIkBIstAfYBgp8AHqh7iw6pqZtQAAAABJRU5ErkJggg=="
                    alt="video icon"
                    />
                </a>
              )}
              { project.hasOwnProperty("deploy") && (
                <a className="a-img" href={project.deploy} target="_blank" rel="noreferrer">
                  <motion.img
                    whileHover={{scale: 1.2}}
                    transition={{ duration: 0.3 }}
                    src="data:image/png;base64,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"
                    alt="deploy icon"
                    />
                </a>
              )}
            </div>
            <ProjectImage src={project.image} alt={project.alt}/>
          </PROJECT>
        );
      })}
    </CONTAINER_PROJECTS>
  );
}
