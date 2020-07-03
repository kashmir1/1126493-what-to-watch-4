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

    this._handleOnCardMouseHover = this._handleOnCardMouseHover.bind(this);
  }

  _handleOnCardMouseHover(movie) {
    this.setState({
      activeMovie: movie,
    });
  }

  render() {
    const {moviesList, onTitleClick} = this.moviesListProps;

    return (
      <div className="catalog__movies-list">
        {moviesList.map((movie) => (
          <MovieCard
            key={movie.title}
            movie = {movie}
            onTitleClick={onTitleClick}
            onCardMouseHover = {this._handleOnCardMouseHover}
          />)
        )}
      </div>);
  }
}

MoviesList.propTypes = {
  moviesListProps: moviesListType,
};

export default MoviesList;
