import React from "react";
import styled from "styled-components";

// const Anchor = styled.a`
//   text-decoration: none;
//   padding: 1rem;
// `;

const Nav = styled.nav`
  display: flex;
  a {
    text-decoration: none;
    padding: 1rem;
  }
`;
const NavContainer = () => {
  return (
    <Nav>
      <a href="/">link</a>
      <a href="/">link</a>
      <a href="/">link</a>
      <a href="/">link</a>
      {/* <Anchor href="">link</Anchor>
      <Anchor href="">link</Anchor>
      <Anchor href="">link</Anchor>
      <Anchor href="">link</Anchor> */}
    </Nav>
  );
};

export default NavContainer;
