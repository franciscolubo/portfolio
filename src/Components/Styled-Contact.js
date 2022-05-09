import styled from "styled-components";

export const CONTAINER_CONTACT = styled.div`
  background: #181f3c;

  h3 {
    padding-top: 15px;
    font-weight: 600;
    letter-spacing: 1.5px;
    font-size: 30px;
    color: #cfdce5;
    text-decoration: underline;
  }
`;

export const CONTACT = styled.div`
  width: 80%;
  margin: auto;
  padding: 20px 0px;
  p {
    font-weight: 300;
    font-size: 17px;
    letter-spacing: 0.7px;
    color: #c3d5e5;
    margin-bottom: 10px;
    strong {
      color: orange;
    }
  }

  @media screen and (min-width: 550px) {
    p {
      width: 90%;
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: 850px) {
    p {
      width: 70%;
    }
  }
`;

export const CONTACT_FORM = styled.form`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    margin: 10px 0px;

    label {
      text-align: left;
      color: #c3d5e5;
      font-weight: 600;
    }

    textarea {
      max-height: 100px;
      max-width: 100%;
      min-width: 100%;
      min-height: 50px;
    }

    small {
      color: #c3d5e5;
      text-align: left;
      position: static;
    }
  }

  button {
    width: 100px;
    border: 2px solid orange;
    background: orange;
    color: black;
    font-weight: 800;
    border-radius: 3px;
    cursor: pointer;
  }

  button:hover {
    background: #f9c362;
  }

  @media screen and (min-width: 450px) {
    div {
      input {
        width: 70%;
      }
      textarea {
        max-height: 100px;
        max-width: 70%;
        min-width: 70%;
        min-height: 50px;
      }
    }
  }

  @media screen and (min-width: 650px) {
    div {
      input {
        width: 60%;
      }
      textarea {
        max-height: 120px;
        max-width: 60%;
        min-width: 60%;
        min-height: 50px;
      }
    }
  }

  @media screen and (min-width: 950px) {
    div {
      input {
        width: 45%;
      }
      textarea {
        max-height: 150px;
        max-width: 45%;
        min-width: 45%;
        min-height: 50px;
      }
    }
  }
`;
