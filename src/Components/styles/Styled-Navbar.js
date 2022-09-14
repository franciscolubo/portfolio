import styled from "styled-components";

export const CONTAINER_NAVBAR = styled.nav`
  background-color: #212121;
  width: 100%;
  height: 50px;

  @media screen and (min-width: 601px) {
    padding-top: 8px;
  }
`;


export const LINKS = styled.a`
  text-decoration: none;
  font-weight: 600;
  font-size: 13px;
  letter-spacing: 1.5px;
  color: #fff;
  float: right;
  margin-right: 30px;
  height: 50px;
  display: flex;
  align-items: center;

  &:hover{
    color: #ccc
  }

  img {
    padding-left: 5px;
  }

  @media screen and (min-width: 730px) {
    padding-bottom: 10px;
    font-weight: 700;
  }
`;
