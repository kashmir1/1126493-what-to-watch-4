import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MoviePage from "../movie-page/movie-page.jsx";
import {UrlPage} from "../../consts.js";

const COUNT_OF_SAME_FILMS = 4;

class App extends PureComponent {
  constructor(props) {
    super(props);
    this._handleTitleClick = this._handleTitleClick.bind(this);

    this.state = {
      activePage: UrlPage.MAIN,
      activeFilm: props.movie,
    };
  }

  _handleTitleClick(movie) {
    this.setState({
      activePage: UrlPage.MOVIE_PAGE,
      activeFilm: movie,
    });
  }

  _renderMain() {
    const {movie, moviesList} = this.props;
    const {activePage} = this.state;
    switch (activePage) {
      case UrlPage.MAIN:
        return (
          <Main
            movie={movie}
            moviesList={moviesList}
            onTitleClick={this._handleTitleClick}
            onPosterClick={this._handleTitleClick}
          />
        );
      case UrlPage.MOVIE_PAGE:
        return this._renderMoviePage();
      default:
        return null;
    }
  }

  _renderMoviePage() {
    const {moviesList} = this.props;
    const moviePoster = this.state.activeFilm;

    const sameFilms = moviesList
      .filter((movie) => movie.genre === moviePoster.genre && movie.title !== moviePoster.title)
      .slice(0, COUNT_OF_SAME_FILMS);

    return (
      <MoviePage
        movie={moviePoster}
        sameFilms={sameFilms}
        onPosterClick={this._handleTitleClick}
      />
    );
  }

  render() {
    const {activeFilm} = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMain()}
          </Route>
          <Route exact path="/dev-film">
            <MoviePage
              movie = {activeFilm}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
  moviesList: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        poster: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      })
  ).isRequired,
};

export default App;
