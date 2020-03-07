import { FaStar } from "react-icons/fa";
import React, { Component } from "react";

class Rating extends Component {
  render() {
    return (
      <div>
        {[...Array(5)].map((star, i) => {
          return i <= this.props.rate ? (
            <FaStar
              key={i}
              className="star"
              color="rgb(255, 237, 118)"
              onClick={() =>
                this.props.changeRate ? this.props.changeRate(i) : null
              }size={this.props.size}
            ></FaStar>
          ) : (
            <FaStar
              key={i}
              className="star"
              onClick={() =>
                this.props.changeRate ? this.props.changeRate(i) : null
              } size={this.props.size}
            ></FaStar>
          );
        })}
      </div>
    );
  }
}

export default Rating;
