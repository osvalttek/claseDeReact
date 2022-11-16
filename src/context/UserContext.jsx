import React, { useState, createContext, useEffect } from "react";
export const userContext = createContext();
const { Provider } = userContext;
const UserContext = ({ children }) => {
  const [user, setUser] = useState(false);

  const toggleUSer = () => {
    setUser(JSON.parse(sessionStorage.getItem("user")));
  };

  useEffect(() => {
    if (!sessionStorage.getItem("user")) {
      sessionStorage.setItem("user", user);
    } else {
      toggleUSer();
    }
  }, [user]);
  const userSession = {
    user,
    toggleUSer,
  };
  return <Provider value={userSession}>{children}</Provider>;
};
export default UserContext;
