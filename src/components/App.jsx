import { createGlobalStyle } from "styled-components";
import HeaderContainer from "./HeaderContainer";
import MainContainer from "./MainContainer";
import FooterContainer from "./FooterContainer";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
#root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: goldenrod;
}
`;
function App() {
  
  return (
    <>
      <GlobalStyle />
      <HeaderContainer />
      <MainContainer/>
      <FooterContainer />
    </>
  );
}
export default App;
