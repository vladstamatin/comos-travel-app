import React from "react";

const Button = ({ name, action }) => {
  return (
    <button type="submit" className="default-button" onClick={action}>
      {name}
    </button>
  );
};

export default Button;
