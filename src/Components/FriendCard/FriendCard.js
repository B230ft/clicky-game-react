
//sets up the reusable FriendCard component
import React from "react";
import "./FriendCard.css";

//pass the image into each card so all 12 are rendered
const FriendCard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpeg", "")} src={require("../../images/" + props.image)} width={"220px"} height={"150px"}/>
    </div>
  </div>
);

export default FriendCard;