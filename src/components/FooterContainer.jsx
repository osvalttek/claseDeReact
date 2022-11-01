import React from "react";
import styled from "styled-components";
import NavContainer from "./NavContainer";

const Footer = styled.footer`
  height: 10vh;
  background-color: gray;
`;

const FooterContainer = () => {
  return (
    <Footer>
      Footer
      <NavContainer />
    </Footer>
  );
};

export default FooterContainer;
