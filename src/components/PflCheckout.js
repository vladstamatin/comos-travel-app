import React, { useContext } from "react";
import { C } from "../utils/Constants";
import { CartContext, NotifyContext } from "./../Context";
import Button from "../components/Button";

const PflCheckout = () => {
  const [cart, setCart] = useContext(CartContext);
  const [notify, setNotify] = useContext(NotifyContext);

  const checkoutCart = () => {
    setCart([]);
  };

  const createNotification = () => {
    console.log(cart.length);
    if (cart.length > 0) setNotify(true);

    setTimeout(() => {
      setNotify(false);
    }, 1500);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-title">{C.pflPackageTitle}</div>
      <div className="horizontal-line" />
      <div className="checkout-description">{C.pflPackageDescription}</div>
      <Button
        name={C.checkout}
        action={() => {
          checkoutCart(cart);
          createNotification();
        }}
      />
    </div>
  );
};

export default PflCheckout;
