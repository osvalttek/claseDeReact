import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main>
      {/* <PersonajesListContainer /> */}
      <Outlet />
    </main>
  );
};

export default Main;
