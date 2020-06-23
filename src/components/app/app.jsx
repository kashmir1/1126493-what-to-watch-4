import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {

  const {movieDescription, moviesList} = props;

  const handleTitleClick = (evt) => {
    evt.preventDefault();
  };

  const handleCardMouseHover = (evt) => {
    evt.preventDefault();
  };

  return (
    <Main
      movieDescription={movieDescription}
      moviesList={moviesList}
      onTitleClick={handleTitleClick}
      onCardMouseHover={handleCardMouseHover}
    />
  );
};

App.propTypes = {
  movieDescription: PropTypes.shape({
    movieTitle: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release: PropTypes.number.isRequired,
  }).isRequired,
  moviesList: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired
      })
  ).isRequired,
};

export default App;
