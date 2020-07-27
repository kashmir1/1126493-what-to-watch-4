import React from 'react';
import renderer from 'react-test-renderer';
import MovieNavGenre from './movie-nav-genre.jsx';

const MovieGenreList = [
  `All genres`,
  `Comedies`,
  `Crime`,
  `Documentary`,
  `Dramas`,
  `Horror`,
  `Kids & Family`,
  `Romance`,
  `Sci-Fi`,
  `Thrillers`,
];

describe(`MovieNavGenre`, () => {
  it(`Render MovieNavGenre`, () => {
    const tree = renderer.create(
        <MovieNavGenre
          genres={MovieGenreList}
          currentGenre={MovieGenreList[0]}
          onGenreClick={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
