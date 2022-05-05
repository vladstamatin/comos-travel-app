import React, { useState, createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./styles/main.scss";

import { CartContext } from "./Context.js";

const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      <div className="app">
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </div>
    </CartContext.Provider>
  );
};

export default App;
