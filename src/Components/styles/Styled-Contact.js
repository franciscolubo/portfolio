import styled from "styled-components";
export const ContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 80%;

    h2 {
      color: #a5924e;
      letter-spacing: 0.8px;
      font-weight: 400;
      margin: 10px 0;
      font-size: 20px;
    }

    p {
      font-size: 13px;
      letter-spacing: 0.7px;
      color: #d6d7c5;
      margin-bottom: 15px;
    }
  }

  .title-contact {
    display: flex;
    justify-content: center;
  }

  .text-information {
    text-align: center;
  }

  .inputs {
    label {
      display: flex;
      flex-direction: column;
      color: #d6d7c5;
      margin: 15px 0;

      p {
        height: 5px;
        strong {
          color: #d97e2a;
        }
      }

      span {
        font-size: 10px;
        color: grey;
      }

      textarea {
        max-width: 100%;
        min-width: 100%;
        min-height: 50px;
        max-height: 100px;
      }
    }

    .name-completly {
      div {
        display: flex;
        width: 100%;
        justify-content: space-between;

        div {
          display: flex;
          flex-direction: column;
          width: 48%;
        }
      }
    }
  }
  .button {
    display: flex;
    justify-content: center;

    button {
      background-color: #131313;
      border: none;
      color: #d9d9d9;
      width: 60px;
      height: 25px;
    }

    margin-bottom: 20px;
  }
`;
