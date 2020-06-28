import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import moviesList from "./mocks/films.js";
import movie from "./mocks/film.js";

ReactDOM.render(
    <App
      movie = {movie}
      moviesList={moviesList}
    />,
    document.querySelector(`#root`)
);
