import styled from "styled-components";export const ContainerPrimary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 80%;
    display: flex;
    justify-content: center;
    text-align: center;

    h1 {
      font-weight: 700;
      letter-spacing: 1px;
      font-size: 23px;
      color: #a5924e;
      margin: 30px 0;
    }

    p {
      letter-spacing: 0.7px;
      color: #d6d7c5;
      margin-bottom: 15px;

      .strong-name {
        color: #d97e2a;
      }

      .strong-backend {
        color: #000;
      }
    }

    button {
      text-decoration: none;
      color: #000;
      letter-spacing: 0.7px;
      margin: 20px 0;
      background: transparent;
      border: none;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
    }
  }

  .socials {
    justify-content: space-evenly;

    .icon {
      background-color: #d6d7c5;
      width: 25px;
      height: 25px;
      display: flex;
      align-items: center;
      border-radius: 50px;
      cursor: pointer;
    }
  }
`;
