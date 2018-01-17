import React, {Component} from "react";
import { Link, Redirect} from "react-router-dom";
import "./Navbar.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => {
  console.log(props)
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            Basket Builder
          </Link>
        </div>

        Hello, {props.username ? props.username : 'user'}
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

          <li className={window.location.pathname === "/build" ? "active" : ""}>
            <Link to="/build">Build</Link>
          </li>

          {props.isLoggedIn ? (
            <li >
             <a onClick={props.logout}> Logout</a>
            </li>


          ) : (
            
          
          
            <span>
            <li className={window.location.pathname === "/login" ? "active" : ""}>
              <Link to="/login">Login</Link>
            </li>


            <li className={window.location.pathname === "/register" ? "active" : ""}>
              <Link to="/register">Register</Link>
            </li>
            </span>

          )

  }
         

        </ul>

       
      </div>
    </nav>
  )
  
}
  

export default Navbar;


