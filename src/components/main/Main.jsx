import React from "react";
import { Outlet} from "react-router-dom";

const Main = ({logOutUser}) => {
  return (
    <main>
      <Outlet context={logOutUser}/>
    </main>
  );
};

export default Main;
