import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import {ALL_GENRES} from '../../const.js';
import {films, moviePoster} from '../data-for-test.js';
import Main from './main.jsx';
import NameSpace from '../../reducer/name-space.js';

const mockStore = configureStore([]);

describe(`Main`, () => {
  it(`Render with films and promo`, () => {
    const store = mockStore({
      [NameSpace.APP]: {
        currentPage: `/`,
      },
      [NameSpace.DATA]: {
        films,
        moviePoster,
        loadingFilms: false,
        loadFilmsError: false,
        loadingPromo: false,
        loadPromoError: false,
      },
      [NameSpace.SHOW]: {
        currentGenre: ALL_GENRES,
      },
      [NameSpace.USER]: {
        authorizationStatus: `NO_AUTH`,
        authorizationError: false,
      },
    });

    const tree = renderer.create(
        <Provider store={store}>
          <Main
            onSmallMovieCardClick={() => {}}
            numberOfFilms={8}
            onCountShowFilmReset={() => {}}
            onCountShowFilmAdd={() => {}}
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
