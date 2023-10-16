import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/waitinglist">Waiting List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
