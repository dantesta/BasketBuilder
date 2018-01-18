import React from "react";
import "./Card.css";

const Card = props =>


  <div
    className="card image"
    style={{
      backgroundImage: props.image ? `url(${props.image})` : "none"
    }}
    onClick={props.onClick ? (() => props.onClick(props.image, props.desc, props.price)) : (() => console.log('hi'))}
  >
    {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    <div style={{marginTop :120}}>
    <p>{props.desc}</p><h5>{props.price}</h5>
    </div>
  </div>;


export default Card;
