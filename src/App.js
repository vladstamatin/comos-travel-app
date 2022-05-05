import React, { useState, createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import "./styles/main.scss";
import Notification from "./components/Notification";
import { CartContext, NotifyContext } from "./Context.js";

const App = () => {
  const [cart, setCart] = useState([]);
  const [notify, setNotify] = useState();

  return (
    <NotifyContext.Provider value={[notify, setNotify]}>
      <CartContext.Provider value={[cart, setCart]}>
        <div className="app">
          <BrowserRouter>
            <AppRoutes />
            <Notification />
          </BrowserRouter>
        </div>
      </CartContext.Provider>
    </NotifyContext.Provider>
  );
};

export default App;
