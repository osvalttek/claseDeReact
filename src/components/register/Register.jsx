import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  let obj = {};
  return (
    <div>
      Register
      <Link to="/">
        <button>{obj.home}</button>
      </Link>
    </div>
  );
};

export default Register;
