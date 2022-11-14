import React, { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const Logout = () => {
  const user = useOutletContext();
  const navigate = useNavigate();
  useEffect(() => {
    user();
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
