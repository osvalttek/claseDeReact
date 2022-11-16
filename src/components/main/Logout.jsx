import React, { useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../context/UserContext";

const Logout = () => {
  const {toggleUSer}=useContext(userContext)
  const navigate = useNavigate();
  useEffect(() => {
    toggleUSer()
    sessionStorage.setItem("user", false);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  });

  return (
    <div>
      <h2>nos vamos</h2>
    </div>
  );
};

export default Logout;
