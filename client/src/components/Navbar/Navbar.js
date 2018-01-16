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
      <div className="nav navbar-nav">

        
          <div className={window.location.pathname === "/about" ? "active" : ""}>
          <Link to="/about">About</Link>
          </div>
        

     
         <div className={window.location.pathname === "/build" ? "active" : ""}>
          <Link to="/build">Build</Link>
       </div>

        <div
          className={window.location.pathname === "/login" ? "active" : ""}>
          <Link to="/login">Login</Link>
        </div>

      <div
          className={window.location.pathname === "/register" ? "active" : ""}>
          <Link to="/register">Register</Link>
     </div>


      </div>
    </div>
  </nav>;

export default Navbar;


