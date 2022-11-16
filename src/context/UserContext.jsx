import React, { useState, createContext, useEffect } from "react";
export const userContext = createContext();
const { Provider } = userContext;
const UserContext = ({ children }) => {
  const [user, setUser] = useState(false);
  const logOutUser = () => {
    setUser(JSON.parse(sessionStorage.getItem("user")));
  };
  useEffect(() => {
    if (!sessionStorage.getItem("user")) {
      sessionStorage.setItem("user", user);
    } else {
      logOutUser();
    }
  }, [user]);
  const userSession = {
    user,
    logOutUser,
  };
  return <Provider value={userSession}>{children}</Provider>;
};
export default UserContext;
