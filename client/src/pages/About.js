import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () =>
  <div>
    <Hero backgroundImage="http://www.jillstable.ca/wp-content/uploads/gift-banner.jpg">
      <h1>Basket Builder</h1>
      <h2>Gift Baskets & More!</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome To Basket Builder!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>
            Create a new basket
          </p>
          <p>
            Purchase Existing Basket
          </p>
          <p>
            Sign-in
          </p>
        </Col>
      </Row>
    </Container>
  </div>;

export default About;
