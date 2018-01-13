import React, { Component } from "react";
import Card from "../components/Card";
import basketImg1 from './images/basketImg1.jpg'
import basketImg2 from './images/basketImg2.jpg'
import basketImg3 from './images/basketImg3.jpg'
import itemImg1 from './images/itemImg1.jpg'
import itemImg2 from './images/itemImg2.jpg'
import itemImg3 from './images/itemImg3.jpg'
import itemImg4 from './images/itemImg4.jpg'
import itemImg5 from './images/itemImg5.jpg'
import itemImg6 from './images/itemImg6.jpg'

class Build extends Component {
  state = {
    baskets: [
      {name: 'basket1', img: basketImg1},
      {name: 'basket2', img: basketImg2},
      {name: 'basket3', img: basketImg3}
    ],
    items: [
    {name: 'item1', img: itemImg1},
    {name: 'item2', img: itemImg2},
    {name: 'item3', img: itemImg3},
    {name: 'item4', img: itemImg4},
    {name: 'item5', img: itemImg5},
    {name: 'item6', img: itemImg6},
    ],
    pickedBasket: {},
    itemsPicked: [],
    isBasketPicked: false,
    isItemPicked: false
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

  itemClick = (imagePath) => {
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

  removeItem = (imagePath) => {
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
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center">Select Container</h1>
                {this.state.baskets.map(basket => 
                    <Card image={basket.img} onClick={this.basketClick}/>
                  )}
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h1 className=" text-center">Select Item</h1>
                {this.state.items.map(item => 
                    <Card image={item.img} onClick={this.itemClick}/>
                  )
                }
              </div>
            </div>
          </div>

          <div className="col-md-6 text-center">
            <h1 className=" text-center">Your Cart</h1>
            {this.state.isBasketPicked ? <Card image={this.state.pickedBasket.img}/> : (<h4>Your cart is empty</h4>)}

            {this.state.isItemPicked ? (
              <div>
              {this.state.itemsPicked.map(item => 
                <Card image={item.img} onClick={this.removeItem} />
                )}
              </div>)
             : (<p>Your basket is currently empty</p>)} 
          </div>
        </div>
      </div>
    );
  }
}

export default Build;

