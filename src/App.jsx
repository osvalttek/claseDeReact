import { createGlobalStyle } from "styled-components";
import Product from "./components/Product";


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
  // let array = [1,2];
  // // let uno = array[0];
  // // let dos = array[1];
  // let [unoD, dosD] = array;
  // console.log(unoD);
  // dosD = 20;
  // console.log(dosD);
  // console.log("array", array);

  // let obj = {
  //   id: 1,
  //   marca: "LG",
  //   precio: 30000,
  // };
  // //  let marca=obj.marca
  // let { precio, id, marca } = obj;
  // console.log("precio", precio);
  // precio = 100;
  // console.log(obj);

  return (
    <>
      <GlobalStyle />
      <Product/>
  
    </>
  );
}
export default App;
