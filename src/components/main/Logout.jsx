import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
      sessionStorage.removeItem("user")
    setTimeout(() => {
        navigate("/")
    }, 2000);
  });

  return (
    <div>
      <h2>nos vamos</h2>
    </div>
  );
};

export default Logout;
