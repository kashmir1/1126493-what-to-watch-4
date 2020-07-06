import React, {PureComponent} from "react";
import PropTypes from "prop-types";
// import Player from "../player/player";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };

    // this._videoDelay = null;
    //
    this._handleTitleClick = this._handleTitleClick.bind(this);
    this._handlePosterClick = this._handlePosterClick.bind(this);
    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    // this._handleMouseLeave = this._handleMouseHover.bind(this);
  }

  _handleTitleClick(evt) {
    const {movie, onTitleClick} = this.props;

    evt.preventDefault();
    onTitleClick(movie);
  }

  _handlePosterClick(evt) {
    const {movie, onPosterClick} = this.props;

    evt.preventDefault();
    onPosterClick(movie);
  }

  _handleMouseEnter() {
    const {movie, onCardMouseEnter} = this.props;

    this._videoDelay = setTimeout(() =>
      this.setState({
        isPlaying: true
      }), 1000);

    onCardMouseEnter(movie);
  }


  render() {
    const {movie} = this.props;
    const {title, src} = movie;
    return (
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image"
          onClick={this._handlePosterClick}
          onMouseEnter={this._handleMouseEnter}
        >
          <img src={src} alt={title} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a
            onClick={this._handleTitleClick}
            className="small-movie-card__link" href="movie-page.html">{title}
          </a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }),
  onPosterClick: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired,
  onCardMouseEnter: PropTypes.func.isRequired,
};

export default MovieCard;
