import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
  // const [nombre, setNombre] = useState("Juana");
  // const [apellido, setApellido] = useState("Perz");
  // const [data, setData] = useState({});

  // const handleSetName = (e) => {
  //   // console.log("log", e.target);
  //   // console.dir(e.target);
  //   setNombre(e.target.value);
  // };
  // const handleSetLastName = (e) => {
  //   setApellido(e.target.value);
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setData({
  //     nombre,
  //     apellido,
  //   });
  // };

  // return (
  //   <DivContainer>
  //     <Form osvaldito onSubmit={handleSubmit}>
  //       <label>
  //         nombre
  //         <input
  //           onInput={handleSetName}
  //           type="text"
  //           name="nombre"
  //           value={nombre}
  //         />
  //       </label>
  //       <label>
  //         apellido
  //         <input
  //           onInput={handleSetLastName}
  //           type="text"
  //           name="apellido"
  //           value={apellido}
  //         />
  //       </label>
  //       <button>Enviar</button>
  //     </Form>
  //     Register
  //     <Link to="/">
  //       <button>home</button>
  //     </Link>
  //     <h2>Nombre: {nombre}</h2>
  //     <h2>Apellido:{apellido}</h2>
  //     <h3>Data Nombre: {data.nombre}</h3>
  //     <h3>Data Apellido:{data.apellido}</h3>
  //   </DivContainer>
  // );
  // ----------------------------------------------------------
  // segunda version
  const [data, setData] = useState({
    nombre: "Pedlo",
    apellido: "Pedles",
  });
  const [newData, setNewData] = useState({});
  useEffect(() => {
    console.log("data enviada");
  },[newData]);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let newData = { ...data };
    newData[name] = value;
    setData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewData(data);
  };

  return (
    <DivContainer>
      <Form osvaldito onSubmit={handleSubmit}>
        <label>
          nombre
          <input
            onInput={handleInput}
            type="text"
            name="nombre"
            value={data.nombre}
          />
        </label>
        <label>
          apellido
          <input
            onInput={handleInput}
            type="text"
            name="apellido"
            value={data.apellido}
          />
        </label>
        <button>Enviar</button>
      </Form>
      Register
      <Link to="/">
        <button>home</button>
      </Link>
      {/* <h2>Nombre: {nombre}</h2> */}
      {/* <h2>Apellido:{apellido}</h2> */}
      <h3>Data Nombre: {newData.nombre}</h3>
      <h3>Data Apellido:{newData.apellido}</h3>
    </DivContainer>
  );
};

export default Register;
