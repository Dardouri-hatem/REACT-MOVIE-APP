import React, { Component } from "react";
import "./movies.css";
import Header from "./header";
import MovieCard from "./MovieCard";



const moviesList = [
  {
    img:
      "https://img-4.linternaute.com/cip2YBDZkVvjU4a2tqiFIaf6Yhw=/1240x/a9bfc660898e44a19d2d36f463c9c955/ccmcms-linternaute/124775.jpg",
    rate: 3,
    name: "AVATAR"
  },
  {
    img:
      "https://img-4.linternaute.com/qN-WR7DLLyCdwzybd_TCAnVsrpE=/1240x/c6bfd8570c3a4cdf8983a07bc8c67bb0/ccmcms-linternaute/135211.jpg",
    rate: 5,
    name: "TITANIC"
  },
  {
    img:
      "https://static.hitek.fr/img/actualite/8z5qpxzhcsgkp7h6dv6jyfbwneg.jpg",
    rate: 4,
    name: "HOBBS & SHAW"
  },
  {
    img:
      "https://static.hitek.fr/img/up_m/1734427137/x-men-dark-phoenix-fan-poster-marvel-studios-cinematic-universe-1120092.jpeg",
    rate: 4,
    name: "X-MEN"
  },
  {
    img:
      "https://static.hitek.fr/img/actualite/creed-ii-affiche-officielle-1040206.jpg",
    rate: 5,
    name: "GREED II"
  },
  {
    img:
      "https://resize-parismatch.lanmedia.fr/r/901,,forcex/img/var/news/storage/images/paris-match/culture/cinema/l-annee-cinema-2019-en-cent-films-1597759/glass-de-m-night-shyamalan/25884276-1-fre-FR/Glass-De-M.-Night-Shyamalan.jpg",
    rate: 5,
    name: "GLASS"
  },
  {
    img: "https://cdn-static.egybest.net/serve/movies/art-2872192401-x175.jpg",
    rate: 2,
    name: "HOLLY SLEPT OVER"
  },
  {
    img: "https://cdn-static.egybest.net/serve/movies/art-2824630796-x175.jpg",
    rate: 3,
    name: "CATS THE MEWVIE"
  },
  {
    img: "https://cdn-static.egybest.net/serve/movies/art-2818231624-x175.jpg",
    rate: 3,
    name: "TIMMY FAILURE"
  }
];

export class Movies extends Component {
  state = {
    moviesList,
    minRate: 0,
    name: "",
    showModal: false

  };

  InputSearch = e => {
    this.setState({
      name: e.target.value
    });
  };

 

  filtermovie = (film, InputSearch) => {
    return film.name
      .toLowerCase()
      .trim()
      .includes(InputSearch.toLowerCase());
  };

 

  AddMovie = (img, name, rate) => {
    img&&name&&rate&&
    this.setState({
      moviesList: [...this.state.moviesList, { img, name, rate }],
      showModal: false
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false
    });
  };
  OpenModal=()=>{
    this.setState({ showModal: true })
  }

  changeRate = value=> {
    this.setState({ minRate: value });
  };

  render() {

    return (
      <div className="Container">
        <Header
          minRate={this.state.minRate}
          changeRate={this.changeRate}
          Change={this.InputSearch}
        />

        <MovieCard
          moviesList={this.state.moviesList.filter(
            film =>
              this.filtermovie(film, this.state.name) &&
              film.rate >= this.state.minRate
          )}
          AddMovie={this.AddMovie}
          showModal={this.state.showModal}
          closeModal={this.closeModal}
          OpenModal={this.OpenModal}
        />

        

      </div>
    );
  }
 

}

export default Movies;
