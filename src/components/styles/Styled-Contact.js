import styled from "styled-components";
export const ContainerContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    div {
      text-align: center;
      img {
        display: none;
      }

      p {
        margin-bottom: 30px;
      }
    }
  }

  .inputs {
    padding-top: 50px;
    label {
      width: 100%;
      margin-bottom: 10px;
      p {
        color: #d6d7c5;
        strong {
          color: #d97e2a;
        }
      }

      input {
        width: 100%;
      }

      textarea {
        resize: none;
        min-width: 100%;
        min-height: 80px;
      }
      .error-span {
        color: transparent;
        font-size: 0.7rem;
      }
    }

    .name-completly {
      div {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        div {
          flex-direction: column;
          align-items: start;
          width: 48%;
          .help {
            color: #d6d7c5;
            font-size: 0.7rem;
          }
        }
      }
    }

    .button {
      /*** ESTILOS BOTÓN SLIDE RIGHT ***/
      button {
        background-color: transparent;
        color: #000;
        border: 2px solid #181818;
        padding: 16px 20px;
        border-radius: 3px;
        position: relative;
        z-index: 1;
        overflow: hidden;
        display: inline-block;
        cursor: pointer;
      }
      button:hover {
        color: #d6d7c5;
      }
      button::after {
        content: "";
        background: #181818;
        position: absolute;
        z-index: -1;
        padding: 16px 20px;
        display: block;
        top: 0;
        bottom: 0;
        left: 100%;
        right: -100%;
        transition: all 0.35s;
      }
      button:hover::after {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        transition: all 0.35s;
      }
    }
  }

  @media screen and (min-width: 750px) {
    flex-direction: row;
    width: 80%;
    margin: auto;
    div {
      div {
        img {
          display: block;
          width: 230px;
          height: 230px;
        }
      }
    }

    .inputs {
      margin-top: 30px;
      label {
        width: 90%;
        input {
          height: 23px;
        }

        textarea {
          min-height: 120px;
        }
      }

      .button {
        margin-top: 20px;
      }
    }
  }
`;
