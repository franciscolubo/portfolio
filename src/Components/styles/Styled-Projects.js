import styled from "styled-components";
export const ContainerProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #a5924e;
    letter-spacing: 0.8px;
    font-weight: 400;
    margin: 10px 0;
    font-size: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 80%;

    margin: 40px 0;
    img {
      width: 90%;
      height: 200px;
    }

    h4 {
      color: #89887a;
      margin: 15px 0;
      letter-spacing: 1px;
    }

    p {
      color: #d6d7c5;
      letter-spacing: 0.7px;
    }

    div {
      display: flex;
      flex-direction: row;
      justify-content: center;

      .icon {
        background-color: #d6d7c5;
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
        border-radius: 50px;
        cursor: pointer;
        margin: 0 15px;
      }
    }
  }
`;
