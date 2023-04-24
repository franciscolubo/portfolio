import { ContainerSkills, Skill } from "./styles/Styled-Skills";
import techs from "../img/techs/techs";

export default function Skills() {
  return (
    <ContainerSkills>
      <div>
        <h2>Tecnologias y herramientas</h2>
      </div>
      <div className="tree-techs">
        {techs.map(({ tech, img }, i) => {
          return (
            <Skill key={i}>
              <img src={img} alt="javascript-icon" />
              <h5>{tech}</h5>
            </Skill>
          );
        })}
      </div>
    </ContainerSkills>
  );
}
