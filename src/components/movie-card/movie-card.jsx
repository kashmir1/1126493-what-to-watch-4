import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../player/player.jsx";

class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };
  }

  render() {
    const {movie, onCardMouseEnter, onTitleClick, onPosterClick} = this.props;
    const {title} = movie;
    return (
      <article className="small-movie-card catalog__movies-card"
        onClick={() => onPosterClick(movie)}
        onMouseEnter = {() => {
          onCardMouseEnter(movie);
          this.setState({
            isPlaying: true
          });
        }}
        onMouseLeave = {() => {
          onCardMouseEnter(null);
          this.setState({
            isPlaying: false
          });
        }}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            preview = {movie.preview}
            poster = {movie.poster}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a
            onClick = {(evt) => {
              evt.preventDefault();
              onTitleClick(movie);
            }}
            className="small-movie-card__link"
            href="movie-page.html"
          >{title}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }),
  onTitleClick: PropTypes.func.isRequired,
  onCardMouseEnter: PropTypes.func.isRequired,
  onPosterClick: PropTypes.func.isRequired
};

export default MovieCard;
