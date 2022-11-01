import React from "react";
import styled from "styled-components";

import NavContainer from "./NavContainer";

const Header = styled.header`
  display: flex;
  height: 10vh;
  background-color: gray;
`;

const HeaderContainer = () => {
  return (
    <Header>
      Header
      <NavContainer />
    </Header>
  );
};

export default HeaderContainer;
