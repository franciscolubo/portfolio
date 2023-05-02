import styled from "styled-components";export const Title = styled.h2`
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #a5924e;
  margin: 20px 0;
  letter-spacing: 2px;
`;

export const Text = styled.p`
  letter-spacing: 0.7px;
  color: #d6d7c5;
  margin-bottom: 15px;

  .strong-name {
    color: #d97e2a;
  }

  .strong-backend {
    color: #000;
  }

  @media screen and (min-width: 700px) {
    font-size: 1.1rem;
    width: 80%;
    margin-bottom: 20px;
  }
`;
