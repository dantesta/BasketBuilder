import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";
import basketImg1 from './images/basketImg1.jpg'
import basketImg2 from './images/basketImg2.jpg'
import basketImg3 from './images/basketImg3.jpg'

class Discover extends Component {
  state = {
    
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center">
            <h1 className="text-center">select container</h1>
            <Card image={basketImg1} />
            <Card image={basketImg2} />
            <Card image={basketImg3} />
          </div>
        </div>
      </div>
    );
  }
}

export default Discover;
