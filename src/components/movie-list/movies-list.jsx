import React, {PureComponent} from 'react';
import MovieCard from '../movie-card/movie-card.jsx';
import {moviesListType} from "../../types/index";

class MoviesList extends PureComponent {
  constructor(moviesListProps) {
    super(moviesListProps);
    this.moviesListProps = moviesListProps;

    this.state = {
      avtiveMovie: {},
    };
  }


  render() {
    const {moviesList, onTitleClick, onPosterClick} = this.moviesListProps;

    return (
      <div className="catalog__movies-list">
        {moviesList.map((movie) => (
          <MovieCard
            key={movie.title}
            movie = {movie}
            onTitleClick={onTitleClick}
            onPosterClick={onPosterClick}
            onCardMouseEnter = {(currentMovie) => {
              this.setState({
                activeMovie: currentMovie,
              });
            }}
          />)
        )}
      </div>);
  }
}

MoviesList.propTypes = {
  moviesListProps: moviesListType,
};

export default MoviesList;
