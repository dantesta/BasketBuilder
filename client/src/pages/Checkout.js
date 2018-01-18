import React from "react";
import {Redirect} from 'react-router-dom'
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import { Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Checkout = (props) =>{
  if (props.isLoggedIn) {
    

    return (
 <div className="container col-md-6">
      <Form>
        <FormGroup style= {{marginTop: 50}}>
          <Label for="exampleEmail">*Name</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="John Smith" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">*Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="checkout@basketbuilder.com" />
        </FormGroup>
                <FormGroup>
          <Label for="exampleEmail">*Phone</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="555-555-5555" />
        </FormGroup>
                <FormGroup>
          <Label for="exampleEmail">*Card Number</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="4444-4444-4444-4444" />
        </FormGroup>
                <FormGroup>
          <Label for="exampleEmail">*CVC</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="444" />
        </FormGroup>
                <FormGroup>
          <Label for="exampleEmail">*Expiration Date</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="01/01/01" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">*Address</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>

        <Button><Link to="/">Confirm Order</Link></Button>
      </Form>
      </div>

)
  } else {
    return ('You need to be logged in!');
   

  }
}
  
export default Checkout;