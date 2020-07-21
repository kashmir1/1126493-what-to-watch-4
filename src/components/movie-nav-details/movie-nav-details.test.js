import React from 'react';
import renderer from 'react-test-renderer';
import MovieNavDetails from './movie-nav-details.jsx';
import films from "../../mocks/testing";

const movie = films[0];

describe(`MovieNavDetails`, () => {
  it(`Render MovieNavDetails`, () => {
    const tree = renderer.create(
        <MovieNavDetails
          director={movie.director}
          starring={movie.starring}
          time={movie.time}
          genre={movie.genre}
          year={movie.year}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
