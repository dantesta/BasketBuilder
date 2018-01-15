import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


const About = () =>
  <div>
    <Hero backgroundImage="http://www.jillstable.ca/wp-content/uploads/gift-banner.jpg">
      <h1>About Basket Builder</h1>
    </Hero>
    <Container style={{ marginTop: 30 }}>

      <Row>
        <Col size="md-12">
          <h3>
            Our Overall Application's Concept
          </h3>
          <p>
            The idea is to build a website where you can create your own gift basket. 
            The site will prompt you through a series of steps that allow you to choose a container 
            and the items inside of it. 
            After each item is chosen, it will be added to the cart that will update with each new item added. 
            In order to create a basket you will need to create an account and login. 
            We plan to use either mongo or MySQL to store this data. 
            Users can also choose from an assortment of pre-built baskets that can be purchased without 
            having to create an account. The goal behind this idea is to make a functional e-commerce website 
            using all the concepts we have learned thus far.
          </p>
          <h3>
           Our Motivation for this Project
          </h3>
            <p>
           Our motivation is not necassarily create something that does not already exist rather to challenge 
           ourselves with a concept that has many real world applications that will help us 
           with our future careers. As far as how we are going to split the work, we have yet to 
           decide who will be working on what. We will likely follow the same route we took for project 2 
           and allow everyone to work on their areas of strength.
          </p>

        </Col>
      </Row>
    </Container>

  </div>;

export default About;
