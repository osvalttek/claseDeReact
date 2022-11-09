import { createGlobalStyle } from "styled-components";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

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
  width: 100vw;
  background-color: gray;

}


`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
}
export default App;
