import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const MovieDescription = {
  movieTitle: `The Grand Budapest Hotel`,
  genre: `Comedy`,
  release: 2014
};

const MoviesList = [`Fantastic Beasts: The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`, `Aviator`, `We need to talk about Kevin`, `What We Do in the Shadows`, `Revenant`, `Johnny English`, `Shutter Island`, `Pulp Fiction`, `No Country for Old Men`, `Snatch`, `Moonrise Kingdom`, `Seven Years in Tibet`];

ReactDOM.render(
    <App
      movieDescription={MovieDescription}
      moviesList={MoviesList}
    />,
    document.querySelector(`#root`)
);
