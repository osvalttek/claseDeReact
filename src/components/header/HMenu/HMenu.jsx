import React from "react";
import styled from "styled-components";

const Menu = styled.h2`
  z-index: 1;
  /* padding: 10px; */
  @media (min-width: 720px) {
    display: none;
  }
`;

const HMenu = ({ click, clicked }) => {
  return <Menu onClick={clicked}>{click ? "X" : "M"}</Menu>;
};

export default HMenu;
