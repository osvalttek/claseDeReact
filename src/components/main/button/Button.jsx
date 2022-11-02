import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button``;
function Button({ handleSetCount }) {

  return (
    <>
      <ButtonStyle onClick={()=>handleSetCount()}>Agregar</ButtonStyle>
    </>
  );
}

export default Button;
