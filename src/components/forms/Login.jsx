import { useState, useEffect } from "react";
import useInput from "../../customHooks/useInput";
import FormContainer from "./FormStyled";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const name = useInput("text", "name");
  const pass = useInput("password", "pass");
  const [data, setData] = useState({});
  useEffect(() => {
    new Promise((resolve, reject) => {
      let register = JSON.parse(sessionStorage.getItem("register"));
      if (data.name == register.name && data.pass == register.pass) {
        resolve(true);
      }
    })
      .then((res) => sessionStorage.setItem("user", res))
      .then(() => navigate("/"));
  }, [data]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      ...name.input,
      ...pass.input,
    });
  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <form action="">
        <label htmlFor="">
          Nombre
          <input {...name} />
        </label>

        <label htmlFor="">
          Contraseña
          <input {...pass} />
        </label>
        <button>Login</button>
      </form>
    </FormContainer>
  );
};

export default Login;
