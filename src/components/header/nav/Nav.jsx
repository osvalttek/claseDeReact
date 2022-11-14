import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavStyled = styled.nav`
  position: absolute;
  left: 0;
  top: ${(props) => (props.show ? "7vh" : "-500px")};
  transition: top 1s ease;
  width: 100vw;
  @media (min-width: 720px) {
    position: static;
    width: initial
  }
`;

const LinkStyled = styled(Link)`
  display: inline-block;
  width: 100%;
  color: white;
  font-size: 2rem;
  text-align: center;
  margin: 10px 0;
  z-index: 0;

  @media (min-width: 720px) {
    width: initial;
    margin:0 10px;
  }
`;

const Nav = ({ click, clicked, user }) => {
  return (
    <NavStyled show={click} onClick={clicked}>
      <LinkStyled to="/">Home</LinkStyled>
      <LinkStyled to="/about">About</LinkStyled>
      <LinkStyled to="/products">Products</LinkStyled>
      <LinkStyled to="/cart">Cart</LinkStyled>
      {!user && <LinkStyled to="/register">Register</LinkStyled>}
      {!user && <LinkStyled to="/login">Login</LinkStyled>}
      {user && <LinkStyled to="/logout">Logout</LinkStyled>}
      {user && <LinkStyled to="/editProfile">Edit</LinkStyled>}
    </NavStyled>
  );
};

export default Nav;
