import "./header.css";
import React, { Component } from "react";
import Rating from "./Rating"

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img
          className="netflix-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
          alt="logo"
        />
        
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            onChange={this.props.Change}
          />
        
        <Rating
            rate={this.props.minRate}
            changeRate={this.props.changeRate}
            size={"40px"}
          />
      </div>
    );
  }
}

export default Header;
