//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import Jumbotron from "./Components/Jumbotron";
import FriendCard from "./Components/FriendCard";
import Footer from "./Components/Footer";
import car from "./car.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    message: "Click an image to begin!",
    car: car,
    clickedCar: [],
    score: 0,
    topScore: 0
  };

  componentDidMount() {
  }

//when you click on a card ... the fish is taken out of the array
  imageClick = event => {
    const currentCar = event.target.alt;
    const CarAlreadyClicked =
      this.state.clickedCar.indexOf(currentCar) > -1;

//if you click on a fish that has already been selected, the game is reset and cards reordered
    if (CarAlreadyClicked) {
      this.setState({
        car: this.state.car.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        message: "Sorry! Try Again...",
        topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore,
        clickedCar: [],
        score: 0
      });
        // alert("You lose. Play again?");

//if you click on an available fish, your score is increased and cards reordered
    } else {
      this.setState(
        {
          car: this.state.car.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedCar: this.state.clickedCar.concat(
            currentCar
          ),
          message: "Nice Try!",
          score: this.state.score + 1
        },
//if you get all 12 fish corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            // alert("You guessed correctly!");
            this.setState({
              car: this.state.car.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              message: "Nice Job! You Win...!",
              topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore,
              clickedCar: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Navbar
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.car.map(car => (
            <FriendCard
              imageClick={this.imageClick}
              id={car.id}
              key={car.id}
              image={car.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
