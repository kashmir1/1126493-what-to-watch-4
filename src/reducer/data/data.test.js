import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api.js';
import {ActionType, Operations, reducer} from './data.js';
import {films, moviePoster} from '../../components/data-for-test.js';
import filmAdapter from '../../adapter/film.js';

const api = createAPI(() => {});

describe(`Reducer Data`, () => {
  it(`Should make a correct API call to /films`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operations.loadFilms();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.LOAD_FILMS,
          payload: [filmAdapter({fake: true})],
        });
      });
  });

  it(`Should make a correct API call to /films/promo`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const promoLoader = Operations.loadPromo();

    apiMock
      .onGet(`/films/promo`)
      .reply(200, [{fake: true}]);

    return promoLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.LOAD_PROMO,
          payload: filmAdapter({fake: true}),
        });
      });
  });

  it(`Should update films by load`, () => {
    expect(reducer({
      films: [],
    }, {
      type: ActionType.LOAD_FILMS,
      payload: films
    })).toEqual({
      films,
    });
  });

  it(`Should update moviePoster by load`, () => {
    expect(reducer({
      moviePoster: false,
    }, {
      type: ActionType.LOAD_PROMO,
      payload: moviePoster
    })).toEqual({
      moviePoster,
    });
  });
});
