import React from "react";
import styled from "styled-components";
import Nav from "./nav/Nav";

const HeaderStyled = styled.header`
  height: 10vh;
  background-color: white;
`;
console.log("header");

const Header = () => {
  return <HeaderStyled>Header

    <Nav/>
  </HeaderStyled>;
};

export default Header;
