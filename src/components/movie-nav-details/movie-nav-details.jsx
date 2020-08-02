import React from 'react';
import PropTypes from 'prop-types';
import {formatRuntime} from "../../utils";

const MovieNavDetails = (props) => {
  const {director, genre, starring, time, year} = props;

  const runTime = formatRuntime(time);


  return (<React.Fragment>
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            {starring.map((star) => (
              star
            )).join(`, \n`)}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{runTime}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">{year}</span>
        </p>
      </div>
    </div>
  </React.Fragment>);
};

export default MovieNavDetails;

MovieNavDetails.propTypes = {
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  time: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};
