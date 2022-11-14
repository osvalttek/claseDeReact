import React, { useState } from "react";
import styled from "styled-components";
import HMenu from "./HMenu/HMenu";
import Logo from "./logo/Logo";
import Nav from "./nav/Nav";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 10px;
  min-height: 10vh;
`;

const Header = ({ user }) => {
  const [click, setClick] = useState(false);
  const clicked = () => {
    setClick(!click);
  };
  return (
    <HeaderStyled>
      <Logo />
      <Nav
        click={click}
        clicked={clicked}
        user={user}
      />
      <HMenu click={click} clicked={clicked} />
    </HeaderStyled>
  );
};

export default Header;
