import React from 'react';
import PropTypes from 'prop-types';
import {CustomPropTypes} from "../../types";

import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import withVideo from '../../hoc/with-video/with-video.jsx';

const SmallMovieCardWrapped = withVideo(SmallMovieCard);

const MoviesList = (props) => {
  const {films, onSmallMovieCardClick} = props;

  return (
    <div className="catalog__movies-list">
      {films.map((film) => (
        <SmallMovieCardWrapped
          key={film.id}
          film={film}
          onSmallMovieCardClick={onSmallMovieCardClick}
        />
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(CustomPropTypes.FILM).isRequired,
  onSmallMovieCardClick: PropTypes.func.isRequired,
};

export default MoviesList;
