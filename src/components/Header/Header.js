import React from "react";
import "./Header.css";
const Header = props => (
  
  <div className="main-container">
    <nav className="navbar sticky-top navbar justify-content-end">
      <h5 className="text">Current Game Score: {props.currentScore} | Top Score: {props.topScore}</h5>
    </nav>
    
    <div className="jumbotron text">
      <h1>Family Guy Memory Card Game</h1>
      <p className="lead">Click a card, but only click it once!</p>
    </div>
  </div>
);

export default Header;