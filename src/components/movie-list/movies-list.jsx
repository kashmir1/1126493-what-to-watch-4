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
    const {moviesList, onTitleClick} = this.moviesListProps;

    return (
      <div className="catalog__movies-list">
        {
          moviesList.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                movie = {movie}
                title={movie.title}
                src={movie.src}
                onCardMouseHover = {() => {
                  this.setState({
                    activeMovie: movie,
                  });
                }}
                onTitleClick={onTitleClick}
              />
            );
          })
        }
      </div>
    );
  }
}

MoviesList.propTypes = {
  moviesListProps: moviesListType,
};

export default MoviesList;
