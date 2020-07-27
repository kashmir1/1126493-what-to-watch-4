import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {CustomPropTypes} from "../../types";

import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      onFilm: {},
    };
  }

  render() {
    const {films, onSmallMovieCardClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film) => (
          <SmallMovieCard
            key={film.id}
            film={film}
            onMouseHover={(currentFilm) => {
              this.setState({
                onFilm: currentFilm,
              });
            }}
            onSmallMovieCardClick={onSmallMovieCardClick}
          />
        ))}
      </div>
    );
  }
}

export default MoviesList;

MoviesList.propTypes = {
  films: PropTypes.arrayOf(CustomPropTypes.FILM).isRequired,
  onSmallMovieCardClick: PropTypes.func.isRequired,
};
