import React, { useState, useContext, useEffect } from "react";
import { CartContext, NotifyContext } from "./../Context";

const Notification = () => {
  const [cart, setCart] = useContext(CartContext);
  const [notify, setNotify] = useContext(NotifyContext);

  if (notify)
    return (
      <div className={"notification-box"}>
        <span>
          {cart.length > 0
            ? "New flight added to your cart. Destination: " +
              cart[cart.length - 1].name
            : "Checkout flights"}
        </span>
      </div>
    );
  return null;
};

export default Notification;
