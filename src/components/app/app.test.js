import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const mockData = {
  movieDescription: {
    title: `The Grand Budapest Hotel`,
    genre: `Comedy`,
    year: 2014
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

it(`Render App`, () => {
  const {movieDescription, moviesList} = mockData;
  const tree = renderer
    .create(
        <App
          movieDescription={movieDescription}
          moviesList={moviesList}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
