import React, { Component } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import basketImg1 from './images/basketImg1.jpg'
import basketImg2 from './images/basketImg2.jpg'
import basketImg3 from './images/basketImg3.jpg'
import itemImg1 from './images/itemImg1.jpg'
import itemImg2 from './images/itemImg2.jpg'
import itemImg3 from './images/itemImg3.jpg'
import itemImg4 from './images/itemImg4.jpg'
import itemImg5 from './images/itemImg5.jpg'
import itemImg6 from './images/itemImg6.jpg'
import itemImg7 from './images/itemImg7.jpg'
import itemImg8 from './images/itemImg8.jpg'
import Checkout from './Checkout'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class Build extends Component {
  state = {
    baskets: [
      {name: 'basket1', img: basketImg1, desc: 'Side Handles', price: '$10.99'},
      {name: 'basket2', img: basketImg2, desc: 'Looping Handle', price: '$12.99'},
      {name: 'basket3', img: basketImg3, desc: 'Boat Shaped', price: '$11.99'}
    ],
    items: [
    {name: 'item1', img: itemImg1, desc: 'Box of Chocolate', price: '$5.99'},
    {name: 'item2', img: itemImg2, desc: 'Summer Sausage', price: '$3.99'},
    {name: 'item3', img: itemImg3, desc: 'Coffee Candy', price: '$8.99'},
    {name: 'item4', img: itemImg4, desc: 'Guiness Chips', price: '$7.99'},
    {name: 'item5', img: itemImg5, desc: 'Caramel Popcorn', price: '$5.99'},
    {name: 'item6', img: itemImg6, desc: 'Beef Jerky', price: '$5.99'},
    {name: 'item7', img: itemImg7, desc: 'Pistachios', price: '$4.99'},
    {name: 'item8', img: itemImg8, desc: 'Toffee', price: '$5.99'}
    ],
    pickedBasket: {},
    itemsPicked: [],
    isBasketPicked: false,
    isItemPicked: false,
    showComponent: false,
  };

  

  _onButtonClick = () => {
    this.setState({
      showComponent: true,
    });
  }

  

  basketClick = (imagePath, desc, price) => {
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

  itemClick = (imagePath, desc, price) => {
    console.log(imagePath)
    const currentItems = this.state.itemsPicked
    const pickedItem = this.state.items.filter(item => {
      return item.img === imagePath
    })

    currentItems.push(pickedItem[0])

    this.setState({
      itemsPicked: currentItems,
      isItemPicked: true
    })
  }

  removeItem = (imagePath, desc, price) => {
    const currentItems = this.state.itemsPicked.filter(item => {
      return item.img !== imagePath
    })

    const isItemPicked = currentItems.length ? true : false;

    this.setState({
      itemsPicked: currentItems,
      isItemPicked
    })
  }





  render() {
    return (
      <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center">Select Container</h1>
                {this.state.baskets ? this.state.baskets.map(basket => 
                    <Card image={basket.img} desc={basket.desc} price={basket.price} onClick={this.basketClick}/>

                  ) : 'No Baskets to Show'} 
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h1 className=" text-center">Select Item</h1>
                {this.state.items.map(item => 
                    <Card image={item.img} desc={item.desc} price={item.price} onClick={this.itemClick}/>
                  )
                }
              </div>
            </div>
          </div>

          <div className="col-md-6 text-center">

            <h1 className=" text-center">Your Cart</h1>


            {this.state.isBasketPicked ? <Card image={this.state.pickedBasket.img} desc={this.state.pickedBasket.desc} price={this.state.pickedBasket.price}/> : (<h4>Your cart is empty</h4>)}

            {this.state.isItemPicked ? (
              <div>
              {this.state.itemsPicked.map(item => 
                <Card image={item.img} desc={item.desc} price={item.price} onClick={this.removeItem} />
                )}
              </div>)
             : (<p>Your basket is currently empty</p>)} <h5>Total:</h5>
          </div>





        <Button onClick={this._onButtonClick}>Checkout</Button>
        {this.state.showComponent ?
           <Checkout isLoggedIn={this.props.isLoggedIn}/> :
           ''
        }





        </div>
        </div>
        <Footer />
      </div>



    );
  }

  

}

export default Build;



