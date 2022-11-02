import React from "react";
import styled from "styled-components";
import Nav from "./nav/Nav";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 10vh;
  background-color: azure;
`;

function Header({ titulo, children, nav }) {
  console.log("children", children);

  return (
    <HeaderStyle>
      <h1>{titulo}</h1>
      {/* {children[0]}
      {children[1]} */}
      {/* opcion 1 importo directamente */}
      <Nav link="componente"/>
      {/* opcion 2 childernProp */}
      {/* {children[2]} */}
      {/* opcion 2 renderProp */}
      {/* {nav} */}
    </HeaderStyle>
  );
}

export default Header;
