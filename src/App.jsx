import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import CartContext from "./context/CartContext";
import UserContext from "./context/UserContext";

const App = () => {
  return (
    <>
      <UserContext>
        <CartContext>
          <Header />
          <Main />
          <Footer />
        </CartContext>
      </UserContext>
    </>
  );
};

export default App;
