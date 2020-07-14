import React from 'react';
import {CustomPropTypes} from "../../types";

const MovieNavDetails = (props) => {
  const {movie} = props;

  return (<React.Fragment>
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">Wes Andreson</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">
            Bill Murray,
            Edward Norton,
            Jude Law,
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">1h 39m</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">Comedy</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">2014</span>
        </p>
      </div>
    </div>
  </React.Fragment>);
};

export default MovieNavDetails;

MovieNavDetails.prototype = {
  film: CustomPropTypes.FILM,
};
