import React from 'react';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list.jsx';

const moviesList = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
  },
  {
    title: `Bohemian Rhapsody`,
    image: `img/bohemian-rhapsody.jpg`
  },
  {
    title: `Macbeth`,
    image: `img/macbeth.jpg`
  },
];

it(`MovieList is rendered correctly`, () => {
  const onCardMouseHover = jest.fn();
  const onTitleClick = jest.fn();
  const tree = renderer.create(
      <MoviesList
        moviesList={moviesList}
        onCardMouseHover={onCardMouseHover}
        onTitleClick={onTitleClick}
      />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});