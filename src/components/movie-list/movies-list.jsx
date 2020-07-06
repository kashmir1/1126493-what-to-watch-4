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

    this._handleOnCardMouseEnter = this._handleOnCardMouseEnter.bind(this);
    this._handleMovieCardMouseLeave = this._handleMovieCardMouseLeave.bind(this);
  }

  _handleOnCardMouseEnter(movie) {
    this.setState({
      activeMovie: movie,
    });
  }

  _handleMovieCardMouseLeave() {
    this.setState({
      activeCard: null
    });
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
            onCardMouseEnter = {this._handleOnCardMouseEnter}
            onMouseLeave={this._handleMovieCardMouseLeave}
          />)
        )}
      </div>);
  }
}

MoviesList.propTypes = {
  moviesListProps: moviesListType,
};

export default MoviesList;
