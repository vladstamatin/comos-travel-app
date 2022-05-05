import React from "react";
import { pflOptions } from "../utils/Options";

const PflBar = () => {
  return (
    <div className="pfl-container">
      <div className="pfl-flex">
        {pflOptions.items.map((item, key) => {
          return (
            <React.Fragment key={key}>
              <div className="pfl-box">
                <img src={item.icon} alt="not loaded" />
                <span>{item.name}</span>
              </div>
              <div className="arrow">{pflOptions.arrow}</div>
            </React.Fragment>
          );
        })}
        <div className="enjoy-message-box">
          <span>{pflOptions.message1.toUpperCase()}</span>
          <span>{pflOptions.message2.toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
};

export default PflBar;
