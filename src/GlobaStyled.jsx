import { createGlobalStyle } from "styled-components";
const GlobalStyled = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
html{
    font-size: 62.5%;
}
body, #root{
    display: flex;
    flex-direction: column;
    background-color: #201f1fac;
    min-height: 100vh;
    width: 100vw;
    color: white;

}
`;
export default GlobalStyled;
