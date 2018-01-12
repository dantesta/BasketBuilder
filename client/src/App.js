import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Build from "./pages/Build";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from './pages/Register'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "antd/dist/antd.css"

const App = () =>
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/build" component={Build} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Wrapper>
      <Footer />
    </div>
  </Router>;

export default App;
