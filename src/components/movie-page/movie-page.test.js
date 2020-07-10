import React from 'react';
import renderer from 'react-test-renderer';
import MoviePage from "./movie-page.jsx";
import films from "../../mocks/testing";

it(`MovieDetails is rendered correctly`, () => {
  const tree = renderer.create(
      <MoviePage
        movie={films[0]}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
