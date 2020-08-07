import React from 'react';
import {Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import MoviesList from './movies-list.jsx';
import history from "../../history";
import {films} from '../data-for-test.js';

describe(`MoviesList`, () => {
  it(`Render MoviesList`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <MoviesList
            films={films}
          />
        </Router>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
