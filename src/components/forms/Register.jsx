import { useState, useEffect } from "react";
import useInput from "../../customHooks/useInput";
import FormContainer from "./FormStyled";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const name = useInput("text", "name");
  const lastName = useInput("text", "lastName");
  const pass = useInput("password", "pass");
  const gender = useInput("radio", "gender");

  const [data, setData] = useState({});

  useEffect(() => {
    new Promise((resolve, reject) => {
      if (data.name) {
        resolve(data);
      }
    })
      .then((res) => sessionStorage.setItem("register", JSON.stringify(res)))
      .then(() => navigate("/login"));
  }, [data]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      ...name.input,
      ...lastName.input,
      ...pass.input,
      ...gender.input,
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
          Apellido
          <input {...lastName} />
        </label>
        <label htmlFor="">
          Contraseña
          <input {...pass} />
        </label>

        <div>
          <label htmlFor="">
            F
            <input {...gender} value="F" />
          </label>
          <label>
            M
            <input {...gender} value="M" />
          </label>
        </div>
        <button>Registrarse</button>
      </form>
    </FormContainer>
  );
};

export default Register;
