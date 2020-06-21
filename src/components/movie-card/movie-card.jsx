import React from "react";
import PropTypes from "prop-types";

const MovieCard = (props) => {
  const {title, image, onCardMouseHover, onTitleClick} = props;
  return (
    <article className="small-movie-card catalog__movies-card" onMouseEnter={onCardMouseHover}>
      <div className="small-movie-card__image">
        <img src={image} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a onClick={onTitleClick} className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onCardMouseHover: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default MovieCard;
