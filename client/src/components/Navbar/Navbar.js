import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          Basket Builder
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/about"
              ? "active"
              : ""
          }
        >
          <Link to="/">About</Link>
        </li>

        <li
          className={window.location.pathname === "/discover" ? "active" : ""}
        >
          <Link to="/discover">Create</Link>
        </li>


        <li className={window.location.pathname === "/search" ? "active" : ""}>
          <Link to="/search">Sign-in</Link>

        </li>

        <li className={window.location.pathname === "/home" ? "active" : ""}>
          <Link to="/home">Test</Link>
          </li>
      </ul>
    </div>
  </nav>;

export default Navbar;
