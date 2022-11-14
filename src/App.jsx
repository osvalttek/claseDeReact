import React, { useState, useEffect, createContext } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Contador from "./context/Contador";

// export const miContexto = createContext("menu");
// const { Provider } = miContexto;
// console.log(Provider)

const App = () => {
  const [user, setUser] = useState(false);
  // useEffect(() => {
  //   if (!sessionStorage.getItem("user")) {
  //     sessionStorage.setItem("user", user);
  //   }else{
  //     setUser(JSON.parse(sessionStorage.getItem("user")))
  //   }
  // });
  return (
    <>
      <Contador>
        <Header user={user}  />
        <Main />
        <Footer />
      </Contador>
    </>
  );
};

export default App;
