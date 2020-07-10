import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import films from "../../mocks/testing.js";

describe(`Main`, () => {
  it(`Render Main`, () => {
    const tree = renderer.create(
        <Main
          movie = {films}
          moviesList={films}
          onTitleClick = {() => {}}
          onPosterClick = {() => {}}
          onCardMouseEnter = {() => {}}
        />, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
