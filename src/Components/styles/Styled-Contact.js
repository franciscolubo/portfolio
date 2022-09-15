import styled from "styled-components";

export const CONTAINER_CONTACT = styled.div`
  width: 90%;
  margin: auto;
  margin-bottom: 30px;
  align-items: center;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 20px;
  padding: 10px;      

  p {
    color: #212121;
    letter-spacing: 0.8px;
    
    a {
      color: #212121;
      text-decoration: none;
      font-weight: 600;
    }

    a:hover {
      color: #000;
    }
  }

  @media screen and (min-width: 500px){
    div {
      h2 {
        font-weight: 700;
        font-size: 30px;
      }
    }

    p {
      margin: 10px 0;
    }
  }
`;

export const FormContact = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px 0;

  div {
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 10px;
      
      label {
        font-weight: 500;
        color: #000
      }
      
      input {
        width: 60%;
      }
      
      textarea {
        min-width: 60%;
        max-width: 60%;
        min-height: 100px;
        max-height: 200px;
      }
      
    }
  }

  .button {
    display: flex;
    button {
      width: 40%;
      margin: 10px auto;
      color: #000;
      background-color: #fed897;
      border: 1px solid #000;
      border-radius: 3px;
      transition: background-color 500ms;
      cursor: pointer;
    }
    
    button:hover{
      background-color: #F7BB53;
    }
  }

  @media screen and (min-width: 500px){
    div {
      div {
        input {
          width: 50%;
        }
        
        textarea {
          min-width: 50%;
          max-width: 50%;
          min-height: 100px;
          max-height: 200px;
        }
      }

      button {
        width: 30%;
      }
    }
  }

  @media screen and (min-width: 750px){
    flex-direction: row;

    div {
      width: 100%;
      margin: auto;
      div {
        input {
          width: 70%;
        }
        
        textarea {
          min-width: 70%;
          max-width: 200px;
          min-height: 69px;
          max-height: 69px;
        }
      }

      button {
        width: 50%;
        height: 40px;
        font-weight: 600;
      }
    }
  }
`;

export const TitleContact = styled.div`
    text-align: center;
    margin-bottom: 30px;
    h2 {
      font-weight: 600;
      letter-spacing: 1.5px;
      color: #212121;
      padding: 10px 0;
      font-size: 25px;
    }

    @media screen and (min-width: 500px){
      h2 {
        font-weight: 700;
        font-size: 30px;
      }
    }
`;

