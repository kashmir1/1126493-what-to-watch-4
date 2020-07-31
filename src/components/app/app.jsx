import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {CustomPropTypes} from "../../types";

import {Pages} from '../../const.js';
import Main from '../main/main.jsx';
import MovieCard from '../movie-card/movie-card.jsx';
import withCountFilms from '../../hoc/with-count-films/with-count-films.jsx';
import {ActionCreator} from '../../store/reducer.js';
import withActiveTab from "../../hoc/with-active-tab/with-active-tab.jsx";

const MainWrapped = withCountFilms(Main);
const MovieCardWrapped = withActiveTab(MovieCard);

const COUNT_OF_SAME_FILMS = 4;

class App extends PureComponent {
  constructor() {
    super();

    this._handleSmallMovieCardClick = this._handleSmallMovieCardClick.bind(this);
  }

  _renderApp() {
    const {currentPage} = this.props;

    switch (currentPage) {
      case Pages.MAIN:
        return this._renderMain();
      case Pages.MOVIE_CARD:
        return this._renderMovieCard();
    }

    return null;
  }

  _renderMain() {
    return (
      <MainWrapped
        onSmallMovieCardClick={this._handleSmallMovieCardClick}
      />
    );
  }

  _renderMovieCard() {
    const {films, selectedFilm: moviePoster} = this.props;

    const sameFilms = films
      .filter((film) => film.genre === moviePoster.genre && film.title !== moviePoster.title)
      .slice(0, COUNT_OF_SAME_FILMS);

    return (
      <MovieCardWrapped
        {...this.props}
        film={moviePoster}
        sameFilms={sameFilms}
        onSmallMovieCardClick={this._handleSmallMovieCardClick}
      />
    );
  }

  _handleSmallMovieCardClick(film) {
    const {handlePageChange, onFilmSelect} = this.props;
    handlePageChange(Pages.MOVIE_CARD);
    onFilmSelect(film);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={Pages.MAIN}>
            {this._renderApp()}
          </Route>/
          <Route exact path={Pages.MOVIE_CARD}>
            <MovieCardWrapped
              film={this.props.moviePoster}
              sameFilms={this.props.films}
              onSmallMovieCardClick={this._handleSmallMovieCardClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  films: PropTypes.arrayOf(CustomPropTypes.FILM).isRequired,
  moviePoster: CustomPropTypes.FILM,
  currentPage: PropTypes.string.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  selectedFilm: PropTypes.oneOfType([
    CustomPropTypes.FILM,
    PropTypes.bool,
  ]),
  onFilmSelect: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.films,
  moviePoster: state.moviePoster,
  currentPage: state.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
  handlePageChange(page) {
    dispatch(ActionCreator.setCurrentPage(page));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

