import React from 'react';
import renderer from 'react-test-renderer';
import MoviePage from "./movie-page.jsx";

it(`MovieDetails is rendered correctly`, () => {
  const tree = renderer.create(
      <MoviePage/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
