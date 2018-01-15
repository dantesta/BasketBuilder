import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import API from '../../utils/API';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class Navbar extends Component {
   state = {
    isLoggedIn: false
   }

   componentDidMount() {
    API.loginCheck()
      .then(res => {
        if (res) {
          this.setState({
            isLoggedIn: true
          })
        }
      })
      .catch(err => console.log(err))
   }
  render() {

    return (
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

          <li className={window.location.pathname === "/build" ? "active" : ""}>
            <Link to="/build">Build</Link>
          </li>

          {this.state.isLoggedIn ? (
            <li className={window.location.pathname === "/logout" ? "active" : ""}>
            Logout
          </li>
          ) : ( 
          {this.state.isLoggedIn ! (
          <span><li className={window.location.pathname === "/login" ? "active" : ""}>
            <Link to="/login">Login</Link>
          </li>


          <li className={window.location.pathname === "/register" ? "active" : ""}>

            <Link to="/register">Register</Link>
          </li>
          </span>
)}
         

        </ul>
      </div>
    </nav>
  )
  }

}

  

export default Navbar;
