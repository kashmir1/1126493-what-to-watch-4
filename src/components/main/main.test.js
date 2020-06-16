import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';

it(`Render Main`, () => {
  const tree = renderer
    .create(<Main
      movieDescription={
        {
          movieTitle: `The Grand Budapest Hotel`,
          genre: `Comedy`,
          release: 2014
        }
      }
      titles={[
        `Fantastic Beasts: The Crimes of Grindelwald`,
        `Bohemian Rhapsody`, `Macbeth`,
        `Aviator`,
        `We need to talk about Kevin`,
        `What We Do in the Shadows`,
        `Revenant`,
        `Johnny English`,
        `Shutter Island`,
        `Pulp Fiction`,
        `No Country for Old Men`,
        `Snatch`,
        `Moonrise Kingdom`,
        `Seven Years in Tibet`]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
