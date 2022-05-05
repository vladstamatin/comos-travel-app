import React, { useState, useContext, createContext } from "react";
import { sliderOptions } from "../utils/Options";
import { C } from "../utils/Constants";
import { CartContext, NotifyContext } from "./../Context";
import Button from "./Button";
import Notification from "./Notification";

const Slider = () => {
  const [cart, setCart] = useContext(CartContext);
  const [notify, setNotify] = useContext(NotifyContext);

  const [current, setCurrent] = useState(0);
  const length = sliderOptions.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const arrow = (arrow, action) => {
    return (
      <div className="arrow-container" onClick={action}>
        <div className="arrow">{arrow}</div>
      </div>
    );
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const createNotification = () => {
    setNotify(true);
    setTimeout(() => {
      setNotify(false);
    }, 1500);
  };

  return (
    <div className="slider-container">
      {arrow("<", prevSlide)}
      <div className="slider-box">
        {sliderOptions.map((slide, index) => {
          return (
            <div key={index}>
              {index === current && (
                <div className="destinations-slider">
                  <div className="destination-image">
                    <div className="destination-short-description">
                      <span>{slide.name.toUpperCase()}</span>
                      <span>{slide.location}</span>
                      <span>
                        {C.distance}: {slide.distance}
                      </span>
                      <span>
                        {C.population}: {slide.population}
                      </span>
                    </div>
                    <img src={slide.image} alt="not loaded" />
                  </div>

                  <div className="destination-description">
                    <div className="destination-long-description">
                      <span>{slide.name}</span>
                      <span>{slide.description}</span>
                    </div>
                    <div className="destination-price">
                      <div className="destination-price-container">
                        <span>{slide.price}</span>
                        <span>{slide.ticketType}</span>
                      </div>
                      <Button
                        name={C.purchase}
                        action={() => {
                          addToCart(sliderOptions[index]);
                          createNotification();
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {arrow(">", nextSlide)}
    </div>
  );
};

export default Slider;
