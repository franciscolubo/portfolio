import styled from "styled-components";export const ContainerSkills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  div {
    width: 80%;
    text-align: center;
    h2 {
      color: #a5924e;
      letter-spacing: 0.8px;
      font-weight: 400;
      margin: 10px 0;
      font-size: 20px;
    }
  }

  .tree-techs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.1;
  align-items: center;
  min-width: 70px;
  padding: 10px 10px;

  img {
    width: 48px;
    height: 48px;
  }

  h5 {
    color: #d6d7c5;
  }
`;
