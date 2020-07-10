import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import films from "../../mocks/testing.js";

const onTitleClick = () => {};

describe(`App`, () => {
  it(`Render App`, () => {
    const tree = renderer
      .create(
          <App
            movie = {films[0]}
            moviesList={films}
            onTitleClick = {onTitleClick}
          />, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

