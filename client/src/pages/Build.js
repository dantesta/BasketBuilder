import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const Login = () =>
  <div className="container">
  <div className="row">
    <div className="col-sm-6 col-md-4 col-md-offset-4">
      <h1 className="text-center login-title">Sign in 
        <div className="account-wall"><img className="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"/>
          <form className="form-signin" action="/login" method="POST">
            <input className="form-control" type="text" name="username" placeholder="Email" required="required" autofocus="autofocus"/>
            <input className="form-control" type="password" name="password" placeholder="Password" required="required"/>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button><span className="clearfix"></span>
          </form>
        </div><a className="text-center new-account" href="/signup">Create an account</a>
      </h1>
    </div>
  </div>



  <div className="row">
    <div className="col-sm-6 col-md-4 col-md-offset-4">
      <h1 className="text-center login-title">Registration Details
        <div className="signup-wall">
          <form className="form-signin" action="/signup" method="POST">
            <input className="form-control" type="text" name="username" placeholder="Username" required="required" autofocus="autofocus"/>
            <input className="form-control" type="password" name="password" placeholder="Password" required="required"/>
            <input className="form-control" type="email" name="email" placeholder="Email" required="required"/>
            <input className="form-control" type="text" name="firstName" placeholder="First Name" required="required"/>
            <input className="form-control" type="text" name="lastName" placeholder="Last Name" required="required"/>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button><span className="clearfix"></span>
          </form>
        </div>
        <div id="message">
        </div>
      </h1>
    </div>
  </div>
</div>  

export default Login;