import { ContainerSkills, Skill } from "./styles/Styled-Skills";import techs from "../img/techs/techs";
import { Title } from "./styles/Styled-General";

export default function Skills() {
  return (
    <ContainerSkills>
      <div>
        <Title>TECNOLOGIAS Y HERRAMIENTAS</Title>
      </div>
      <div className="tree-techs">
        {techs.map(({ tech, img }, i) => {
          return (
            <Skill key={i}>
              <img src={img} alt={tech + " image"} />
              <h5>{tech}</h5>
            </Skill>
          );
        })}
      </div>
    </ContainerSkills>
  );
}
