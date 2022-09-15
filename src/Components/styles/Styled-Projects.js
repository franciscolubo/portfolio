import styled from "styled-components";

export const CONTAINER_PROJECTS = styled.div`
  width: 90%;
  text-align: center;
  margin: 20px auto;

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

export const PROJECT = styled.div`
  align-items: center;
  border: 2px solid #000;
  border-radius: 20px;
  padding: 15px;
  margin: 5px 0;
  background-color: #fff;
  opacity: 0.6;
  transition: opacity 1s;
  &:hover{
    opacity: 1;
  }

  h3 {
    font-weight: 500;
    letter-spacing: 1.5px;
    color: #000;
    padding: 8px 0;
  }

  p {
    color: #212121;
    font-weight: 400;
    letter-spacing: 0.8px;
    margin: 10px 0;
  }

  .a-img {
      margin: 0 10px;

      img {
        width: 35px;
      }
  }


  @media screen and (min-width: 700px) {
    display: flex;
    margin: 35px 0;

    div {
      flex: .60;
    }

    h3 {
      font-weight: 600;
      letter-spacing: 2px;
      font-size: 22px;
    }

    .a-img {
      img {
        margin-top: 20px;
      }
    }
  }

`;

export const ProjectImage = styled.img`
  width: 230px;
  height: 230px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 20px 0;

  @media screen and (min-width: 410px){
    width: 270px;
  }

  @media screen and (min-width: 500px) {
    width: 350px;
  }

  @media screen and (min-width: 700px) {
    flex: .4;
    width: 300px;
    margin-left: 15px;
  }

  @media screen and (min-width: 900px) {
    width: 250px;
  }

  @media screen and (min-width: 1100px) {
    width: 200px;
  }
`;
