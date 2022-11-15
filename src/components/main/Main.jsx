import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const MainStyled = styled.main`
  flex-grow: 1;
  padding: 10px;
  background-color: #212121;
`;
const Main = ({ logOutUser }) => {
  return (
    <MainStyled>
      <Outlet context={logOutUser} />
    </MainStyled>
  );
};

export default Main;
