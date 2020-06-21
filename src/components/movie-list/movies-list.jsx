import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

const MoviesList = (props) => {
  const {moviesList, onTitleClick, onCardMouseHover} = props;

  return (
    <div className="catalog__movies-list">
      {
        moviesList.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              title={movie.title}
              image={movie.image}
              onCardMouseHover={onCardMouseHover}
              onTitleClick={onTitleClick}
            />
          );
        })
      }
    </div>
  );
};

MoviesList.propTypes = {
  moviesList: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
      })
  ),
  onTitleClick: PropTypes.func.isRequired,
  onCardMouseHover: PropTypes.func.isRequired,
};

export default MoviesList;
