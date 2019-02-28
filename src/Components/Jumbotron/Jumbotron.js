
//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
	<header className = "header">
		<h1>Car Clicky Game!</h1>
		<h5>Click on any image ONCE to earn a point but TWICE you lose all your points. Click all 12 and you WIN.</h5>
	</header>
);
export default Jumbotron;