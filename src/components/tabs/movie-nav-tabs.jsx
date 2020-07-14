import React from 'react';
import {CustomPropTypes} from "../../types";

const getRating = (rating) => {
  if (rating < 3) {
    return `Bad`;
  } else if (rating < 5) {
    return `Normal`;
  } else if (rating < 8) {
    return `Good`;
  } else if (rating < 10) {
    return `Very good`;
  } else {
    return `Awesome`;
  }
};

const MovieNavTabs = (props) => {
  const {movie} = props;

  return (<React.Fragment>
    <div className="movie-rating">
      <div className="movie-rating__score">{movie.ratingScore}</div>
      <p className="movie-rating__meta">
        <span className="movie-rating__level">{getRating(movie.rating)}</span>
        <span className="movie-rating__count">{movie.votes} ratings</span>
      </p>
    </div>

    <div className="movie-card__text">
      <p>{movie.description}</p>

      <p className="movie-card__director"><strong>Director: {movie.director}</strong></p>
      <p className="movie-card__starring"><strong>Starring: {movie.starring.map((star) => star).join(`, `)} and other</strong></p>
    </div>
  </React.Fragment>);
};

export default MovieNavTabs;

MovieNavTabs.propTypes = {
  movie: CustomPropTypes.FILM,
};
