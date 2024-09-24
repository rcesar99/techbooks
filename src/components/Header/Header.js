import React from "react";
import "./Header.css";

const Header = ({ title, children }) => (
  <header className="header">
    <h1>{title}</h1>
    <p>{children}</p>
  </header>
);

export default Header;
