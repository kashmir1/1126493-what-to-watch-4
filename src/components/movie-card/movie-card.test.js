import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from './movie-card.jsx';
import {films, moviePoster} from '../data-for-test.js';

import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import NameSpace from '../../reducer/name-space.js';

const mockStore = configureStore([]);

describe(`MovieCard`, () => {
  const store = mockStore({
    [NameSpace.APP]: {
      currentPage: `/movie-card`,
    },
    [NameSpace.USER]: {
      authorizationStatus: `NO_AUTH`,
      authorizationError: false,
    },
  });

  it(`Render MovieCard`, () => {
    const tree = renderer.create(
        <Provider store={store}>
          <MovieCard
            film={moviePoster}
            sameFilms={films}
            onSmallMovieCardClick={() => {}}
            activeTab={`Overview`}
            onActiveTabChange={() => {}}
            onActiveTabRender={() => {}}
            onPlayClick={() => {}}
            onSignInClick={() => {}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
