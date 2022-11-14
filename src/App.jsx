import React, { useState, useEffect } from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

const App = () => {
  const [user, setUser] = useState(false);
  useEffect(() => {
    if (!sessionStorage.getItem("user")) {
      sessionStorage.setItem("user", user);
    }else{
      setUser(JSON.parse(sessionStorage.getItem("user")))
    }
  });



  return (
    <>
      <Header user={user} />
      <Main/>
      <Footer />
    </>
  );
};

export default App;
