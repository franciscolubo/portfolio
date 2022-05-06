import styled from "styled-components";
import { motion } from "framer-motion";

export const CONTAINER_ABOUT = styled.div`
  background: #122c4a;
  text-align: left;
  height: auto;
  padding: 50px 0px;
  p {
    color: #cfdce5;
    font-weight: 400;
    letter-spacing: 1.5px;
    padding-top: 10px;
    margin-left: 20px;
    font-size: 16px;
  }

  h1 {
    font-weight: 700;
    letter-spacing: 4px;
    margin: 10px 20px;
    font-size: 35px;
    color: #cfdce5;

    strong {
      color: orange;
    }
  }

  @media screen and (min-width: 500px) {
    height: 600px;
    padding: 70px 0px;

    p {
      font-size: 18px;
      margin: 20px 30px;
    }

    h1 {
      font-size: 40px;
      margin: 20px 30px;
    }
  }

  @media screen and (min-width: 750px) {
    padding: 100px 0px;

    p {
      font-size: 20px;
    }
    h1 {
      font-size: 45px;
    }
  }

  @media screen and (min-width: 1000px) {
    padding: 150px 0px;
  }
`;

export const TEXT_ABOUT = styled(motion.div)`
  width: 60%;
`;
