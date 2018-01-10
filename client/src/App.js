import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Build from "./pages/Build";
import About from "./pages/About";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

const App = () =>
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/build" component={Build} />
        <Route exact path="/login" component={Login} />
      </Wrapper>
      <Footer />
    </div>
  </Router>;

export default App;
