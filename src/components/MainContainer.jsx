import React from "react";
import styled from "styled-components";
import CursosListContainer from "./CursosListContainer";
import InfoContainer from "./InfoContainer";

const Main = styled.main`
  flex-grow: 1;
`;

const MainContainer = () => {
  return (
    <Main>
      {/* <InfoContainer/> */}
      <CursosListContainer />
    </Main>
  );
};

export default MainContainer;
