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
        <div className="search-container">
          <span className="svg">
            <svg
              width="15px"
              height="15px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
              aria-hidden="true"
            >
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g id="Artboard-1" stroke="#777777" strokeWidth="1.3">
                  <g id="Group">
                    <path
                      d="M13.4044,7.0274 C13.4044,10.5494 10.5494,13.4044 7.0274,13.4044 C3.5054,13.4044 0.6504,10.5494 0.6504,7.0274 C0.6504,3.5054 3.5054,0.6504 7.0274,0.6504 C10.5494,0.6504 13.4044,3.5054 13.4044,7.0274 Z"
                      id="Stroke-3"
                    ></path>
                    <path
                      d="M11.4913,11.4913 L17.8683,17.8683"
                      id="Stroke-7"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search"
            onChange={this.props.Change}
          />
        </div>
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
