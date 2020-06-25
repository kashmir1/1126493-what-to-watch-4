import React from 'react';
import renderer from 'react-test-renderer';
import MovieDetails from "./movie-details.jsx";

it(`MovieDetails is rendered correctly`, () => {
  const tree = renderer.create(
      <MovieDetails/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
