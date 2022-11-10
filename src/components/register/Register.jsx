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
  const [newData, setNewData] = useState({});
  const [data, setData] = useState({
    nombre: "Carlos",
    apellido: "Rodriguez",
  });
  const nombre = useInput("text", "nombre", data.nombre);
  // console.log(nombre);
  const apellido = useInput("text", "apellido", data.apellido);
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewData({ ...nombre.input, ...apellido.input });
  };
  return (
    <DivContainer>
      <Form osvaldito onSubmit={handleSubmit}>
        <label>
          nombre
          <input
            // type="text"
            // name="nombre"
            // onInput={nombre.onInput}
            // value={nombre.input.name}
            {...nombre}
          />
        </label>
        <label>
          apellido
          <input
            // type="text"
            // name="apellido"
            // onInput={apellido.onInput}
            // value={apellido.input.name}
            {...apellido}
          />
        </label>
        <button>Enviar</button>
      </Form>
      <h2>nombre:{newData.nombre}</h2>
      <h2>apellido:{newData.apellido}</h2>
    </DivContainer>
  );
};

export default Register;
