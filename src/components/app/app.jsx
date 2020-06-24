import React from "react";
import Main from "../main/main.jsx";
import {appType} from "../../types/index";

const App = (appProps) => {

  const {movieDescription, moviesList} = appProps;

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
  appProps: appType,
};

export default App;
