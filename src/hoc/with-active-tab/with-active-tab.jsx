import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {CustomPropTypes} from "../../types";

import {MovieNavList} from "../../const";
import MovieNavOverview from '../../components/movie-nav-overview/movie-nav-overview.jsx';
import MovieNavDetails from '../../components/movie-nav-details/movie-nav-details.jsx';
import MovieNavReviews from '../../components/movie-nav-reviews/movie-nav-reviews.jsx';

const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: MovieNavList.OVERVIEW,
      };

      this._handleActiveTabChange = this._handleActiveTabChange.bind(this);
      this._handleActiveTabRender = this._handleActiveTabRender.bind(this);
    }

    _handleActiveTabChange(tab) {
      this.setState({
        activeTab: tab,
      });
    }

    _handleActiveTabRender() {
      const {film} = this.props;
      const {activeTab} = this.state;

      switch (activeTab) {
        case MovieNavList.OVERVIEW:
          return (
            <MovieNavOverview
              rating={film.rating}
              votes={film.votes}
              description={film.description}
              director={film.director}
              starring={film.starring}
            />
          );
        case MovieNavList.DETAILS:
          return (
            <MovieNavDetails
              director={film.director}
              starring={film.starring}
              time={film.time}
              genre={film.genre}
              year={film.year}
            />
          );
        case MovieNavList.REVIEWS:
          return (
            <MovieNavReviews
              reviews={film.reviews}
            />
          );
        default: return ``;
      }
    }

    render() {
      const {activeTab} = this.state;

      return <Component
        {...this.props}
        activeTab={activeTab}
        onActiveTabChange={this._handleActiveTabChange}
        onActiveTabRender={this._handleActiveTabRender}
      />;
    }
  }

  WithActiveTab.propTypes = {
    film: PropTypes.oneOfType([
      CustomPropTypes.FILM,
      PropTypes.bool,
    ]),
  };

  return WithActiveTab;
};

export default withActiveTab;
