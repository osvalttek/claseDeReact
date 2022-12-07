import { Provider } from "react-redux";
import { store } from "./store";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css"
import { useState } from "react";

function App() {

  const[user, setUser]=useState("")
  
  return (
    <Provider store={store}>  
      <Header />
      <Main />
      <Footer />
    </Provider>
  );
}

export default App;