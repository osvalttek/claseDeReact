import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import UserContext from "./context/UserContext";

const App = () => {
  return (
    <>
      <UserContext>
        <Header />
        <Main />
        <Footer />
      </UserContext>
    </>
  );
};

export default App;
