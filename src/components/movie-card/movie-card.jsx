import React, {PureComponent} from "react";
import {moviesListType} from '../../types/index';

class MovieCard extends PureComponent {
  constructor(moviesListProps) {
    super(moviesListProps);
    this.moviesListProps = moviesListProps;
  }

  render() {
    const {movie, onCardMouseHover, onTitleClick} = this.moviesListProps;
    const {title, src} = movie;
    return (
      <article className="small-movie-card catalog__movies-card" onMouseEnter={onCardMouseHover}>
        <div className="small-movie-card__image"
          onClick={() => onTitleClick(movie)}
          onMouseEnter={() => onCardMouseHover(movie)}
        >
          <img src={src} alt={title} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a onClick={(evt) => {
            evt.preventDefault();
            onTitleClick(movie);
          }} className="small-movie-card__link" href="movie-page.html">{title}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  moviesListProps: moviesListType,
};

export default MovieCard;
