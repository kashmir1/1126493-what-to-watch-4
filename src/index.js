import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import moviesList from "./mocks/films.js";
import movie from "./mocks/film.js";

// const MovieDescription = {
//   movieTitle: `The Grand Budapest Hotel`,
//   genre: `Comedy`,
//   release: 2014
// };

ReactDOM.render(
    <App
      movie = {movie}
      moviesList={moviesList}
    />,
    document.querySelector(`#root`)
);
