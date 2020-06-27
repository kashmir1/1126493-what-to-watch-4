import React from "react";
import {moviesListType} from '../../types/index';

const MovieCard = (moviesListProps) => {
  const {movie, onCardMouseHover, onTitleClick} = moviesListProps;
  const {title, src} = movie;
  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={onCardMouseHover}>
      <div className="small-movie-card__image">
        <img src={src} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a onClick={onTitleClick} className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  moviesListProps: moviesListType,
};

export default MovieCard;
