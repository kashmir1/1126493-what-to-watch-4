import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

const mockData = {
  movieDescription: {
    movieTitle: `The Grand Budapest Hotel`,
    genre: `Comedy`,
    release: 2014
  },

  moviesList: [
    {
      id: 1,
      title: `Fantastic Beasts: The Crimes of Grindelwald`,
      image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`
    },
    {
      id: 2,
      title: `Bohemian Rhapsody`,
      image: `img/bohemian-rhapsody.jpg`
    },
    {
      id: 3,
      title: `Macbeth`,
      image: `img/macbeth.jpg`
    },
  ],
};

it(`Render Main`, () => {
  const {movieDescription, moviesList} = mockData;
  const handleTitleClick = jest.fn();
  const handleCardMouseHover = jest.fn();
  const tree = renderer
    .create(<Main
      movieDescription={movieDescription}
      moviesList={moviesList}
      onCardMouseHover={handleCardMouseHover}
      onTitleClick={handleTitleClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
