import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { menuOptions } from "../utils/Options";
import { CartContext } from "../Context";
import { C } from "../utils/Constants";
import ShopCart from "../assets/icons/shop-cart.svg";

const Menubar = () => {
  const [cart, setCart] = useContext(CartContext);

  return (
    <div className="menubar">
      <div className="menu-content">
        <div className="logotype">{C.logotype}</div>
        {menuOptions.map((item, index) => {
          return (
            <Link key={index} to={item.url} className="link-style">
              <img src={item.icon} alt="not loaded" />
              <li>{item.name}</li>
            </Link>
          );
        })}
        <div className="shopping-cart">
          <img src={ShopCart} alt="not loaded" />
          {cart.length}
        </div>
      </div>
    </div>
  );
};

export default Menubar;
