import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Footer from "../components/Footer";


const About = () =>
  <div>
    <Hero backgroundImage="http://www.jillstable.ca/wp-content/uploads/gift-banner.jpg">
      <h1>About Basket Builder</h1>
    </Hero>
    <Container style={{ marginTop: 130 }}>

      <Row>
        <Col size="md-12">
          <h3>
            What is Basket Builder?
          </h3>
          <p>
          Basket Builder is a website that allows you to build a gift basket from scratch. 
          You can choose between 3 baskets and multiples different items to fill the basket with. 
          One the best features of the website is that the basket and the items are automatically placed in your cart. 
          In order to checkout you need to create an account, pay, and that's it. 
          Create a unique basket with dozens of customization options. Click Build on the navbar to get started!
          </p>

        </Col>
      </Row>
    </Container>
        <Footer />

  </div>;

export default About;
