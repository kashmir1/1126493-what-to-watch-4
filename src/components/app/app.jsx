import React from "react";
import Main from "../main/main.jsx";
import {appType} from "../../types/index";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MovieDetails from "../movie-details/movie-details.jsx";


const App = (appProps) => {

  const {movie, moviesList} = appProps;

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
            movie={movie}
            moviesList={moviesList}
            onTitleClick={handleTitleClick}
            onCardMouseHover={handleCardMouseHover}
          />
        </Route>
        <Route exact path="/dev-film">
          <MovieDetails
            movie={movie}
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
