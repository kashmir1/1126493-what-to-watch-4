import PropTypes from "prop-types";

const {shape, string, number, arrayOf, func} = PropTypes;

export const MovieType = shape({
  title: string.isRequired,
  genre: string.isRequired,
  year: number.isRequired,
  src: string.isRequired,
  background: string.isRequired,
  ratingScore: string.isRequired,
  ratingLevel: string.isRequired,
  ratingCount: number.isRequired,
  movieDescription: string.isRequired,
  movieDirector: string.isRequired,
  movieStarring: string.isRequired,
});

export const appType = shape({
  movie: shape({
    title: string.isRequired,
    genre: string.isRequired,
    year: number.isRequired,
    src: string.isRequired,
    background: string.isRequired,
    ratingScore: string.isRequired,
    ratingLevel: string.isRequired,
    ratingCount: number.isRequired,
    movieDescription: string.isRequired,
    movieDirector: string.isRequired,
    movieStarring: string.isRequired,
  }).isRequired,
  moviesList: arrayOf(
      shape({
        title: string.isRequired,
        id: number.isRequired,
        image: string.isRequired
      })
  ).isRequired,
  onTitleClick: func.isRequired,
  onPosterClick: func.isRequired,
  onCardMouseEnter: func.isRequired,
});

export const moviesListType = shape({
  movie: shape({
    id: number.isRequired,
    title: string.isRequired,
    src: string.isRequired,
    poster: string.isRequired,
  }),
  onTitleClick: func.isRequired,
  onPosterClick: func.isRequired,
  onCardMouseEnter: func.isRequired,
});

export const CustomPropTypes = {
  FILM: PropTypes.shape({
    id: PropTypes.number.isRequired,
    background: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    ratingScore: PropTypes.string.isRequired,
    // src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    votes: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  REVIEW: PropTypes.shape({
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export const AppProps = shape({
  movie: appType.isRequired,
  moviesList: arrayOf(appType).isRequired,
  onTitleClick: func.isRequired,
});
