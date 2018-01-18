import React from "react";
import "./Card.css";

const Card = props =>

<div>
  <div
    className="card"
    style={{
      backgroundImage: props.image ? `url(${props.image})` : "none"
    }}
    onClick={props.onClick ? (() => props.onClick(props.image, props.price)) : (() => console.log('hi'))}
  >
    {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}

    
  </div>
  <div><p>{props.price}</p>
  </div>

</div>;


export default Card;
