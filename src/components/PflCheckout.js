import React, { useContext } from "react";
import { C } from "../utils/Constants";
import { CartContext } from "./../Context";

import Button from "../components/Button";
const PflCheckout = () => {
  const [cart, setCart] = useContext(CartContext);

  const checkoutCart = () => {
    setCart([]);
  };

  console.log(cart);
  return (
    <div className="checkout-container">
      <div className="checkout-title">{C.pflPackageTitle}</div>
      <div className="horizontal-line" />
      <div className="checkout-description">{C.pflPackageDescription}</div>
      <Button name={C.checkout} action={() => checkoutCart(cart)} />
    </div>
  );
};

export default PflCheckout;
