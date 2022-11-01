import React from "react";
const InfoDetail = ({nombre,numero,info}) => {
  return (
    <div>
      <h1>{nombre}</h1>
      <h2>El curso numero {numero}</h2>
      <p>{info}</p>
    </div>
  );
};

export default InfoDetail;
