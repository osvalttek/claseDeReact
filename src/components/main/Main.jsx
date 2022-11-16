import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const MainStyled = styled.main`
  flex-grow: 1;
  padding: 10px;
  background-color: #212121;
`;
const Main = () => {
  return (
    <MainStyled>
      <Outlet/>
    </MainStyled>
  );
};

export default Main;
