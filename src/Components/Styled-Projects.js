import styled from "styled-components";
import { motion } from "framer-motion";

export const CONTAINER_PROJECTS = styled.div`
  background: #839ae5;
  padding-top: 50px;
  width: 100%;
  h3 {
    padding-top: 15px;
    font-weight: 600;
    letter-spacing: 1.5px;
    font-size: 30px;
    color: #181f3c;
    text-decoration: underline;
  }
`;

export const PROJECT = styled(motion.div)`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  margin: auto;

  h2 {
    font-weight: 600;
    letter-spacing: 1.5px;
    margin-bottom: 10px;
  }

  p {
    font-weight: 300;
    letter-spacing: 1px;
    color: #cfdce5;
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    border: 1px solid transparent;
    border-radius: 15px;
    margin-bottom: 10px;
  }

  a {
    color: white;
    margin: 0px 5px;
    img {
      width: 30px;
    }
  }

  @media screen and (min-width: 600px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    div {
      width: 45%;
    }

    img {
      width: 40%;
    }
  }

  @media screen and (min-width: 750px) {
    align-items: center;
    padding: 20px 40px;
  }
`;
