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
      -webkit-text-stroke-width: 0.9px;
      -webkit-text-stroke-color: #a5924e;
      -webkit-text-size-adjust: none;
      font-size: 2rem;
      margin: 25px 0;
    }

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

  .socials {
    justify-content: space-evenly;
    margin-bottom: 20px;
    .icon {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;

      div {
        width: 25px;
        height: 25px;
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

  @media screen and (min-width: 700px) {
    div {
      h1 {
        margin: 55px;
        font-size: 2.5rem;
      }

      p {
        font-size: 1.1rem;
        width: 80%;
        margin-bottom: 20px;
      }

      button {
        font-size: 1.3rem;
        margin: 30px 0;
      }
    }

    .socials {
      width: 60%;
      .icon {
        width: 30px;
        height: 30px;
      }
    }
  }
`;
