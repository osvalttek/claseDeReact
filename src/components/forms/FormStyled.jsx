import styled from "styled-components";

const FormContainer = styled.div`
  width: 320px;
  margin: 0 auto;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
    label {
      display: block;
      font-size: 1.5rem;
      margin-top: 10px;
    }
    input {
      display: block;
      height: 30px;
    }
    div{
        display: flex;
    }
  }
`;

export default FormContainer;
