import React from "react";
import Main from "../main/main.jsx";
import {appType} from "../../types/index";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MovieDetails from "../movie-details/movie-details.jsx";


const App = (appProps) => {

  const {movieDescription, moviesList} = appProps;

  const handleTitleClick = (evt) => {
    evt.preventDefault();
  };

  const handleCardMouseHover = (evt) => {
    evt.preventDefault();
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main
            movieDescription={movieDescription}
            moviesList={moviesList}
            onTitleClick={handleTitleClick}
            onCardMouseHover={handleCardMouseHover}
          />
        </Route>
        <Route exact path="/dev-film">
          <MovieDetails
            movieDescription={movieDescription}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  appProps: appType,
};

export default App;
