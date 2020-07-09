import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from "./movie-card.jsx";
import moviesList from "../../mocks/testing.js";

const movie = moviesList[0];

describe(`MovieCard`, () => {
  it(`Render MovieCard`, () => {
    const tree = renderer.create(
        <MovieCard
          movie = {movie}
          onCardMouseEnter = {() => {}}
          onPosterClick = {() => {}}
          onTitleClick={() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
