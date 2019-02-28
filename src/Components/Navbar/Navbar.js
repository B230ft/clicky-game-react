import React from "react";
import "./Navbar.css";

const Navbar = props => (
      <div>
      <ul className="nav nav-pills nav-justified">
          <li><a href="/">Car Clicky Game</a></li>
          <li
              className={props.message.indexOf('Sorry!') !== -1 ? 
                  "desc-incorrect" : 
                  props.message.indexOf('Nice', 'Good') !== -1 ?
                      "desc-correct" :
                      "desc-normal"}
          >
              {props.message}
          </li>
          <li>Score: <span style={{color: "yellow"}}>{props.score}</span> | Top Score: {props.topScore}</li>
      </ul>
  </div>
);

export default Navbar;