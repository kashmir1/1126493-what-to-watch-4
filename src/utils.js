import {ALL_GENRES} from './const.js';
import moment from "moment";

export const getAvailableGenres = (films) => {
  const availableGenre = new Set(films.map((film) => film.genre));
  return [ALL_GENRES, ...availableGenre];
};

export const formatRuntime = (runtime) => {
  const hours = moment.duration(runtime, `minutes`).hours();
  const minutes = moment.duration(runtime, `minutes`).minutes();
  return hours ? `${hours}h ${minutes}m` : `${minutes}m`;
};
