import {ActionType, reducer} from './reducer.js';
import {films} from '../components/data-for-test.js';


const getFilmsByGenre = (selectedGenre) => {
  return films.filter((film) => film.genre === selectedGenre);
};

describe(`Reducer`, () => {
  it(`Return genre after choise`, () => {
    expect(reducer({
      currentGenre: `All genres`,
    }, {
      type: ActionType.CHOISE_GENRE,
      payload: `Drame`,
    })).toEqual({
      currentGenre: `Drame`,
    });
  });

  it(`Return films by genre`, () => {
    expect(reducer({
      currentGenre: `Drame`,
      filmsByGenre: films,
    }, {
      type: ActionType.GET_FILMS_BY_GENRE,
      payload: getFilmsByGenre(`Drame`),
    })).toEqual({
      currentGenre: `Drame`,
      filmsByGenre: getFilmsByGenre(`Drame`),
    });
  });
});
