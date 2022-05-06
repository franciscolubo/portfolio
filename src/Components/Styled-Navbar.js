import styled from "styled-components";
import { motion } from "framer-motion";

export const CONTAINER_NAVBAR = styled.nav`
  background: #12090e;
`;

export const NOT_RESPONSIVE = styled.div`
  display: flex;
  height: 5em;
  width: 100%;
  align-items: center;

  button {
    margin: 10px 20px;
    background: transparent;
    border: none;
    position: absolute;
  }

  @media screen and (min-width: 650px) {
    button {
      display: none;
    }
  }
`;

export const NOT_DEPLOY = styled(motion.div)`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: left;
  a {
    position: relative;
    text-decoration: none;
    color: white;
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 400;
    margin: 0px 40px;
  }

  @media screen and (max-width: 650px) {
    a {
      display: none;
    }
  }
`;

export const DEPLOY = styled(motion.div)`
  display: flex;
  flex-flow: column;
  background: #12090e;
  width: 200px;
  height: 100px;
  a {
    text-decoration: none;
    color: white;
    font-size: 18px;
    padding-bottom: 10px;
    font-weight: 400;
  }

  @media screen and (min-width: 450px) {
    a {
      /* width: 40%; */
    }
  }

  @media screen and (min-width: 650px) {
    display: none;
  }
`;
