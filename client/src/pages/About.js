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
            What is Basket Builder?
          </h3>
          <p>
          Basket Builder is a website that allows you to build a gift basket from scratch. 
          You can choose between 3 baskets and multiples different items to fill the basket with. 
          One the best features of the website is that the basket and the items are automatically placed in your cart. 
          In order to checkout you need to create an account, pay, and that's it. 
          Create a unique basket with dozens of customization options.
          </p>
          <h3>
           About Us
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
