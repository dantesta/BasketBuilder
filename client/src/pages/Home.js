import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


const Home = () =>
  <div>
    <Hero backgroundImage="http://www.jillstable.ca/wp-content/uploads/gift-banner.jpg">
      <h1>Basket Builder</h1>
      <h2>Create Your Own Gift Basket!</h2>
       <h3><Link to="/build">Start Building</Link></h3>
    </Hero>
    <Footer />

  </div>;

export default Home;