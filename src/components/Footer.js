import React from "react";
import { C } from "../utils/Constants";

const Footer = () => {
  return (
    <div className="footer">
      <span>{C.copyrightText}</span>
      <span>{C.projectNotify}</span>
    </div>
  );
};

export default Footer;
