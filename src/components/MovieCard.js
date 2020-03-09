import React, { Component } from "react";
import Rating from "./Rating"
import AddModal from "./AddModal";




class MovieCard extends Component {
  state = {
    showModal: false,
    value:0,
   addMovie:[{img:"", name:"", rate:""}]
  };

  
  


  render() {
    return (
      <div className="movies-container">
        {this.props.moviesList.map((film, i) => (
          <div className="card-container" key={i}>
          <img src={film.img} alt={film.name}/> 
          <div className="caption-movie">           
          <Rating rate={film.rate}/> 
          <p>{film.name}</p>
          </div>
          </div>
        ))}
        <span
          className="add-btn"
          onClick={ this.props.OpenModal}
        >
          +
        </span>

        <AddModal
          showModal={this.props.showModal}
          closeModal={this.props.closeModal}
          AddMovie={this.props.AddMovie}
        />
       
       
      </div>
    );
  }
  
}

export default MovieCard;
