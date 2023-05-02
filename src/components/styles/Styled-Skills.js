import styled from "styled-components";
export const ContainerSkills = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  div {
    width: 80%;
    text-align: center;
  }

  .tree-techs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media screen and (min-width: 700px) {
    .tree-techs {
      width: 60%;
    }
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
    margin-top: 3px;
    color: #d6d7c5;
    font-size: 0.8rem;
  }

  @media screen and (min-width: 700px) {
    margin: 0px 10px;

    h5 {
      font-size: 1rem;
    }
  }
`;
