import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import {appType} from "../../types/index";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import MovieDetails from "../movie-details/movie-details.jsx";

class App extends PureComponent {
  constructor(appProps) {
    super(appProps);
    this.appProps = appProps;

    this.state = {
      activeMovie: null
    };

    this._handleTitleClick = this._handleTitleClick.bind(this);
  }

  _handleTitleClick(movie) {
    this.setState({
      activeMovie: movie
    });
  }

  _renderMain() {
    const {movie, moviesList} = this.appProps;
    return (
      <Main
        movie={movie}
        moviesList={moviesList}
        onTitleClick={this._handleTitleClick}
      />
    );
  }

  _renderMovieDetails() {
    const {movie} = this.appProps;
    return (
      <MovieDetails
        movie={movie}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMain()}
          </Route>
          <Route exact path="/dev-film">
            {this._renderMovieDetails()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

// const App = (appProps) => {
//
//   const {movie, moviesList} = appProps;
//
//   const handleTitleClick = (evt) => {
//     evt.preventDefault();
//   };
//
//   const handleCardMouseHover = (evt) => {
//     evt.preventDefault();
//   };
//
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route exact path="/">
//           <Main
//             movie={movie}
//             moviesList={moviesList}
//             onTitleClick={handleTitleClick}
//             onCardMouseHover={handleCardMouseHover}
//           />
//         </Route>
//         <Route exact path="/dev-film">
//           <MovieDetails
//             movie={movie}
//           />
//         </Route>
//       </Switch>
//     </BrowserRouter>
//   );
// };

App.propTypes = {
  appProps: appType,
};

export default App;
