import styled from "styled-components";export const ContainerProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 80%;
    border: 0.5px solid #000;
    border-radius: 7px;
    margin: 30px 0;
    background-color: #a1a1a10d;

    img {
      width: 100%;
      height: 200px;
      border-radius: 7px 7px 0 0;
    }
    div {
      background-color: transparent;
      border: none;
      width: 100%;
      h4 {
        color: #89887a;
        margin: 15px 0;
        letter-spacing: 1px;
        font-size: 1.1rem;
      }

      p {
        width: 90%;
        height: 170px;
        color: #d6d7c5;
        letter-spacing: 0.7px;
        font-size: 0.9rem;
      }

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        border: none;

        .icon {
          width: 30px;
          height: 30px;
          margin: 0 15px;

          div {
            width: 25px;
            height: 25px;
            display: flex;
            align-items: center;
            border-radius: 50px;
            cursor: pointer;
            background-color: #d6d7c5;
            transition: all 0.2s;

            a {
              text-decoration: none;
              color: #000;
              display: flex;
              align-items: center;
            }
          }

          div:hover {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }

  @media screen and (min-width: 430px) {
    div {
      width: 70%;
    }
  }

  @media screen and (min-width: 480px) {
    div {
      width: 60%;
    }
  }

  @media screen and (min-width: 560px) {
    div {
      width: 55%;
    }
  }

  @media screen and (min-width: 700px) {
    .par {
      flex-direction: row;
    }

    .impar {
      flex-direction: row-reverse;
    }

    div {
      width: 80%;
      img {
        width: 45%;
        height: 250px;
        border-radius: 0px;
      }

      div {
        h4 {
          font-size: 1.2rem;
        }
        p {
          font-size: 1rem;
        }
      }
    }
  }
`;
