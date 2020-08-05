import React from 'react';
import {Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import history from "../../history";
import MovieCard from './movie-card.jsx';
import {films, moviePoster} from '../data-for-test.js';
import NameSpace from '../../reducer/name-space.js';

const mockStore = configureStore([]);

describe(`MovieCard`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`,
      authorizationError: false,
    },
  });

  it(`Render MovieCard, auth no`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <Provider store={store}>
            <MovieCard
              activeTab={`Overview`}
              authorizationStatus={`NO_AUTH`}
              film={moviePoster}
              onActiveTabChange={() => {}}
              onActiveTabRender={() => {}}
              onPlayClick={() => {}}
              onReviewClick={() => {}}
              onSignInClick={() => {}}
              onSmallMovieCardClick={() => {}}
              sameFilms={films}
            />
          </Provider>
        </Router>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Render MovieCard, auth yes`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <Provider store={store}>
            <MovieCard
              activeTab={`Overview`}
              authorizationStatus={`AUTH`}
              film={moviePoster}
              onActiveTabChange={() => {}}
              onActiveTabRender={() => {}}
              onPlayClick={() => {}}
              onReviewClick={() => {}}
              onSignInClick={() => {}}
              onSmallMovieCardClick={() => {}}
              sameFilms={films}
            />
          </Provider>
        </Router>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
