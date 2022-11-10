import React, { useState } from "react";
import styled from "styled-components";
import useInput from "../../customHooks/useInput";

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;
const Form = styled.form`
  display: ${(props) => (props.osvaldito ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Register = () => {
  const [data, setData] = useState({});
  const nombre = useInput();
  const apellido = useInput();
  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ ...nombre.input, ...apellido.input });
  };
  return (
    <DivContainer>
      <Form osvaldito onSubmit={handleSubmit}>
        <label>
          nombre
          <input
            type="text"
            name="nombre"
            // onInput={nombre.onInput}
            // value={nombre.input.name}
            {...nombre}
          />
        </label>
        <label>
          apellido
          <input
            type="text"
            name="apellido"
            onInput={apellido.onInput}
            value={apellido.input.name}
          />
        </label>
        <button>Enviar</button>
      </Form>
      <h2>nombre:{data.nombre}</h2>
      <h2>apellido:{data.apellido}</h2>
    </DivContainer>
  );
};

export default Register;
