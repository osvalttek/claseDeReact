import React from "react";
import styled from "styled-components";

const NavStyle = styled.nav`
  a {
    padding: 10px;
    text-decoration: none;
    color: tomato;
  }
`;

function Nav({ link }) {
  return (
    <NavStyle>
      <a href="">link1</a>
      <a href="">link2</a>
      <a href="">link3</a>
      <a href="">link4</a>
      <a href="">{link}</a>
    </NavStyle>
  );
}

export default Nav;
