import React from "react";
import CardBtn from "../CardBtn";
import "./Card.css";

const Card = props =>
  <div
    className="card"
    style={{
      backgroundImage: props.image ? `url(${props.image})` : "none"
    }}
    onClick={props.onClick ? (() => props.onClick(props.image)) : (() => console.log('hi'))}
  >
    {!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
    
  </div>;

export default Card;
