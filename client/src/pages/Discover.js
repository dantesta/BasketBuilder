import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";
import basketImg1 from './images/basketImg1.jpg'
import basketImg2 from './images/basketImg2.jpg'
import basketImg3 from './images/basketImg3.jpg'

class Discover extends Component {
  state = {
    baskets: [
      {name: 'basket1', img: basketImg1},
      {name: 'basket2', img: basketImg2},
      {name: 'basket3', img: basketImg3}
    ],
    items: [

    ]

    
    pickedBasket: {},
    isBasketPicked: false
  };

  basketClick = (imagePath) => {
    console.log(imagePath)
    const pickedBasket = this.state.baskets.filter(basket => {
      return basket.img === imagePath
    }) 
    console.log(pickedBasket)

    this.setState({
      pickedBasket: pickedBasket[0],
      isBasketPicked: true
    })
  }



  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center">select container</h1>
                <Card image={basketImg1} onClick={this.basketClick}/>
                <Card image={basketImg2} onClick={this.basketClick}/>
                <Card image={basketImg3} onClick={this.basketClick} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h1 className=" text-center">select container</h1>
                <Card image={basketImg1} />
                <Card image={basketImg2} />
                <Card image={basketImg3} />
                <Card image={basketImg3} />
              </div>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <h1 className=" text-center">Your Cart</h1>
            {this.state.isBasketPicked ? <Card image={this.state.pickedBasket.img}/> : (<h4>Your cart is empty</h4>)}
          </div>
        </div>
      </div>
    );
  }
}

export default Discover;
