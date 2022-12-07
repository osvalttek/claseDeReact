import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Counter from "./counter/Counter";
import QuotesList from "./quotes/QuotesList";
import CharacterQuote from "./quote/CharacterQuote";

const Main = () => {
  const [user, setUser] = useState(true);
  return (
    <main>
      <Routes>
        {/* {user && <Route path="/products" element={<ProductsList />} />} */}
        <Route path="/quotes" element={<QuotesList />}/>
        <Route path="/quote/:name" element={<CharacterQuote/>} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </main>
  );
};
export default Main;
