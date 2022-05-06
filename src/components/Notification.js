import React, { useState, useContext, useEffect } from "react";
import { CartContext, NotifyContext } from "./../Context";

const Notification = () => {
  const [cart, setCart] = useContext(CartContext);
  const [notify, setNotify] = useContext(NotifyContext);

  useEffect(() => {
    setTimeout(() => {
      setNotify(false);
    }, 1500);
  });
  return (
    <div
      className={
        notify ? "notification-box" : "notification-box notify-animation"
      }
    >
      <span>
        {cart.length > 0
          ? "New flight added to your cart. Destination: " +
            cart[cart.length - 1].name
          : "Checkout flights"}
      </span>
    </div>
  );
};

export default Notification;
